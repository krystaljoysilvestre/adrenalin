import styled from 'styled-components';
import { media } from '../../styles/mediaSizes';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  border-top: 2px solid #000;
  padding-top: 20px;
`;

export const Logo = styled.img`
  height: 14px;
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
