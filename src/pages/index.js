import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import '../scss/_main.scss'

const Button = styled.a`
  color: #524763;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #524763;
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
  background-image: none;
`

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <section class="Main">
      <h1 class="Main-heading">Education Home</h1>
      <p>
        Stay tuned for more details about our services provided for Summer '19!
      </p>
      <p>
        In the meantime, for one-on-one training availability, contact me using
        the button below.
      </p>
    </section>
    <Button href="mailto:spriggs.grace@gmail.com">Email Grace</Button>
  </Layout>
)

export default IndexPage
