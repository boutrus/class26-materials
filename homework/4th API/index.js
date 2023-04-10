/* document.getElementById("button").addEventListener("click", runApi);


function runApi() {
  let n = document.getElementById("input").value;

    fetch(`https://api.publicapis.org/entries`)
      .then((result) => result.json())
      .then((data) => {
        const showInput = document.getElementById("showInput");
        const createDiv = document.createElement("div");
        createDiv.classList.add("col-md-12", "mb-3");
        createDiv.innerHTML = `
          <div class="card mb-2 mt-2 ms-2" style="width: 18rem;">
            <div class="card-body bg-secondary">
              <h3 class="card-title">${data.entries[n].API}</h3>
              <h6 class="card-subtitle mb-2">${data.entries[n].Category}</h6>
              <p class="card-text">${data.entries[n].HTTPS}.</p>
              <p class="card-text">${data.entries[n].Auth}.</p>
              <p class="card-text">${data.entries[n].Cors}.</p>
              <p class="card-text">${data.entries[n].Description}.</p>
              <p class="card-text">${data.entries[n].Link}.</p>
            </div>
          </div>
        `;

        
        
                    
            showInput.appendChild(createDiv);
            console.log(data);
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
    } */

/* 
    const showInput = document.getElementById("showInput");
const createRow = document.createElement("div");
createRow.classList.add("row");

data.entries.forEach((entry, index) => {
  const createCol = document.createElement("div");
  createCol.classList.add("col-md-4", "mb-3");
  createCol.innerHTML = `
    <div class="card mb-2 mt-2 ms-2" style="width: 18rem;">
      <div class="card-body bg-secondary">
        <h3 class="card-title">${entry.API}</h3>
        <h6 class="card-subtitle mb-2">${entry.Category}</h6>
        <p class="card-text">${entry.HTTPS}.</p>
        <p class="card-text">${entry.Auth}.</p>
        <p class="card-text">${entry.Cors}.</p>
        <p class="card-text">${entry.Description}.</p>
        <p class="card-text">${entry.Link}.</p>
      </div>
    </div>
  `;
  createRow.appendChild(createCol);
});

showInput.appendChild(createRow);
 */

document.getElementById("button").addEventListener("click", runApi);

let currentIndex = 0;

function runApi() {
  let n = document.getElementById("input").value;

  fetch(`https://api.publicapis.org/entries`)
    .then((result) => result.json())
    .then((data) => {
      const showInput = document.getElementById("showInput");
      
      if (currentIndex >= data.entries.length) {
        console.log("No more results");
        return;
      }
      
      const createDiv = document.createElement("div");
      createDiv.classList.add("mb-3");
      createDiv.innerHTML = `
        <div class="card mb-2 mt-2 ms-2 float-start" style="width: 18rem;">
          <div class="card-body bg-secondary">
            <h3 class="card-title">${data.entries[currentIndex].API}</h3>
            <h6 class="card-subtitle mb-2">${data.entries[currentIndex].Category}</h6>
            <p class="card-text">${data.entries[currentIndex].HTTPS}.</p>
            <p class="card-text">${data.entries[currentIndex].Auth}.</p>
            <p class="card-text">${data.entries[currentIndex].Cors}.</p>
            <p class="card-text">${data.entries[currentIndex].Description}.</p>
            <p class="card-text">${data.entries[currentIndex].Link}.</p>
          </div>
        </div>
      `;
      
      showInput.innerHTML = '';
      showInput.appendChild(createDiv);
      currentIndex++;
      console.log(data.entries);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
