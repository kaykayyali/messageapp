class ApiController < ApplicationController

  def messages_serve
    messages = Message.all.order(:id => :DESC)
    messageArray = []
    messages.each do |message|
      newMessage = {
        title: message.title,
        content: message.content
      }
      messageArray.push(newMessage)
    end
    render json: messageArray, status: 200
  end
  def message_save
    Message.create(content: params[:message], title: params[:title])
    render status: 200, json: {response: "Confirmed"}
  end
  def messages_clear
    Message.all.destroy_all
    render status: 200, json: {response: "Confirmed"}
  end

  def user_sign_in
    User.find_by_id(params[:id]).sign_in
    render json: {response: "Completed"}
  end

  def user_sign_out
    User.find_by_id(params[:id]).sign_out
    render json: {response: "Completed"}
  end
  def users_online
    users = fetch_users
    render json: users
  end
end
