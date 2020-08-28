import React from 'react'
import Header from './header'

export default ({ children }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: '650px',
      padding: '2rem',
      paddingTop: '3rem'
    }}
  >
    <Header />
    {children}
  </div>
)