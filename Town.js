console.log('Goliath Online')

let foodBtn = document.querySelector('#food')
console.log(foodBtn)

 const placesToEat = ["Angies: a good fast food mexican place.", "Dominos Pizza: seriously?", "The Original Cottage: https://theoriginalcottage.com/", "Bills' Villager: https://www.billsvillager.com/ if you go here DO NOT mention me, the owner has been lieing about why I quit.", "Tonis: Best mexican food on the mountain, has a good view of lake Gregory in Crestline."]
 console.log(placesToEat)
 
function forTheLoveOf(){
    randomPlace(placesToEat)
}

function randomPlace(arr) { 
   let res = [Math.floor(Math.random() * arr.length)]
   console.log(res)
   let place = arr[res]
   alert(place)
   
   }


 foodBtn.addEventListener('click', forTheLoveOf)