/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Image} from 'react-native';
import {Marker} from 'react-native-maps';
import PropTypes from 'prop-types';

const LocationMarker = props => {
  const {data} = props;
  const {index} = props;
  return (
    <Marker
      key={`bus-${index}-${new Date().getMilliseconds()}`}
      tracksViewChanges={false}
      title="This is a title"
      description="This is a description"
      coordinate={data.coordinate}>
      <Image source={data.img} style={{height: 35, width: 35}} />
    </Marker>
  );
};

LocationMarker.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};

export default LocationMarker;
