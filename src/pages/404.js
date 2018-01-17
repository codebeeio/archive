import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div>
    <Helmet
      title="Page not found - CodeBee"
    />
    <h1>Page not found.</h1>
    <p>You are viewing the CodeBee archive. <Link to="/">Read our explanation</Link>.</p>
  </div>
)

export default NotFoundPage
