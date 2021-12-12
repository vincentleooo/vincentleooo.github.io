import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Vincent Leonardo's Projects">

      <p>For more information about myself, you can head over to my main about page on <a href="https://vinleonardo.com/about">my website</a>. Until then, here is a list of my selected projects.</p>

      <h2>List of projects:</h2>
      <ul>
        <li><a href="https://github.vinleonardo.com/sma-airport-model/">Airport arrivals agent-based simulation in a post-pandemic world. Project for 40.015 Simulations Modelling and Analysis.</a></li>
        <li><a href="https://github.com/vincentleooo/analytics-edge-data-comp">Data competition for 40.016 The Analytics Edge course.</a></li>
      </ul>
    </Layout>
  )
}

export default IndexPage