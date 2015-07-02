# Homepage (Root path)
get '/' do
  erb :index
end

get '/api/contacts' do
  content_type 'json'
  @contacts = Contact.all.to_json
end

get '/api/contact/:id' do
  @contact = Contact.find(params[:id]).to_json
end

post '/api/contact' do
  @contact = Contact.new(
    firstname: params[:first_name], 
    lastname: params[:last_name], 
    email: params[:email], 
    phone: params[:phone]
  )
  if @contact.save
    @contact.to_json
  else
    errors.add(:base, "Could not create contact. Please try again.")
  end
end

delete '/api/contact' do
  @contact = Contact.find(params[:id])
  @contact.destroy
end