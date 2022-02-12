const fs = require("fs");
// fs.readFile("./awesome.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// // create file
// const niceQuote = "Make everyday little less ordinary";

// fs.writeFile("./sourabh.txt", niceQuote, (err) => {
//   console.log("completed");
// });

//make files

// const niceQuote = "Make everyday little less ordinary";
// const [, , noOfFiles] = process.argv;
// for (let i = 1; i <= noOfFiles; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, niceQuote, (err) => {
//     console.log("completed", i);
//   });
// }

//delete many
fs.readdir("./backup", (err, data) => {
  data.forEach((filename) => {
    fs.unlink(`./backup/${filename}`, (err) => {
      console.log("delete sucessfully");
    });
  });
});
