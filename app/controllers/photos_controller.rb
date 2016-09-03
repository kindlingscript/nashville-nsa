class PhotosController < ApplicationController
  def create
    @user = User.find_by_username(params[:username])
    @user.photo.create(photo_params)
    redirect_to user_path(@user)
  end

  private

  def photo_params
    params.require(:photo).permit(:avatar, :user_id)
  end
end
