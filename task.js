const fs = require("fs");
const readline = require("readline");

const wtf =(name) => {
    fs.writeFile("task.txt",`Hello,${name}`,(error) =>{
        if (error){
            console.log("Error Occured when writting to the file" );
        }
    });
}


const r1 = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

r1.question("What is your name ?",(name) =>{
    r1.close();
    wtf(name);
});