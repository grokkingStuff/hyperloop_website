import React from 'react'
import { getCurrentYear } from '../../utils/functions'
import { Wrapper, Item } from './style'

const Footer = () =>
  <Wrapper>
    <Item position='left'>
      Made with &lt;3 in {getCurrentYear()}
    </Item>
    <Item position='right'>
      <span>Credit for template to M. Mazzucci &nbsp;-&nbsp;</span>
    </Item>
  </Wrapper>

export default Footer
