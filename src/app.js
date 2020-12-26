import getData from "./lib/service.js";

// This function fetches the data from the web and awaits the promise responses.
// Then logs data to the console.
for (let i = 1; i <= 10; i++) {
  console.log(await getData(i));
}
