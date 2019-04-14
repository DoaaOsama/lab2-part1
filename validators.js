module.exports = numbers => {
  const arr = numbers.map(num => {
    if (isNaN(num)) throw "not number";
    else {
      return Number(num);
    }
  });
  return arr;
};
