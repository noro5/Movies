export class Movie {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.overview = data.overview;
        this.posterPath = data.poster_path;
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
