import React from 'react'

export default function Post({data}) {
  const {markdownRemark: post} = data
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div>{post.excerpt}</div>
    </div>
  )
}
// $path 是生成页面时的 context 中带上的变量，名称前面加上 $ 符
export const postQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        slug
        title
      }
    }
  }
`
