let visitors = [
{month:"October",number:"1245"},
{month:"September",number:"5489"},
{month:"August",number:"4801"},
{month:"July",number:"2490"},
{month:"June",number:"9012"},
{month:"May",number:"7076"},
];


let visiorsTable = document.querySelector("#visitors");

for (let i=0;i<visitors.length;i++){
  let trTag = document.createElement("tr");
  visiorsTable.appendChild(trTag);

  let monthTag = document.createElement("td");
  trTag.appendChild(monthTag);
  let monthText = document.createTextNode(visitors[i].month);
  monthTag.appendChild(monthText);

  let numberTag = document.createElement("td");
  trTag.appendChild(numberTag);
  let numberText = document.createTextNode(visitors[i].number);
  numberTag.appendChild(numberText);
};

let acceptCookies = document.querySelector("#cookies");
let cookiesFooter = document.querySelector("#footer");

acceptCookies.addEventListener("click", acceptFunction);
function acceptFunction(event) {

  event.target.remove(); 

  let changecookiesTag = document.createElement("p");
  cookiesFooter.appendChild(changecookiesTag);
  let changecookiesText = document.createTextNode("Cookies were accepted. Would you like to revoke?");
  changecookiesTag.appendChild(changecookiesText);

  let revokeTag = document.createElement("a");
  cookiesFooter.appendChild(revokeTag);
  let revokeText = document.createTextNode("revoke");
  revokeTag.appendChild(revokeText);
  revokeTag.setAttribute("href", "#");

  revokeTag.addEventListener("click", revokeFunction);
  function revokeFunction(event) {
    event.target.remove();
    changecookiesText.remove();
    let changedTag = document.createElement("a");
    cookiesFooter.appendChild(changedTag);
    let changedText = document.createTextNode("Accept Cookies");
    changedTag.appendChild(changedText);
    changedTag.setAttribute("href", "#");
    changedTag.addEventListener("click", acceptFunction);

// I used the complex way of creating new elements one by one
// I find it easier to create the whole line just through innerHTML
// cookiesFooter.innerHTML='<a  href="#" id="changed">Accept Cookies</a>'
// let changedCookies = document.querySelector("#changed");
// changedCookies.addEventListener("click", acceptFunction);
   
    }
  }


let toggleButton = document.querySelector("#toggle");

toggleButton.addEventListener("click", toggleHighContrast);
function toggleHighContrast(){
  document.body.classList.toggle("high-contrast");
  
  if (document.body.classList.contains("high-contrast")) {
    toggleButton.innerHTML = "Low Contrast";
  } else {
    toggleButton.innerHTML = "High Contrast";
  }
};



document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyA' && (event.ctrlKey || event.metaKey)) {
    toggleHighContrast()
  }
});
// need to make sure you don't have a defauly function of Ctrl A
  
    