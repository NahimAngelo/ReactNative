import React from 'react';
import { StackParamList } from '../config/routes';
import { StackScreenProps } from '@react-navigation/stack';
import { useAppSelector } from '../hooks';
import { Card, Paragraph } from 'react-native-paper';
import Note from '../models/note.model';
import { StyleSheet, View } from 'react-native';

type NoteDetailsProps = StackScreenProps<StackParamList, 'NoteDetails'>;
const NoteDetails = ({ route }: NoteDetailsProps) => {
  const notes = useAppSelector(state => state.notes);
  const noteId = route.params.noteId;
  const selectedNote: Note | any = notes.find(n => n.id === noteId);
  const { title, content, image, date } = selectedNote;

  return (
    <View style={styles.container}>
      <Card style={styles.cardContent}>
        <Card.Title title={title} subtitle={date} />
        <Card.Content>
          <Paragraph>{content}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: image }} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: '2.5%',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default NoteDetails;
