const menuSpan=document.querySelector('.menuspan');
const menuContainer=document.querySelector('.menu-container');
const House=document.querySelector('.house');

menuSpan.addEventListener('click',()=>{
 House.classList.add('actives');
 menuContainer.classList.toggle('active');
})

const imageBox=document.getElementsByClassName('imagepet-box');
const ourpetsImage=document.querySelector('.ourPets-images');

let counter=0;

const rightIcon=document.querySelector('.rightIcon');
const leftIcon=document.querySelector('.leftIcon');
leftIcon.addEventListener('click',()=>{
  if(counter == 0){
    counter=imageBox.length-2;
}
  if(counter!==0){
      counter--;
  } 
  ourpetsImage.style.transform= 'translate('+(counter) *  -16.5 +'%)';
})


rightIcon.addEventListener('click',()=>{
  if(counter == imageBox.length-3){
    counter=-1;
}
  if(counter<=imageBox.length-4){
      counter++;
  } 
  ourpetsImage.style.transform= 'translate('+(counter) *  -16.5 +'%)';
})