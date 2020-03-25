require("dotenv").config();

// In this instance the "production" api key is the same as the testing one just for
// demontration purposes. In reality one would be just for testing and vice-versa.
exports.PIXABAY_API_KEY =
    process.env.REACT_APP_PIXABAY_API_KEY || "13136421-266c28a6d61717bc2e4e6a83e";
