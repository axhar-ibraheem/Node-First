const fs = require("fs");

function requestHandler(req, res){
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        fs.readFile("message.txt", "utf8", (err, data) => {
          console.log(data);
          res.write("<html>");
          res.write("<head><title>This is my project</title></head>");
          res.write("<body>");
          res.write(`<p>${data}</p>`);
          res.write(
            `<form action="/message"method="POST"><input type="text" name="message"><button>send</button></form>`
          );
          res.write(`</body>`);
          res.write("</html>");
          res.end();
        });
      }
      if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
          console.log(chunk);
          body.push(chunk);
        });
        req.on("end", () => {
          const parsedBody = Buffer.concat(body).toString();
          console.log(parsedBody);
          const message = parsedBody.split("=")[1];
          fs.writeFile("message.txt", message, (err) => {
            res.statusCode = 302;
            res.setHeader("Location", "/");
            res.end();
          });
        });
      }
}

module.exports = requestHandler