//Upload file
let option1 = document.querySelector('.option1')
let option2 = document.querySelector('.option2')
let option3 = document.querySelector('.option3')
let imgsubbtn = document.querySelector('.imgsubbtn')
let imgLink = document.querySelector('.imgLink')
let imgGrid = document.querySelector('.img-grid')



//Large Function

function mainDiv(divClass,imgLinkValue){
    let createDiv = document.createElement('div');
    createDiv.className = `${divClass}`
    let imgTag = document.createElement('img');
    imgTag.setAttribute('src',`${imgLinkValue}`)
    createDiv.append(imgTag);
    imgGrid.append(createDiv);
}


let largeImg = 'large'
let horizenImg = 'Horizental'
let vertiImg = 'Vertical'
let select = document.querySelector("#select");



function hello(){
    let as = document.forms[0].select.value;
    console.log(as);
    if(imgLink.value == ''){
        alert('Please give me a image link');
    }else if(as === "Horizental"){
        mainDiv(horizenImg,imgLink.value)
    }else if(as === "Vertical"){
        mainDiv(vertiImg,imgLink.value)
    }else if(as === "large"){
        mainDiv(largeImg,imgLink.value)
    }
}


imgsubbtn.addEventListener('click', function(e){
    e.preventDefault();
    select.onchange = hello();
    imgLink.value = '';
})
