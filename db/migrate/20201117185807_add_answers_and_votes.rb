class AddAnswersAndVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.integer :author_id, null: false
      t.integer :question_id, null: false
      t.string :body, null: false
      t.timestamps
    end
    add_index :answers, :author_id
    add_index :answers, :question_id
    create_table :upvotes do |t|
      t.integer :user_id, null: false
      t.integer :question_id, null: false
      t.integer :answer_id, :default => 0
      t.timestamps
    end
    add_index :upvotes, [:user_id, :question_id, :answer_id], unique: true
    create_table :downvotes do |t|
      t.integer :user_id, null: false
      t.integer :question_id, null: false
      t.integer :answer_id, :default => 0
      t.timestamps
    end
    add_index :downvotes, [:user_id, :question_id, :answer_id], unique: true
  end
end
