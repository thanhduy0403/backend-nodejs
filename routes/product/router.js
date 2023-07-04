const express = require("express");
const router = express.Router();

const { validateSchema } = require("../../utils");
const { getProductSchema, createProductSchema } = require("./validations");
const {
  getProductList,
  getProductAll,
  getProductDetail,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("./controller");

router.route("/getall").get(getProductAll)
router.route("/getlist").get(getProductList)
  

  .post(validateSchema(createProductSchema), createProduct);

router
  .route("/:id")
  .get(validateSchema(getProductSchema), getProductDetail)
  .patch(validateSchema(createProductSchema), updateProduct)
  .delete(validateSchema(getProductSchema), deleteProduct);

module.exports = router;
