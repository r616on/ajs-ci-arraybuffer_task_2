import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../GetBuffer';

test('test ArrayBuffer convert', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect(converter.toString()).toBe(
    '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}',
  );
});
