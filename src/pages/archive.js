import React from "react";
import Helmet from 'react-helmet'
import PostLink from "../components/PostLink";

const ArchivePage = ({ data: { allMarkdownRemark: { edges } } }) => {
  return <div>
    <Helmet
      title="Archived posts from CodeBee"
      meta={[
        {
          name: 'description', content: 'Connect with other developers and designers through tutorials, questions, and projects. All in one place.',
        },
      ]}
    />
    <h1>Archived posts</h1>
    {console.log(edges)}
    {edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />)}
  </div>;
};

export default ArchivePage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
            author
            authorUrl
          }
        }
      }
    }
  }
`;