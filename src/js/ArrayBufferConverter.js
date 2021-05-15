export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const arr = new Uint16Array(this.buffer);
    const str = String.fromCharCode(...arr);
    return str;
  }
}
