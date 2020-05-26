// Remove all client-side React and apply intentional script at the entry point to the application.

// import ReactDOM from 'react-dom';
// import publish from '@mui/mui-core/dist/client/aem/publish';

// import renderer from './renderer-hybrid';
// import componentRegistry from '../components/componentRegistry';
// import App from '../components/HybridApp';

// const universalComponents = type =>
//   `/node_modules/@audi-components/${type}/dist/index.js`;

// export default publish(
//   { universalComponents, componentRegistry },
//   renderer(ReactDOM.hydrate, App)
// );

/*
Intentional script is defined at the highest level of abstraction that can support full
page operational intentionality. At first glance, intentional scripts resemble a kind of
interface bound programming, and in fact the example below does adhere to the API requirements
of `dom-circuit`, a small state management utility. But here, the "intent" of `dom-circuit` will
not be clear without recourse to supporting documentation.

This highlights the limitations of Javascript as a viable language for capturing intentionality
and reflects that language's reliance on convention based coding practices and vindicational
documentation. Pretty much all of modern coding standards and practices derives from this basic
dichotomy.

A practical litmus test of programmed intentionality is its ability to garner agreement of intent
directly from the code. This requires a shared understanding of the domain - in this case the model
landing page - already established within the intended audience of this particular script.

Nevertheless, Javascript does function intentionally provided we accept the low-bar entry level of
understanding via the standards of convention and documentation. Using `dom-circuit` is just one way
to express intentionality where it imposes its own rules over the syntax of Javascript objects.
*/

import page from 'dom-circuit';
import modal from '../intentions/modal';
import carousel from '../intentions/carousel';
import { imageSet, userControls } from '../intentions/threeSixty';

// A circuit is a useful pattern for capturing the intentional stance of a page (or an application)
// declaratively. Note how the operational behavior is contextually framed by the essential physical
// characteristics of the page - a necessary intentional relationship.

// This particular circuit aims to capture the intent of a model landing page. The level of detail is
// secondary to the idea of agreement: functional intentionality evolves at pace with development.

page({
  header: {
    // currently implemented in AEM but future header focused
    // intentionality would be captured here...
    //   signIn,
    //   menu: {
    //     myAudi,
    //     models
    //   }
  },
  main: {
    modal,
    components: {
      carousel,
      threeSixty: {
        // allow for more detailed intentions as expression of hierarchy
        imageSet,
        userControls,
      },
    },
  },
  footer: {
    // currently implemented in AEM
  },
});
