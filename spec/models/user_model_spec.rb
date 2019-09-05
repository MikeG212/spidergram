require 'rails_helper'

RSpec.describe User, type: :model do
  #Validations
  #Associations
  #Class Methods
  #Error Messages

  # subject(:user) { User.new(username: "test", email: "test@mail.com", password: "starwars")}
  let (:user) { FactoryBot.build(:user) }
  # describe "Upload avatar" do

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

  describe 'class methods' do
    describe '::find_by_credentials' do
      it 'should find a user by email and password'
    end
  end
end
