import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: #524763;
  a {
    color: white;
    text-shadow: none;
    background-image: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 1rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <Link to="/">home</Link>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
