import React from 'react'
import Link from 'gatsby-link'

const PostLink = ({ post }) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
  </div>
)

export default PostLink
