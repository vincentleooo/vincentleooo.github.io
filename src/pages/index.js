import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Highlighted projects:</p>
      <ul>
        <li><a href="https://github.vinleonardo.com/sma-airport-model/">Airport arrivals agent-based simulation in a post-pandemic world</a></li>
      </ul>
    </Layout>
  )
}

export default IndexPage