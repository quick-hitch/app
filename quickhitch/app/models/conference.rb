class Conference < ActiveRecord::Base
	belongs_to :user
	validates :user_id, presence: true
	validates :name, presence: true, length: { maximum: 200 }
	validates :code, presence: true
	default_scope -> { order('created_at DESC') }
end
