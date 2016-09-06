class Post < ActiveRecord::Base
  scope :approved, -> { where(:postreview => false) }
  scope :pending, -> { where(:postreview => true) }

  belongs_to :user
  has_many :comments
end
