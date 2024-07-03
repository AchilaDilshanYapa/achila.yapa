const menuicon= document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-menu');
    navbar.classList.toggle('active');
}



  

const form = document.querySelector('form');

function sendContact(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "achiladilshan2244@gmail.com",
        Password : "C0A570574BBCB1EFB315554E93A646D15059",
        To : 'achiladilshan2244@gmail.com',
        From : "achiladilshan2244@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendContact();
})
 
         