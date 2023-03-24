//MENU MOVIL
const menu = document.querySelector('.hamburger-menu');
const menunav = document.querySelector('.nav-main');
const closebtn = document.querySelector('.close');

menu.addEventListener('click', ()=>{
    menunav.classList.toggle("spread");
    closebtn.classList.toggle("hide");
})

window.addEventListener('click', e=>{
    if(menunav.classList.contains('spread') && e.target != menunav && e.target != menu){
            menunav.classList.toggle("spread");
            closebtn.classList.toggle("hide");
            
        }
})
//CIERRE MENU MOVIL

//CAROUSEL


//CIERRE CAROUSEL

//MOSTRAR SECCION
const navContact = document.querySelector('.contact-button');
const sectionContact = document.querySelector('.my-contact');

const navSkills = document.querySelector('.skills-button');
const sectionSkills = document.querySelector('.my-skills');

const navProjects = document.querySelector('.projects-button');
const sectionProjects = document.querySelector('.my-projects');

navContact.onclick = function(){
    sectionContact.style.display="block"
    sectionSkills.style.display="none"
    sectionProjects.style.display="none"
    sectionAllProjects.style.display="none"
}

navSkills.onclick = function(){
    sectionContact.style.display="none"
    sectionSkills.style.display="block"
    sectionProjects.style.display="none"
    sectionAllProjects.style.display="none"
}

navProjects.onclick = function(){
    sectionContact.style.display="none"
    sectionSkills.style.display="none"
    sectionProjects.style.display="block"
    sectionAllProjects.style.display="none"
}

//CIERRE MOSTRAR SECCION

//VALIDAR FORMULARIO
const nameContact = document.getElementById('nameForm');
const emailContact = document.getElementById('emailForm');
const textContact = document.getElementById('messageForm');
const send = document.getElementById('sendForm');
const alertError = document.getElementById('alert');
const alerText = document.getElementById('alerText');
const form = document.getElementById('form');
form.addEventListener('submit', e=>{
    e.preventDefault()
    let sendTotal = false;
    if(nameContact.value == '' || nameContact.value == null){
        alertError.style.display='block';
        alerText.innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert" id="alerText">
        <span class="iconify" data-icon="akar-icons:circle-alert" style="color: red;"></span>
        <div> Debes llenar todos los campos!</div>
        </div>`
        nameContact.style.borderColor='#ff0000'
        e.preventDefault()
        $(document).ready(function() {
            setTimeout(function() {
                $(alertError).fadeOut(1000);
                $(nameContact.style.borderColor='').fadeOut(1000)
            },3000);
        });
        sendTotal=true
    }
    if(emailContact.value == '' || emailContact.value == null){
        alertError.style.display='block';
        alerText.innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert" id="alerText">
        <span class="iconify" data-icon="akar-icons:circle-alert" style="color: red;"></span>
        <div> Debes llenar todos los campos!</div>
        </div>`
        emailContact.style.borderColor='#ff0000'
        e.preventDefault()
        $(document).ready(function() {
            setTimeout(function() {
                $(alertError).fadeOut(1000);
                $(emailContact.style.borderColor='').fadeOut(1000)
            },3000);
        });
        sendTotal=true
    }
    if(textContact.value == '' || textContact.value == null || textContact.value <50){
        alertError.style.display='block';
        alerText.innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert" id="alerText">
        <span class="iconify" data-icon="akar-icons:circle-alert" style="color: red;"></span>
        <div> Debes llenar todos los campos!</div>
        </div>`
        textContact.style.borderColor='#ff0000'
        e.preventDefault()
        $(document).ready(function() {
            setTimeout(function() {
                $(alertError).fadeOut(1000);
                $(textContact.style.borderColor='').fadeOut(1000)
            },3000);
        });
        sendTotal=true
    }
    if(sendTotal == !true){
        form.reset();
        e.preventDefault()
        console.log('SUBMITTED FORM')
        alertError.style.display='block';
        alerText.innerHTML = `<div class="alert alert-success d-flex align-items-center" role="alert" id="alerText">
        <div><span class="iconify" data-icon="clarity:success-standard-line" style="color: green;"></span><span class="text-dark"> Pronto me pondré en contacto</span></div>
        </div>`
        $(document).ready(function() {
            setTimeout(function() {
                $(alertError).fadeOut(1000);
            },5000);
        });
    }
});

//CIERRE FORMULARIO