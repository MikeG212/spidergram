class Like < ApplicationRecord
  validates :user_id, :post_id, presence: true;
  validates :user_id, uniquenss: {scope: :post_id}

  belongs_to :user
  belongs_to :post

  has_one :receiver
    through: :post,
    source: :user
end