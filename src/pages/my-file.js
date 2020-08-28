import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => (
    <div>
      <h1>My Site's Files</h1>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>prettySize</th>
            <th>extension</th>
            <th>birthTime</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.relativePath}</td>
              <td>{node.prettySize}</td>
              <td>{node.extension}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
)

export const query = graphql`
  query MyQuery {
    allFile {
      edges {
        node {
          id
          relativePath
          extension
          prettySize
          birthTime(fromNow: true)
        }
      }
    }
  }
`