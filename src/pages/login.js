import React, { Fragment } from 'react'
import styled from 'styled-components'
import ProfileIntroSection from '../components/ProfileIntroSection'
import Head from '../components/Head'
import { media } from '../style/constants'
import { META } from '../utils/constants'
import { ContentWrapper } from '../style/shared'

export default () => {
  return (
    <ContentWrapper>
      <Head 
        {...META.profile}
        image={META.common.image}
      />
      <ProfileIntroSection 
        content={() =>
          <Fragment>            
           <p>Sometimes I like to add marketing spiel but I forget about it.</p>
          </Fragment>
        }
      />
    </ContentWrapper>
  )
}

