# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

contact1 = Contact.create!(
  firstname: "Claire", 
  lastname: "Danes", 
  email: "claire@gmail.com", 
  phone: "234-987-4567"
)

contact2 = Contact.create!(
  firstname: "Samuel",
  lastname: "L. Jackson",
  email: "slj@gmail.com",
  phone: "123-456-789"
)

contact3 = Contact.create!(
  firstname: "Julia",
  lastname: "Roberts",
  email: "juliaroberts@gmail.com",
  phone: "987-654-321"
)

contact4 = Contact.create!(
  firstname: "Angelina",
  lastname: "Jolie",
  email: "brangelina@gmail.com",
  phone: "999-888-9177"
)

contact5 = Contact.create!(
  firstname: "Brad",
  lastname: "Pitt",
  email: "brad@gmail.com",
  phone: "888-777-6666"
)

contact6 = Contact.create!(
  firstname: "Sofia",
  lastname: "Vergara",
  email: "sofiav@hotmail.com",
  phone: "654-789-1111"
)

contact7 = Contact.create!(
  firstname: "Bruna",
  lastname: "Lombardi",
  email: "blomb@outlook.com",
  phone: ""
)

contact8 = Contact.create!(
  firstname: "Harrison",
  lastname: "Ford",
  email: "harry@yahoo.com",
  phone: "666-555-4444"
)

contact9 = Contact.create!(
  firstname: "Sandra",
  lastname: "Bullock",
  email: "sandy@gmail.com",
  phone: "333-444-5555"
)

contact10 = Contact.create!(
  firstname: "Jenifer",
  lastname: "Aniston",
  email: "jen@yahoo.com",
  phone: "234-567-9878"
)