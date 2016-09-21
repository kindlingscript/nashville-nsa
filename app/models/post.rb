class Post < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: :slugged
  paginates_per 4

  scope :approved, -> { where(:postreview => false) }
  scope :pending, -> { where(:postreview => true) }

  belongs_to :user
end
