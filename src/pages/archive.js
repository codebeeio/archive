import React from "react";
import PostLink from "../components/PostLink";

const ArchivePage = ({ data: { allMarkdownRemark: { edges } } }) => {
  return <div>
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