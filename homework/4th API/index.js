document.getElementById("button").addEventListener("click", runApi);


function runApi() {
  let n = document.getElementById("input").value;

    fetch(`https://api.publicapis.org/entries`)
      .then((result) => result.json())
      .then((data) => {
        const showInput = document.getElementById("showInput");
        const createDiv = document.createElement("div");
        createDiv.classList.add("mb-3");
        createDiv.innerHTML = `
                    <div class="card mb-2 mt-2 ms-2 float-start" style="width: 18rem;">
                        <div class="card-body bg-secondary"">
                            <h5 class="card-title">${data.entries[n].API}</h5>
                            <h6 class="card-subtitle mb-2">${data.entries[n].Category}</h6>
                            <p class="card-text">${data.entries[n].HTTPS}.</p>
                            <p class="card-text">${data.entries[n].Auth}.</p>
                            <p class="card-text">${data.entries[n].Cors}.</p>
                            <p class="card-text">${data.entries[n].Description}.</p>
                            <p class="card-text">${data.entries[n].Link}.</p>
                        </div>
                    </div>;
                    `
            showInput.appendChild(createDiv);
            console.log(showInput);
        console.log(data.entries[n].API);
        console.log(data.entries[n].Category);
        console.log(data.entries[n].HTTPS);
        console.log(data.entries[n].Auth);
        console.log(data.entries[n].Cors);
        console.log(data.entries[n].Description);
        console.log(data.entries[n].Link);
        console.log(data.entries[n]);
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
    }
