// Set timeout and set interval
// set timeout(parameter1,paramtere2)
 
let startt=()=>{
    setTimeout(()=>{
    console.log("I am running")},3000)
}

// ------------------------------------------------------

console.log("Loading")
setTimeout(()=>{
    console.log("I am running")},3000)

    console.log("Ending")

    // how does printing or code run that is given above
    // at first loading -- first
    // at second Ending -- Second
    // at third setTimeout func -- third

    // note: there are some function which makes javascript runs asynchornically 