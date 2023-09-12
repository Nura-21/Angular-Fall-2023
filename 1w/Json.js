// isEmpty
const isEmpty = (obj) =>
  Array.isArray(obj) ? obj.length === 0 : Object.keys(obj).length === 0;

// Array last
Array.prototype.last = function () {
  return this.length == 0 ? -1 : this.at(-1);
};
