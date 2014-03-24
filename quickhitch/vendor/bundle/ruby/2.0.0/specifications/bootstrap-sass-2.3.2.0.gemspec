# -*- encoding: utf-8 -*-
# stub: bootstrap-sass 2.3.2.0 ruby lib

Gem::Specification.new do |s|
  s.name = "bootstrap-sass"
  s.version = "2.3.2.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Thomas McDonald"]
  s.date = "2013-06-11"
  s.email = "tom@conceptcoding.co.uk"
  s.homepage = "http://github.com/thomas-mcdonald/bootstrap-sass"
  s.licenses = ["Apache 2.0"]
  s.rubygems_version = "2.2.2"
  s.summary = "Twitter's Bootstrap, converted to Sass and ready to drop into Rails or Compass"

  s.installed_by_version = "2.2.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<compass>, [">= 0"])
      s.add_development_dependency(%q<sass-rails>, ["~> 3.2"])
      s.add_runtime_dependency(%q<sass>, ["~> 3.2"])
    else
      s.add_dependency(%q<compass>, [">= 0"])
      s.add_dependency(%q<sass-rails>, ["~> 3.2"])
      s.add_dependency(%q<sass>, ["~> 3.2"])
    end
  else
    s.add_dependency(%q<compass>, [">= 0"])
    s.add_dependency(%q<sass-rails>, ["~> 3.2"])
    s.add_dependency(%q<sass>, ["~> 3.2"])
  end
end
