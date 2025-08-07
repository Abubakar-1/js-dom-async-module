// Part: 1

// function fetchDataWithCallback(callback) {
//   setTimeout(() => {
//     callback("Data fetched");
//   }, 2000);
//   // this simulates the delay for 2 secs, before thecallback is called.
// }

// fetchDataWithCallback(function (message) {
//   console.log(message);
//   // this is the usage of the function,that console.logs what is returned from the callback function
// });

// Part 2:

function fetchDataWithCallback(callback) {
  let error = true;

  setTimeout(() => {
    try {
      if (error) {
        throw new Error("Fetch failed");
      }
      callback("Data fetched");
    } catch (err) {
      console.error("Error:", err.message);
    }
  }, 2000);
}

fetchDataWithCallback(function (message) {
  console.log(message);
});
