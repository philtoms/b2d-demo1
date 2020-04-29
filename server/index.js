import path from 'path';
import express from 'express';
import compression from 'compression';
import { createProxyMiddleware } from 'http-proxy-middleware';
import inject from './inject';

const app = express();

app.use(compression());
app.use(
  '/node_modules',
  express.static(path.resolve(__dirname, '../node_modules'))
);
app.use('/src', express.static(path.resolve(__dirname, '../src')));
app.use(
  '/',
  createProxyMiddleware(
    (pathName, { headers: { referer } }) => {
      const block =
        referer &&
        (pathName === '/__webpack_hmr' ||
          (referer.endsWith('?script') && pathName.endsWith('.js')));
      return !block;
    },
    {
      target: process.env.TARGET || 'http://localhost:3000',
      changeOrigin: true,
      headers: {
        'accept-encoding': 'identity',
      },
      onProxyRes: function (proxyRes, { url, headers: { referer } }, res) {
        if (!referer && url.includes('?script')) {
          const _write = res.write;
          let id;
          let body;
          res.write = function (data) {
            data = data.toString('utf-8');
            try {
              [body, id] = inject(data, id);
              _write.call(res, body);
            } catch (err) {
              console.error(err);
            }
          };
        }
      },
    }
  )
);

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
