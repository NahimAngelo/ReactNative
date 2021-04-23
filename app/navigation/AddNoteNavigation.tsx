import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WriteNote from '../views/WriteNote';
import { StackParamList } from '../config/routes';

const Stack = createStackNavigator<StackParamList>();

const AddNoteNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="AddNote">
      <Stack.Screen
        name="AddNote"
        component={WriteNote}
        options={{ title: 'Add Note' }}
      />
    </Stack.Navigator>
  );
};

export default AddNoteNavigation;
