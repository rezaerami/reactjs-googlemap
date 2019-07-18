import React from 'react';

import { StyledMarkerWrapper } from './styles';
import markerIcon from '../../../resources/images/marker-icon.png';

const Marker = () => (
  <StyledMarkerWrapper>
    <img src={markerIcon} alt="" />
  </StyledMarkerWrapper>
);

export default Marker;
