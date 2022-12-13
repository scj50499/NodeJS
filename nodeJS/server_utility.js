const server = (app) => {
    var serverF = app.listen(8080, function (req, res) {
      var host = serverF.address().address;
      var port = serverF.address().port;
      console.log(host + port);
      return;
    });
  };

  module.exports = { server };