class SessionsController < ApplicationController
    def new
        # nothing to do here!
    end
 
    def create
         
        if @user = User.find_by(username: params[:sessions][:username]) && @user.authenticate(params[:sessions][:password_digest])
            session[:username] = params[:username]
            redirect_to user_path(@user)

        else 
            render :new 
        end
        
    end
end

