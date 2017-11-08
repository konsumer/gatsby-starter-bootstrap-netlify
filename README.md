# Gatsby Bootstrap Netlify Starter

[Bootstrap 4](http://getbootstrap.com/), [bootswatch](https://bootswatch.com/) and netlify CMS starter for Gatsby

This repo contains an example blog that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://netlifycms.org): [demo](https://gatsby-starter-bootstrap-netlify.netlify.com)

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](netlify.com) for continuous deployment, and CDN distribution.

## Getting Started

### Prerequisites

* Node (I recommend using v8.2.0 or higher)
* [Gatsby CLI](https://www.gatsbyjs.org/docs/)

### Run Locally

```sh
gatsby new [SITE_DIRECTORY_NAME] https://github.com/konsumer/gatsby-starter-bootstrap-netlify/
cd [SITE_DIRECTORY_NAME]
npm start
```

## Accessing the CMS

Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

### Configuration

Set your site's title in `gatsby-config.js`. Edit your pages with netlify CMS.


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

You can also comment/uncomment lines in that file to customize exactly what parts of bootstrap are loaded.
