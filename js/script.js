// function toggleMenu() {
//   const menu = document.querySelector(".menu-links");
//   const icon = document.querySelector(".hamburger-icon");
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }
    const fixedText = "I'm " ;
const changingText = "Frontend Web Developer";
const element = document.getElementById('typing-text');

let index = 0;
let isDeleting = false;

function type() {
  if (!isDeleting && index <= changingText.length) {
    // كتابة الحروف واحد واحد
    element.textContent = fixedText + changingText.substring(0, index) ;
    index++; 
  } else if (isDeleting && index >= 0) {
    // مسح الحروف واحد واحد
    element.textContent = fixedText + changingText.substring(0, index);
    index--;
  }

  // تغيير الحالة بين الكتابة والمسح
  if (index === changingText.length) {
    isDeleting = true;
    setTimeout(type, 1000); // توقف بسيط بعد الانتهاء من الكتابة
    return;
  } else if (index === 0 && isDeleting) {
    isDeleting = false;
  }

  setTimeout(type, 120); // سرعة الكتابة/المسح
}

type();