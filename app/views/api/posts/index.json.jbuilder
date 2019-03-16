json.array! @posts do |post|
  json.extract! post, :id, :caption, :user_id
  json.image_url url_for(post.photo)
end