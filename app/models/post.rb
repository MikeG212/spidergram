class Post < ApplicationRecord
  validates :image_url, :caption, :author_id, presence: true
  
  belongs_to :user
end