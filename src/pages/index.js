import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>
      Hello everybody, I would like to participate in hackaton, please give me a
      ticket!
    </h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
