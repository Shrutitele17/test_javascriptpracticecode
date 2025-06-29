function waitWithCallback(ms,callback)
{
setTimeout(() => {
    callback('waited $ (ms)ms (Callback)')
}, ms);

}

console.log("Function-1 start (callback)");
 
waitWithCallback(300,(msg)=>{
console.log(msg);
console.log("Function-2: End (callback)");

});

console.log("Function-3: This run immegiatly after async call");

// Using Use .then()
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`⏳ Waited ${ms}ms (promise)`);
    }, ms);
  });
}

console.log("FUNCTION-01: Start (sync)");

function runWithPromise() {
  wait(3000)
    .then((msg) => {
      console.log(msg);
      console.log("FUNCTION-02: End (promise)");
    });
}

console.log("FUNCTION-03: This runs immediately after async call");

runWithPromise();

// Using asyncAwait
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`⏳ Waited ${ms}ms (promise)`);
    }, ms);
  });
}

console.log("FUNCTION-01: Start (sync)");

async function runWithPromise() {

 const msg = await  wait(3000); //Use async/await
    console.log(msg);

      console.log("FUNCTION-02: End (promise)");
    
}

console.log("FUNCTION-03: This runs immediately after async call");

runWithPromise();






