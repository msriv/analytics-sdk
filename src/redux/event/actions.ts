import {WritableDraft} from 'immer/dist/internal';

const actions = {
  registerEvent: (
    state: WritableDraft<{events: string[]}>,
    payload: string
  ): WritableDraft<{events: string[]}> => {
    const newEvents = [...new Set([...state.events, payload])];
    return {
      ...state,
      events: newEvents,
    };
  },
};

export {actions};
