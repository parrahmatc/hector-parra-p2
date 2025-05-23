import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { List, ListItem } from "../components/List"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <List width={[1, 2/3, 7/8]} p={2}>
      {
        data.allContentfulRecipe.edges.map(edge  => (
          <ListItem p={3} key={edge.node.name}>
            <Link to={edge.node.name}>
              {edge.node.name}
            </Link>
            <div>
            <p>By {edge.node.author
            }</p>
          </div>
          </ListItem>
        ))
      }
    </List>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    allContentfulRecipe {
      edges {
        node {
          name
          author
        }
      }
    }
  }
`
