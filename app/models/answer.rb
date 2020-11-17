class Answer < ApplicationRecord
  validates :body, presence: true

  belongs_to :user,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User,
    optional: true

  belongs_to :question,
    foreign_key: :question_id,
    primary_key: :id,
    class_name: :Question,
    optional: true
    
  has_many :upvotes,
    foreign_key: :answer_id,
    primary_key: :id,
    class_name: :Upvote,
    dependent: :destroy

  has_many :downvotes,
    foreign_key: :answer_id,
    primary_key: :id,
    class_name: :Downvote,
    dependent: :destroy

end