import { graphql, useStaticQuery } from 'gatsby';
import { useEffect } from 'react';
import { useState } from 'react';
import colors from '../../../lib/styles/colors';

export interface Post {
  slug: string;
  date: string;
  title: string;
  summary: string;
  category: string;
  tags: Tag[];
}

export interface Tag {
  name: string;
  color: string;
}

type TagKeys = 'React' | 'Typescript' | 'Blog' | 'Test';

type TagPalette = {
  [key in TagKeys]: string;
};

export default function usePost() {
  const [contents, setContents] = useState<Post[]>([]);
  const palette: TagPalette = {
    React: `${colors.tagReact}`,
    Typescript: `${colors.tagTypescript}`,
    Blog: `${colors.tagBlog}`,
    Test: 'gray',
  };

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
          tags: fm.tags.map((tag: TagKeys) => {
            return {
              name: tag,
              color: palette[tag] ? palette[tag] : 'none',
            };
          }),
        };
      });

    setContents(frontmatter);
  }, []);

  return { contents };
}
