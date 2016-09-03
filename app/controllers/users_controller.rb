class UsersController < ApplicationController
  def show
    @user = User.find_by_username(params[:username])
    @photo = Photo.new
  end
end
