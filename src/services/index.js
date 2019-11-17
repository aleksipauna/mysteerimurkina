const json = require('./recipes.json');
const healthy = ['Kasvisruoat','Kasvislisäkkeet','Kasvis']
const convenient = ['Mukavuudenhaluiset','Helppo','Puolivalmisteita sisältävä','Lyhyt aktiivinen valmistusaika',]
const aware = ['Kasvisruoat','Kasvislisäkkeet','Kasvis']
const exotic = ['Makuja maailmalta']
const ignore = ['Makeat leivonnaiset','Juomat','Kuumat juomat ','Pikkujoulut', 'Lisäkkeet']
var seed = 2;

function my_random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

const remove = function(recipes, words) {
  let res = recipes.filter(el => {
      let flag = true
      words.forEach(f => {
        if (el.categories.indexOf(f) >= 0) {
        flag = false
        }
      })
      return flag
    })
  return res
} 

const filter_recipes = function(recipes, words) {
  let res = recipes.filter(el => {
      let flag = false
      words.forEach(f => {
        if (el.categories.indexOf(f) >= 0) {
        flag = true
        }
      })
      return flag
    })
  return res
} 

export const getPrediction = function(foodTypes, allergens, diets) {
  let recipes = remove(json, ignore);
  //console.log(recipes)
  diets.forEach(el => {
    switch(el) {
      case 'vegan':
          recipes = filter_recipes(recipes, healthy)
      case 'vegetarian':
          recipes = filter_recipes(recipes, healthy)
    }

  })
  foodTypes.forEach(el => {
    switch(el) {
        case 'healthy':
          recipes = filter_recipes(recipes, healthy)
        break;
        case 'convenient':
          recipes = filter_recipes(recipes, convenient)
        break;
        case 'aware':
          recipes = filter_recipes(recipes, aware)
        break;
        case 'exotic':
          recipes = filter_recipes(recipes, exotic)
        break;
        } 
  })
    let res = recipes[Math.floor(Math.random() * Math.floor(recipes.length))]
    return res
}
