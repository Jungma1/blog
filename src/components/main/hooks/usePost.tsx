import { graphql, useStaticQuery } from 'gatsby';
import { useEffect } from 'react';
import { useState } from 'react';

export interface Post {
  slug: string;
  date: string;
  title: string;
  summary: string;
  category: string;
  tags: Tag[];
}

export interface Tag {
  title: string;
  color: string;
}

export default function usePost() {
  const [contents, setContents] = useState<Post[]>([]);

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            html
            frontmatter {
              slug
              date
              title
              summary
              category
              tags
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    const frontmatter = data.allMarkdownRemark.edges
      .map((edge: any) => {
        return {
          ...edge.node.frontmatter,
        };
      })
      .map((fm: any) => {
        return {
          ...fm,
          tags: fm.tags.map((tag: string) => {
            return {
              title: tag,
              color: 'testColor',
            } as Tag;
          }),
        };
      });

    console.log(frontmatter);
    setContents(frontmatter);
  }, []);

  return { contents };
}
