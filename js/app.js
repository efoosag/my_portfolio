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
    pTech: ['Html', 'css', 'javascript'],
    link: ['version', 'source'],
    button: 'btn_1',
  },
  {
    pName: 'Multi-Post Stories',
    pDescription: `A daily selection of privately personalized reads; no accounts or
    sign-ups required.`,
    pFeatures: ['Canopy', 'Back End Dev', 2015],
    pImage: ['./images/pic_2.png', './images/deskstop_2.png'],
    pTech: ['Html', 'css', 'javascript'],
    link: ['version', 'source'],
    button: 'btn_2',
  },
  {
    pName: 'Tonic',
    pDescription: `A daily selection of privately personalized reads; no accounts or
    sign-ups required.`,
    pFeatures: ['Canopy', 'Back End Dev', 2015],
    pImage: ['./images/pic_3.png', './images/pic_1.png'],
    pTech: ['Html', 'css', 'javascript'],
    link: ['version', 'source'],
    button: 'btn_3',
  },
  {
    pName: 'Multi-Post Stories',
    pDescription: `A daily selection of privately personalized reads; no accounts or
    sign-ups required.`,
    pFeatures: ['Canopy', 'Back End Dev', 2015],
    pImage: ['./images/pic_4.png', './images/pic_2.png'],
    pTech: ['Html', 'css', 'javascript'],
    link: ['version', 'source'],
    button: 'btn_2',
  },
];

let proName = '';
let proDescription = '';
let proFeatures = '';
let proImage = '';
// const pLink = '';
let proTech = [];

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
  <button type="button" id="btn_${j + 1}" class="btn btn_${
    j + 1
  } font_p">See Project</button>
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

  callCardBody(j);
});
