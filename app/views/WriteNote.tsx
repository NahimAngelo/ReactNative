import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../config/routes';
import { addNote, updateNote } from '../store/actions';
import { useAppSelector, useAppDispatch } from '../hooks';
import Note from '../models/note.model';
import Errors from '../models/errorAddNote.model';
import { Button } from 'react-native-material-ui';

type AddNoteProp = StackScreenProps<StackParamList, 'EditNote'>;

const WriteNote = ({ navigation, route }: AddNoteProp) => {
  const { params } = route;
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState('');
  const [error, setError] = useState({
    title: false,
    image: false,
    content: false,
  });
  const notes = useAppSelector(prevState => prevState.notes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (params?.noteId) {
      const selectedNote: Note | any = notes.find(n => n.id === params.noteId);
      setTitle(selectedNote.title);
      setImage(selectedNote.image);
      setContent(selectedNote.content);
      setDate(selectedNote.date);
      setEdit(true);
      setEditId(params?.noteId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addNewNote = (): void => {
    if (checkValues()) {
      const newId = notes.length + 1;
      const newNote: Note = {
        id: `${newId}`,
        title: title,
        image: image,
        content: content,
        date: new Date().toDateString(),
      };
      dispatch(addNote(newNote));
      setTitle('');
      setImage('');
      setContent('');
      showToast();
    }
  };

  const editSelectedNote = (): void => {
    const editNote: Note = {
      id: editId,
      title: title,
      image: image,
      content: content,
      date: date,
    };
    dispatch(updateNote(editNote));
    navigation.goBack();
  };

  const checkValues = (): boolean => {
    const errors: Errors = {
      title: false,
      image: false,
      content: false,
    };

    let valid = true;

    if (title === '') {
      errors.title = true;
      valid = false;
    }

    if (image === '') {
      errors.image = true;
      valid = false;
    }

    if (content === '') {
      errors.content = true;
      valid = false;
    }
    setError(errors);
    return valid;
  };

  const showToast = (): void => {
    ToastAndroid.showWithGravityAndOffset(
      'Note added',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      25,
      150,
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        onChangeText={setTitle}
        value={title}
        label="Title"
        style={styles.input}
        error={error.title}
      />
      <TextInput
        mode="outlined"
        onChangeText={setImage}
        value={image}
        label="Image"
        placeholder="Url"
        style={styles.input}
        error={error.image}
      />
      <TextInput
        mode="outlined"
        onChangeText={setContent}
        value={content}
        label="Content"
        style={styles.input}
        error={error.content}
      />
      <Button
        raised
        primary
        text={edit ? 'Save Note' : 'Add Note'}
        style={{ container: styles.button }}
        onPress={edit ? editSelectedNote : addNewNote}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    borderRadius: 30,
    borderWidth: 0,
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default WriteNote;
