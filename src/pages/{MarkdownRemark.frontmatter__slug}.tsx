import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/common/Layout';
import MainViewer from '../components/main/MainViewer';
import { Helmet } from 'react-helmet';

export default function Template({ data }: any) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.summary} />
        <meta name="keywords" content={frontmatter.tags.join(', ')} />
      </Helmet>
      <MainViewer frontmatter={frontmatter} html={html} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        summary
        category
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 992) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
