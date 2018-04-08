import React from 'react'
import Link from 'gatsby-link'

const Header = ({ title }) => (
  <div>
    <div>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </div>
  </div>
)

export default Header
