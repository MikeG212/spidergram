json.array! @posts do |post|
  json.extract! post, :id, :caption
  json.image_url url_for(post.photo)
end