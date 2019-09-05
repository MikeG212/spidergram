require 'rails_helper'

RSpec.describe User, type: :model do
  #Validations
  #Associations
  #Class Methods
  #Error Messages
  subject(:user) { FactoryBot.build(:user) }


  describe 'validations' do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_uniqueness_of(:username) }
    it { should validate_uniqueness_of(:email) }
  end

  describe 'associations' do
    it { should have_many(:posts) }
    it { should have_many(:comments) }
    it { should have_many(:likes) }
    it {expect(user.avatar).to be_attached}
  end

  # describe 'class methods' do
  #   describe '::find_by_credentials' do
  #     it 'finds the right user based on credentials' do
  #       expect(User.find_by_credentials("test@mail.com", "starwars")).to include(user)
  #     end
  #   end
  # end
end
