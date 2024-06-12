const button = document.querySelector('.form button')
const textarea = document.querySelector('form textarea')

button.addEventListener('click', ()=>{

    textarea.select()
    // document.execCommand('copy') method 2

    
    navigator.clipboard.writeText(textarea.value); 
    // method 1
    button.innerText = 'text copie !'
})