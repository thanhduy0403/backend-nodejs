const { getQueryDateTime } = require("../../utils");
const { Product } = require("../../models");

module.exports = {
  //get limit discount
  getdiscount: async (req, res, next) => {
    try {
      const conditionFind = {
        discount: { $gt: 10 },
      };
      const sort = { length: 1 };
      const limit = 8;
      const skip = 1;

      let results = await Product.find(conditionFind)
        .sort(sort)
        .limit(limit)
        .skip(skip);
      let total = await Product.countDocuments();
      return res.send({
        code: 200,
        total,
        count: results.length,
        payload: results,
      });
    } catch (err) {
      return res.status(500).json({ code: 500, error: err });
    }
  },

  // get all discount
  getalldiscount: async (req, res, next) => {
    try {
      const conditionFind = {
        discount: { $gt: 10 },
      };

      let results = await Product.find(conditionFind);
      let total = await Product.countDocuments();
      return res.send({
        code: 200,
        total,
        count: results.length,
        payload: results,
      });
    } catch (err) {
      return res.status(500).json({ code: 500, error: err });
    }
  },
};
