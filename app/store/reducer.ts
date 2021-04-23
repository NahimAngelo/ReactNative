import Note from '../models/note.model';
import { noteContants } from './constants';
import { noteTypes } from './types';

export interface State {
  notes: Array<Note>;
}

const initalState = {
  notes: [],
};

export const rootReducer = (
  state: State = initalState,
  action: noteTypes,
): State => {
  switch (action.type) {
    case noteContants.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.note],
      };
    case noteContants.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(n => n.id !== action.noteId),
      };
    case noteContants.UPDATE_NOTE:
      const newNotesArr = state.notes.map(n => {
        if (n.id === action.note.id) {
          return action.note;
        } else {
          return n;
        }
      });
      return {
        ...state,
        notes: newNotesArr,
      };

    default:
      return state;
  }
};
