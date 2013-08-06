require_relative 'spec_helper'
require_relative '../bank'

describe Bank do
  let(:bank) {Bank.new('JP Morgan')}

  describe ".new" do
    it "creates a Bank object" do
      expect(bank).to_not eq nil
    end
    it "has no accounts" do
      expect(bank.accounts.count).to eq 0
    end
  end

  describe "#name" do
    it "has a name" do
      expect(bank.name).to eq 'JP Morgan'
    end
  end

  describe "#create_account" do
    it "creates an account" do
      bank.create_account('Homer Simpson',1000)
      expect(bank.accounts['Homer Simpson']).to eq 1000
      expect(bank.accounts.count).to eq 1
    end
  end

  describe "#deposit" do
    it "deposits money" do
      bank.create_account('Homer Simpson',1000)
      bank.deposit('Homer Simpson', 500)
      expect(bank.accounts['Homer Simpson']).to eq 1500
    end
  end

  describe "#withdraw" do
    it "withdraws money" do
      bank.create_account('Homer Simpson',1000)
      bank.withdraw('Homer Simpson', 500)
      expect(bank.accounts['Homer Simpson']).to eq 500
    end
  end

  describe "#balance" do
    it "shows balance" do
      bank.create_account('Homer Simpson',1000)
      expect(bank.accounts["Homer Simpson"]).to eq 1000
    end
  end

end