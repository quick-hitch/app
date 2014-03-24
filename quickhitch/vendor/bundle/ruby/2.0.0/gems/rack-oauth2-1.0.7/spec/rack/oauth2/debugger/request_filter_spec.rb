require 'spec_helper'

describe Rack::OAuth2::Debugger::RequestFilter do
  let(:resource_endpoint) { 'https://example.com/resources' }
  let(:request) { HTTP::Message.new_request(:get, URI.parse(resource_endpoint)) }
  let(:response) { HTTP::Message.new_response(MultiJson.dump({:hello => 'world'})) }
  let(:request_filter) { Rack::OAuth2::Debugger::RequestFilter.new }

  describe '#filter_request' do
    it 'should log request' do
      [
        "======= [Rack::OAuth2] HTTP REQUEST STARTED =======",
        request.dump
      ].each do |output|
        Rack::OAuth2.logger.should_receive(:info).with output
      end
      request_filter.filter_request(request)
    end
  end

  describe '#filter_response' do
    it 'should log response' do
      [
        "--------------------------------------------------",
        response.dump,
        "======= [Rack::OAuth2] HTTP REQUEST FINISHED ======="
      ].each do |output|
        Rack::OAuth2.logger.should_receive(:info).with output
      end
      request_filter.filter_response(request, response)
    end
  end
end