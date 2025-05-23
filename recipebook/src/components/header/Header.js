import * as React from "react";
import { Link } from "gatsby";
import styled , {ThemeConsumer} from "styled-components";
import { Flex } from "rebass";
import { H1 } from "../Heading";
import { SearchButton } from "../Button";
import { Section } from "../Section";

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--spacing-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => props.theme.variants.header.primary.backgroundColor};
`

const StyledLink = styled(Link)`
  font-size: var(--font-sm);
  text-decoration: none;
  color: ${({ theme }) => theme.variants.header.primary.color};
  margin: 0 10px;
`
const Image = styled.img`
  margin: 0;
`
const Nav = styled(Flex)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
const Title = styled(H1)`
  flex: 4;
`
const MediaQuery = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`
const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Section width={11/12} flex-direction="column" justify-content="center">
      <Nav>
        <Title>
          <StyledLink to="/">
          {siteTitle}
          </StyledLink>
        </Title>
        <MediaQuery>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </MediaQuery>
        <SearchButton variant="contrast" />
      </Nav>
    </Section>
</StyledHeader>
)

export { Header };