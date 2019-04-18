json.extract! user, :id, :username, :email, :bio
json.posts user.posts.pluck(:id)