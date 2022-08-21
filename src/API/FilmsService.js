export default class FilmsService {
    static async getFilms(page) {
        let response = 
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=fa8c9ee28753865dee3125bbc077563b&language=en-US&page="+page)
            .then(data => data.json());
        return response;
    }

    static async searchFilms(query, page) {
        let response = 
        fetch("https://api.themoviedb.org/3/search/movie?api_key=fa8c9ee28753865dee3125bbc077563b&query=" + query + "&page=" + page)
            .then(data => data.json());
        return response;
    }

    static async getGenre(genreId) {
        let response = 
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=fa8c9ee28753865dee3125bbc077563b&with_genres=" + genreId)
            .then(data => data.json());
        return response;
    }
}