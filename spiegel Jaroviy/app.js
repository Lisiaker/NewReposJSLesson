function changeColor(){
    console.log('1')
    let colorInput = document.querySelector('.color_input')
    let color = colorInput.value
    let block=document.querySelector('.block')
    block.style.backgroundColor=color
}
/*function changeFontSize(){
    let text=document.querySelector('.changed_text')
    let input=document.querySelector('.text_input')
    let textsize=input.value
    console.log(textsize)
    text.style.fontSize = textsize+ 'px'
}
function changeColorText(){
    let colorTextInput = document.querySelector('.text_input_color')
    let finalText=document.querySelector('.changed_text_color')
    let colorText = colorTextInput.value
    finalText.style.color=colorText
}
function showNumb(){
    let numb2=document.querySelector('.numb_2').value
    let numb22=Number(numb2)*2
    alert(numb22)
}
function showFor(){
    let b=document.querySelector('.last').value
    for(let a=document.querySelector('.first').value; +a<=+b;a++){
        console.log(+a)
    }
}*/


// lesson 2
let isBlock=false
let size
let blockTop=0
let blockRight=0
let isCircle=false
let btnDown = document.querySelector('.down')
btnDown.addEventListener('click', blockDown)
let btnTop = document.querySelector('.up')
btnTop.addEventListener('click', blockToop)
let btnRight = document.querySelector('.right')
btnRight.addEventListener('click', blockRightSide)
let btnLeft = document.querySelector('.left')
btnLeft.addEventListener('click', blockLeftSide)
let addButton = document.querySelector('.add_button')
addButton.addEventListener('click', addBlock)
let colorEvent = document.querySelector('.color_input')
colorEvent.addEventListener('change', changeColor)
let circleCheck = document.querySelector('.input_check')
circleCheck.addEventListener('change', circleBlock)
function circleBlock(){
    if(isCircle==false){
        let block=document.querySelector('.block')
        block.style.borderRadius="50%"
        isCircle=true
    }else{
        console.log('1')
        let block=document.querySelector('.block')
        block.style.borderRadius="0"
        isCircle=false
    }
}
//-ioop0op;-_-_-[-=-=+++]
    
function removeBlock(){
    let block=document.querySelector('.block')
    block.remove()
    isBlock=false
}
function addBlock(){
    if (isBlock==true) return
    let size1 = document.querySelector('.size1_input').value
    size = document.querySelector('.size2_input').value
    size=+size
    let wrapper = document.querySelector('.wrapper_block')
    let color=document.querySelector('.color_input').value
    if(+size1 <=50 || +size<=50 || +size1>=500 || +size>=500) return
    let block = document.createElement('div')
    block.classList.add('block')
    block.style.width=size1 + "px"
    block.style.height=size + "px"
    block.style.backgroundColor=color
 
    block.addEventListener('click', removeBlock)
    wrapper.insertAdjacentElement('afterbegin', block)
    isBlock=true
}
function blockDown(){
    let block=document.querySelector('.block')
    console.log(blockTop)
    console.log(size)
    if(+blockTop+size+10 >=500) return
    blockTop +=10
    block.style.marginTop=blockTop + 'px'
}
function blockToop(){
    let block=document.querySelector('.block')
    if(blockTop <=0) return
    blockTop -=10
    block.style.marginTop=blockTop+ 'px'
}
function blockRightSide(){

    let block = document.querySelector('.block')
    
    if(+size + +blockRight + 10 > 500) return
    
    blockRight+= 10

    block.style.marginLeft = blockRight + 'px'

    console.log('1')
}

function blockLeftSide(){

    let block = document.querySelector('.block')
    
    if(blockRight <=0) return
    if(+size + +blockRight -10 <=0){
        console.log('true')
    }else{
        console.log('false')
    }
    console.log(size)
    console.log(blockRight)
    console.log(size)
    blockRight -= 10

    block.style.marginLeft= blockRight + 'px'
}