/**
 * @providesModule RNStoreKit
 * @flow
 */
'use strict';

import { NativeModules } from 'react-native';
let NativeRNStoreKit = NativeModules.RNStoreKit;

/**
 * High-level docs for the RNStoreKit iOS API can be written here.
 */

let RNStoreKit = {
  test: function() {
    NativeRNStoreKit.test();
  }
};

module.exports = RNStoreKit;