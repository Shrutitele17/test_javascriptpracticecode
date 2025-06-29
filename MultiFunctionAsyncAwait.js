function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Logged in as Shruti"), 6000);
    });
}

function fetchDashboard() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dashboard loaded"), 3000);
    });
}

function fetchVoid() {
   console.log("Void Function Called...");
}

async function runApp() {
   // const loginMessage = await loginUser(); //Use async/await
   // console.log(loginMessage);
   loginUser().then(loginMessage =>{ // Converted asynce wait to then
    console.log(loginMessage);

   })

  //  const dashboard = await fetchDashboard(); //Use async/await
   // console.log(dashboard);
fetchDashboard().then(dashboard=>{ // Converted asynce wait to then
    console.log(dashboard);
})

    fetchVoid();

    

}

runApp();
