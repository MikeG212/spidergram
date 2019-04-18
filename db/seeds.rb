# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Post.destroy_all

def attach_avatar(user, url)
    image = open(url)
    user.avatar.attach(io: image, filename: "temp.jpg")
    user.save!
end

def attach_photo(post, url)
    image = open(url)
    post.photo.attach(io: image, filename: "temp.jpg")
    post.save!
end

johnJonah= User.create!({username: "johnJonah", email: "jj@dailybugle.com", password: "starwars", bio: "Bring me pictures of Spider-man!"})
peterParker = User.create!({username: "pParker", email: "peter@dailybugle.com", password: "starwars", bio: "Hello world!"})
spiderMan = User.create!({username: "spiderMan", email: "spiderMan@mail.com", password: "starwars", bio: "Your friendly neighborhood Spiderman"})
maryJane = User.create!({username: "maryJane", email: "mj@midtown.edu", password: "starwars", bio: "Face it, tiger. You hit the jackpot"})
auntMay = User.create!({username: "mayParker", email: "may@mail.com", password: "starwars"})
uncleBen = User.create!({username: "benParker", email: "ben@mail.com", password: "starwars", bio: "With great power comes great responsibility"})
harryOsborn = User.create!({username: "harryOsborn", email: "harry@oscorp.com", password: "starwars"})
normanOsborn = User.create!({username: "greenGoblin", email: "norman@oscorp.com", password: "starwars"})
flashThompson = User.create!({username: "flashThompson", email: "flash@midtown.edu", password: "starwars"})
milesMorales = User.create!({username: "milesMorales", email: "miles@mail.com", password: "starwars", })
gwenStacy = User.create!({username: "gwenStacy", email: "gwen@midtown.edu", password: "starwars", bio: "What makes it precious is that it ends"})
spiderHam = User.create!({username: "spiderHam", email: "peterporker@mail.com", password: "starwars", bio: "Does what ever a spider-pig can"})
nicholasCage = User.create!({username: "1933PeterParker", email: "nicholascage@nationaltreasure.com", password: "starwars", bio: "I'm going to steal the Declaration of Independence"})
tonyStark = User.create!({username: "tonyStark", email: "ironman@starkindustries.com", password: "starwars", bio: "genius billionaire playboy philanthropist"})
venom = User.create!({username: "venom", email: "eddie@dailybugle.com", password: "starwars", bio: "Inspired an Eminem song"})
prowler = User.create!({username: "uncleEddie", email: "uncleEddie@mail.com", password: "starwars", bio: "*shoulder touch* Hey"})
tomHolland = User.create!({username: "tomHolland", email: "tomHolland@mail.com", password: "starwars", bio: "Mr. Stark, I don't feel so good"})
tobeyMaguire = User.create!({username: "tobeyMaguire", email: "tobeyMaguire@mail.com", password: "starwars", bio: "Please forget about my emo dancing phase"})
andrewGarfield = User.create!({username: "andrewGarfield", email: "andrewGarfield@mail.com", password: "starwars", bio: "Invented Facebook"})
ned = User.create!({username: "nedLeeds", email: "ned@mail.com", password: "starwars", bio: "Guy in the chair"})
deadpool = User.create!({username: "deadpool", email: "deadpool@mail.com", password: "starwars", bio: "Frances!?"})
lego = User.create!({username: "legoSpiderman", email: "legoSpiderman@mail.com", password: "starwars", bio: "Everything is awesome"})

#avatars (plus default avatar)
#posts (15)
post1 = Post.new({caption: "My Spidey Sense is tingling!", user_id: milesMorales.id })
url1 = "https://s3-us-west-1.amazonaws.com/spidergram-dev/images/spiderVerse.jpg";
attach_photo(post1, url1)

post2 = Post.new({caption: "All black everything!", user_id: spiderMan.id })
url2 = "https://s3-us-west-1.amazonaws.com/spidergram-dev/images/blackSuit.jpg"
attach_photo(post2, url2)

post3 = Post.new({caption: "Check out my new movie", user_id: spiderMan.id })
url3 = "https://s3-us-west-1.amazonaws.com/spidergram-dev/images/spidermanMoviePoster.jpg"
attach_photo(post3, url3)

#likes (200)
like1 = Like.create({post_id: post1.id, user_id: peterParker.id})
like2 = Like.create({post_id: post1.id, user_id: spiderMan.id})
like3 = Like.create({post_id: post1.id, user_id: spiderHam.id})
like4 = Like.create({post_id: post1.id, user_id: gwenStacy.id})
like5 = Like.create({post_id: post1.id, user_id: prowler.id})
like6 = Like.create({post_id: post2.id, user_id: peterParker.id})
like7 = Like.create({post_id: post2.id, user_id: spiderMan.id})
like8 = Like.create({post_id: post2.id, user_id: spiderHam.id})
like9 = Like.create({post_id: post2.id, user_id: gwenStacy.id})
like10 = Like.create({post_id: post3.id, user_id: prowler.id})
like11 = Like.create({post_id: post3.id, user_id: peterParker.id})
like12 = Like.create({post_id: post3.id, user_id: spiderMan.id})
like13 = Like.create({post_id: post3.id, user_id: spiderHam.id})
like14 = Like.create({post_id: post3.id, user_id: gwenStacy.id})
like15 = Like.create({post_id: post3.id, user_id: prowler.id})

#comments (20)

comment1 = Comment.create({ post_id: post3.id, user_id: tobeyMaguire.id, body: "Looks awesome :)"})
comment2 = Comment.create({ post_id: post3.id, user_id: deadpool.id, body: "^^You misspelled LAME :)"})
#following

