class ApiController < ApplicationController
  def messages_serve
    messages = Message.all
    messageArray = []
    messages.each do |message|
      newMessage = {
        content: message.content
      }
      messageArray.push(newMessage)
    end
    render json: messageArray, status: 200
  end
  def message_save
    Message.create(content: params[:message])
    render status: 200, json: {response: "Confirmed"}
  end
end
