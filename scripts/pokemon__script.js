let pokeWrapper = document.querySelector(".pokemon__wrapper")
let pokeArr = []
let modal = document.createElement("div")
const getName = async() => {
let data = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
let newData = await data.json()

console.log(newData);
newData.results.forEach((el, idx) => {
    fetch(`${newData.results[idx].url}`)
    .then(res=>res.json())
    .then((json) => {
        pokeArr = [...pokeArr, json]
        const foreachData = () => {
            if(pokeArr.length === 20) {
            pokeArr.forEach((el, idx) => {
            let pokeCard = document.createElement("div")
            pokeWrapper.appendChild(pokeCard)
            pokeCard.className = "pokemon__card"
            let pokeName = document.createElement("h1")
            pokeCard.appendChild(pokeName)
            pokeName.className = "pokemon__title"
            pokeName.innerText = el.name
            let pokeImgDiv = document.createElement("div")
            pokeCard.appendChild(pokeImgDiv)
            pokeImgDiv.className = "pokemon__img"
            let pokeImg = document.createElement("img")
            pokeImgDiv.appendChild(pokeImg)
            
            pokeImg.src = el.sprites.other.home.front_default

            pokeImg.addEventListener("click", () => {       
            modal = document.createElement("div")
            pokeWrapper.appendChild(modal)
            modal.className = "pokemon__modal"
            let modalTitle = document.createElement("h2")
            modal.appendChild(modalTitle)
            modalTitle.className = "pokemon__modal-title"
            modalTitle.innerText = el.name
            let i = document.createElement("i")  
            modal.appendChild(i)
            i.className = "fa-solid fa-circle-xmark fa-rotate-270 fa-2xl"
            i.style.color = "#f7d708"
            i.addEventListener("click", () => { 
            modal.remove()
        })
            let modalFlexDiv = document.createElement("div")
            modal.appendChild(modalFlexDiv)
            modalFlexDiv.className = "pokemon__modal-flex"
            let modalImageDiv = document.createElement("div")
            modalFlexDiv.appendChild(modalImageDiv)
            modalImageDiv.className = "pokemon__modal-img"
            let modalImg = document.createElement("img")
            modalImageDiv.appendChild(modalImg)
            modalImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${el.id}.png`
            let modalDesc = document.createElement("div")
            modalFlexDiv.appendChild(modalDesc)
            el.abilities.forEach((el) => {
            let modalAbilities = document.createElement("p")
            modalDesc.appendChild(modalAbilities)
            modalAbilities.className = "pokemon__modal-abilities"    
            modalAbilities.innerText = `Ability: ${el.ability.name}`
            })
            let modalExp = document.createElement("p")
            modalDesc.appendChild(modalExp)
            modalExp.className = "pokemon__modal-exp"
            modalExp.innerText = `Base Experiance: ${el.base_experience}`

          

          
            })
    
            })
        }
        }
         
        console.log(pokeArr)
        foreachData()
    }
    
    )
    
})

}

getName()


   


