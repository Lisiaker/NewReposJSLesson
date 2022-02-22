/*const person={
    'age':12,
    'name':'illia',
    'nickname':'kuk_cat',
}
console.log(person['age one'])*/
rahunok=1
let cardArr=[];
let currentDate = new Date()
let createBtn = document.querySelector('.btn_create')
createBtn.addEventListener('click', addCard)
let date = currentDate.getFullYear() + '.' + (Number(currentDate.getMonth())+1) + '.' + (Number(currentDate.getDate()))
function addCard(){
    let title=document.querySelector('.card_title').value
    if(title==''){
        alert('Введите значение первой формы')
        return
    }
    let text=document.querySelector('.card_text').value
    if(text==''){
        alert('Введите значение второй формы')
        return
    }
    const card={
        'title':title,
        'text':text,
        'date': date,
    }
    cardArr.push(card)
    let cardBlock=document.createElement('div');
    cardBlock.classList.add('Card')
    cardBlock.insertAdjacentHTML('beforeend', ` <div class="card">
    <div class="card_number">${rahunok}</div>
    <div class="card_info">
    <div class="cartd_title">${card.title}</div>
    <div class="cartd_text">${card.text}</div>
    <div class="cartd_date">${card.date}</div>
    </div>
    </div>`)
    let wrapper = document.querySelector('.wrapper')
    wrapper.insertAdjacentElement('afterbegin', cardBlock)
    console.log(text.length)
    console.log(title.length)
    
    rahunok++
}