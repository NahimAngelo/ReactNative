import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Notes from '../views/Notes';
import NoteDetails from '../views/NoteDetails';
import WriteNote from '../views/WriteNote';
import { StackParamList } from '../config/routes';

const Stack = createStackNavigator<StackParamList>();

const NotesNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Notes">
      <Stack.Screen
        name="Notes"
        component={Notes}
        options={{ title: 'Notes' }}
      />
      <Stack.Screen name="NoteDetails" component={NoteDetails} />
      <Stack.Screen
        name="EditNote"
        component={WriteNote}
        options={{ title: 'Edit Note' }}
      />
    </Stack.Navigator>
  );
};

export default NotesNavigation;
