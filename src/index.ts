import Logger from './Logger';
import SDKInternal from './SDKInternal';

SDKInternal.registerEvent('client.hello');
console.log(SDKInternal.getEvents());
SDKInternal.registerEvent(['client.bye', 'event.new', 'client.hello']);
console.log(SDKInternal.getCurrentStoreState());
Logger.debug('TESTING==>', 'Hello', {event_name: 'abc'});
Logger.error('ERROR-TESTING', 'Type Error', {error: 'TYPE_EXCEPTION'});
Logger.warn('WARNING-TESTING', 'Warning');
Logger.info('INFO-TESTING', 'Info');
