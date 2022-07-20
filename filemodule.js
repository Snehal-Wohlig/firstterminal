// const fs = require('fs');

// fs.writeFileSync("write.txt","this is first fs file write");

// fs.appendFileSync("write.txt", "  And this file will append :");

//  const data= fs.readFileSync("write.txt","utf-8");
//  console.log(data);

// fs.renameSync("write.txt","ReadWrite.txt");

// fs.unlinkSync("ReadWrite.txt");

// fs.mkdirSync("try");

//fs.rmdirSync("try")


// Asynchronus file system

// fs.mkdir("Async",(error)=>{
//     console.log("make a new diretory")
// });

// fs.writeFile("./Async/async.txt","this is Async file",(error) => {
//     console.log("File is create and add containt")
// });

// fs.readFile("./Async/async.txt","utf-8",(error,data) => {
//     console.log(data);
// });

// fs.rmdirSync("Async",(error)=>{
//     console.log("delete diretory")
// });


// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req,res){
// fs.readFile("1.html",function(error,data){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write(data);
//     return res.end();
// })
// }).listen(4000)

//==============

// const http = require("http");
// const server = http.createServer((req,res)=>{
//     res.end("this is http srever file");
// });

// server.listen(4000,"127.0.0.1", () =>{
//     console.log("listening to the given port ");
// });


