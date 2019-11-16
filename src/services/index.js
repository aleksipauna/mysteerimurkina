const json = require('./recipes.json');
const healthy = ['Kasvisruoat','Kasvislisäkkeet','Kasvis']
const convenient = ['Mukavuudenhaluiset','Helppo','Puolivalmisteita sisältävä','Lyhyt aktiivinen valmistusaika',]
const aware = ['Kasvisruoat','Kasvislisäkkeet','Kasvis']
const exotic = ['Makuja maailmalta']
var seed = 1;

function my_random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

export const getPrediction = function(foodTypes, allergens, diets) {
  let foodFilter = [];
  foodTypes.forEach(el => {
    switch(el) {
        case 'healthy':
        foodFilter = foodFilter.concat(healthy)
        break;
        case 'convenient':
        foodFilter = foodFilter.concat(convenient)
        break;
        case 'aware':
        foodFilter = foodFilter.concat(aware)
        break;
        case 'exotic':
        foodFilter = foodFilter.concat(exotic)
        break;
        default:
        foodFilter = foodFilter.concat(convenient)
        } 
  })
  let typeFiltered = json.filter(el => {
      let flag = false
      foodFilter.forEach(f => {
        if (el.categories.indexOf(f) >= 0) {
	  flag = true
        }
      })
      return flag
    })
    let res = typeFiltered[Math.floor(my_random() * Math.floor(typeFiltered.length))]
    return res
}
