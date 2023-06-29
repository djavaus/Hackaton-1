let moviesWrapper = document.querySelector(".movies__wrapper")
const getMovies = async() => {
let data = await fetch("https://api.themoviedb.org/3/discover/movie?language=ru-RUS&api_key=baacee587b52679e93f67d12424c4cb3")
let newData = await data.json()
    console.log(newData);
    newData.results.forEach(el => {
        let movieCard = document.createElement("div")
        moviesWrapper.appendChild(movieCard)
        movieCard.className = "movies__card"
        let movieImg = document.createElement("div")
        movieCard.appendChild(movieImg)
        let img = document.createElement("img")
        movieImg.appendChild(img)
        img.src = `https://image.tmdb.org/t/p/w500/${el.poster_path}`
        
       img.addEventListener("mouseover",() => {
        
        let movieDesc = document.createElement("div")
        movieCard.appendChild(movieDesc)
        movieDesc.className = "movies__desc"
      
        let ratio = document.createElement("p")
        ratio.className = "movies__ratio"
        movieDesc.appendChild(ratio)
        let ratioStar = document.createElement("span")
        ratio.appendChild(ratioStar)
        ratioStar.className = "movies__star"
        ratioStar.innerText = el.vote_average
        let title = document.createElement("h2")
        movieDesc.appendChild(title)
        title.className = "movies__title"
        titleSpan = document.createElement("span")
        title.appendChild(titleSpan)
        titleSpan.innerText = el.title
          
        let movieBtn = document.createElement("button")
        movieDesc.appendChild(movieBtn)
        movieBtn.className = "movies__btn"
        movieBtn.innerText = "Подробнее"
        movieBtn.addEventListener("click", () => {
            let modal = document.createElement("div")
            moviesWrapper.appendChild(modal)
            modal.className = "movies__modal"
            let modalBackdrop = document.createElement("div")
            modal.appendChild(modalBackdrop)
            modalBackdrop.className = "movies__modal-img"
            let img = document.createElement("img")
            modalBackdrop.appendChild(img)
            img.src = `https://image.tmdb.org/t/p/w500/${el.backdrop_path}`
            let modalTitle = document.createElement("p")
            modal.appendChild(modalTitle)
            modalTitle.innerText = `${el.title} (${el.release_date})`
            let modalDesc = document.createElement("p")
            modal.appendChild(modalDesc)
            modalDesc.className = "movies__modal-desc"
            modalDesc.innerText = el.overview
            let modalGenre = document.createElement("p")
            modalGenre.className = "movies__modal-genres"
            modal.appendChild(modalGenre)
            let a = el
            let str = ""
            fetch('http://api.themoviedb.org/3/genre/movie/list?api_key=baacee587b52679e93f67d12424c4cb3')
            .then(res=>res.json())
            .then((json) => { 
                console.log(json)
             json.genres.find((elem) => {
                a.genre_ids.forEach ((el) => {
                   if(el === elem.id) {
                    str = `${str} ${elem.name}`
                   }
                })
               
            })
            
            modalGenre.innerText = str
            
            })

            let i = document.createElement("i") 
            modal.appendChild(i)
            i.className = "fa-solid fa-circle-xmark fa-rotate-270 fa-2xl"
            i.style.color = "#f7d708"
            i.addEventListener("click", () => { 
            modal.remove()
        })
            
        })
        movieCard.addEventListener("mouseleave", () => {
            movieDesc.remove()
        })
        })
            
    });
}
console.dir(document)
getMovies()



