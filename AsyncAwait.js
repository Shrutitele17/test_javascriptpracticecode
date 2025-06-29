function fetchName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Shruti"), 5000);
    });
}

async function showName() {
    console.log("Wait!!!");
    const name = await fetchName(); // waits for promise to finish
    console.log("Name is:", name);
   // console.log("Still Waitting...")
}
console.log("Still Waitting...")
showName();

//Remove Async await - But what happens if we remove async/await? Here’s the same thing without async/await:
function fetchName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Sidharth"), 5000);
    });
}

function showName() {
    const name = fetchName(); // ❌ This returns a Promise, not the value
    console.log("Name is:", name);

      // fetchName().then(name => {
     //   console.log("Name is:", name);
  //  });

}

showName();

// to resolve this issue check with "then Use .then()"
function fetchName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Sidharth"), 5000);
    });
}

function showName() {
    
       fetchName().then(name => {
        console.log("Name is:", name);
    });

}

showName();


