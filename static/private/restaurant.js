const restaurantsContainer = document.getElementById("restaurants");
const container = document.getElementById("restaurants-container");
const menus = document.getElementById("menu-container");
const moveButton = document.getElementById("user-name");
const sectionsMenu = document.getElementById("sections-container");
const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", ()=>{
    fetch("/logout").then(res => res.json())
    .then((res) =>{
        window.location.href = "/"
    })
})

moveButton.addEventListener("click", () => {
  sectionsMenu.textContent = "";
  container.style.display = "flex";
  menus.style.display = "none";
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

const createSectionFood = () => {};

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
                if (res.data.meal.length > 0) {
                  const section = document.createElement("div");
                  const sectionName = document.createElement("p");
                  sectionName.textContent = "Meals";
                  section.appendChild(sectionName);
                  for (let i = 0; i < 2; i++) {
                    const food = document.createElement("div");
                    const foodImg = document.createElement("img");
                    const foodInfo = document.createElement("div");
                    const foodName = document.createElement("p");
                    const foodPrice = document.createElement("p");
                    const Btn = document.createElement("button");

                    section.setAttribute("class", "section");
                    sectionName.setAttribute("class", "section-name");
                    food.setAttribute("class", "Food");
                    foodInfo.setAttribute("class", "food-info");
                    foodName.setAttribute("class", "food-name");
                    foodPrice.setAttribute("class", "food-price");
                    Btn.setAttribute("class", "buy-btn");

                    foodImg.src = res.data.meal[i].mealpic;
                    foodName.textContent = res.data.meal[i].mealname;
                    foodPrice.textContent = res.data.meal[i].price;
                    Btn.textContent = "Buy";

                    foodInfo.appendChild(foodName);
                    foodInfo.appendChild(foodPrice);
                    food.appendChild(foodImg);
                    food.appendChild(foodInfo);
                    food.appendChild(Btn);
                    section.appendChild(food);
                  }
                  sectionsMenu.appendChild(section);
                }

                if (res.data.sideDishes.length > 0) {
                  const section = document.createElement("div");
                  const sectionName = document.createElement("p");
                  sectionName.textContent = "Side Dishes";
                  section.appendChild(sectionName);
                  for (let i = 0; i < res.data.sideDishes.length; i++) {
                    const food = document.createElement("div");
                    const foodImg = document.createElement("img");
                    const foodInfo = document.createElement("div");
                    const foodName = document.createElement("p");
                    const foodPrice = document.createElement("p");
                    const Btn = document.createElement("button");

                    section.setAttribute("class", "section");
                    sectionName.setAttribute("class", "section-name");
                    food.setAttribute("class", "Food");
                    foodInfo.setAttribute("class", "food-info");
                    foodName.setAttribute("class", "food-name");
                    foodPrice.setAttribute("class", "food-price");
                    Btn.setAttribute("class", "buy-btn");

                    foodImg.src = res.data.sideDishes[i].dishname;
                    foodName.textContent = res.data.sideDishes[i].dishname;
                    foodPrice.textContent = res.data.sideDishes[i].price;
                    Btn.textContent = "Buy";

                    foodInfo.appendChild(foodName);
                    foodInfo.appendChild(foodPrice);
                    food.appendChild(foodImg);
                    food.appendChild(foodInfo);
                    food.appendChild(Btn);
                    section.appendChild(food);
                  }
                  sectionsMenu.appendChild(section);
                }

                if (res.data.desserts.length > 0) {
                  const section = document.createElement("div");
                  const sectionName = document.createElement("p");
                  sectionName.textContent = "Desserts";
                  section.appendChild(sectionName);
                  for (let i = 0; i < res.data.desserts.length; i++) {
                    const food = document.createElement("div");
                    const foodImg = document.createElement("img");
                    const foodInfo = document.createElement("div");
                    const foodName = document.createElement("p");
                    const foodPrice = document.createElement("p");
                    const Btn = document.createElement("button");

                    section.setAttribute("class", "section");
                    sectionName.setAttribute("class", "section-name");
                    food.setAttribute("class", "Food");
                    foodInfo.setAttribute("class", "food-info");
                    foodName.setAttribute("class", "food-name");
                    foodPrice.setAttribute("class", "food-price");
                    Btn.setAttribute("class", "buy-btn");

                    foodImg.src = res.data.desserts[i].dessertname;
                    foodName.textContent = res.data.desserts[i].dessertname;
                    foodPrice.textContent = res.data.desserts[i].price;
                    Btn.textContent = "Buy";

                    foodInfo.appendChild(foodName);
                    foodInfo.appendChild(foodPrice);
                    food.appendChild(foodImg);
                    food.appendChild(foodInfo);
                    food.appendChild(Btn);
                    section.appendChild(food);
                  }
                  sectionsMenu.appendChild(section);
                }

                if (res.data.drinks.length > 0) {
                  const section = document.createElement("div");
                  const sectionName = document.createElement("p");
                  sectionName.textContent = "Drinks";
                  section.appendChild(sectionName);
                  for (let i = 0; i < res.data.drinks.length; i++) {
                    const food = document.createElement("div");
                    const foodInfo = document.createElement("div");
                    const foodName = document.createElement("p");
                    const foodPrice = document.createElement("p");
                    const Btn = document.createElement("button");

                    section.setAttribute("class", "section");
                    sectionName.setAttribute("class", "section-name");
                    food.setAttribute("class", "Food");
                    foodInfo.setAttribute("class", "food-info");
                    foodName.setAttribute("class", "food-name");
                    foodPrice.setAttribute("class", "food-price");
                    Btn.setAttribute("class", "buy-btn");

                    foodName.textContent = res.data.drinks[i].drinkname;
                    foodPrice.textContent = res.data.drinks[i].price;
                    Btn.textContent = "Buy";

                    foodInfo.appendChild(foodName);
                    foodInfo.appendChild(foodPrice);
                    food.appendChild(foodInfo);
                    food.appendChild(Btn);
                    section.appendChild(food);
                  }
                  sectionsMenu.appendChild(section);
                }
              }
            });
        });
      }
    }
  })
  .catch(() => {
    displayMessage("Oops...something went wrong!");
  });
