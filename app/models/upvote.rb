class Upvote < ApplicationRecord

  validates_uniqueness_of :user_id, :scope => [:question_id, :answer_id]

  belongs_to :user,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: :User,
    optional: true

  belongs_to :answer,
    foreign_key: :answer_id,
    primary_key: :id,
    class_name: :Answer,
    optional: true

  belongs_to :question,
    foreign_key: :question_id,
    primary_key: :id,
    class_name: :Question,
    optional: true

end