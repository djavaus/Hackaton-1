let swWrapper = document.querySelector(".sw__wrapper")
let swArr = Array.from(document.querySelectorAll(".sw__btn"))
console.log(swArr)
let div = document.createElement("div")
swWrapper.appendChild(div)

const removeDiv = () => {
    div.remove()
}
swArr.forEach((el) => {
    el.addEventListener("click", () => {
        removeDiv()
        div = document.createElement("div")
        swWrapper.appendChild(div)
        div.className = "sw__temp"
       
      
        swWrapper.appendChild(div)
        const getSW = async() => {
                let data = await fetch(`https://swapi.dev/api/${el.classList[1]}`)
                let newData = await data.json()
           
                console.log(newData)
                if(el.classList[1] === "planets") {
                    
                    newData.results.forEach((el) => {
                        let card = document.createElement("div")
                        div.appendChild(card)
                        card.className = "sw__card"
                        let title = document.createElement("p")
                        card.appendChild(title)
                        title.className = "sw__title"
                        title.innerText = el.name
                        card.addEventListener("click", () => {
                            let secondCard = document.createElement("div")
                            card.appendChild(secondCard)
                            secondCard.className = "sw__modal"
                            let desc = document.createElement("div")
                            secondCard.appendChild(desc)
                            let climate = document.createElement("p")
                            desc.appendChild(climate)
                            climate.innerText = `climate: ${el.climate}`
                            let gravity = document.createElement("p")
                            desc.appendChild(gravity)
                            gravity.innerText = `gravity: ${el.gravity}`
                            let terrain = document.createElement("p")
                            desc.appendChild(terrain)
                            terrain.innerText = `terrain: ${el.terrain}`
                            let population = document.createElement("p")
                            desc.appendChild(population)
                            population.innerText = `population: ${el.population}`                       
                            

                           
                            desc.addEventListener("mouseover", () => {
                                secondCard.remove()
                            })
                        })
                        
                    })

                } else if (el.classList[1] === "people") {
                    newData.results.forEach((el) => {
                        let card = document.createElement("div")
                        div.appendChild(card)
                        card.className = "sw__card"
                        let title = document.createElement("p")
                        card.appendChild(title)
                        title.className = "sw__title"
                        title.innerText = el.name
                        card.addEventListener("click", () => {
                            let secondCard = document.createElement("div")
                            card.appendChild(secondCard)
                            secondCard.className = "sw__modal"
                            let desc = document.createElement("div")
                            secondCard.appendChild(desc)
                            let birthYear = document.createElement("p")
                            desc.appendChild(birthYear)
                            birthYear.innerText = `birth year: ${el.birth_year}`
                            let gender = document.createElement("p")
                            desc.appendChild(gender)
                            gender.innerText = `gender: ${el.gender}`
                            let height = document.createElement("p")
                            desc.appendChild(height)
                            height.innerText = `height: ${el.height}`
                            let mass = document.createElement("p")
                            desc.appendChild(mass)
                            mass.innerText = `mass: ${el.mass}`                       
                                                   
                            desc.addEventListener("mouseover", () => {
                                secondCard.remove()
                            })                            
                            
                        })
                       
                    })
                } else if (el.classList[1] === "starships") {
                    newData.results.forEach((el) => {
                        
                        let card = document.createElement("div")
                        div.appendChild(card)
                        card.className = "sw__card"
                        let title = document.createElement("p")
                        card.appendChild(title)
                        title.className = "sw__title"
                        title.innerText = el.name
                               card.addEventListener("click", () => {
                            let secondCard = document.createElement("div")
                            card.appendChild(secondCard)
                            secondCard.className = "sw__modal"
                            let desc = document.createElement("div")
                            secondCard.appendChild(desc)
                            let model = document.createElement("p")
                            desc.appendChild(model)
                            model.innerText = `model: ${el.model}`
                            let consumables = document.createElement("p")
                            desc.appendChild(consumables)
                            consumables.innerText = `consumables: ${el.consumables}`
                            let passengers = document.createElement("p")
                            desc.appendChild(passengers)
                            passengers.innerText = `passengers: ${el.passengers}`
                            let starshipClass = document.createElement("p")
                            desc.appendChild(starshipClass)
                            starshipClass.innerText = `starship class: ${el.starship_class}`                       
                            

                           
                            desc.addEventListener("mouseover", () => {
                                secondCard.remove()
                            })
                        })
                    })
                } else if (el.classList[1] === "films") {
                    newData.results.forEach((el) => {
                        
                        let card = document.createElement("div")
                        div.appendChild(card)
                        card.className = "sw__card"
                        let title = document.createElement("p")
                        card.appendChild(title)
                        title.className = "sw__title"
                        title.innerText = el.title
                        card.addEventListener("click", () => {
                            let secondCard = document.createElement("div")
                            card.appendChild(secondCard)
                            secondCard.className = "sw__modal"
                            let desc = document.createElement("div")
                            secondCard.appendChild(desc)
                            let director = document.createElement("p")
                            desc.appendChild(director)
                            director.innerText = `director: ${el.director}`
                            let episodeId = document.createElement("p")
                            desc.appendChild(episodeId)
                            episodeId.innerText = `episode id: ${el.episode_id}`
                            let releaseDate = document.createElement("p")
                            desc.appendChild(releaseDate)
                            releaseDate.innerText = `release date: ${el.release_date}`
                            let producer = document.createElement("p")
                            desc.appendChild(producer)
                            producer.innerText = `producer: ${el.producer}`                       
                            

                           
                            desc.addEventListener("mouseover", () => {
                                secondCard.remove()
                            })
                        })

                    })
                }  else if (el.classList[1] === "species") {
                    newData.results.forEach((el) => {
                        
                        let card = document.createElement("div")
                        div.appendChild(card)
                        card.className = "sw__card"
                        let title = document.createElement("p")
                        card.appendChild(title)
                        title.className = "sw__title"
                        title.innerText = el.name
                        card.addEventListener("click", () => {
                            let secondCard = document.createElement("div")
                            card.appendChild(secondCard)
                            secondCard.className = "sw__modal"
                            let desc = document.createElement("div")
                            secondCard.appendChild(desc)
                            let heightAv = document.createElement("p")
                            desc.appendChild(heightAv)
                            heightAv.innerText = `average height: ${el.average_height}`
                            let lifeSpan = document.createElement("p")
                            desc.appendChild(lifeSpan)
                            lifeSpan.innerText = `average lifespan: ${el.average_lifespan}`
                            let designation = document.createElement("p")
                            desc.appendChild(designation)
                            designation.innerText = `designation: ${el.designation}`
                            let language = document.createElement("p")
                            desc.appendChild(language)
                            language.innerText = `producer: ${el.language}`                       
                            

                           
                            desc.addEventListener("mouseover", () => {
                                secondCard.remove()
                            })
                        })

                    })
                } else if (el.classList[1] === "vehicles") {
                    newData.results.forEach((el) => {
                        
                        let card = document.createElement("div")
                        div.appendChild(card)
                        card.className = "sw__card"
                        let title = document.createElement("p")
                        card.appendChild(title)
                        title.className = "sw__title"
                        title.innerText = el.name
                        card.addEventListener("click", () => {
                            let secondCard = document.createElement("div")
                            card.appendChild(secondCard)
                            secondCard.className = "sw__modal"
                            let desc = document.createElement("div")
                            secondCard.appendChild(desc)
                            let model = document.createElement("p")
                            desc.appendChild(model)
                            model.innerText = `model: ${el.model}`
                            let consumables = document.createElement("p")
                            desc.appendChild(consumables)
                            consumables.innerText = `consumables: ${el.consumables}`
                            let passengers = document.createElement("p")
                            desc.appendChild(passengers)
                            passengers.innerText = `passengers: ${el.passengers}`
                            let cost = document.createElement("p")
                            desc.appendChild(cost)
                            cost.innerText = `cost in credits: ${el.cost_in_credits}`                       
                            

                           
                            desc.addEventListener("mouseover", () => {
                                secondCard.remove()
                            })
                        })
                    })
                }

            }
            
            getSW()
    })
})



