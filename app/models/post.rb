class Post < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: :slugged

  scope :approved, -> { where(:postreview => false) }
  scope :pending, -> { where(:postreview => true) }

  belongs_to :user
end
