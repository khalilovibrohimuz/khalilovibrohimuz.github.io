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

// Kursor elementi

const cursor = document.querySelector('.cursor');
const cursorInner = document.querySelector('.cursor__inner');
const filter = document.querySelector('#filter-1 feTurbulence');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', event => {
  mouseX = event.clientX - cursor.getBoundingClientRect().width / 4.6;
  mouseY = event.clientY - cursor.getBoundingClientRect().height / 4.6;
  if (brightness > 128) {
    cursorInner.style.stroke = 'blue';
  } else {
    cursorInner.style.stroke = 'white';
  }
});

document.addEventListener('mousedown', () => {
  filter.setAttribute("type", "fractalNoise");
  filter.setAttribute("baseFrequency", "0.02 0.15");
  filter.setAttribute("numOctaves", "3");
  filter.setAttribute("result", "warp");
});

document.addEventListener('mouseup', () => {
  filter.setAttribute("type", "fractalNoise");
  filter.setAttribute("baseFrequency", "0.02 0.15");
  filter.setAttribute("numOctaves", "3");
  filter.setAttribute("result", "warp");
});

const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    filter.setAttribute("type", "fractalNoise");
    filter.setAttribute("baseFrequency", "0.02 0.15");
    filter.setAttribute("numOctaves", "3");
    filter.setAttribute("result", "warp");
  });

  link.addEventListener('mouseleave', () => {
    filter.setAttribute("type", "fractalNoise");
    filter.setAttribute("baseFrequency", "0.02 0.15");
    filter.setAttribute("numOctaves", "3");
    filter.setAttribute("result", "warp");
  });
});

function getBrightness(x, y) {
  const imageData = ctx.getImageData(x, y, 1, 1).data;
  // return (imageData[0] + imageData[1] + imageData[2]) / 3;
  return 0;
}

function animate() {
  cursorX += (mouseX - cursorX) * 0.2;
  cursorY += (mouseY - cursorY) * 0.2;

  cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

  requestAnimationFrame(animate);
}

animate();


// kursor elementining oxiri

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
