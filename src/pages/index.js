// index.js
import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'

export default ({ data }) => (
  <Layout>
    <div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3 css={css`margin-bottom: 1rem}`}>
            {node.frontmatter.title}{' '}
            <span css={css`color: #bbb`}>
              — {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
)
// 这里对数据根据 frontmatter 中的 date 进行排序
export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            date
            title
            slug
          }
        }
      }
    }
  }
`
