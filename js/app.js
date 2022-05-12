const hamburger = document.querySelector(".hamburger");
const Menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  Menu.classList.toggle("active");
});

document.querySelectorAll(".menu-item").forEach((n) => {
  n.addEventListener("click", () => {
    Menu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});

const works = document.querySelector(".work");

const cardItem = [
  {
    pName: "Tonic",
    pDescription: `A daily selection of privately personalized reads; no accounts or
    sign-ups required.`,
    pFeatures: ["Canopy", "Back End Dev", 2015],
    pImage: ["./images/pic_1.png", "./images/deskstop_1.png"],
    pTech: ["Html", "css", "javascript", "github", "rugby", "bootstrap"],
    link: ["version", "source"],
    button: "btn_1",
  },
  {
    pName: "Multi-Post Stories",
    pDescription: `A daily selection of privately personalized reads; no accounts or
    sign-ups required.`,
    pFeatures: ["Canopy", "Back End Dev", 2015],
    pImage: ["./images/pic_2.png", "./images/deskstop_2.png"],
    pTech: ["Html", "css", "javascript", "github", "rugby", "bootstrap"],
    link: ["version", "source"],
    button: "btn_2",
  },
  {
    pName: "Tonic",
    pDescription: `A daily selection of privately personalized reads; no accounts or
    sign-ups required.`,
    pFeatures: ["Canopy", "Back End Dev", 2015],
    pImage: ["./images/pic_3.png", "./images/pic_1.png"],
    pTech: ["Html", "css", "javascript", "github", "rugby", "bootstrap"],
    link: ["version", "source"],
    button: "btn_3",
  },
  {
    pName: "Multi-Post Stories",
    pDescription: `A daily selection of privately personalized reads; no accounts or
    sign-ups required.`,
    pFeatures: ["Canopy", "Back End Dev", 2015],
    pImage: ["./images/pic_4.png", "./images/pic_2.png"],
    pTech: ["Html", "css", "javascript", "github", "rugby", "bootstrap"],
    link: ["version", "source"],
    button: "btn_4",
  },
];

let proName = "";
let proDescription = "";
let proFeatures = "";
let proImage = "";
// const pLink = '';
let proTech = [];
let proBtn = "";

function callCardBody(j) {
  const cards = document.createElement("div");
  cards.classList.add("project");
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

const butn = document.querySelectorAll(".btn");
butn.forEach((but) => {
  but.addEventListener("click", (e) => {
    cardItem.forEach((project) => {
      if (e.target.getAttribute("id") === project.button) {
        proName = project.pName;
        proDescription = project.pDescription;
        proFeatures = project.pFeatures;
        proImage = project.pImage;
        proTech = project.pTech;
        // console.log(t);
      }
    });
    const cardContent = `<div><div class="desk_popup_title"><h2 class="desk_title">${proName}</h2><div class="desk_popup_close"><div class="bar1"></div><div class="bar2"></div></div></div>
        <ul class="dev desk_dev">
        <li class="upper dev_item font_p">${proFeatures[0]}</li>
    <li class="dev_item"><div class="seperator"></div></li>
    <li class="dev_item font_p">${proFeatures[1]}</li>
    <li class="dev_item"><div class="seperator"></div></li>
    <li class="dev_item font_p">${proFeatures[2]}</li>
  
  </ul>
  <div class="desk_popup_image"> <img class="project_image" src="${proImage[0]}" alt="project 1" />
  <img
    class="project_image_des"
    src="${proImage[1]}"
    alt="project_1"
  />
  </div>
  <div class="desk_popup_detail">
  <div class="desk_popup_info">
  <p class="project_details font_p">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.  
  </p>
  </div>
  <div class="desk_link_con">
  <ul><li><ul class="api mob_menu">
  <li class="api_item font_p mob_item">${proTech[0]}</li>
  <li class="api_item font_p mob_item">${proTech[1]}</li>
  <li class="api_item font_p mob_item">${proTech[2]}</li>
  
</ul></li>
<li><ul class="api desk_menu">

<li class="api_item font_p desk_item">${proTech[3]}</li>
<li class="api_item font_p desk_item">${proTech[4]}</li>
<li class="api_item font_p desk_item">${proTech[5]}</li>
</ul></li></ul>
  
  <button type="button" class="btn link_button font_p">See Live<img class="desk_popup_icon" src="./images/icon.png" alt="icon" /></button>
<button type="button" class="btn link_button font_p">See Source<img class="desk_popup_icon" src="./images/github.png" alt="github" /></button></div></div>
</div>`;
    const wrap = document.querySelector(".wrapper");
    const overlay = document.createElement("div");
    overlay.classList.add("j-popup");
    const wbg = document.createElement("div");
    wbg.classList.add("wbg-popup");
    wbg.innerHTML = cardContent;
    overlay.append(wbg);
    wrap.append(overlay);
    document.querySelector(".j-popup").addEventListener("click", () => {
      overlay.classList.toggle("active");
    });
  });
});

// form validation

const form = document.getElementById("form");
const mail = document.getElementById("email");
const message = document.querySelector("small");

function showError() {
  message.innerText = "All letters must be in lowercase";
  message.classList.add("error");
}
function validateEmail(email) {
  const emailVal = email.value.trim();
  const lowerCaseWords = emailVal.toLowerCase();
  if (emailVal !== lowerCaseWords) {
    return showError();
  }
  message.innerText = "";
  return true;
}

form.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmail(mail);
});
