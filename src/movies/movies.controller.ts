import { Controller, Get, Param, Post, Delete, Patch, Body, Query, Req, Res } from '@nestjs/common';
import { MoivesService } from './moives.service';
import { Movie } from './entities/moive.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller("movies")
export class MoviesController {

    constructor(private readonly moviesService: MoivesService){

    }
    @Get()
    getAll(): Movie[]{
        return this.moviesService.getAll();
    }

    @Get(":id")
    getOne(@Param('id') movieId: number): Movie{
        console.log(typeof movieId);
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        return this.moviesService.create(movieData);
    }

    @Delete(":id")
    remove(@Param('id') movieId: number){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id')
    patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto){
        return this.moviesService.update(movieId, updateData);
    }

}
