/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {GASSTATION, HOTEL, RESTAURANT} from '../data';

const Footer = props => {
  const {radiusMeter, callbackSetRadius, callbackSetNearby} = props;

  const renderButton = (text, value) => {
    return (
      <TouchableOpacity
        onPress={() => callbackSetNearby(value)}
        style={{
          width: '30%',
          padding: 10,
          backgroundColor: 'green',
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          marginHorizontal: 10,
        }}>
        <Text style={{color: 'white'}}>Input radius in number (meters): </Text>
        <TextInput
          defaultValue={radiusMeter.toString()}
          maxLength={5}
          onChangeText={value => callbackSetRadius(value)}
          keyboardType="numeric"
          style={{
            borderWidth: 1,
            borderColor: 'white',
            flex: 1,
            borderRadius: 15,
            textAlign: 'center',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 2,
          marginBottom: 25,
        }}>
        {renderButton('Restaurant', RESTAURANT)}
        {renderButton('Gas Station', GASSTATION)}
        {renderButton('Hotel', HOTEL)}
      </View>
    </View>
  );
};

Footer.propTypes = {
  radiusMeter: PropTypes.number,
  callbackSetRadius: PropTypes.func,
  callbackSetNearby: PropTypes.func,
};

export default Footer;
