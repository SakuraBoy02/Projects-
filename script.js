
// // Получаем элемент, который нужно скрывать
// const element = document.getElementById('jump-vector');

// // Функция для проверки, достигли ли мы конца
// function atEndOfPage() {
//   // Вычисляем, сколько пользователь уже прокрутил
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   console.log(scrollTop);
  
//   // Вычисляем общую высоту документа и высоту окна браузера
//   const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
//   console.log(documentHeight);
//   const windowHeight = window.innerHeight || document.documentElement.clientHeight;
//   console.log(windowHeight);

//   // Проверяем, прокрутил ли пользователь до самого низа
//   return scrollTop + windowHeight >= documentHeight;
// }

// // Привязываем функцию к событию прокрутки
// window.addEventListener('scroll', function() {
//   if (atEndOfPage()) {
//     // Скрываем элемент (удаляем из DOM или меняем стиль)
//     element.style.display = 'none'; // или element.remove()
//   } else {
//     // Показываем, если проскочили
//     element.style.display = 'block';
//     element.style.visibility = 'visible'; // если использовали visibility
//   }
// });

var swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 5,
        stretch: 0,
        depth: 100,
        modifier: 1.5,
        slideShadows:true,
    },
});

