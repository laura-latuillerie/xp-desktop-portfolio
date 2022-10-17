class Project < ApplicationRecord
  validates :title, :category, :description, presence: true
end
