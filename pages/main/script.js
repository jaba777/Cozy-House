const menuSpan=document.querySelector('.menuspan');
const menuContainer=document.querySelector('.menu-container');
const House=document.querySelector('.house');

menuSpan.addEventListener('click',()=>{
 House.classList.add('actives');
 menuContainer.classList.toggle('active');
})