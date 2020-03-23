require("dotenv").config();
exports.PIXABAY_API_KEY =
  process.env.REACT_APP_PIXABAY_API_KEY || "test-api-key";
