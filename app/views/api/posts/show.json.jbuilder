  json.extract! @post, :id, :caption
  json.image_url url_for(@post.photo)