class SessionsController < ApplicationController
    def new
        # nothing to do here!
    end
 
    def create
        binding.pry
        if @user = User.find_by(username: params[:sessions][:username]) && @user.authenticate(params[:sessions][:password_digest])
            session[:username] = params[:username]
        end
        redirect_to '/'
    end
end

