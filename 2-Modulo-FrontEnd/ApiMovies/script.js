
const moviesContainer = document.getElementById('container')

const apiKey = '2a51b144b0d9fcbeadf79af09bd3e1f2'
const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`

async function pegarFilmes(){
    

    try{
        const response = await fetch(apiURL)
        const data = await response.json()
        console.log(data);

        data.results.forEach(media => {
            const movieCard = createCards(media)
            moviesContainer.appendChild(movieCard)
        });
       
    } catch(error){
        console.error('Erro: ', error)
    }

}

function createCards(media){
    const {title, name, backdrop_path} = media

    const movieCard = document.createElement('div')
    movieCard.classList.add('movie_item')

    movieCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="movie_img_rounded">
        <div class="title">${title || name}</div>
    `;

    return movieCard
}


pegarFilmes()


