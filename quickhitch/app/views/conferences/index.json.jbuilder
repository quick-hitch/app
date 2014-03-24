json.array!(@conferences) do |conference|
  json.extract! conference, :name, :code
  json.url conference_url(conference, format: :json)
end