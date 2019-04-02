class Api::CommentsController < ApplicationController
  def show
    @comment = Comment.find(params[:id])
  end

  def index
    Comment.where(id: post_id)
  end

  def create
    @comment = Comment.new(comment_params)
    @commer.user_id = current_user.id

    if @comment.save
      render_post_show(@comment)
    else
      render json: @comment, status: :unprocessable_entity
    end
  end

  def render_post_show(comment)
    @post = comment.post
    render 'api/posts/show'
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :post_id)
  end
end