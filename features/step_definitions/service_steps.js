var request = require("request");
var assert = require("assert");


module.exports = function(){
  var self = this;
  this.Given(/^a request at "([^"]*)"$/, function (url) {
    self.url = url;
  });
  this.When(/^I send the request$/, function (callback) {
    request(self.url,function(err,response,body){
      if (err){
        callback(err);
        return;
      }
      self.response = response;
      self.body = body;
      callback(null);
    })
  });
  this.Then(/^the responce code must be (\d+)$/, function(code){
    assert.equal(self.response.statusCode, code, "mauvais code de réponse");
  });

};
  