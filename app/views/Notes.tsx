import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../config/routes';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks';
import { IconButton, Colors } from 'react-native-paper';
import { deleteNote } from '../store/actions';

type HomeNaviationProp = StackNavigationProp<StackParamList, 'Notes'>;
type HomeProps = {
  navigation: HomeNaviationProp;
};

const Notes = ({ navigation }: HomeProps) => {
  const notes = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  const handleItemClick = (noteId: string) => (): void => {
    navigation.navigate('NoteDetails', { noteId: noteId });
  };

  const handleItemEdit = (noteId: string) => (): void => {
    navigation.navigate('EditNote', { noteId: noteId });
  };

  const deleteThisNote = (noteId: string): void => {
    dispatch(deleteNote(noteId));
  };

  return (
    <View>
      <FlatList
        data={notes}
        renderItem={({ item, index }) => {
          const { id } = item;
          return (
            <View style={styles.container} key={index}>
              <View style={styles.itemText}>
                <TouchableOpacity onPress={handleItemClick(item.id)}>
                  <Text style={styles.textItem}>{item.title}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.itemButton}>
                <IconButton
                  children
                  icon="lead-pencil"
                  color={Colors.yellowA700}
                  onPress={handleItemEdit(item.id)}
                />
                <IconButton
                  children
                  icon="delete"
                  color={Colors.red500}
                  onPress={() => deleteThisNote(id)}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    flexDirection: 'row',
    width: '70%',
  },
  itemButton: {
    flexDirection: 'row',
    width: '30%',
  },
  textItem: {
    padding: 10,
    height: 44,
    fontSize: 18,
  },
  buttonItem: {
    color: 'red',
  },
});

export default Notes;
