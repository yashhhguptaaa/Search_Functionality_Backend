const express = require("express");
const axios = require("axios");
// const db= require('./db');
// const Pizza = require('./models/pizzaModel')
// const pizzaRoutes = require('./routes/pizzasRoute');
// const userRoutes = require('./routes/userRoute')
// const orderRoutes = require('./routes/ordersRoute');
// const path = require('path')

const app = express();
app.use(express.json());

// app.use('/api/pizzas',pizzaRoutes);
// app.use('/api/users',userRoutes);
// app.use('/api/orders',orderRoutes);

// if(process.env.NODE_ENV === 'production'){
//     app.use('/',express.static('client/build'))

//     app.get('*' , (req,res) => {

//         res.sendFile(path.resolve(__dirname , 'client/build/index.html'))
//     })
// }

app.get('/', (req, res) => {
    res.send("Server Working 🔥");
});

app.get(`/search_stock/:pageNumber`, async (req, res) => {
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
        res.send(numberOfRecords)
    } catch (error) {
        return res.status(400).json({ message: "Error while fetching records." });
    }
});

const port = process.env.PORT || 8000;
app.listen(port, () => { console.log(`Server running on port 🔥 : ${port}`) });