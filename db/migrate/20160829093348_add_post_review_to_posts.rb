class AddPostReviewToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :postreview, :boolean, default: true
  end
end
