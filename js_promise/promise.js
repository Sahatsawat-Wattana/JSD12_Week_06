// In JS, a Promise is an object representing
// the eventual completion (or failure) of
// an asynchronous operation and its resulting value.

// There are 3 states when a promise runs.
// 1. Pending
// 2. Fulfilled
// 3. Rejected

const myPromise = new Promise((resolve, reject) => {
  const status = false;

  if (status) {
    resolve("Operation ran successfully!");
  } else {
    reject("Something went wrong!");
  }
}); // output an object

// console.log(myPromise);

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Process finished.");
  });

// simulating delayed async work

// Very common for:

// loading states
// teaching async flow
// retry timing
// artificial delays in UI workflows

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Waited ${ms}ms`);
    }, ms);
  });
}

wait(2000)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// Why this is common

// Because many real apps need:

// debounce-like behavior
// delayed feedback
// pause before redirect
// retry after a timeout

// Creating your own async business logic

// This is common when your app needs custom async flow that is not directly provided by fetch().

// For example:

// validate something asynchronously
// wait for a file/process/task
// simulate a backend decision
// build a reusable async utility

function checkAge(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve("Access granted");
      } else {
        reject("Access denied");
      }
    }, 1000);
  });
}

checkAge(20)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
