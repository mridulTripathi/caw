import { Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { MovieService } from './movie.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('movie')
export class MovieController {
    constructor(private movieService: MovieService) { }

    @Get('view')
    getMoviesInCity(@Query('city') city: string) {
        return this.movieService.getMoviesInCity;
    }

    @Get('cinema')
    getCinemaforMovie(@Query('movie') movie: string, @Query('city') city: string) {
        return this.movieService.getCinemaforMovie;
    }

    @Get('availability')
    getSeatAvailability(@Query('movie') movie: string, @Query('cinema') cinema: string) {
        return this.movieService.getSeatAvailability;
    }

    @UseGuards(JwtAuthGuard)
    @Post('book')
    bookMovieSeat(@Query('movie') movie: string, @Query('cinema') cinema: string, @Query('time') time: string) {
        return this.movieService.bookMovieSeat;
    }
}
