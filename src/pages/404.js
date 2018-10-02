import React from 'react'
import { Container } from 'reactstrap'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Container>
    <Layout>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
    </Layout>
  </Container>
)

export default NotFoundPage
