var system = require('system');
var page = require('webpage').create();
var url = system.args[1] || 'https://soundcloud.com/actionbronson/sets/mr-wonderful-march-24th';
var isButtonPressed = false;
page.onResourceReceived = function(response) {
  if(isButtonPressed)
  {
    if(/\/stream/.test(response.url))
    {
      var url = response.url;
      console.log(response.url);
      phantom.exit();
    }
  }
};
page.open(url, function (status) {
  //Page is loaded!
  console.log('Page is loaded');
  isButtonPressed = true;
  var result = page.evaluate(function()
  {
      document.getElementsByClassName("heroPlayButton")[0].click();
      return "foo";
  });
  console.log('Done: %s', result);
  //phantom.exit();
});
