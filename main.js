async function getRecipes() {

    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
    const count=data.count;
    const recipes = data.recipes;

     
    const result = recipes.map(function (ele) {

        return `
       <div class="recipe container">
            <h2>${ele.title}</h2>
            <img src="${ele.image_url}" alt="${ele.title}">
       </div>
       `;
    }).join('');
     document.querySelector(".pizza .count").textContent=`Count ${count}`;
    document.querySelector(".pizza").innerHTML += result;
}

getRecipes();

