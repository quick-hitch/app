# -*- encoding: utf-8 -*-
# stub: jbuilder 1.0.2 ruby lib

Gem::Specification.new do |s|
  s.name = "jbuilder"
  s.version = "1.0.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["David Heinemeier Hansson"]
  s.date = "2013-01-11"
  s.email = "david@37signals.com"
  s.rubygems_version = "2.2.2"
  s.summary = "Create JSON structures via a Builder-style DSL"

  s.installed_by_version = "2.2.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<activesupport>, [">= 3.0.0"])
      s.add_development_dependency(%q<rake>, ["~> 10.0.3"])
    else
      s.add_dependency(%q<activesupport>, [">= 3.0.0"])
      s.add_dependency(%q<rake>, ["~> 10.0.3"])
    end
  else
    s.add_dependency(%q<activesupport>, [">= 3.0.0"])
    s.add_dependency(%q<rake>, ["~> 10.0.3"])
  end
end
