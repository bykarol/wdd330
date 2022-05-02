/*---------- Last Update & current year on footer -----------*/
function date() {
  /*Current year*/
  document.getElementById("current-year").innerHTML = new Date().getFullYear();

  /*Last Modified*/
  const lastUpdate = new Date(document.lastModified);
  const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "long"}).format(lastUpdate);
  document.getElementById("updated").innerHTML = fulldate;
}
date();

/*------- Index - List of assignments with api fetch--------*/
const requestURL = 'https://bykarol.github.io/wdd330/data/assignments-list.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const list = jsonObject['assignments'];

    //call displayAssignments function pasando como parametro el jsonObject called list
    displayAssignments(list);
  })

function displayAssignments(listOfAssignments) {
  let assignments = listOfAssignments;
  let listContain = document.getElementById('unorderedList');
  for (let i = 0; i < assignments.length; i++){
    let listItem = document.createElement('li');
    let span1 = document.createElement('span');
    let aTag = document.createElement('a');
    span1.innerHTML = `${assignments[i].label}: `;
    aTag.textContent = assignments[i].description;
    aTag.setAttribute('href', `https://bykarol.github.io/wdd330/${assignments[i].url}`);
    aTag.setAttribute('target', '_blank');
    listItem.appendChild(span1);
    listItem.appendChild(aTag);
    listContain.appendChild(listItem);
  }
}
