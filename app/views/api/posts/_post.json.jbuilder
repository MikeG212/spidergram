json.extract! post, :id, :caption, :created_at
json.author do
  json.id post.user_id
  json.username post.user.username
end
json.image_url url_for(post.photo)
json.commentIds post.comments.pluck(:id)