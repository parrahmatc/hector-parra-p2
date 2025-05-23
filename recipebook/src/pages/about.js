import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const about = ({ data }) => {
    const { author, email } = data.site.siteMetadata;
    return (
        <Layout>
            <Seo title="About" />
            <h1>About {author}</h1>
            <p>This is a simple about page.</p>
            <p>Want to work with me? Contact me at {email}</p>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}

export default about;

export const query = graphql`
    query {
        site {
            siteMetadata {
                    author
                    email
            }
        }
    }
`