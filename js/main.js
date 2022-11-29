const burger = document.querySelector('.burger')
const popup = document.querySelector('.popup')
const menu = document.querySelector('.nav-list').cloneNode(1)


burger.addEventListener('click', (e) => {
   e.preventDefault()
   burger.classList.toggle('active')
   popup.classList.toggle('open')
   popupOpen()
})

function popupOpen(e) {
   popup.appendChild(menu)
}


const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'vertical',
   loop: true,
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   effect: 'fade' ,
   fadeEffect : {
      crossFade : true,
   }
 });



 document.querySelectorAll('.methods-left__item').forEach((item) => 
 item.addEventListener('click', () => {
   item.classList.toggle('open-method')
 })
 )



document.querySelectorAll('.methods-accordion__text').forEach((item) =>
item.addEventListener('click' , () => {
  const parent = item.parentNode
  if(parent.classList.contains('accordion-active')){
    parent.classList.remove('accordion-active')
  }else{
    document
            .querySelectorAll('.methods-accordion__item')
            .forEach((child) => child.classList.remove('accordion-active'))
    parent.classList.toggle('accordion-active')
  }
})
)



document.querySelectorAll('.accordion-trigger').forEach((item) =>
item.addEventListener('click' , () => {
  const parent = item.parentNode
  if(parent.classList.contains('active')){
    parent.classList.remove('active')
  }else{
    document
            .querySelectorAll('.accordion-trigger')
            .forEach((child) => child.classList.remove('active'))
    parent.classList.toggle('active')
  }
})
)


// method accordeon jobs by max-width: 768px

const openAccordeon = document.querySelector('.methods-right__btn-list')
const methodAccordeon = document.querySelector('.methods-right__accordion').cloneNode(1)


openAccordeon.addEventListener('click', () => {
openAccordeon.classList.toggle('open')
openMethod()
})



function openMethod(e) {
  openAccordeon.appendChild(methodAccordeon)
}





// const acc = document.querySelectorAll('.accordion-trigger')
// let i

// for ( i = 0; i < acc.length; i++) {
//   acc[i].onclick = function () {
//     this.classList.toggle('active')
//     this.nextElementSibling.classList.toggle('show')
//   }
  
// }