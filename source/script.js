let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () => {
  navbar.classList.remove('active');
};

document.querySelectorAll('.navbar a').forEach(link => {
  link.onclick = () => {
    navbar.classList.remove('active');
  };
});

const form = document.querySelector('#contact-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  // EmailJS kodini ishlatish uchun EmailJS ma'lumotlarini tekshirish
  if (typeof emailjs === 'undefined') {
    alert('Kechirasiz ushbu xizmat vaqtinchalik mavjud emas');
    return;
  }

  // EmailJS kodini ishlatish uchun EmailJS ma'lumotlarini kiritish
  emailjs.init('YOUR_USER_ID');

  // Email ma'lumotlarini to'plab, EmailJS xizmatiga yuborish
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    from_name: form.elements[0].value,
    from_email: form.elements[1].value,
    message: form.elements[2].value,
    to_email: 'khalilovibrohimuz@gmail.com'
  }).then(response => {
    console.log('Email yuborildi!', response.status, response.text);
  }, error => {
    console.log('Email yuborilmadi!', error);
  });
});


var swiper = new Swiper(".swiper-container", {
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2400,
    disableOnInteraction: false
  },
  slidesPerView: 3,
});
