// helper for creating 2d array filled with default value
export const create2DArray = (n, defaultValue = null) => {
  const result = [];

  for (let i = 0; i < n; i++) {
    const row = new Array(Number(n)).fill(defaultValue);
    result.push(row);
  }

  return result;
};
