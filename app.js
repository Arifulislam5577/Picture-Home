let signInBtn = document.querySelector('#signIn')
let dashBoard = document.querySelector('.dashboard')

signInBtn.addEventListener('click',function(e){
    e.preventDefault();
    dashBoard.style.display = "block";
})


//Get all Input

let firstName = document.querySelector('.FirstName')
let lastName = document.querySelector('.LastName')
let email = document.querySelector('.Email')
let password = document.querySelector('.Password')
let submitBtn = document.querySelector('.submitBtn')
let profileBtn = document.querySelector('#profile')
let userConfirm = document.querySelector('.userConfirm')
// Dashboard 2
let dashboard2 = document.querySelector('.dashboard2')
let userName = document.querySelector('.userName')

let firstNameShow = document.querySelector('.firstNameShow')
let userEmail = document.querySelector('.userEmail')



function displayNone(selectorName){
    selectorName.style.display = 'none'
}

submitBtn.addEventListener('click', function(){
    if(firstName.value == '' || lastName.value == '' || email.value == '' || password.value == ''){
        alert('Please Fill Up the form')
    }else{
        dashBoard.style.display = "none";
        signInBtn.style.display = "none";
        profileBtn.style.display = "block";

        firstNameShow.innerHTML = firstName.value;
        userEmail.innerText = `E-mail : ${email.value}`;


        function fullName(name1,name2){
            return `Name : ${name1} ${name2}`
        }
        let UserFullName = fullName(firstName.value,lastName.value);
        userName.innerText = UserFullName;
    }
})



let yesBtn = document.querySelector('#yes');
let notNowBtn = document.querySelector('#notNow');
let uploadBtn = document.querySelector('#upload');

yesBtn.addEventListener('click',function(e){
    e.preventDefault();
    notNowBtn.style.display = 'none';
    yesBtn.style.display = 'none';
    uploadBtn.style.display = 'block';
    userConfirm.style.display = 'none'
});

notNowBtn.addEventListener('click',function(e){
    e.preventDefault();
    notNowBtn.style.display = 'none';
    yesBtn.style.display = 'none';
    uploadBtn.style.display = 'none';
    
    userConfirm.innerText = 'Your are Block for 24hours';
    userConfirm.style.display = 'block'
    userConfirm.style.background = "red"
    userConfirm.style.color = "white"
    userConfirm.style.padding = "5px"
   
});

profileBtn.addEventListener('click', function(e){
    e.preventDefault();
    dashboard2.style.display = 'block'
});






