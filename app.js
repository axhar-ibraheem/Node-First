const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if(req.url === "/home"){
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>This is my project</title></head>");
    res.write("<body><h1>Welcome to Home</h1></body>");
    res.end();
  }else if(req.url === '/about'){
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>This is my project</title></head>");
    res.write("<body><h1>Welcome to about us Page</h1></body>");
    res.end();
  }else if(req.url === "/node"){
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>This is my project</title></head>");
    res.write("<body><h1>Welcome to my node js project</h1></body>");
    res.end();
  }else{
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>This is my project</title></head>");
    res.write("<body><h1>Hello to my node js Project</h1></body>");
    res.end();
  }
 
});

server.listen(PORT, () => {
  console.log("Mohammad Azhar");
});

// const req = http.get("https://www.google.com", (res) => {
//   res.on("data", (chunk) => {
//     console.log(chunk);
//   });
//   res.on("end", () => {
//     console.log("No more data");
//   });
// });
