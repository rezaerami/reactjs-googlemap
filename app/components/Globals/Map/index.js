/**
 * @memberOf components.Globals
 * @namespace components.Globals.Map
 */
import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import MAP_INFO from '../../../constants/mapInfo';

import Marker from './Marker';

import { StyledMapWrapper } from './styles';

/**
 * function represents a Map component
 * @memberOf components.Globals.Map
 * @function Map
 * @description
 * renders a list of suggestion items
 * @param {object}   props     - props of component that were given by parent
 * @return {jsx} - jsx component to show
 * @example
 * <Map
     zoom={zoom}
     location={location}
     hasMarker={hasMarker}
  />
 */
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

/**
 * @memberOf components.Globals.Map
 * @name propTypes
 * @type {object}
 * @description defines prop types of Map
 * @property {number}         [zoom]          - zoom level of map
 * @property {object}         [location]      - center position of map
 * @property {boolean}        [hasMarker]     - defines that map has any marker to show or not
 */
Map.propTypes = {
  zoom: PropTypes.number,
  location: PropTypes.object,
  hasMarker: PropTypes.bool,
};

/**
 * @memberOf components.Globals.Map
 * @name defaultProps
 * @type {object}
 * @description defines default props of Map
 * @property {number}         [zoom]          - defines default zoom of map
 * @property {object}         [location]      - defines default center position of map
 * @property {boolean}        [hasMarker]     - defines that map has any marker to show or not
 */
Map.defaultProps = {
  zoom: MAP_INFO.zoom,
  location: MAP_INFO.defaultLocation,
  hasMarker: false,
};

/**
 * @memberOf components.Globals.Map
 * @export Map
 * @description exports Map module.
 */
export default Map;
