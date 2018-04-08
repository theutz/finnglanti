import React from 'react'
import GatsbyLink from 'gatsby-link'

const Link = ({ activeClassName, ...props }) => (
  <GatsbyLink activeClassName={activeClassName || 'is-active'} {...props} />
)

const Header = ({ title }) => (
  <div className="navbar is-primary">
    <div className="container">
      <div className="navbar-brand">
        <Link exact className="navbar-item" to="/">
          {title}
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item" to="/flash-cards">
            Flash Cards
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Header
