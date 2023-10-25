const input = document.getElementById('input')
const btn =document.getElementById('btn')
const container =document.querySelector('.container')
// console.log(input);

//2
// input.addEventListener('change', function() {
//     const inputValue = input.value;
//     console.log(inputValue);
// });

//3
// btn.addEventListener('click',()=>{
//     const inputValue = input.value
//     console.log(inputValue);
//     input.value =''
// })


//4

btn.addEventListener('click',()=>{
    // event.preventDefault
    const container =document.querySelector('.container')
    const div = document.createElement('div')
    const textDiv = document.createElement('div')
    const xDiv = document.createElement('div')
    const p  = document.createElement('p')
    const editBtn = document.createElement('button')
    const editInput = document.createElement('input');



    let inputValue = input.value


    



    p.innerHTML = `${inputValue}`
    xDiv.innerHTML = 'X'
    editBtn.textContent = 'EDIT'


    
    xDiv.addEventListener('click', () => { 
        container.removeChild(div);
    });

    if (inputValue=== '') {
        alert('adwdaw')
        return -1
    }
    else{
        div.append(textDiv)
        div.append(xDiv)
        div.append(editBtn)
        textDiv.append(p)
        container.append(div)
    }
    
    textDiv.onclick = () =>{
        p.classList.toggle('aktiv')
    }

    editBtn.addEventListener('click', () => {
      
        editInput.value = p.textContent;
        textDiv.appendChild(editInput, p);

        editInput.addEventListener('change', () => {
            p.textContent = editInput.value;
            textDiv.appendChild(p, editInput);
        });

        editInput.addEventListener('change',() =>{
            textDiv.removeChild(editInput)
        })
    });


    div.classList.add('divler')
    editBtn.classList.add('editBtn')
    input.value =''
})
 



