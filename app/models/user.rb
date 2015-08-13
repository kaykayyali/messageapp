class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  



  def sign_in
    self.signed_in = true
    self.save
  end
  def sign_out
    self.signed_in = false
    self.save
  end
end
