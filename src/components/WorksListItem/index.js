import React from 'react'
import { Wrapper, WorkTitle, WorkInfos, WorkYear } from './style'

const WorksListItem = props =>  {
    const { title, category, client, year} = props.work

  return (
    <Wrapper>
      <header>
        <WorkTitle>{title}</WorkTitle>
        <WorkInfos>
          <span>{client}</span>
        </WorkInfos>
      </header>
      <WorkInfos>
          <WorkYear>{year}</WorkYear>
      </WorkInfos>
    </Wrapper>
  )
}

export default WorksListItem
