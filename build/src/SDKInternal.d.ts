import { Store as IStore } from '@reduxjs/toolkit';
import Event from './Event';
declare class SDKInternal {
    store: IStore;
    event: Event;
    constructor();
    registerEvent: (eventName: any) => void;
    getEvents: () => any;
    getCurrentStoreState: () => any;
}
declare const _default: SDKInternal;
export default _default;
