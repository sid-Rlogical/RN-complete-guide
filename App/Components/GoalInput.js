import React, { useState } from "react";
import { TextInput, StyleSheet, View, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enterGoal, setEnterGoal] = useState("");

  const goalInputHandler = (enterText) => {
    setEnterGoal(enterText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enterGoal);
    setEnterGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.addGoalView}>
        <TextInput
          placeholder="Course Goal"
          style={styles.inputText}
          onChangeText={goalInputHandler}
          value={enterGoal}
        />
         <View style={styles.buttonViewRoot}>
            <View><Button title="Add Goal" onPress={addGoalHandler} /></View>
            <View><Button title="CANCEL" color="red" onPress={props.onCancel} /></View>
         </View> 
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addGoalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inputText: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

  buttonViewRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%'
  },

  buttonAddView: {
      width: '40%'
  },

});

export default GoalInput;
