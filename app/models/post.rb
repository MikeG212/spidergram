class Post < ApplicationRecord
  validates :image_url, :caption, :user_id, presence: true
  
  belongs_to :user
  has_many :likes

  has_many :likers,
    through: :likes,
    source: :user
  
  has_one_attached :photo
end