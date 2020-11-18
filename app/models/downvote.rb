class Downvote < ApplicationRecord
  
  validates_uniqueness_of :user_id, :scope => [:question_id, :answer_id]

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id,
    optional: true

  belongs_to :answer,
    class_name: :Answer,
    foreign_key: :answer_id,
    primary_key: :id,
    optional: true

  belongs_to :question,
    class_name: :Question,
    foreign_key: :question_id,
    primary_key: :id,
    optional: true
end