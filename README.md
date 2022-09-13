## API Deployed Link:

1. [https://search-functionality-backend.vercel.app/](https://search-functionality-backend.vercel.app/)

2. [https://search-functionality-backend-yashhhguptaaa.vercel.app/](https://search-functionality-backend-yashhhguptaaa.vercel.app/)

3. [https://search-functionality-backend-git-main-yashhhguptaaa.vercel.app/](https://search-functionality-backend-git-main-yashhhguptaaa.vercel.app/)

## API Endpoints

1. **GET REQUEST**
- ENDPOINT : `/`
- BODY : `--`
- DESCRIPTION : `This endpoint is just to check whether the server is running or not.`

2. **POST REQUEST**
- ENDPOINT : `/search_stock/:pageNumber`
- BODY : `keyword :string`
- DESCRIPTION : `This API is responsible for fetching a company's stock data. Here, there is the pagenumber param which is responsible to get particular page data. And on every page, there are 5 or fewer records. In the body, the keyword is responsible to fetch particular data related to that keyword.`



## Open-Source packages / libraries used:

1. [axios](https://www.npmjs.com/package/axios) : I've used axios to call API to fetch data.

2. [cors](https://www.npmjs.com/package/cors) : I've used cors to allow interaction between client and API.

3. [express](https://expressjs.com/) : Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web.

4. [nodemon](https://www.npmjs.com/package/nodemon) : I've used nodemon to automatically restarting the node application when file changes in the directory are detected.