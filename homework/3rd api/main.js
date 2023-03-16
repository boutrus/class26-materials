document.querySelector("button").addEventListener("click", runApi);

let myArr = [];

function runApi() {
  let nameInput = document.querySelector("input").value;
  let myArr = nameInput.split(", ");

  for (i = 0; i < myArr.length; i++) {
    fetch(`https://api.genderize.io/?name=${myArr[i]}`)
      .then((result) => result.json())
      .then((data) => {
        const genderize = document.getElementById("genderize");
        const createDiv = document.createElement("div");
        createDiv.classList.add("mb-3");
        createDiv.innerHTML = `
                    <div class="card mb-2 mt-2 ms-2 float-start" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${data.count}</h6>
                            <p class="card-text">${data.gender}.</p>
                            <p class="card-text">${data.probability}.</p>
                        </div>
                    </div>
                `;
        genderize.appendChild(createDiv);
        console.log(genderize);
        console.log(data);
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  }
}