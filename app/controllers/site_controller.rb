class SiteController < ApplicationController
  before_action (:authenticate_user!)
  def index
    render :index
  end
  def view_all
    render :view_all
  end
end
