import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet title={`Home | ${data.site.siteMetadata.title}`} />
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
      }
    }
  }
`

export default TemplateWrapper
