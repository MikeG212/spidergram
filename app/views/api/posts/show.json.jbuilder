json.extract! @post, :id, :caption,
json.created_at @post.created_at.to_time.to_formatted_s(:long).split(",")[0]
json.image_url asset_url(@post.photo)
json.username @post.user.username
json.liker_ids @post.likes.pluck(:id)

json.comments do
    @post.comments.each do |comment|
      json.set! comment.id do
        json.id comment.id
        json.username comment.user.username
        json.body comment.body
        json.image_id comment.image_id
        json.user_id comment.user_id
      end
    end
end
