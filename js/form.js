let contact = {};
function inputData() {
  contact = {
    name: document.querySelector('.name').value,
    email: document.querySelector('.email').value,
    msg: document.querySelector('.msg').value,
  };
  localStorage.setItem('contactInfo', JSON.stringify(contact));
}
const retrieveData = localStorage.getItem('contactInfo');
if (retrieveData) {
  document.querySelector('.name').value = JSON.parse(retrieveData).name;
  document.querySelector('.email').value = JSON.parse(retrieveData).email;
  document.querySelector('.msg').value = JSON.parse(retrieveData).msg;
} else {
  document.getElementById('name').onchange = () => {
    inputData();
  };
  document.getElementById('email').onchange = () => {
    inputData();
  };
  document.getElementById('msg').onchange = () => {
    inputData();
  };
}
