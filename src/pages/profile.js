import React, { Fragment } from 'react'
import styled from 'styled-components'
import ProfileIntroSection from '../components/ProfileIntroSection'
import ProfileList from '../components/ProfileList'
import ProfileListItem from '../components/ProfileListItem'
import EventListItem from '../components/EventListItem'
import Head from '../components/Head'
import { media } from '../style/constants'
import { META } from '../utils/constants'
import { ContentWrapper } from '../style/shared'

const ListsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  padding: 8rem 0 0;
  ${media.sm`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 3rem;
    padding: 4rem 0 0;
  `}
`

const ClientsList = styled(ProfileList)`
  ul {
    display: grid;
    grid-template-columns: max-content max-content max-content;
    grid-template-rows: repeat(6, 1fr);
    grid-auto-flow: column;
    grid-column-gap: 5rem;
    ${media.sm`
      grid-column-gap: 3rem;
    `}

    ${media.sm`
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: auto;
      grid-auto-flow: unset;
      grid-column-gap: 0;
    `}
  }
`

export default ({ data }) => {
  const { clients, events, mentions, articles } = data
  
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
      <ListsSection>
        {events.edges.length > 0 && 
          <ProfileList 
            title='Timeline'
            list={() => events.edges.map(({ event }, i) => (
              <EventListItem 
                key={i}
                {...event}
              />
            ))}
          />}
        {articles.edges.length > 0 && 
          <ProfileList 
            title='Public speaking & Articles'
            list={() => articles.edges.map(({ article }, i) => (
              <ProfileListItem 
                key={i}
                {...article}
              />
            ))}
          />}
        {mentions.edges.length > 0 && 
          <ProfileList 
            title='Featured on'
            list={() => mentions.edges.map(({ mention }, i) => (
              <ProfileListItem 
                key={i}
                {...mention}
              />
            ))}
          />}
        {clients.edges.length > 0 && 
          <ClientsList 
            title='Companies I have worked with'
            list={() => clients.edges.map(({ client }, i) => (
              <ProfileListItem 
                key={i}
                {...client}
              />
            ))}
          />}
      </ListsSection>
    </ContentWrapper>
  )
}


export const profileQuery = graphql`
  query ProfileQuery {
    clients: allClientsJson {
      edges {
        client: node {
          name
        }
      }
    }
    events: allEventsJson {
      edges {
        event: node {
          year
          position
          company
        }
      }
    }
    mentions: allMentionsJson {
      edges {
        mention: node {
          name
          url
        }
      }
    }
    articles: allArticlesJson {
      edges {
        article: node {
          name
          url
        }
      }
    }
  }
`
