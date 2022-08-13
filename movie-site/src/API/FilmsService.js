export default class FilmsService {
    static async getFilms() {
        let response = 
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=fa8c9ee28753865dee3125bbc077563b&language=en-US&page=1")
            .then(data => data.json());
        return response;
    }

    static async searchFilms(query) {
        let response = 
        fetch("https://api.themoviedb.org/3/search/movie?api_key=fa8c9ee28753865dee3125bbc077563b&query=" + query)
            .then(data => data.json());
        return response;
    }
}