import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import MAP_INFO from '../../../constants/mapInfo';

import Marker from './Marker';

import { StyledMapWrapper } from './styles';

const Map = props => {
  const {
    zoom,
    location: { lat, lng },
    hasMarker,
  } = props;
  return (
    <StyledMapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAP_INFO.key }}
        defaultZoom={zoom}
        center={{ lat, lng }}
      >
        {hasMarker && <Marker lat={lat} lng={lng} />}
      </GoogleMapReact>
    </StyledMapWrapper>
  );
};

Map.propTypes = {
  zoom: PropTypes.number,
  location: PropTypes.object,
  hasMarker: PropTypes.bool,
};

Map.defaultProps = {
  zoom: MAP_INFO.zoom,
  location: MAP_INFO.defaultLocation,
  hasMarker: false,
};

export default Map;
