import React from 'react'
import { globalStyles  } from '../styles/globalStyles'
import {View, TouchableOpacity,Text , Pressable} from 'react-native'

 function GoalItem({itemData , handleDeleteGoal, id}) {
    
  return (
    
    <View style={globalStyles.goalContainer}>
    <Pressable android_ripple={{color: '#C3F8FF'}}  onPress={handleDeleteGoal.bind(this, id)} >
      <Text style={globalStyles.goalText} key={itemData.item.id}>{itemData.item.text}</Text>
      </Pressable>
    </View>
    
  )
}

export default GoalItem;