json.extract! post, :id, :caption, :created_at
json.author do
  json.username post.user.username
  json.id post.user_id
end
json.image_url url_for(post.photo)
json.commentIds post.comments.pluck(:id)