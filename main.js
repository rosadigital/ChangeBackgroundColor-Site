const colorBtn = document.querySelector('.colorBtn');// to create the variable related to the class 'colorBtn' at the html
const bodyBcg = document.querySelector('body');// to create the variable related to the body at the html
const colors = ['yellow','red','green','#3b5998'];//to attribute colors to the variable cont colors

//Attach a click event to a <button> element.
colorBtn.addEventListener('click',changeColor);

function changeColor(){
    let random = Math.floor(Math.random()*colors.length);
    bodyBcg.style.backgroundColor = colors[random];
}