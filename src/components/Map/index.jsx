import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';

import PropTypes from 'prop-types';
import {colors} from '../../styles/globals';
import React from "react";
import StyledMap from "./Map";
import Spinner from "../../utils/Spinner";

const primaryMap = {
  fill: colors.secondary,
  stroke: colors.dark,
  strokeWidth: 0.65,
  outline: 'none',
  cursor: 'pointer',
  transition: 'fill .5s',
};

const secondaryMap = {
  fill: colors.light,
  stroke: colors.dark,
  strokeWidth: 0.65,
  outline: 'none',
  transition: 'fill .5s',
};

const pressedMap = {
  fill: colors.light,
  stroke: colors.dark,
  strokeWidth: 0.65,
  outline: 'none',
  cursor: 'pointer',
  transition: 'fill .5s',
};

const Map = (props) => {
  const {
    data, center, zoom, geoUrl, handleClick,
  } = props;

  console.log(data);

  return (
    <StyledMap>
      <ComposableMap
        projectionConfig={{
          scale: 220,
        }}
        width={980}
        height={551}
        style={{
          width: '100%',
          height: 'auto',
        }}
      >
        {data ? (
          <ZoomableGroup center={center} zoom={zoom}>
            <Geographies geographyUrl={geoUrl}>
              {(geographies, projection) => geographies.map(geography => (
                <Geography
                  key={geography.properties.NAME}
                  geography={geography}
                  data-country={geography.properties.NAME}
                  projection={projection}
                  style={
                    data[geography.properties.NAME]
                      ? {
                        default: { ...primaryMap },
                        hover: { ...pressedMap },
                        pressed: { ...pressedMap },
                      }
                      : {
                        default: { ...secondaryMap },
                        hover: { ...secondaryMap },
                        pressed: { ...secondaryMap },
                      }
                  }
                  onClick={
                    data[geography.properties.NAME] && handleClick
                  }
                  round
                />
              ))
              }
            </Geographies>
          </ZoomableGroup>
        ) : (
          <Spinner />
        )}
      </ComposableMap>
    </StyledMap>
  );
};

Map.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  geoUrl: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

Map.defaultProps = {
  data: null,
};

export default Map;
