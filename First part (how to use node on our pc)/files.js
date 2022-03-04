const fs = require('fs');


// reding files:
fs.readFile(('./docs/blog1.txt'), (err, data) => {
   if (err) {
      console.log(err)
   }
   console.log(data.toString());
});

console.log('last line');


// writing files:
fs.writeFile('./docs/blog1.txt', 'Hello there mate!', () => {
   console.log('File was writien');
});

fs.writeFile('./docs/blog2.txt', 'This is blog 2!', () => {
   console.log('File was writien');
});


// directories
if (!fs.existsSync('./assets')) {
   fs.mkdir('./assets', (err) => {
      if (err) {
         console.log(err);
      }
      console.log('Folder was created');
   })
} else {
   // remove the files
   fs.rmdir('./assets', (err) => {
      if (err) {
         console.log(err);
      }
      console.log('folder deleted!');
   })
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
   fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
       console.log(err);
    }
    console.log('file deleted');
   })
}

