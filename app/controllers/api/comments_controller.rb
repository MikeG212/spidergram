class Api::CommentsController < ApplicationController
  def show
    @comment = Comment.find(params[:id])
  end

  def index
    if params.has_key?(:post_id) #make this general for post_id or user_id
      @comments = Comment.where(post_id: params[:post_id])
    else
      @comments = Comment.all
    end

    render json: @comments
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

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