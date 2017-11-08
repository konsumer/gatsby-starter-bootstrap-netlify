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

const TemplateWrapper = ({ children, data }) => {
  let user
  if (typeof window !== 'undefined') {
    user = window.netlifyIdentity && window.netlifyIdentity.currentUser()
  }
  return (
    <div>
      <Helmet>
        <title>{`Home | ${data.site.siteMetadata.title}`}</title>

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
            {user && (
              <li className='nav-item'>
                <a href='/admin' className='nav-link'>Admin</a>
              </li>
            )}
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>About</Link>
            </li>
          </ul>
        </Container>
      </div>
      <div>{children()}</div>
    </div>
  )
}

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
