const express = require("express");
const ogs = require("open-graph-scraper");

const app = express();
const port = 3000;

// const requestHandler=(request,response)=>{
//     response.end(JSON.stringify(store));
// }

// const server = http.createServer(requestHandler);
// server.listen(port, err=>{``
//     if (err){ return console.log("badly",err)}
//     console.log("server is listening on:",port)
// })
app.get("/url=:url", (request, response) => {
  console.log(request.params.url);

  ogs(
    { url: request.params.url }, // Settings object first
    (er, res) => {
      response.setHeader("Access-Control-Allow-Origin", "*");
      const resultObject = {
        title: res.ogTitle,
        description: res.ogDescription,
        siteName: res.ogSiteName,
        image: res.ogImage,
        author: res.author,
      };
      response.send(resultObject);
      console.log(resultObject);
    } // Callback
  );
});
app.get("/info/id=:id", (request, response) => {
  const id = request.params.id;
  response.json(store[id]);
});
app.listen(port, (err) => {
  if (err) {
    return console.log("sbh", err);
  }
  console.log("server is listening on : localhost:" + port);
});
