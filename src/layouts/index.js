import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'

// main site style
import './index.scss'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{`Home | ${data.site.siteMetadata.title}`}</title>

      {data.site.siteMetadata.disqus && (
        <script id='dsq-count-scr' src='//gatsby-starter-blog.disqus.com/count.js' async />
      )}
      {data.site.siteMetadata.disqus && (
        <script>{`(function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://${data.site.siteMetadata.disqus}.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();`}</script>
      )}

      <script src='https://identity.netlify.com/v1/netlify-identity-widget.js' />
      <script>{`
        if (window.netlifyIdentity) {
          window.netlifyIdentity.on('init', user => {
            if (!user) {
              window.netlifyIdentity.on('login', () => {
                document.location.href = '/admin/'
              })
            }
          })
        }
      `}</script>
    </Helmet>
    <div className='navbar navbar-expand-lg fixed-top navbar-dark bg-primary'>
      <Container>
        <Link to='/' className='navbar-brand'>{data.site.siteMetadata.title}</Link>
        <ul className='nav navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link to='/about' className='nav-link'>About</Link>
          </li>
        </ul>
      </Container>
    </div>
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
        disqus
      }
    }
  }
`

export default TemplateWrapper
