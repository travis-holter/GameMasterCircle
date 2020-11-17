class Question < ApplicationRecord

    validates :title, :body, :author_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User,
        optional: true

    has_many :answers,
        class_name: :Answer,
        foreign_key: :question_id,
        primary_key: :id,
        dependent: :destroy
    
    has_many :upvotes,
        class_name: :Upvote,
        foreign_key: :question_id,
        primary_key: :id,
        dependent: :destroy

    has_many :downvotes,
        class_name: :Downvote,
        foreign_key: :question_id,
        primary_key: :id,
        dependent: :destroy
end
