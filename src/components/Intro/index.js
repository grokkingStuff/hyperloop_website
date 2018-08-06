import React from 'react'
import { Wrapper, Title } from './style'

const Intro = props => 
  <Wrapper {...props} >
    <Title>
      Hi, we're <span>Hyperjackets</span>, the team at <span>Georgia Tech</span> that's developing the <span>Hyperloop</span>
    </Title>
  </Wrapper>

export default Intro
