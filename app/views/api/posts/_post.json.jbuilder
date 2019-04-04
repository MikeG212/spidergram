json.extract! post, :id, :caption, :created_at
json.image_url url_for(post.photo)
json.user do
  json.username post.user.username
  json.id post.user_id
end
json.commentIds post.comments.pluck(:id)
post.comments.each do |comment|
    json.comments do
        json.set! comment.id do
            json.partial! 'api/comments/comment', comment: comment
        end
    end
    
    json.authors do
        json.set! comment.user_id do
            json.extract! comment.user, :id, :username
        end
    end
end