// const express = require('express');
// const exiftool = require('exiftool');
// const cors = require('cors');


// const app = express();
// app.use(cors());

// app.get('/exifdata', async (req, res) => {
//   try {
//     const filePath = './image.CR3';
//     const data = await exiftool.read(filePath);
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(3001, () => {
//   console.log('Server running on port 3001');
// });
const express = require('express'); 
const exif = require('exiftool');
const fs = require("fs");
const cors = require('cors');


const app = express(); 
app.use(cors());
const PORT = 3001; 


app.get('/', (req, res)=>{ 
	res.status(200); 
	res.send("Welcome to root URL of Server"); 
});
app.get('/exifdata', async (req, res) => {
    fs.readFile('./img2.NEF', function (err, data) {
        if (err)
          throw err;
        else {
          exif.metadata(data, function (err, metadata) {
            if (err)
              throw err;
            else{
               res.json(metadata);
              console.log(metadata);
              //res.send(data);
            }
          });
        }
      });
  });

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 
