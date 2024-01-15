# Ways to setup React + Typescript project

I hate frontend. There's so many ways to setup new project and many of them requires you to either write complex, overengeenered configuration files or generate hundreds of weird configuration files for you and you don't even know what you are dealing with.
There are two main reasons for that. One is that frontend tooling was mainly designed and implemented by underage linux administrators. There is a set of small specialized tools, each of them is ment to do one thing good and hand over the work to the next one. In theory - a pretty good design. In practice - you know. Expand on how VS does that and compare to FE.
Second reason is that there are two stages: bundling and serving the package and the tooling usually does only one thing good. Bundling is a process of creating a few files that will contain all your JS, HTML and other static resources, in a smallest possible package, but making all mambo jumbo (like translations from JSX and TS to JS) on the way. Then you need to host it, first on the dev, then on the internet. IIS + VS just works.

## Few project setup solutions

- webpack
- CRA (create-react-app)
- vite
- parcel

### Webpack

Currently (which in frontend world means this week) the most commonly used bundler which comes with its own server (webpack-dev-server). It uses and abuses the idea of pipelines and streams. You need to spend hours to configure transpiling, translating between dialects, babeling, linting, minifying, bundling and God knows what else. Great power and great responsibilty for my headaches.

### CRA

Stands on top of webpack. Tries to sugarcoat it a bit.

### Vite

The new popular kid. Simplified configuration (compared to webpack) and built in server.

### Parcel

Zero configuration build tool. It seems that someone noticed the issue.
