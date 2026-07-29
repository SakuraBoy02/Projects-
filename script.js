// const slider = document.querySelector('#slider');
// const sliderItems = Array.from(slider.children);

// sliderItems.forEach(function (slide, index){
//     console.log(slide);

//     if (index !== 0) {
//         slide.classList.add('hidden');
//     }

//     slide.dataset.index = index;

//     slide.addEventListener('click', function(){
//         slide.classList.add('hidden');

//         // let nextSlideIndex;
//         // if(index + 1 === sliderItems.length){
//         //     nextSlideIndex = 0;
//         // }else{
//         //     nextSlideIndex = index + 1;
//         // }
//         // тоже самое что if  A
//         //                    |
//         //                    |
//         //Тернарный оператор
//         let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

//         // const nextSlideIndex = +slide.dataset.index + 1;

//         const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
//         nextSlide.classList.remove('hidden');
//     })
// });

const galleries = {
  village:[
    
    {src: "./Photo/.jpg", big: true},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: true},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false}
  ],

  kaliningrad:[
    // {title: "Our trip in Kaliningrad"},
    {src: "./Photo/5354799430785243331Калининград.jpg", big: true},
    {src: "./Photo/5354799430785243334Калининград.jpg", big: false},
    {src: "./Photo/5354799430785243380Калининград.jpg", big: false},
    {src: "./Photo/5354799430785243472Калининград.jpg", big: false},
    {src: "./Photo/5355020282298571484Калининград.jpg", big: true},
    {src: "./Photo/5357554643715692390Калининград.jpg", big: false},
    {src: "./Photo/5357554643715692415Калининград.jpg", big: false},
    {src: "./Photo/5357554643715692437Калининград.jpg", big: false},
    {src: "./Photo/5357554643715692449Калининград.jpg", big: false},
    {src: "./Photo/5357554643715692535Калининград.jpg", big: false}
  ],

  zelenogradsk:[
    {src: "./Photo/.jpg", big: true},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: true},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false}
  ],

  sakura:[
    {src: "./Photo/.jpg", big: true},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: true},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false}
  ],

  okeanarium:[
    {src: "./Photo/.jpg", big: true},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: true},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false}
  ],

  beardrick:[
    {src: "./Photo/.jpg", big: true},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: true},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false},
    {src: "./Photo/.jpg", big: false}
  ]
}



document.querySelectorAll('.swiper-slide').forEach(slide => {
  console.log(
    slide,
    getComputedStyle(slide).cursor
  );
});

// document.querySelectorAll('.repeat-btn').forEach(btn => {
//   btn.addEventListener('click', () => {
//     window.location.href = 'index.html';
//   });
// });
var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: false,
  centeredSlides: true,

  slidesPerView: 'auto',
  initialSlide: 2,
  // loop: true,
  // loopAdditionalSlides: 1,


  coverflowEffect: {
    rotate: 0,
    stretch: 40,
    depth: 100,
    modifier: 2.5,
    slideShadows: true,
  },
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  // autoplay:{
  //     delay:5000,
  //     disableOnInteraction:false,
  // }
});

const modal = document.getElementById('modal');
const galleryContainer = document.querySelector('.gallery-container')

document.querySelectorAll('.content').forEach(card => {
  card.addEventListener('click', () => {

    const galleryId = card.dataset.gallery;
    galleryContainer.innerHTML = '';
    galleries[galleryId].forEach(photo => {
      const img = document.createElement('img');
      img.src = photo.src;
      img.classList.add('modal-photo');

      if(photo.big){
        img.classList.add('gallery-big');
      }

      galleryContainer.appendChild(img);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (event) =>{
  if (event.target === modal){
    modal.classList.remove('active');
  }
});

const viewer = document.getElementById('imageViewer');
const viewerImage = document.getElementById('viewerImage');

document.addEventListener('click', e => {

    if(e.target.classList.contains('modal-photo')){

        viewerImage.src = e.target.src;
        viewer.classList.add('active');
    }

});

viewer.addEventListener('click', () => {
    viewer.classList.remove('active');
});