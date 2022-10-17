class Project < ApplicationRecord
  validates :title, :category, :description, presence: true
  has_one_attached :photo
end
