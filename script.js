/* Define constantes que carregam em si os elementos da página que possuem o ID
especificado */
const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('discover');

// Busca na API o termo digitado pelo usuário
function requestApi(searchTerm) {
// Tentar iniciar o json-server em casa*/
    const url = `http://http://127.0.0.1:5500/progresso%20aula%2004/artists?name_like=$(searchTerm)`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}       
// Exibição dos resultados de pesquisa
function displayResults(result) {
    // Oculta a exibição de playlists
    resultPlaylist.classList.add(`hidden`);
    const artistName = document.getElementById(`artist-name`);
    const artistImage = document.getElementById(`artist-img`);

    /* Atribui o nome e a imagem carregadas na API às constantes que referenciam os 
    elementos de artistas na página */
    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    // Remove a classe hidden do elemento carregado em resultArtists
    resultArtists.classList.remove(`hidden`);
} 

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden')
        resultArtists.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
})