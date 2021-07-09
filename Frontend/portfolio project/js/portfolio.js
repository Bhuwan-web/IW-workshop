let username="Bhuwan-web";
let gitUserAPI=`https://api.github.com/users/${username}`;
const makePortfolio=()=>{
    fetch(gitUserAPI)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        document.getElementById("profile").src=data.avatar_url;
        document.getElementById("profileCap").innerText=data.login;
        document.getElementById("username").textContent=data.name;
        document.getElementById("bio").textContent=data.bio;
        document.getElementById("repos").textContent=`Total projects public in github :${data.public_repos}`;
        document.querySelector(".apiDetails").hidden=false;
        document.querySelector("#laoding").hidden=true;
    })
};



const form=document.querySelector('form');
form.addEventListener('submit',event=>{
    event.preventDefault();
    username=form.anonUsername.value;
    gitUserAPI=`https://api.github.com/users/${username}`;
    makePortfolio();

})


makePortfolio();