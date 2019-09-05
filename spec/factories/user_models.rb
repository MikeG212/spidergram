FactoryBot.define do
  factory :user do
    username { "test" }
    email { "test@mail.com" }
    password { "starwars" }
  end
end