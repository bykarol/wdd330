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
  let listContain = document.getElementById('orderedList');
  for (let i = 0; i < assignments.length; i++){
    let listItem = document.createElement('li');
    listItem.innerHTML = `${assignments[i].label}: ${assignments[i].url}`;
    listContain.appendChild(listItem);
  }
}