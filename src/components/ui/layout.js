/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@mui/styles"

import Header from "./header"
import Footer from "./footer"

const useStyles = makeStyles(theme => ({
  spacer: {
    marginBottom: "5rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2rem",
    },
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  // const data = useStaticQuery(graphql`
  //   query {
  //     strapi {
  //       categories {
  //         id
  //         name
  //         description
  //         link
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header />
      <div className={classes.spacer} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
