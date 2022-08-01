const userName = document.getElementById('nameBox')
const text = document.getElementById('textBox')
const form = document.getElementById('form')
const error = document.getElementById('error') 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
   const userNameValue  =  userName.value.trim();

   if(userName.Value === '') {
    setErrorFor(userName, 'Username cannot be blank');
   } else {
    setSuccessFor(userName);
   }
}