import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

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
    <div>
      <h1>Education Home</h1>
      <p>
        Stay tuned for more details about our services provided for Summer '19!
      </p>
      <p>
        In the meantime, for one-on-one training availability, email me using
        the button below.
      </p>
    </div>
    <Button href="mailto:spriggs.grace@gmail.com">Email Us</Button>
  </Layout>
)

export default IndexPage
