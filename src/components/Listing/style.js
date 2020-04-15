import styled from 'styled-components';
import { media } from '../../styles/mediaSizes';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Tile = styled.div`
  flex-basis: 100%;
  margin-bottom: 30px;
  -webkit-animation-delay: ${props => props.delay * 0.5}s;
  animation-delay: ${props => props.delay * 0.5}s;

  ${media.tablet`
    flex-basis: calc(50% - 15px);
    margin-bottom: 50px;
  `};
`;

export const Mask = styled.div`
  display: flex;
`;

export const Thumbnail = styled.div`
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const Title = styled.div`
  font-family: Arial;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.4px;
  margin: 20px 0;
  -webkit-font-smoothing: antialiased;

  ${media.tablet`
    font-size: 24px;
    line-height: 32px;
    margin: 25px 0;
  `};
`;

export const CTA = styled.div`
  color: #3852f7;
  font-family: Arial;
  font-size: 13px;
  font-weight: 700;
  line-height: 13px;
  text-transform: uppercase;
  letter-spacing: 0.19px;
  display: flex;
  margin-bottom: 15px;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;

  &::before {
    border-top: 2px solid #1072b8;
    display: block;
    position: relative;
    top: 5px;
    width: 32px;
    content: '';
    margin-right: 15px;
  }
`;
