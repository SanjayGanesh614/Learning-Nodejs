const fs = require("fs");

//Sync..
//fs.writeFileSync("test.txt","Hello World! This is my first file created using Nodejs");


//ASync...
//fs.writeFile("hello.txt","Hi there this is my first async file created using Nodejs",(err)=>{});



//Sync read file... returns data through variable
//const result =fs.readFileSync("hello.txt","utf-8");
//console.log(result);


///ASync read file...  never returns data through variable
fs.readFile("hello.txt","utf-8",(err, result) => {
    if (err) {
        console.log("Error", err);

    }else{
        console.log(result);
    }
})