export class Movie {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.overview = data.overview;
        this.posterPath = 'https://image.tmdb.org/t/p/w154' + data.poster_path;
        this.popularity = data.popularity;
        this.releaseDate = data.release_date;
        this.isFavourite = false;
    }
    id: number;
    title: string;
    overview: string;
    posterPath: string;
    popularity: number;
    releaseDate: Date;
    isFavourite: boolean;
}
