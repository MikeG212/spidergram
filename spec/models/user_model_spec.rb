require 'rails_helper'

RSpec.describe User, type: :model do
  #Validations
  #Associations
  #Class Methods
  #Error Messages

  describe 'validations' do
    it 'should validate presence of email'
    it 'should validate presence of username'
    it 'should validate presence of password digest'
    it 'should validate presence of session token'
    it 'should validate uniqueness of email'
    it 'should validate uniqueness of username'
    it 'should validate presence of session token'  
  end

  describe 'associations' do
    it 'should have many posts'
    it 'should have many comments'
    it 'should have many likes'
    it 'should have one attached avatar'
  end

  describe 'class methods' do
    describe '::find_by_credentials' do
      it 'should find a user by email and password'
    end
  end
end
