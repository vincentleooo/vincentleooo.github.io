import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
	  <StaticImage alt="Leong Wing Sie" src="../images/2021-10-25-26-Wing-Sie-Xiu-Hui-1.jpg"/>
    </Layout>
  )
}

export default IndexPage