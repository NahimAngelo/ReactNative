import Note from '../../models/note.model';
import { noteContants } from '../constants';

export interface IActionAddNote {
  type: noteContants.ADD_NOTE;
  note: Note;
}

export interface IActionDeleteNote {
  type: noteContants.DELETE_NOTE;
  noteId: string;
}

export interface IActionUpdateNote {
  type: noteContants.UPDATE_NOTE;
  note: Note;
}

export type noteTypes = IActionAddNote | IActionDeleteNote | IActionUpdateNote;
