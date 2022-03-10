
var mySwiper1 = new Swiper('.s1', {
        loop: true,
        initialSlide: 0,
        autoHeight:true,
        pagination: {
            el: '.swiper-pagination1',
            type: "progressbar"
        },
        paginationClickable: true,
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1'
        }
    });
function change_mining(){
  document.getElementById('next1').textContent='Next'
  var offer = document.getElementById('numberSlides1');
  let index_m = mySwiper1.activeIndex
  if (mySwiper1.activeIndex == 8){
      document.getElementById('next1').textContent ='Done'
  }
  if (mySwiper1.activeIndex == 9){
      index_m=8
      document.getElementById('next1').textContent ='Start again'
  }
  if (mySwiper1.activeIndex == 10 || mySwiper1.activeIndex == 0 ){ index_m=1}
  offer.textContent ='Step ' + (index_m) +  ' of 8'
}
//change_mining()
document.getElementById("back1").addEventListener("click", change_mining);
document.getElementById("next1").addEventListener("click", change_mining);


var mySwiper2 = new Swiper('.s2', {
        loop: true,
        initialSlide: 0,
        autoHeight:true,
        pagination: {
            el: '.swiper-pagination2',
            type: "progressbar"
        },
        paginationClickable: true,
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2'
        }
    });

function change_commit(){
  document.getElementById('next2').textContent='Next'
  var  progressbar2 = document.getElementById('numberSlides2');
  let index_c = mySwiper2.activeIndex
  if (mySwiper2.activeIndex == 2){
      document.getElementById('next2').textContent ='Done'
  }
  if (mySwiper2.activeIndex ==3){
      index_c=2
      document.getElementById('next2').textContent ='Start again'
  }
  if (mySwiper2.activeIndex == 4){ index_c=2}
  if (mySwiper2.activeIndex == 0){ index_c=1}
  progressbar2.textContent ='Step ' + (index_c) +  ' of 2'
}

//change_commit()
document.getElementById("back2").addEventListener("click", change_commit);
document.getElementById("next2").addEventListener("click", change_commit);
