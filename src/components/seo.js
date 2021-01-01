import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
function SEO({ title, description, article }) {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        twitterUsername
                        image
                        siteUrl
                    }
                }
            }
        `
    );

    const seo = {
        title: title || site.siteMetadata.title,
        titleTemplate: `%s | ${site.siteMetadata.title}`,
        description: description || site.siteMetadata.description,
        image: `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`,
        url: `${site.siteMetadata.siteUrl}${pathname}`,
        twitterUsername: site.siteMetadata.twitterUsername,
    };

    return (
        <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />

            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
                <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
                <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}

            <meta name="twitter:card" content="summary_large_image" />
            {seo.twitterUsername && (
                <meta name="twitter:creator" content={seo.twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
                <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
        </Helmet>
    );
}

SEO.defaultProps = {
    description: null,
    article: false,
};

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    article: PropTypes.bool,
};

export default SEO;
