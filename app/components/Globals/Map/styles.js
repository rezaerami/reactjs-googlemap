import Styled from 'styled-components';

const StyledMapWrapper = Styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .gm-fullscreen-control {
    display: none;
  }
`;
const StyledMarkerWrapper = Styled.div`
  width: calc(${props => props.theme.defaultRem} * 3.5);
  height: auto;
  img {
    max-width: 100%;
  }
`;

const StyledGeoLocationTrackerWrapper = Styled.div`
  position: absolute;
  bottom: calc(${props => props.theme.defaultRem} * 3);
  left: calc(${props => props.theme.defaultRem} * 1);
  z-index: 100;
`;
const StyledTrackButton = Styled.button`
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 calc(${props => props.theme.defaultRem} * 0.5) calc(${props =>
  props.theme.defaultRem} * 0.5) rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: calc(${props => props.theme.defaultRem} * 4);
  height: calc(${props => props.theme.defaultRem} * 4);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 50%;
  padding: calc(${props => props.theme.defaultRem});
  border: calc(${props => props.theme.defaultRem} * 0.1) solid ${props =>
  props.theme.colors.borderColor};
  > * {
    display: inline-block;
  }
`;

export {
  StyledMapWrapper,
  StyledMarkerWrapper,
  StyledGeoLocationTrackerWrapper,
  StyledTrackButton,
};
