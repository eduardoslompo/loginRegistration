const container = document.getElementById('container');
const signIn = document.getElementById('signin');
const signUp = document.getElementById('signup');

signUp.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signIn.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

function storeRegister(e){
    //the variables
    let name = document.getElementById('name');
    let password = document.getElementById('password');
    let form = document.getElementById('registerForm');

    //restrictions of password
    let lowerCase = /[a-z]/g;
    let upperCase = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if(name.value.length === 0){
        alert('Por favor, preencha o email');
    } else if(password.value.length === 0){
        alert('Por favor, preencha a senha');
    } else if(name.value.length === 0 && password.value.length === 0){
        alert('Por favor, preencha o email e a senha');
    } else if(password.value.length > 8){
        alert('Máximo 8 caracteres na senha');
    } else if(!password.value.match(numbers)){
        alert('Por favor, adicione 1 número na senha');
    } else if(!password.value.match(upperCase)){
        alert('Por favor, adicione 1 letra maiúscula na senha');
    } else if(!password.value.match(lowerCase)){
        alert('Por favor, adicione 1 letra minúscula na senha');
    } else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('password', password.value);
        alert('Sucesso! Sua conta foi criada!');
        window.location.reload();
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
}

function checkLogin(){
    let storeName = localStorage.getItem('name');
    let storePassword = localStorage.getItem('password');

    let user = document.getElementById('userEmail');
    let password = document.getElementById('userPassword');

    if(user.value === storeName && password.value === storePassword){
        alert('Você logou com sucesso!');
        window.location.reload();
    } else{
        alert('Erro nas credenciais!')
    }
}