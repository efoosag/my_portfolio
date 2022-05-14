const hamburger = document.querySelector('.hamburger');
const Menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  Menu.classList.toggle('active');
});

document.querySelectorAll('.menu-item').forEach((n) => {
  n.addEventListener('click', () => {
    Menu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});

const works = document.querySelector('.work');

const cardItem = [
  {
    pName: 'Tonic',
    pDescription: `A daily selection of privately personalized reads; no accounts or
    sign-ups required.`,
    pFeatures: ['Canopy', 'Back End Dev', 2015],
    pImage: ['./images/pic_1.png', './images/deskstop_1.png'],
    pTech: ['Html', 'css', 'javascript', 'github', 'rugby', 'bootstrap'],
    link: ['version', 'source'],
    button: 'btn_1',
  },
  {
    pName: 'Multi-Post Stories',
    pDescription: `A daily selection of privately personalized reads; no accounts or
    sign-ups required.`,
    pFeatures: ['Canopy', 'Back End Dev', 2015],
    pImage: ['./images/pic_2.png', './images/deskstop_2.png'],
    pTech: ['Html', 'css', 'javascript', 'github', 'rugby', 'bootstrap'],
    link: ['version', 'source'],
    button: 'btn_2',
  },
  {
    pName: 'Tonic',
    pDescription: `A daily selection of privately personalized reads; no accounts or
    sign-ups required.`,
    pFeatures: ['Canopy', 'Back End Dev', 2015],
    pImage: ['./images/pic_3.png', './images/pic_1.png'],
    pTech: ['Html', 'css', 'javascript', 'github', 'rugby', 'bootstrap'],
    link: ['live', 'source'],
    button: 'btn_3',
  },
  {
    pName: 'Multi-Post Stories',
    pDescription: `A daily selection of privately personalized reads; no accounts or
    sign-ups required.`,
    pFeatures: ['Canopy', 'Back End Dev', 2015],
    pImage: ['./images/pic_4.png', './images/pic_2.png'],
    pTech: ['Html', 'css', 'javascript', 'github', 'rugby', 'bootstrap'],
    link: ['live', 'source'],
    button: 'btn_4',
  },
];

let proName = '';
let proDescription = '';
let proFeatures = '';
let proImage = '';
let proTech = [];
let proBtn = '';

function callCardBody(j) {
  const cards = document.createElement('div');
  cards.classList.add('project');
  cards.classList.add(`project_${j + 1}`);

  const cardContent = `<div class="project_image_con">
  <img class="project_image" src="${proImage[0]}" alt="project 1" />
  <img
    class="project_image_des"
    src="${proImage[1]}"
    alt="project_1"
  />
</div>
<div class="project_entails">
  <h2 class="project_title font_p">${proName}</h2>
  <ul class="dev">
    <li class="upper dev_item font_p">${proFeatures[0]}</li>
    <li class="dev_item"><div class="seperator"></div></li>
    <li class="dev_item font_p">${proFeatures[1]}</li>
    <li class="dev_item"><div class="seperator"></div></li>
    <li class="dev_item font_p">${proFeatures[2]}</li>
  </ul>
  <p class="project_details font_p">
  ${proDescription}
  </p>
  <ul class="api">
    <li class="api_item font_p">${proTech[0]}</li>
    <li class="api_item font_p">${proTech[1]}</li>
    <li class="api_item font_p">${proTech[2]}</li>
  </ul>
  <button type="button" id="${proBtn}" class="btn_${proBtn} font_p btn">See Project</button>
</div>`;

  cards.innerHTML = cardContent;
  works.append(cards);
}

cardItem.forEach((item, j) => {
  proName = item.pName;
  proDescription = item.pDescription;
  proFeatures = item.pFeatures;
  proImage = item.pImage;
  proTech = item.pTech;
  proBtn = item.button;

  callCardBody(j);
});

const overlay = document.querySelector('.j-popup');
const whiteBG = document.querySelector('.whitebg');
overlay.classList.toggle('active');
whiteBG.classList.toggle('active');

const wbg = document.createElement('div');
document.querySelectorAll('.btn').forEach((n) => {
  n.addEventListener('click', (event) => {
    cardItem.forEach((project) => {
      if (event.target.getAttribute('id') === project.button) {
        const popName = project.pName;
        const popDescription = project.pDescription;
        const popFeatures = project.pFeatures;
        const popImage = project.pImage;
        const popTech = project.pTech;
        const cardContent = `<div><div class="desk_popup_title"><h2 class="desk_title">${popName}</h2><div class="desk_popup_close"><div class="bar1"></div><div class="bar2"></div></div></div>
    <ul class="dev desk_dev">
    <li class="upper dev_item font_p">${popFeatures[0]}</li>
<li class="dev_item"><div class="seperator"></div></li>
<li class="dev_item font_p">${popFeatures[1]}</li>
<li class="dev_item"><div class="seperator"></div></li>
<li class="dev_item font_p">${popFeatures[2]}</li>

</ul>
<div class="desk_popup_image_con"> <img class="project_image desk_popup_image" src="${popImage[0]}" alt="project 1" />
<img
class="project_image_des"
src="${popImage[1]}"
alt="project_1"
/>
</div>
<div class="desk_popup_detail">
<div class="desk_popup_info">
<p class="popup_project_details font_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
</div>
<div class="desk_link_con">
<ul><li><ul class="api mob_menu">
<li class="api_item font_p mob_item">${popTech[0]}</li>
<li class="api_item font_p mob_item">${popTech[1]}</li>
<li class="api_item font_p mob_item">${popTech[2]}</li>

</ul></li>
<li><ul class="api desk_menu">

<li class="api_item font_p desk_item">${popTech[3]}</li>
<li class="api_item font_p desk_item">${popTech[4]}</li>
<li class="api_item font_p desk_item">${popTech[5]}</li>
</ul></li></ul>
<div class="popup_button_con">
<button type="button" class="btn link_button font_p"><a href="https://efoosag.github.io/my_portfolio/"><span>See Live</span></a><img class="desk_popup_icon" src="./images/icon.png" alt="icon" /></button>
<button type="button" class="btn link_button font_p"><a href="https://github.com/efoosag/my_portfolio"><span>See Source</span></a><img class="desk_popup_icon" src="./images/github.png" alt="github" /></button></div></div></div>
</div>`;
        wbg.classList.add('wbg-popup');
        wbg.innerHTML = cardContent;
        overlay.classList.toggle('active');
        whiteBG.classList.add('whitebg');
        whiteBG.appendChild(wbg);
      }
    });
    overlay.classList.remove('active');
    whiteBG.classList.toggle('active');
  });
});
whiteBG.addEventListener('click', () => {
  overlay.classList.toggle('active');
  whiteBG.classList.toggle('active');
});

// form validation

const form = document.getElementById('form');
const mail = document.getElementById('email');
const message = document.querySelector('small');

function showError() {
  message.innerText = 'All letters in email must be in lowercase';
  message.classList.add('error');
}
function validateEmail(email) {
  const emailVal = email.value.trim();
  const lowerCaseWords = emailVal.toLowerCase();
  if (emailVal !== lowerCaseWords) {
    return showError();
  }
  message.innerText = '';
  return true;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateEmail(mail)) {
    form.submit();
  }
});
