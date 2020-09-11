import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <h2>About</h2>
      </Layout>
    )
  }
}

export default AboutPage