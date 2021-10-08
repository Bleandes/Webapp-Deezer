const http = require("http");
const https = require("https");
const cors = require("cors");
const express = require("express");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = express();

app.use(cors());

function doRequest(request, response, options) {
  let proxyRequest;

  try {
    proxyRequest = https.request(options);
  } catch (error) {
    response.end(error.message);
    return;
  }

  proxyRequest.on("response", (proxyResponse) => {
    proxyResponse.on("data", (buffer) => {
      response.write(buffer, "binary");
    });
    proxyResponse.on("end", () => {
      response.end();
    });
    response.writeHead(proxyResponse.statusCode || 500, proxyResponse.headers);
  });

  request.on("data", (buffer) => {
    proxyRequest.write(buffer, "binary");
  });

  request.on("end", () => {
    proxyRequest.end();
  });
}

function buildOptions(req) {
  req.headers.host = "api.deezer.com";
  const requestOptions = {
    hostname: "api.deezer.com",
    path: req.url,
    method: req.method,
    headers: req.headers,
  };

  return requestOptions;
}

const serverHTTP = http.createServer(app);

app.all("*", (req, res) => {
  doRequest(req, res, buildOptions(req));
});

serverHTTP.listen(8888, "0.0.0.0", () => {
  console.log("Proxy on 0.0.0.0:8888");
});
