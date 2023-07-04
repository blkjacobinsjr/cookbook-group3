function getRecipeDetails(recipe) {
    // AJAX code to get recipe details goes here
  
    // Mock data for illustration
    const data = {
      recipeName: "Hunan Sauce",
      subTitle: "Hot and Spicy Sauce",
      imageUrl: "<link-to-image>",
      author: "<author-name>",
      totalTime: "30 minutes"
    };
  
    // Populate the recipe details in third column
    let content = `<h2>${data.recipeName}</h2>`
          + `<h3>${data.subTitle}</h3>`
          + `<img src="${data.imageUrl}" alt="${data.recipeName}">`
          + `<p>Author: ${data.author}</p>`
          + `<p>Total Time: ${data.totalTime}</p>`;
  
    // Add the content to the third column
    $(".col-md-6").html(content);
  }
  
// Example using MasonryJS
$('.row').masonry({
    // options
    itemSelector: '.border',
    columnWidth: '.col-lg-8',
    // Add more options as needed
  });