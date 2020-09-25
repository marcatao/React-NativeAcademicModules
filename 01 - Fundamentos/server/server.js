const cors = require("cors");

var http = require("http"),
  app = require("./config/express");

app.use(cors());
http.createServer(app).listen(3030, function() {
  console.log(`Servidor escutando na porta: ${this.address().port}`);
});
