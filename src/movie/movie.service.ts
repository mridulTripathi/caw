import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
    getMoviesInCity(): string{
        return "movies"
    }

    getCinemaforMovie() : string{
        return "cinema"
    }

    getSeatAvailability() : string{
        return "availability"
    }

    bookMovieSeat(): string{
        return "seat booking"
    }
}
