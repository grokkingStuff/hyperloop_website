import React, { Component } from 'react'
import idx from 'idx'
import { ContentWrapper } from '../style/shared'
import WorksListSection from '../components/WorksListSection'
import WorksFeaturedSection from '../components/WorksFeaturedSection'
import Head from '../components/Head'
import { META } from '../utils/constants'

export default class extends Component {
  constructor() {
    super()
    this.state = { category: null }
    this.setCategory = this.setCategory.bind(this)
  }

  setCategory(category) {
    this.setState({ category })
  }

  getData() {
    const { data } = this.props
    return idx(data, _ => _.works.edges) 
  }

  getWorks() {  
    const { category } = this.state
    const works = this.getData()
    
    return works && 
      works.filter(({ work }) =>
        category 
          ? !work.featured && work.category.includes(category)
          : !work.featured
      )
  }
  
  getFeaturedWorks() {
    const works = this.getData()
    return works && works.filter(({ work }) => work.featured)
  }

  render() {
    const { category } = this.state

    return (
      <ContentWrapper>
        <Head 
          {...META.works}
          image={META.common.image}
        />

        <WorksListSection 
          works={this.getWorks()} 
          category={category}
          setCategory={this.setCategory} 
        />
        <WorksFeaturedSection works={this.getFeaturedWorks()} />
        </ContentWrapper>
    )
  }
}

export const worksQuery = graphql`
  query WorksQuery {
    works: allWorksJson {
      edges {
        work: node {
          title,
          category,
          collaborators,
          client,
          year,
          url,
          featured,
          image {
            src
            sources {
              media
              srcset
            }
          }
        }
      }
    }
  }
`
