class FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    @follow.save
    render :show
  end

  def destroy
  end

  private

  def follow_params
    params.require(:follow).permit(:user_id)
  end
end