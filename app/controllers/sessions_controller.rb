class SessionsController < ApplicationController
    def new
        
    end
 
    def create 
        
        @user = User.find_by(username:params[:sessions][:username])
       
        if @user.authenticate(params[:sessions][:password])
            session[:user_id] = @user.id
           
            redirect_to workouts_path
        else 
            flash[:errors] = @user.error.messages 
            render 'new'
        end
    end

    def destroy 
        self.delte :user_id
    end 
end
