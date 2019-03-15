json.extract! post, :id, :caption, :user_id
json.image_url asset_url(post.image.url)