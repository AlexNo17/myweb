import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', async (req, res) => {
  const result = await axios.get("https://api.thecatapi.com/v1/images/search");
  console.log(result.data[0].url);
  res.render('index.ejs', {
   cat_img: result.data[0].url,
 });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
