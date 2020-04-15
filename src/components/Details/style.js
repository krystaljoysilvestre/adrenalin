import styled from 'styled-components';
import { media } from '../../styles/mediaSizes';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
    justify-content: space-between;
  `};
`;

export const Content = styled.div`
  flex-basis: 100%;

  ${media.tablet`
    flex-basis: calc(50% - 30px);
  `};

  img {
    display: block;
    height: 300px;
    width: 100%;
    object-fit: cover;

    ${media.tablet`
      height: auto;
      max-width: 100%;
    `};
  }
`;

export const Title = styled.div`
  color: #1a1a1a;
  font-family: Arial;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -1.8px;
  margin: 30px 0;
  -webkit-font-smoothing: antialiased;

  ${media.tablet`
    font-size: 64px;
    line-height: 68px;
  `};
`;

export const Question = styled.div`
  font-family: Arial;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.5px;
  margin-bottom: 10px;
  -webkit-font-smoothing: antialiased;

  ${media.tablet`
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 15px;
  `};
`;

export const Answer = styled.div`
  text-shadow: inset 0px 1px3px rgba(0, 0, 0, 0.5);
  color: #333333;
  font-family: Georgia;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 15px;
  -webkit-font-smoothing: antialiased;

  ${media.tablet`
    font-size: 18px;
    line-height: 37px;
    margin-bottom: 30px;
  `};
`;

export const Back = styled.button`
  border: 1px solid transparent;
  color: #1a1a1a;
  font-family: monospace;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 24px;
  margin: 15px;
  -webkit-font-smoothing: antialiased;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 0;
  margin-left: 0;

  ${media.tablet`
    margin-bottom: 30px;
    font-size: 32px;
  `};
`;
