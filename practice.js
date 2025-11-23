// let random = Math.floor(Math.random()*100)

// console.log(random);




//Assignment #2
/*let btn = document.querySelector("button");
let box = document.querySelector("#box");

btn.addEventListener("click", function(){
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`
    
})
    */




//Assignment #3
let arr = [
    {
        team: "CSk",
        primary: "yellow",
        secondary: "blue",
        fullName: "Chennai Super Kings",
        trophies: 5,
        captain: "MS Dhoni",
        text:"white"
    },

    {
        team: "KKR",
        primary: "purple",
        secondary: "gold",
        fullName: "Kolkata Knight Riders",
        trophies: 2,
        captain: "Ajinkya Rahane",
        text: "black"
    },
    
    {
        team: "RCB",
        primary: "Black",
        secondary: "Orange",
        fullName: "Royal Challengers Bangalore",
        trophies: 1,
        captain: "Virat Kohli",
        text: "white"
    },

    {
        team: "PJB11",
        primary: "Red",
        secondary: "White",
        fullName: "Punjab Eleven",
        trophies: 2,
        captain: "Shreyas Iyer",
        text: "black"
        
    },

    {
        team: "MI",
        primary: "yellow",
        secondary: "blue",
        fullName: "Mumbai Indience",
        trophies: 4,
        captain: "Hardik Pandya",
        text: "white"
    }

]


let btn = document.querySelector("button");
let box = document.querySelector("#box");
let team = document.querySelector("h2");
let body = document.querySelector("body");

let captain = document.querySelector("#captain");
let trophies = document.querySelector("#trophies");
let teamName = document.querySelector("#teamName");

btn.addEventListener("click", function(){
    let winner = Math.floor(Math.random()*arr.length)

    team.innerHTML = arr[winner].team;
    box.style.backgroundColor = arr[winner].secondary;
    body.style.backgroundColor = arr[winner].primary
    team.style.color = arr[winner].text

    captain.innerHTML = `Captain Name: ${arr[winner].captain}`;
    trophies.innerHTML = `Trophies Won: ${arr[winner].trophies}`;
    teamName.innerHTML = `Team Name: ${arr[winner].fullName}`
    captain.style.color = arr[winner].text
    trophies.style.color = arr[winner].text
    teamName.style.color = arr[winner].text


})