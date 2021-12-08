import {Store as IStore} from '@reduxjs/toolkit';
import Event from './Event';
import store from './redux/store';
// TODO: Work on the name for this class (`Internal` prefix basically as that will be the root name)
class SDKInternal {
  store: IStore;
  event: Event;
  constructor() {
    this.store = store;
    this.event = new Event();
    console.log(store.getState());
  }

  registerEvent = (eventName: string | string[]) => {
    this.event.registerEventName(eventName);
  };

  getEvents = () => {
    return this.store.getState().event.events;
  };

  // For Debugging Store
  getCurrentStoreState = () => {
    return this.store.getState();
  };
}

export default new SDKInternal();
