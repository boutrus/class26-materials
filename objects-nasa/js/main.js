//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

    startDate = document.getElementById('startDate').value
    endDate = document.getElementById('endDate').value



fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY`)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });

      
    
/* const showInput = document.getElementById("showInput");
        const createDiv = document.createElement("div");
        createDiv.classList.add("mb-3");
        createDiv.innerHTML = `
                    <div class="card mb-2 mt-2 ms-2 float-start" style="width: 18rem;">
                        <div class="card-body bg-secondary"">
                            <h3 class="card-title">${data.entries[n].API}</h3>
                            <h6 class="card-subtitle mb-2">${data.entries[n].Category}</h6>
                            <p class="card-text">${data.entries[n].HTTPS}.</p>
                            <p class="card-text">${data.entries[n].Auth}.</p>
                            <p class="card-text">${data.entries[n].Cors}.</p>
                            <p class="card-text">${data.entries[n].Description}.</p>
                            <p class="card-text">${data.entries[n].Link}.</p>
                        </div>
                    </div>;
                    `
            showInput.appendChild(createDiv);*/