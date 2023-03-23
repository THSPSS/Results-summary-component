fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      const category = element.category;
      const score = element.score;
      const icon = element.icon;

      //find the corresponding HTML element based on the category name
      const categoryElement = document.getElementById(category);

      categoryElement.querySelector("img").src = icon;
      categoryElement.querySelector(".title").textContent = category;
      categoryElement.querySelector(".point").textContent = score;
    });
  });
