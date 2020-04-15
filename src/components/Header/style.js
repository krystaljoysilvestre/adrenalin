import styled from 'styled-components';
import { media } from '../../styles/mediaSizes';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;

  ${media.tablet`
    margin: 50px 0;
  `};
`;

export const Logo = styled.img`
  height: 17px;
`;

export const Navigation = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: none;

  ${media.tablet`
    display: flex;
  `};
`;

export const Link = styled.li`
  font-family: Arial;
  font-size: 13px;
  font-weight: 400;
  padding: 0 20px;
  -webkit-font-smoothing: antialiased;

  a {
    text-decoration: none;
    color: inherit;
  }
`;
