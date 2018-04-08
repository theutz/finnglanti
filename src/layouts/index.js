import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from 'components/Header'

const TemplateWrapper = ({ children, data }) => {
  const { title, description, keywords } = !!data && data.site.meta

  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords.join(', ') },
        ]}
      />
      <Header />
      <div>{children()}</div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query LayoutIndex {
    ...SiteMetadata
  }

  fragment SiteMetadata on RootQueryType {
    site {
      meta: siteMetadata {
        title
        description
        keywords
      }
    }
  }
`

export default TemplateWrapper
