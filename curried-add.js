function curriedAdd(total) {
  if (!total) return 0;
  return function accumulate(num) {
    if (!num) return total;
    total += num;
    return accumulate;
  };
}

module.exports = { curriedAdd };
