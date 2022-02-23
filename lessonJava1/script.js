/*const person={
    'age':12,
    'name':'illia',
    'nickname':'kuk_cat',
}
console.log(person['age one'])*/
let bigBang=document.querySelector('.bigBang')
bigBang.addEventListener('click', BigBang)
function BigBang(){
    let metaVerse=createElement('div');
    metaVerse.classList.add('meta_verse')
    metaVerse.insertAdjacentElement('afterend' `<input type='text' class="card_title" name="" id="">
    <input type='text' class="card_text" name="" id="">
    <button class="btn_create">Создать карточку</button>
    <button class="btn_wrapper">+</button>
    <div class="wrapper" </div>>
    `)
}
rahunok=1
a=0
let draggableCard
let cardArr=[];
let currentDate = new Date()
let createBtn = document.querySelector('.btn_create')
createBtn.addEventListener('click', addCard)
let date = currentDate.getFullYear() + '.' + (Number(currentDate.getMonth())+1) + '.' + (Number(currentDate.getDate()))
let btnwrapper=document.querySelector('.btn_wrapper')
btnwrapper.addEventListener('click', newWrapper)
function newWrapper(){
    let wrap=document.createElement('div');
    wrap.classList.add('wrapper')
    let wrapper = document.querySelector('.btn_wrapper')
    wrapper.insertAdjacentElement('afterend', wrap)
}
function addCard(){
    let title=document.querySelector('.card_title').value
    let text=document.querySelector('.card_text').value
    if(title=='' || text=='' || title.length>20 || text.length>20) return    
    const card={
        'title':title,
        'text':text,
        'date': date,
    }
    cardArr.push(card)
    let cardBlock=document.createElement('div');
    cardBlock.classList.add('Card')
    cardBlock.insertAdjacentHTML('beforeend', ` <div class="card" draggable="true">
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
    a=1
    rahunok++
    document.querySelector('.card_title').value=''
    document.querySelector('.card_text').value=''
    document.querySelector('.card').addEventListener('dragstart', dragStart)
    document.querySelector('.card').addEventListener('dragend', dragEnd)
    function dragStart(){   
    draggableCard=this
    console.log(draggableCard)
    }
    function dragEnd(){
    draggableCard=null
    }
    let wrappers=document.querySelectorAll('.wrapper')
    console.log(wrappers)
    wrappers.forEach(wrapper => {
    wrapper.addEventListener('dragover', dragOver)
});
    function dragOver(){
    this.insertAdjacentElement('beforeend', draggableCard)
    }
}

function dragStart(){
    draggableCard=this
    console.log(draggableCard)
}
function dragEnd(){
    draggableCard=null
}
let wrappers=document.querySelectorAll('.wrapper')

wrappers.forEach(wrapper => {
    wrapper.addEventListener('dragover', dragOver)
});
function dragOver(){
    this.insertAdjacentElement('beforeend', draggableCard)
}