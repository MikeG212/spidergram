json.extract! post, :id, :caption
json.created_at post.created_at.to_time.to_formatted_s(:long).split(",")[0]
json.image_url url_for(post.photo)
json.username post.user.username
json.user_id post.user.id
json.avatar_url url_for(post.user.avatar)
json.likers post.likers.pluck(:id)
json.commentIds post.comments.pluck(:id)

json.comments do
    post.comments.each do |comment|
      json.set! comment.id do
        json.id comment.id
        json.username comment.user.username
        json.body comment.body
        json.post_id comment.post_id
        json.user_id comment.user_id
      end
    end
end