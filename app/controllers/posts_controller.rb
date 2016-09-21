class PostsController < ApplicationController
  before_action :authenticate_user!, :only => [:new, :create]
  before_action :check_if_admin!, :only => [:update]

  def index
    # @posts = Post.approved.all
    @posts = Post.approved.page params[:page]
  end

  def new
    @post = Post.new
  end

  def create
    @post = current_user.posts.create(post_params)
    redirect_to root_path
  end

  def show
    @post = Post.friendly.find(params[:id])
  end

  def update
    @post = Post.friendly.find(params[:id])
    @post.update_attributes(post_params)
    @post.update(postreview: false)
    redirect_to blog_path
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :postreview, :slug)
  end

  def check_if_admin!
    redirect_to :new_user_session_path unless current_user && current_user.admin?
  end
end
