class SessionsController < ApplicationController
    def new
        
    end
 
    def create 
        @user = User.find_by(username:params[:sessions][:username])
        binding.pry
        return head(:forbidden) unless @user.authenticate(params[:sessions][:password])
        session[:user_id] = @user.id
    end

    def destroy 
        self.delte :user_id
    end 
end
