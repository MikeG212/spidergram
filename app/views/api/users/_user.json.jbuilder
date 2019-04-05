json.extract! user, :id, :username, :email

json.posts do
  user.posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :caption, :user_id, :user
      json.image_url url_for(post.photo)
      json.created_at post.created_at.to_time.to_formatted_s(:long).split(",")[0]
      json.comments post.comments
    end
  end
end