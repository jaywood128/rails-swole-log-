class SessionsController < ApplicationController
    def new
        
    end
 
    def create 
        
        
        if auth 
            @user = User.find_or_create_by(uid: auth['uid']) do |u|
                u.name = auth['info']['name']
                u.email = auth['info']['email']
                u.image = auth['info']['image']
                u.password = auth['info']['credentials']

            end
            binding.pry
           
            session[:user_id] = @user.id
            redirect_to workouts_path
        else 
            @user = User.find_by(username:params[:sessions][:email])
        
            if  @user && @user.authenticate(params[:sessions][:password])
                session[:user_id] = @user.id
           
                redirect_to workouts_path
            else
                flash[:errors] = @user.error.messages 
                render 'new'
            end
        end
    end

    def destroy 
        self.delte :user_id
    end 

    private 

    def auth
        request.env["omniauth.auth"]
    end 
end
