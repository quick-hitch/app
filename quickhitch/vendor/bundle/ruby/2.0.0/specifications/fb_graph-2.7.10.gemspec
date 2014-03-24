# -*- encoding: utf-8 -*-
# stub: fb_graph 2.7.10 ruby lib

Gem::Specification.new do |s|
  s.name = "fb_graph"
  s.version = "2.7.10"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["nov matake"]
  s.date = "2014-01-16"
  s.description = "A full-stack Facebook Graph API wrapper in Ruby."
  s.email = "nov@matake.jp"
  s.extra_rdoc_files = ["LICENSE", "README.rdoc"]
  s.files = ["LICENSE", "README.rdoc"]
  s.homepage = "http://github.com/nov/fb_graph"
  s.rdoc_options = ["--charset=UTF-8"]
  s.rubygems_version = "2.2.2"
  s.summary = "A full-stack Facebook Graph API wrapper in Ruby."

  s.installed_by_version = "2.2.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<httpclient>, [">= 2.2.0.2"])
      s.add_runtime_dependency(%q<rack-oauth2>, [">= 0.14.4"])
      s.add_runtime_dependency(%q<tzinfo>, [">= 0"])
      s.add_runtime_dependency(%q<multi_json>, [">= 1.3"])
      s.add_development_dependency(%q<rake>, [">= 0.8"])
      s.add_development_dependency(%q<cover_me>, [">= 1.2.0"])
      s.add_development_dependency(%q<rspec>, [">= 2"])
      s.add_development_dependency(%q<fb_graph-mock>, [">= 1.0.1"])
      s.add_development_dependency(%q<actionpack>, [">= 3.0.6"])
    else
      s.add_dependency(%q<httpclient>, [">= 2.2.0.2"])
      s.add_dependency(%q<rack-oauth2>, [">= 0.14.4"])
      s.add_dependency(%q<tzinfo>, [">= 0"])
      s.add_dependency(%q<multi_json>, [">= 1.3"])
      s.add_dependency(%q<rake>, [">= 0.8"])
      s.add_dependency(%q<cover_me>, [">= 1.2.0"])
      s.add_dependency(%q<rspec>, [">= 2"])
      s.add_dependency(%q<fb_graph-mock>, [">= 1.0.1"])
      s.add_dependency(%q<actionpack>, [">= 3.0.6"])
    end
  else
    s.add_dependency(%q<httpclient>, [">= 2.2.0.2"])
    s.add_dependency(%q<rack-oauth2>, [">= 0.14.4"])
    s.add_dependency(%q<tzinfo>, [">= 0"])
    s.add_dependency(%q<multi_json>, [">= 1.3"])
    s.add_dependency(%q<rake>, [">= 0.8"])
    s.add_dependency(%q<cover_me>, [">= 1.2.0"])
    s.add_dependency(%q<rspec>, [">= 2"])
    s.add_dependency(%q<fb_graph-mock>, [">= 1.0.1"])
    s.add_dependency(%q<actionpack>, [">= 3.0.6"])
  end
end
