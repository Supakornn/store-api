const main = (req, res) => {
  res.json({
    Github: "H3X-T",
    Repo: "https://github.com/H3X-T/store-api",
    Facebook: "Supakorn Ieamgomol",
    Instagram: "supakornigm",
    HowtoUse: {
      "editfile_exmaple.env": "DBURL, PORT",
      showAllProducts: { link: "/storeapi/products", method: "GET" },
      showAvailableProducts: { link: "/storeapi/products/available", method: "GET" },
      filtersProducts: {
        link: "storeapi/products/filter?{query}",
        method: "GET"
      }
    }
  });
};

module.exports = main;
