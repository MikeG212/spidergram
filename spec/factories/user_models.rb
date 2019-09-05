FactoryBot.define do
  factory :user do
    username { "test" }
    email { "test@mail.com" }
    password { "starwars" }
    after(:build) do |user|
      user.avatar.attach(io: File.open(Rails.root.join('spec', 'files', 'images', 'spiderman.jpeg')), filename: 'spiderman.jpeg', content_type: 'image/jpeg')
    end
  end
end