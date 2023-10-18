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

// let footerTag = document.createElement("footer");
// let cookiesTag = document.createElement("a");
// footerTag.appendChild(cookiesTag);
// let cookiesText = document.createTextNode("Accept Cookies");
// cookiesTag.appendChild(cookiesText);

// let acceptCookies = document.querySelector("#cookies");
// acceptCookies.addEventListener("click", clickHandler);
// function clickHandler(event) {
// acceptCookies.innerHTML = "Cookies were accepted. Would you like to revoke?"; 

//   let revokeTag = document.createElement("a");
//   acceptCookies.appendChild(revokeTag);
//   let revokeText = document.createTextNode("revoke");
//   revokeTag.appendChild(revokeText);
// };

// acceptCookies.addEventListener("click", clickHandler);
// function clickHandler(event) {
//   acceptCookies.innerHTML = "Cookies were accepted. Would you like to revoke?"; 
  
//   };

  let toggleFuction = document.querySelector("#toggle");


  toggleFuction.addEventListener("click", clickHandler);
  function clickHandler(event) {
  document.body.classList.toggle("high-contrast")
  
  };
  