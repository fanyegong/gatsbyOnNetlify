import React from 'react'
// Link 是由 Gatsby 封装好的用于跳转链接的组件
// import { Link } from 'gatsby'
import { Link, useStaticQuery, graphql } from 'gatsby'
// 两种写法，一个是用 styled，一个是用 css(css in js)
import styled from "@emotion/styled"
import { css } from "@emotion/core"

// 模板字符串的写法，实际上就是函数传参
// styled 返回的是一个组件，方便复用元素
const Title = styled.h1`
  display: inline;
  `;

// css 返回的是样式对象，方便复用样式
const inline = css`
	display: inline;
`;

export default () => {
  // 使用 useStaticQuery 包裹 graphql 查询，实际上相当于 async/await，等待返回数据
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return  (
    <header>
      <Link to="/">
        <h1 style={{display: 'inline'}}><Title>{data.site.siteMetadata.title}</Title></h1>
      </Link>
      <Link style={{float: 'right'}} to='/about'><h1 css={inline}>About</h1></Link>
      <h1 css={css`display: inline;`}>直接内联</h1>
    </header>
  )
}