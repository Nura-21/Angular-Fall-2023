// Add two promises
const addTwoPromises = async function (promise1, promise2) {
  return (await Promise.all([promise1, promise2])).reduce(
    (acc, val) => acc + val,
    0
  );
};
// Sleep
const sleep = async (millis) => {
  await new Promise((req) => setTimeout(req, millis));
};
// Time limit
const timeLimit = (fn, t) => {
  return async (...args) => {
    const res = fn(...args);
    const rej = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });
    return Promise.race([res, rej]);
  };
};
// Debounce
const debounce = (fn, t) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), t);
  };
};
