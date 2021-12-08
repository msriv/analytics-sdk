import {Store as IStore} from '@reduxjs/toolkit';
import {registerEvent} from './redux/event/reducer';
import store from './redux/store';

class Event {
  timestamp: number = 0;
  eventId: string = '';
  eventType: string = '';
  store: IStore;
  constructor() {
    this.store = store;
  }

  registerEventName = (eventName: string | string[]) => {
    if (typeof eventName === 'string') {
      this.store.dispatch(registerEvent(eventName));
    } else if (typeof eventName === 'object') {
      eventName.forEach(event => this.store.dispatch(registerEvent(event)));
    } else {
      throw new TypeError('Invalid Argument Type');
    }
  };
}

export default Event;
