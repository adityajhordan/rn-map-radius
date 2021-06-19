/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {getDistance} from 'geolib';
import {MOCK_PLACES, REGION, RESTAURANT} from './src/data';
import LocationMarker from './src/components/locationMarker';
import Footer from './src/components/footer';

const App = () => {
  const [radiusMeter, setRadiusMeter] = useState(2000);
  const [nearBy, setNearBy] = useState(RESTAURANT);
  const [markers, setMarkers] = useState(MOCK_PLACES);

  useEffect(() => {
    const results = MOCK_PLACES.filter(marker => {
      let distance = calculateDistance(
        REGION.latitude,
        REGION.longitude,
        marker.coordinate.latitude,
        marker.coordinate.longitude,
      );
      return distance <= radiusMeter && marker.type === nearBy;
    });

    setMarkers(results);
  }, [nearBy, radiusMeter]);

  const calculateDistance = (origLat, origLon, markerLat, markerLon) => {
    return getDistance(
      {latitude: origLat, longitude: origLon},
      {latitude: markerLat, longitude: markerLon},
    );
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{height: '80%', width: '100%'}}
        initialRegion={REGION}>
        <Marker
          title="My Location"
          description="This is your location"
          coordinate={REGION}
        />

        {markers.length > 0 &&
          markers.map((each, index) => (
            <LocationMarker data={each} index={index} />
          ))}
      </MapView>
      <Footer
        radiusMeter={radiusMeter}
        callbackSetRadius={value => setRadiusMeter(value)}
        callbackSetNearby={value => setNearBy(value)}
      />

      <View
        style={{
          position: 'absolute',
          right: 20,
          top: 10,
          height: 25,
          justifyContent: 'center',
          backgroundColor: 'black',
        }}>
        <Text style={{color: 'white'}}>
          Finding nearest {nearBy} in radius {radiusMeter} meters
        </Text>
      </View>
    </View>
  );
};

export default App;
