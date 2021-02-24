import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList} from "react-native";

import GoalInput from "./Main /Components/GoalInput";
import GoalItems from "./Main /Components/GoalItems";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = (goalTitle) => {
    setCourseGoal((courseGoal) => [
      ...courseGoal,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeHandler = (goalId) => {
    setCourseGoal((currentsGoal) => {
      return currentsGoal.filter((goals) => goals.id !== goalId);
    });
  };

  const cancelAddGoalHandler = () => {
      setIsAddMode(false);
  }

  return (
    <View style={styles.rootView}>
      <StatusBar style="auto" />
      <Button title="Add New Goals" onPress={ () => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelAddGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={(itemData) => (
          <GoalItems
            id={itemData.item.id}
            onDelete={removeHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  rootView: {
    padding: 50,
  },
});
