const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


app.post(`/search_stock/:pageNumber`, async (req, res) => {
  try {
    let { pageNumber } = req.params;
    pageNumber = parseInt(pageNumber);

    const { keyword } = req.body;
    const response = await axios.get(
      `https://ticker-2e1ica8b9.now.sh/keyword/${keyword}`
    );
    const FlatArray = [].concat(...response.data);
    let numberOfRecords = [];
    if (FlatArray.length >= 5) {
      numberOfRecords = FlatArray.slice(pageNumber - 1, pageNumber + 4);
    } else {
      numberOfRecords = FlatArray.slice(0, FlatArray.length);
    }
    res.send(numberOfRecords);
  } catch (error) {
    return res.status(400).json({ message: "Error while fetching records." });
  }
});

app.get("/", (req, res) => {
  res.send("Server Working 🔥");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port 🔥 : ${port}`);
});
