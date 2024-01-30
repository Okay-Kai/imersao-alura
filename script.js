const searchInput = document.getElementById('search-input');
const resutlsArtists = document.getEelementById('result-artist');
const resultPlaylist = document.getElementById('discover');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=$(searchTerm)`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}       


document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden')
        resutlsArtists.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
})