const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    }
}



const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function (e) {

        if ((windowTop) > e.offsetTop) {
            e.classList.add(animationClass);
        } else {
            e.classList.remove(animationClass);
        }
    })
}
animeScroll();

if (target.length) {
    window.addEventListener('scroll', debounce(function () {
        animeScroll();
        
    }, 200));
}


// Experience card

function showInfo(title, date) {
    var info = document.getElementById('expInfo');
    var titleElement = document.getElementById('expTitle');
    var dateElement = document.getElementById('expDate');
    
    titleElement.textContent = title;
    dateElement.textContent = date;
    info.style.display = "block";
    console.log("clicou");
  }

  function hideInfo() {
    var info = document.getElementById('expInfo');
    info.style.display = "none";
  }