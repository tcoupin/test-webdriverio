var request = require("request");


module.exports = function(){
  var self = this;
  this.Given(/^a request at "([^"]*)"$/, function (url, callback) {
    self.url = url;
    callback();
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
  this.Then(/^the responce code must be (\d+)$/, function(code,callback){
    var err;
    if (self.response.statusCode != code){
      err="mauvais code:"+self.response.statusCode
    }
    callback(err)
  });

};
  