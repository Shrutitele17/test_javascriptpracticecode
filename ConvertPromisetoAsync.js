function waitWithPromise(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`⏳ Waited ${ms}ms (async/await)`);
    }, ms);
  });
}

async function run() {
  console.log("Start (async/await)");

  const msg = await waitWithPromise(1000);

  console.log(msg);
  console.log("End (async/await)");
}

run();

console.log("This runs immediately after async function call");
