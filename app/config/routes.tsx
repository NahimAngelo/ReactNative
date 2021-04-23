import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-material-ui';
import NotesNavigation from '../navigation/NotesNavigation';
import AddNoteNavigation from '../navigation/AddNoteNavigation';
export type StackParamList = {
  Notes: undefined;
  AddNote: undefined;
  EditNote: { noteId: string };
  NoteDetails: { noteId: string };
};

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={({
        route,
      }: {
        route: RouteProp<Record<string, object | undefined>, string>;
      }) => ({
        tabBarIcon: ({ color, size }: { color: string; size: number }) => {
          const { name }: { name: string } = route;
          let iconName: string = '';

          switch (name) {
            case 'NotesNavigation':
              iconName = 'note';
              break;
            case 'AddNoteNavigation':
              iconName = 'note-add';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name="NotesNavigation"
        component={NotesNavigation}
        options={{
          title: 'Notes',
        }}
      />
      <Tab.Screen
        name="AddNoteNavigation"
        component={AddNoteNavigation}
        options={{
          title: 'Add Note',
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
