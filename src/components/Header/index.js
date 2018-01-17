import React from 'react'
import Link from 'gatsby-link'
import { withPrefix } from 'gatsby-link'

const Header = () => (
  <div
    style={{
      marginBottom: '1.45rem',
      backgroundColor: '#313131',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Link
        to="/"
        style={{
          display: 'block',
          width: '200px',
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <img
          src={withPrefix('/images/codebee-logo.svg')}
          alt="CodeBee logo"
          style={{
            display: 'block',
          }}
        />
      </Link>
    </div>
  </div>
)

export default Header
