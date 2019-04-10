json.comment do
  json.partial! '/api/comments/comment', comment: @comment
end

json.username @comment.user.username