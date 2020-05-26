## Description

A small unfinished POC that explores one way of expressing the intentionality of a web page.

This is the final instalment of a series of Back to DOM POCs exploring the prospect of simplified, performant applications through a more traditional approach to development where server renders form and style, and browser overlays dynamic behaviour.

### Overview

Back to DOM is not a _back to JQuery_ kind of argument. But without expressed examples of programmed intent it can be viewed in that bad light. This POC focuses on the idea of programmed intentionality as a direct replacement for the co-located component pattern of development currently in vogue and typified by React.

Programmed intentionality is a structured expression of operational behaviour, defined independently of the page or application such that it can be imported and integrated into the operating context of a variety of pages that express overlapping intentions.

In this example, an intentional script is defined as a direct replacement for the run-time overhead of React hydration, saving client side bandwidth, improving bootstrap performance and reducing SSR render complexity through the relaxation of isomorphic constraints.

This POC contends that

- Javascript is not optimal but adequate for expressing intentionality
- intentionality can be rationally interpreted as agreement
- intentionality can provide its own semantic scope - consistent rules without framework lock-in
- intentionality does not compromise contemporary patterns and best practices
