import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Icon from './font-awesome-icon';

const Container = styled.div`
  text-align: center;
`;

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`;

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`;

const IconOuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  grid-column-gap: 2rem;
`;

const IconContainer = styled.div`
  text-align: center;
`;

const LandingSiteTitleQuery = graphql`
  query LandingSiteTitleQuery {
    site {
      siteMetadata {
        title
        subtitle
        socialMedia {
          name
          prefix
          icon
          iconClassName
          url
        }
      }
    }
  }
`;

const LandingBio = () => (
  <StaticQuery
    query={LandingSiteTitleQuery}
    render={(data) => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>{data.site.siteMetadata.subtitle}</Description>
          <IconOuterContainer>
            {data.site.siteMetadata.socialMedia.map((data) => (
              <IconContainer>
                <Icon data={data} />
              </IconContainer>
            ))}
          </IconOuterContainer>
        </Container>
      </OuterContainer>
    )}
  />
);

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
  socialMedia: PropTypes.array,
};

NameHeader.defaultProps = {
  siteTitle: `Shane Myrick`,
  subtitle: ``,
  socialMedia: [],
};

export default LandingBio;
