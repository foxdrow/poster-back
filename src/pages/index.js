import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/ui/layout"

export default function index({ data }) {
  return (
    <Layout>
      <div>index</div>
    </Layout>
  )
}

export const query = graphql`
  query {
    strapi {
      formats {
        data {
          id
          attributes {
            name
            publishedAt
          }
        }
      }
    }
  }
`
