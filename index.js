// const toggle = document.querySelector(".toggle_btn");
// const dropdown = document.querySelector(".dropdown");
// const icon = document.querySelector(".toggle_btn i");

// toggle.onclick = function(){
//     dropdown.classList.toggle('open')
//     const isopen = dropdown.classList.contains('open')
//     icon.classList = isopen ? "fa fa-x" : "fa-solid fa-bars" ; 
// }

let titles =["Organic Oasis Vegetable Store", "Real Estate Management", "Let's Go Expedium" ,"Cronometer"];

let paragraphs =["Organic Oasis is a online platform for helping the users who want to sell their items into open market and those who want to purchase it from there. It tracks the and manages the information of both persons." , "Real Estate Broker Application is an application where broker can add the properties and customer can view the properties, buy and rent the property. This is a powerful management system for brokerage." , "Let's Go Expedium is a hotel booking website as per the tickets and locations. The key features are user and admin login side. The attractive UI gives you a better experience. The future trips planner, payment section and hotels preview are main web pages.","Cronometer is an informative website which helps the client to take care of his/her health. The client can explore about the tips and ways to secure a healthy lifestyle."];

let githubs= ["https://github.com/Prutter/icky-thunder-5613/tree/main","https://github.com/dikshant123321/Real-Estate-Broker-Application-","https://github.com/Prutter/deafening-trip-5321/tree/master/newexpedia","https://github.com/Prutter/flaky-range-6356"];

let deploys=["https://drive.google.com/file/d/1pIeEH1g3z1fulxzQ5ML_TSIayDDv8dOo/view","https://drive.google.com/file/d/1wMzQZmW5at_t4RzbAT5zoy54rXxqe59a/view?usp=share_link","https://chic-dango-74378f.netlify.app/","https://thriving-basbousa-a9df28.netlify.app/"];

let displayones=["https://i.ibb.co/5rxBHsC/m1.jpg","https://i.ibb.co/6bLr3CR/Estate-Explorer-Logo.png","https://i.ibb.co/gwbnT05/m1.jpg","https://i.ibb.co/nsbVR9D/m1.jpg"];

let displaytwos=[
    
    ["https://i.ibb.co/x17ZZTh/m2.jpg", "https://i.ibb.co/LPgHPgC/m3.jpg", "https://i.ibb.co/0Gh8ybF/m4.jpg", "https://i.ibb.co/zmTWmv3/bandicam-2023-05-19-00-40-40-026.jpg"],

    ["https://i.ibb.co/DpkTVKL/bandicam-2023-05-19-01-12-07-435.jpg","https://i.ibb.co/23ZLxVZ/bandicam-2023-05-19-01-15-24-389.jpg","https://i.ibb.co/Jm7sbGJ/bandicam-2023-05-19-01-13-53-637.jpg","https://i.ibb.co/k8RpBNH/bandicam-2023-05-19-00-52-39-117.jpg"],
    
    ["https://i.ibb.co/ng2jhgx/m2.jpg","https://i.ibb.co/hDGtVXg/m3.jpg", "https://i.ibb.co/FJsKgTx/m4.jpg", "https://i.ibb.co/tCthXGD/m5.jpg"],
    
    ["https://i.ibb.co/0yrxB1t/m2.jpg","https://i.ibb.co/v33hDZq/m3.jpg","https://i.ibb.co/3NH28D4/m4.jpg","https://i.ibb.co/rdt8Km8/m5.jpg"]
];

let title = document.querySelectorAll(".project-title");
let paragraph = document.querySelectorAll(".project-description");
let github = document.querySelectorAll(".project-github-link a");
let deploy = document.querySelectorAll(".project-deployed-link a");
let main= document.querySelectorAll("#main img");
let second = document.querySelectorAll("#second");

for(let i=0;i<4;i++){
    title[i].innerHTML = titles[i];
    paragraph[i].innerHTML = paragraphs[i];
    github[i].href = githubs[i];
    deploy[i].href = deploys[i];
    main[i].src = displayones[i];

    let secondimages1 = second[i].querySelectorAll("img");
    for(let j=0;j<4;j++){
        secondimages1[j].src = displaytwos[i][j];
    }
}


