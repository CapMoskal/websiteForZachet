let cocktailEL = document.getElementById("cocktail-el")
let randButton = document.getElementById("rand-cock")
const cocktails = ["Sex on the beach", "Marakuya", "Mulatka", "Kukaracha", "Zombie", "White Russian", "Jin/Tonik"];


randButton.addEventListener("click", function() {
    let randomCocktail = cocktails[Math.floor(Math.random() * cocktails.length)]

    cocktailEL.textContent = randomCocktail
})