let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=> {

  setTimeout(()=>{
    logoSpan.forEach((span, idx)=>{
      setTimeout(()=> {
        span.classList.add('active');
      }, (idx + 1) * 400)
    });
    setTimeout(()=>{
      logoSpan.forEach((span, idx)=> {
        setTimeout(()=>{
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50)
      })
    },2000);

    setTimeout(()=>{
      intro.style.top = '-100vh';
    },2300);
  })
})

const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{
  filterItem.onclick = (selectedItem)=>{
    if(selectedItem.target.classList.contains("item")){
      filterItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-name");
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name");
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide");
          image.classList.add("show");
        }else{
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  }
}
