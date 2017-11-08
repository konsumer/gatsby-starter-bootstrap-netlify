# Gatsby Bootstrap Netlify Starter

[Bootstrap 4](http://getbootstrap.com/), [bootswatch](https://bootswatch.com/) and netlify CMS starter for Gatsby

This repo contains an example blog that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](netlifycms.org): https://gatsby-netlify-cms.netlify.com/.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](netlify.com) for continuous deployment, and CDN distribution.

## Getting Started

### Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

### Run Locally
```
gatsby new [SITE_DIRECTORY_NAME] https://github.com/konsumer/gatsby-starter-bootstrap-netlify/
$ cd [SITE_DIRECTORY_NAME]
$ npm start
```

## Accessing the CMS
Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

You should add the recommended post-build code, and save to Github, and enable all the stuff they mention in "Identity" section.


### Configuration

Set stuff up in `gatsby-config.js`. Edit your pages with netlify CMS.


### Theming

You can quickly load any theme from [bootswatch](https://bootswatch.com/) by editing `src/layouts/index.scss`, and switching out `cosmo` for one of these:

* cerulean
* cosmo
* cyborg
* darkly
* flatly
* journal
* litera
* lumen
* lux
* materia
* minty
* pulse
* sandstone
* simplex
* sketchy
* slate
* solar
* spacelab
* superhero
* united
* yeti

- - -

### Debugging
Windows users might encounter ```node-gyp``` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.
```
npm config set python python2.7 
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')
