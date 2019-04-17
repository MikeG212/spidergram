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

johnJonah= User.create!({username: "johnJonah", email: "jj@dailybugle.com", password: "starwars"})
peterParker = User.create!({username: "pParker", email: "peter@dailybugle.com", password: "starwars"})
maryJane = User.create!({username: "maryJane", email: "mj@mail.com", password: "starwars"})
auntMay = User.create!({username: "mayParker", email: "may@mail.com", password: "starwars"})

puts "here"

def attach_photo(post, url)
    image = open(url)
    post.photo.attach(io: image, filename: "temp.jpg")
    post.save!
end


post1 = Post.new({caption: "My Spidey Sense is tingling!", user_id: peterParker.id })
url1 = "https://s3-us-west-1.amazonaws.com/spidergram-dev/images/spiderVerse.jpg";
attach_photo(post1, url1)

post2 = Post.new({caption: "All black everything!", user_id: peterParker.id })
url2 = "https://s3-us-west-1.amazonaws.com/spidergram-dev/images/blackSuit.jpg"
attach_photo(post2, url2)

post3 = Post.new({caption: "Check my new movie", user_id: peterParker.id })
url3 = "https://s3-us-west-1.amazonaws.com/spidergram-dev/images/spidermanMoviePoster.jpg"
attach_photo(post3, url3)