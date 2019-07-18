import Styled from 'styled-components';

const StyledMapWrapper = Styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const StyledMarkerWrapper = Styled.div`
  width: calc(${props => props.theme.defaultRem} * 3.5);
  height: auto;
  img {
    max-width: 100%;
  }
`;

export { StyledMapWrapper, StyledMarkerWrapper };
