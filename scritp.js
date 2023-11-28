const inputPassword = document.querySelector('#password')

const inputLength = document.querySelector('#password-length ')

document.querySelector('#Copy').addEventListener('click',copy)
document.querySelector('#copy-2').addEventListener('click',copy)

let inputLengthvalue = 8    

function generatePassword(){
const chars = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]'
let password =''
for(let i = 0; i < inputLengthvalue; i++){

const randomNumber = Math.floor( Math.random()*chars.length)

password += chars.substring(randomNumber,randomNumber+1)

}

inputPassword.value=password



}

function copy(){

navigator.clipboard.writeText(inputPassword.value)

}

inputLength.addEventListener('input',function(){

inputLengthvalue = inputLength.value
generatePassword(   )
console.log(inputLengthvalue)

})




generatePassword()

