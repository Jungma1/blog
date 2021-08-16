import { graphql, useStaticQuery } from 'gatsby';
import { useEffect } from 'react';
import { useState } from 'react';

export interface IPost {
  index: string;
  slug: string;
  date: string;
  title: string;
  summary: string;
  category: string;
}

export default function usePost() {
  const [contents, setContents] = useState<IPost[]>([]);

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            html
            frontmatter {
              index
              slug
              date
              title
              summary
              category
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    setContents(
      data.allMarkdownRemark.edges.map((edge: any) => {
        return {
          ...edge.node.frontmatter,
        };
      })
    );
  }, []);

  return { contents };
}
