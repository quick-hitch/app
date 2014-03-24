# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Auth::Application.config.secret_key_base = '63e1a5242c220b5b316f7ad4728d1552d93783ca9a959faf4d137cac77a21ce5fab03ed25bb7cb100718c9124cce1636e251c5cd266d0b62ff6a19dbcd10cdb7'
