class Follow < ApplicationRecord
    validates :followed_id, :follower_id, presence: true;
    validates :followed_id, uniqueness: {scope: :follower_id}

    belongs_to :follower, foreign_key: 'follower_id', class_name: 'User'
    belongs_to :following, foreign_key: 'followed_id', class_name: 'User'
end
