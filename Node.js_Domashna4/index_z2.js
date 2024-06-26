const {
  convertMilesToKm,
  convertCsToF,
  convertLbsToKg,
  convertFttoM,
} = require("./conversion");

const http = require("http");

function handler(req, res) {
  const url = req.url;
  console.log("url", url);

  const [, calculation, value] = req.url.split("/");

  let result = "";
  switch (calculation) {
    case "convertMilesToKm":
      result = convertMilesToKm(10);
      res.end(`${result}`);
      break;
    case "convertCsToF":
      result = convertCsToF(10);
      res.end(`${result}`);
      break;
    case "convertLbsToKg":
      result = convertLbsToKg(10);
      res.end(`${result}`);
      break;
    case "convertFttoM":
      result = convertFttoM(10);
      res.end(`${result}`);
      break;
    default:
      res.end("Imperial to Metric calculations");
  }
}

const newServer = http.createServer(handler);
newServer.listen(10000);
