import React from "react";
import Helmet from 'react-helmet'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <Helmet
        title={`${frontmatter.title} - CodeBee`}
      />
      <h1>{frontmatter.title}</h1>
      <p>Author: {frontmatter.authorUrl ? (
        <a href={frontmatter.authorUrl}>{frontmatter.author}</a>
      ) : (
        <span>{frontmatter.author}</span>
      )}</p>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        authorUrl
      }
    }
  }
`;