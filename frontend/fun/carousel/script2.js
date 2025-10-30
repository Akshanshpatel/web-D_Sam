let h2tag=document.querySelector('h2')

let input=document.querySelector('input')

function fun(e){
   h2tag.innerHTML=e.target.value
}

input.addEventListener('input',fun)