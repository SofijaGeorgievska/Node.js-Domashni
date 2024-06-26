const http = require("http");

//funkcija za delenje na url-to so logika za kalkulator
function handler(req, res) {
  const url = req.url;
  console.log("url", url);

  const [, operacija, numOne, numTwo] = req.url.split("/");

  let result = "";
  switch (operacija) {
    case "sobiranje":
      result = Number(numOne) + Number(numTwo);
      res.end(result.toString());
      break;
    case "razlika":
      result = Number(numOne) - Number(numTwo);
      res.end(result.toString());
      break;
    case "mnozenje":
      result = Number(numOne) * Number(numTwo);
      res.end(result.toString());
      break;
    case "delenje":
      if (numTwo != 0) {
        result = Number(numOne) / Number(numTwo);
        res.end(result.toString());
      } else {
        res.end("You cannot divide with 0!");
      }
      break;
    default:
      res.end("Welcome to calculator app!");
  }
}

//kreiranje server i postavuvanje serverot da slusha na porta
const newServer = http.createServer(handler);
newServer.listen(10000);
