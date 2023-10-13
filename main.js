const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

const coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}

const mainImg = document.getElementById('mainImg');
const smallImg = document.getElementsByClassName('sm-img');

smallImg[0].onclick = () => {
  mainImg.src = smallImg[0].src;
};
smallImg[1].onclick = () => {
  mainImg.src = smallImg[1].src;
};
smallImg[2].onclick = () => {
  mainImg.src = smallImg[2].src;
};
smallImg[3].onclick = () => {
  mainImg.src = smallImg[3].src;
};
