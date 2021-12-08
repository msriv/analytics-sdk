import SDKInternal from './SDKInternal';

SDKInternal.registerEvent('client.hello');
console.log(SDKInternal.getEvents());
SDKInternal.registerEvent(['client.bye', 'event.new', 'client.hello']);
console.log(SDKInternal.getCurrentStoreState());
