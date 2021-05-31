const app = require("../app");
const bc = require("../moffen/bc");

const PORT = process.env.PORT || 3000;

bc.then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    }); 
  }).catch((e) => {
    console.log(`Error: ${e.message}`);
  });