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
end
