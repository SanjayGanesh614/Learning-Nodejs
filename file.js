const fs = require("fs");

//Sync..
//fs.writeFileSync("test.txt","Hello World! This is my first file created using Nodejs");


//ASync...
//fs.writeFile("hello.txt","Hi there this is my first async file created using Nodejs",(err)=>{});



//Sync read file... returns data through variable
//const result =fs.readFileSync("hello.txt","utf-8");
//console.log(result);


//get current date and append to file   
fs.appendFileSync("hello.txt", new Date().getDate().toLocaleString());

fs.appendFileSync("hello.txt",'\n New Line added through async\n');

///ASync read file...  never returns data through variable
fs.readFile("hello.txt","utf-8",(err, result) => {
    if (err) {
        console.log("Error", err);
        }else{
            console.log(result);
        }
    })


//fs.copyFileSync("hello.txt","copy.txt");
//fs.unlinkSync("copy.txt");