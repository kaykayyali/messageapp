class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  def fetch_users

  users = User.all.where(:signed_in => true).to_json


    return users
  end
end