function div1(){
    let main1 = main[0].src;
    let secondimages1 = second[0].querySelectorAll("img");
    let img1 = secondimages1[0].src;

    let temp = main1;
    main1 = img1;
    img1 = temp;

    main[0].src = main1;
    secondimages1[0].src = img1;
}
function div2(){
    let main1 = main[0].src;
    let secondimages1 = second[0].querySelectorAll("img");
    let img1 = secondimages1[1].src;

    let temp = main1;
    main1 = img1;
    img1 = temp;

    main[0].src = main1;
    secondimages1[1].src = img1;
}
function div3(){
    let main1 = main[0].src;
    let secondimages1 = second[0].querySelectorAll("img");
    let img1 = secondimages1[2].src;

    let temp = main1;
    main1 = img1;
    img1 = temp;

    main[0].src = main1;
    secondimages1[2].src = img1;
}
function div4(){
    let main1 = main[0].src;
    let secondimages1 = second[0].querySelectorAll("img");
    let img1 = secondimages1[3].src;

    let temp = main1;
    main1 = img1;
    img1 = temp;

    main[0].src = main1;
    secondimages1[3].src = img1;
}

function div5(){
    let main1 = main[1].src;
    let secondimages1 = second[1].querySelectorAll("img");
    let img1 = secondimages1[0].src;

    let temp = main1;
    main1 = img1;
    img1 = temp;

    main[1].src = main1;
    secondimages1[0].src = img1;
}
function div6(){
    let main1 = main[1].src;
    let secondimages1 = second[1].querySelectorAll("img");
    let img1 = secondimages1[1].src;

    let temp = main1;
    main1 = img1;
    img1 = temp;

    main[1].src = main1;
    secondimages1[1].src = img1;
}

function div7(){
    let main1 = main[1].src;
    let secondimages1 = second[1].querySelectorAll("img");
    let img1 = secondimages1[2].src;

    let temp = main1;
    main1 = img1;
    img1 = temp;

    main[1].src = main1;
    secondimages1[2].src = img1;
}

function div8(){
    let main1 = main[1].src;
    let secondimages1 = second[1].querySelectorAll("img");
    let img1 = secondimages1[3].src;

    let temp = main1;
    main1 = img1;
    img1 = temp;

    main[1].src = main1;
    secondimages1[3].src = img1;
}


function div9(){
    let main1 = main[2].src;
    let secondimages1 = second[2].querySelectorAll("img");
    let img1 = secondimages1[0].src;

    let temp = main1;
    main1 = img1;
    img1 = temp;

    main[2].src = main1;
    secondimages1[0].src = img1;
}

function div10(){
    let main1 = main[2].src;
    let secondimages1 = second[2].querySelectorAll("img");
    let img1 = secondimages1[1].src;

    let temp = main1;
    main1 = img1;
    img1 = temp;

    main[2].src = main1;
    secondimages1[1].src = img1;
}

function div11(){
    let main1 = main[2].src;
    let secondimages1 = second[2].querySelectorAll("img");
    let img1 = secondimages1[2].src;

    let temp = main1;
    main1 = img1;
    img1 = temp;

    main[2].src = main1;
    secondimages1[2].src = img1;
}

function div12(){
    let main1 = main[2].src;
    let secondimages1 = second[2].querySelectorAll("img");
    let img1 = secondimages1[3].src;

    let temp = main1;
    main1 = img1;
    img1 = temp;

    main[2].src = main1;
    secondimages1[3].src = img1;
}

function div13(){
    let main1 = main[3].src;
    let secondimages1 = second[3].querySelectorAll("img");
    let img1 = secondimages1[0].src;

    let temp = main1;
    main1 = img1;
    img1 = temp;

    main[3].src = main1;
    secondimages1[0].src = img1;
}

function div14(){
    let main1 = main[3].src;
    let secondimages1 = second[3].querySelectorAll("img");
    let img1 = secondimages1[1].src;

    let temp = main1;
    main1 = img1;
    img1 = temp;

    main[3].src = main1;
    secondimages1[1].src = img1;
}

function div15(){
    let main1 = main[3].src;
    let secondimages1 = second[3].querySelectorAll("img");
    let img1 = secondimages1[2].src;

    let temp = main1;
    main1 = img1;
    img1 = temp;

    main[3].src = main1;
    secondimages1[2].src = img1;
}

function div16(){
    let main1 = main[3].src;
    let secondimages1 = second[3].querySelectorAll("img");
    let img1 = secondimages1[3].src;

    let temp = main1;
    main1 = img1;
    img1 = temp;

    main[3].src = main1;
    secondimages1[3].src = img1;
}