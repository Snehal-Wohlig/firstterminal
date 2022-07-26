const http = require("http");
const fs = require("fs");
const port=3000;

const server = http.createServer((req,res) => {
    const data= fs.readFileSync(`${__dirname}/json2.json`,"utf-8");
        //console.log(data);
        const objdata = JSON.parse(data);
    if(req.url =="/"){
        res.end("<h1 style='color:red;'><b><i>Hello,Welcome To Our Site</h1>");
    }else if(req.url == "/about"){
        res.end("<h2>><b><i>Hello, Welcome to The About<h2>");
    }else if (req.url =="/contactUs"){
        res.end("<h3><i>Hello,Welcome to The ContactUs</h3>");
    }else if(req.url =="/userapi"){
        res.writeHead(200,{"content-type":"application/json"});
        res.end(objdata[1].title);        
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h5><b>404 Error Page,Page Doesn't Exit</h5>");
    } 
});

server.listen(port,"127.0.0.1", () =>{
    console.log(`listening to the port at ${port}`);
});
