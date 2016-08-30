class Admin::PostsController < ApplicationController
  before_action :authenticate_user!
  before_action do
    redirect_to :new_user_session_path unless current_user && current_user.admin?
  end

  def index
    @posts = Post.pending.all
  end

  def edit
    @post = Post.find(params[:id])
  end
end
