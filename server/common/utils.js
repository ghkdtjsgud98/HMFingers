export const groupBy = function (data, key) {
  const keys = [];
  const result =
    data.reduce(function (carry, el) {
      const group = el[key];

      if (carry[group] === undefined) {
          carry[group] = [];
      }
      keys.push(group);
      carry[group].push(el);
      return carry;
    }, {});
  keys.sort();
  if (keys.length === 0) {
    return undefined;
  }
  return {
    firstKey: keys[0],
    data: result,
  }
};

