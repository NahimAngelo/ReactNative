import Note from '../../models/note.model';
import { noteContants } from '../constants';
import * as noteTypes from '../types';

export const addNote = (note: Note): noteTypes.IActionAddNote => {
  return { type: noteContants.ADD_NOTE, note };
};

export const deleteNote = (noteId: string): noteTypes.IActionDeleteNote => {
  return { type: noteContants.DELETE_NOTE, noteId };
};

export const updateNote = (note: Note): noteTypes.IActionUpdateNote => {
  return { type: noteContants.UPDATE_NOTE, note };
};
