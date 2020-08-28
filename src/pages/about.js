import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import containerStyles from "../styles/container.module.css" // css module
import {graphql} from 'gatsby'

// GraphQL 获取的数据，会当做参数传递到页面组件中
// 数据的形式是 {errors， data}，没有错误则不会有 errors
export default ({data}) => (
  <div>
    <Layout>
      {/* <Header /> */}
      <div className={containerStyles.container}>1234</div>
      <h1>About ${data.site.siteMetadata.author}</h1>
      <p>location: SHEN ZHEN</p>
    </Layout>
  </div>
)

// 调用 graphql 方法获取数据，返回的是 Promise
// 变量名没有规定
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`