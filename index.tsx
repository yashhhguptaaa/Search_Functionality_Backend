const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// POST API 
// This API is responsible to get company's stock name. It has only one parameter which is keyword.
// Here, We are also doing pagination. It actually fetches all the data from the API and we filter that data according to page Number which is coming from client side. 
app.post(`/search_stock/:pageNumber`, async (req, res) => {
  try {
    let { pageNumber } = req.params;
    pageNumber = parseInt(pageNumber);

    const { keyword } = req.body;
    const response = await axios.get(
      `https://ticker-2e1ica8b9.now.sh/keyword/${keyword}`
    );

    const FlatArray = [].concat(...response.data);

    // Here, the filtering of data done using page number. On every page, it sends 5 or less records.
    let numberOfRecords = [];
    if (FlatArray.length >= 5) {
      numberOfRecords = FlatArray.slice(pageNumber - 1, pageNumber + 4);
    } else {
      numberOfRecords = FlatArray.slice(0, FlatArray.length);
    }

    const returnedResponse = {
      records: numberOfRecords,
      totalRecords: FlatArray.length
    }
    res.send(returnedResponse);
  } catch (error) {
    return res.status(400).json({ message: "Error while fetching records." });
  }
});

//GET API
app.get("/", (req, res) => {
  res.send("Server Working 🔥");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port 🔥 : ${port}`);
});
