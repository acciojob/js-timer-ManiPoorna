// write js code here if required
const date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
// alert ( year)
document.getElementById("timer").innerText = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`
