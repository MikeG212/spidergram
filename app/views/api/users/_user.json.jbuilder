json.extract! user, :id, :username, :email, :bio
json.posts user.posts.pluck(:id)
json.avatar_url url_for(user.avatar)