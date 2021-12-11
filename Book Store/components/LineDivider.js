import React from 'react'
import { View } from 'react-native'
import { COLORS } from '../contants'


export const LineDivider = () => (
  <View style={{ width: 1, paddingVertical: 18 }}> 
    <View 
      style={{
        flex: 1,
        borderLeftColor: COLORS.lightGray,
        borderLeftWidth: 1
      }}
    />
  </View>
)