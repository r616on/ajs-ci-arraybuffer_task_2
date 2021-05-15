import getBuffer from './GetBuffer';
import ArrayBufferConverter from './ArrayBufferConverter';

const converter = new ArrayBufferConverter();
converter.load(getBuffer());
console.log(converter.toString());
