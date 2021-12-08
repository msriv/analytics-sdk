import { Store as IStore } from '@reduxjs/toolkit';
declare class Event {
    timestamp: number;
    eventId: string;
    eventType: string;
    store: IStore;
    constructor();
    registerEventName: (eventName: string | string[]) => void;
}
export default Event;
