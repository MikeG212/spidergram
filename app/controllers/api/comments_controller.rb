class Api::CommentsController < ApplicationController
  def show
    @comment = Comment.find(params[:id])
  end

  def index
    if params.has_key?(:post_id)
      @comments = Comment.where(post_id: params[:post_id])
    else
      @comments = Comment.all
    end

    render json: @comments
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment
    else
      render json: @comment, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  def render_post_show(comment)
    @post = comment.post
    render 'api/posts/show'
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :post_id, :user_id)
  end
end