import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import React from 'react';
import PropTypes from 'prop-types';
import { pressedMap, primaryMap, secondaryMap } from '../../../styles/globals';
import StyledMap from './Map';

const Map = (props) => {
  const {
    data, center, zoom, geoUrl, handleClick,
  } = props;

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
                      data
                        .map(el => el.name)
                        .includes(geography.properties.NAME)
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
                      data
                        .map(el => el.name)
                        .includes(geography.properties.NAME) && handleClick
                    }
                  round
                />
              ))
              }
            </Geographies>
          </ZoomableGroup>
        ) : (
          <div className="sk-double-bounce">
            <div className="sk-child sk-double-bounce1" />
            <div className="sk-child sk-double-bounce2" />
          </div>
        )}
      </ComposableMap>
    </StyledMap>
  );
};

Map.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  geoUrl: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

Map.defaultProps = {
  data: null,
};

export default Map;
