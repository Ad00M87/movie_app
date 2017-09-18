class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :description
      t.string :rating
      t.string :genre
      t.string :mpa_rating
      t.string :length

      t.timestamps
    end
  end
end
