import Logger from './Logger';
import SDKInternal from './SDKInternal';

SDKInternal.registerEvent('client.hello');
console.log(SDKInternal.getEvents());
SDKInternal.registerEvent(['client.bye', 'event.new', 'client.hello']);
console.log(SDKInternal.getCurrentStoreState());
Logger.debug('Hello', 'abc');
Logger.error('Type Error');
Logger.warn('Warning');
Logger.info('Info');
