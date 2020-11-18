# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all

users = User.create!([
    {username: "dagobb", email: "email@email.com", password: 'hunter12'},
    {username: "bearman", email: "dude@dude.com", password: 'potato'},
    {username: "demo", email: "demo@demo.com", password: 'demo12'},
    {username: "nemo", email: "nemo@nemo.com", password: 'nemo12'},
])

questions = Question.create!([
    {title: "Should I let my players have an 'alchemy jug'?", body: "I am worried that they will just use it to make a bunch of mayonaise.", author_id: 1},
    {title: "What should I do with my problem player?", body: "I have this guy who keeps a live chicken in his shirt, I've been thinking about kicking him out. What do my peeps think?", author_id: 2},
    {title: "What question should I ask as a demo user?", body: "I just clicked the green button and now I am in. I have always been currious about D&D, but truthfully I am just someone checking out this website. So far, I think it's pretty rad.", author_id: 3},
    {title: "My name is Nick and I like to ask questions.", body: "I know that wasn't a question, this is just the kind of person I am.", author_id: 2},
    {title: "Can a fish be a GM?", body: "I've wanted to run games since I was caviar, is it ok to GM when you have gills?", author_id: 4},
    {title: "Ok, what does everyone think of my new world?", body: "I call it Mistworld! It was weight-lifting bro-raptors, and it is generally insane. Also my main villiage is named 'Karaoke Villiage', a lot of creativity went into it. ", author_id: 1},
    {title: "Bro, do you even practice voices?", body: "My morning routine involves singing in the mirror. What do you do?", author_id: 2},
    {title: "Can Travis build awesome websites?", body: "Yes, yes he can. I think I will hire him right away :D", author_id: 3},
])

answers = Answer.create!([
    {author_id: 2, question_id: 1, body: "They will definately just make mayonaise, bad idea."},
    {author_id: 1, question_id: 2, body: "Wow, that is an interesting question, and it certainly isn't a real problem I have had to deal with. Maybe just ignore it and hope it goes away!"},
    {author_id: 3, question_id: 6, body: "I am going to hire Travis today!"},
    {author_id: 4, question_id: 3, body: "The real question is, can a fish answer it's own question?"},
    {author_id: 1, question_id: 3, body: "You have taught me much about life, thank you sir."}
])