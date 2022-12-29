import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  Modal,
  SafeAreaView
} from "react-native";
import { globalStyles } from "./styles/globalStyles";
import GoalItem from "./components/goalItem";
import InputItem from "./components/InputItem";

export default function App() {
  const [myGoals, setMyGoals] = useState([]);
  const [input, setInput] = useState("");
  const [modalVisible , setModalVisible] = useState(false)
  const inputHandler = (val) => {
    setInput(val);
  };

  function startAddGoalHandler() {
    setModalVisible(true)
  };

  function cancelAddGoalModal() {
    setModalVisible(false)
  }

  const addGoalHandler = () => {
    setMyGoals((currentMyGoals) => [
      ...currentMyGoals,
      { text: input, id: Math.random().toString() },
    ]);
    setModalVisible(false)
  };

  function handleDeleteGoal(id) {
    setMyGoals((currentMyGoals) => {
      return currentMyGoals.filter((goal) => goal.id !== id)
      
    });
    console.log(myGoals);
  }

  return (
    
    <View style={globalStyles.container}>
      {/* <InputItem onAddGoal={addGoalHandler} /> */}
      <Modal animationType="slide" visible={modalVisible} >
        <View style={globalStyles.modal}>
      <View style={globalStyles.InputContainer}>
        <TextInput
          style={globalStyles.textInput}
          placeholder="Your Daily Goal!"
          onChangeText={inputHandler}
        />
       
      </View>
      <View style={globalStyles.modalBtnContainer}>
        <TouchableOpacity style={globalStyles.myBtn} onPress={addGoalHandler}>
          <Text>Add Goal</Text>
        </TouchableOpacity><TouchableOpacity style={globalStyles.myBtn} onPress={addGoalHandler}>
          <Text>Cancel</Text>
        </TouchableOpacity></View>
        </View>
      </Modal>

      <View>
      <TouchableOpacity style={globalStyles.myBtn} onPress={startAddGoalHandler}>
          <Text>Add New Goal</Text>
        </TouchableOpacity>
      </View>

      <View style={globalStyles.goalsContainer}>
        <FlatList
          data={myGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData}
                handleDeleteGoal={handleDeleteGoal}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
