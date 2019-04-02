json.post do
  json.partial! '/api/posts/post', post: @post
  json.commentIds @post.comments.pluck(:id)
end

@post.comments.includes(:author).each do |comment|
  json.comments do
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end

  json.authors do
    json.set! comment.user.id do
      json.extract! comment.user, :id, :username
    end
  end
end