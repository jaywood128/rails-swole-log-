require 'securerandom'
class SessionsController < ApplicationController
    def new
        @user = User.new
    end
 
    def create 
        
        
        if auth 
            @user = User.find_or_create_by(uid: auth['uid']) do |u|
                u.name = auth['info']['name']
                u.email = auth['info']['email']
                u.image = auth['info']['image']
                u.password = SecureRandom.base64(15)
                
            end
           
            session[:user_id] = @user.id
            redirect_to workouts_path
        else 
           
            @user = User.find_by(email:params[:sessions][:email])
           
            if  @user && @user.authenticate(params[:sessions][:password])
                session[:user_id] = @user.id
                redirect_to workouts_path
            else
                render 'new'
            end
        end
    end

    def destroy 
        log_out
        redirect_to login_path
    end 

    private 

    def auth
        request.env["omniauth.auth"]
    end 
end
