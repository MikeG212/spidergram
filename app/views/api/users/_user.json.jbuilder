json.extract! user, :id, :username, :email
json.postIds user.posts.pluck(:id)