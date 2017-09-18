class Api::MoviesController < ApplicationController
  def index
    render json: Movie.all
  end

  def create
    attrs = params.permit(:title, :img, :description, :genre, :rating, :mpa_rating, :length)
    video = Movie.new(attrs)

    if video.save
      render json: {
        id: video.id,
        title: video.title,
        img_url: video.img.url,
        description: video.description,
        genre: video.genre,
        rating: video.rating,
        mpa_rating: video.mpa_rating,
        length: video.length
      }
    else
      render json: { errors: video.errors.full_messages }, status: 422
    end
  end

  def destroy
    Movie.find(params[:id]).destroy
  end
end
