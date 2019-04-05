@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :caption, :user_id
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
    json.created_at post.created_at.to_time.to_formatted_s(:long).split(",")[0]
    json.username post.user.username
    json.image_url asset_url(post.image_url)
  end
end