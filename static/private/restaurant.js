const restaurantsContainer = document.getElementById("restaurants");
const container = document.getElementById("restaurants-container");
const menus = document.getElementById("menu-container");
const moveButton = document.getElementById("user-name");
const sectionsMenu = document.getElementById("sections-container");

moveButton.addEventListener("click", () => {
    //sectionsMenu.textContent = "";
    container.style.display === "flex";
    menus.style.display === "none";
});

const displayMessage = (msgText) => {
  const messageP = document.createElement("p");
  messageP.textContent = msgText;
  restaurantsContainer.appendChild(messageP);
};

const displayMessageMenu = (msgText) => {
  const messageP = document.createElement("p");
  messageP.textContent = msgText;
  menus.appendChild(messageP);
};

fetch("/restaurants")
  .then((res) => res.json())
  .then((res) => {
    if (res.status === 401) {
      window.location.href = "/login.html";
    } else if (res.status === 404) {
      displayMessage("no available restaurants at the moment...sorry");
    } else {
      for (let i = 0; i < 6; i++) {
        const rstDiv = document.createElement("div");
        const rstName = document.createElement("p");
        const rstLocation = document.createElement("p");
        const rstType = document.createElement("p");
        const chooseBtn = document.createElement("button");

        rstDiv.setAttribute("class", "rst");
        rstName.setAttribute("class", "rst-name");
        rstLocation.setAttribute("class", "rst-location");
        rstType.setAttribute("class", "rst-type");
        chooseBtn.setAttribute("class", "choose-btn");

        rstName.textContent = res.data[i].restaurantname;
        rstLocation.textContent = res.data[i].location;
        rstType.textContent = res.data[i].type;
        chooseBtn.textContent = "Go";

        rstDiv.appendChild(rstName);
        rstDiv.appendChild(rstLocation);
        rstDiv.appendChild(rstType);
        rstDiv.appendChild(chooseBtn);
        restaurantsContainer.appendChild(rstDiv);

        const restaurantID = res.data[i].id;
        chooseBtn.addEventListener("click", () => {
            container.style.display = "none";
            menus.style.display = "block";

          fetch(`/restaurants/${restaurantID}/menu`)
            .then((res) => res.json())
            .then((res) => {
              if (res.status === 401) {
                window.location.href = "/login.html";
              } else if (res.status === 404) {
                displayMessageMenu("Can't find any results...sorry");
              } else {
                console.log(res.data);
              }

              moveButton.addEventListener("click", () => {
                //sectionsMenu.textContent = "";
                container.style.display === "flex";
                menus.style.display === "none";
            });
            });
        });
      }
    }
  })
  .catch(() => {
    displayMessage("Oops...something went wrong!");
  });
