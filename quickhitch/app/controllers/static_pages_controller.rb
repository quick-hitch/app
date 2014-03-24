class StaticPagesController < ApplicationController
  def home
	@conference = current_user.conferences.build if signed_in?
  end
end
