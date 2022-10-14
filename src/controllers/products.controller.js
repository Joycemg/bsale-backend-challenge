import { Op } from "sequelize";
import { product, category } from "../models/index.js";

export const getProducts = async (req, res) => {
  /* A pattern that is used to exclude the categoryId from the product model and include the category
  model. */
  const patterns = {
    attributes: {
      exclude: ["categoryId"],
    },
    include: [
      {
        model: category,
        required: true,
      },
    ],
  };

  const { search } = req.query;
  try {
    if (search) {
      {
        const productFound = await product.findAll({
          ...patterns,
          where: { name: { [Op.like]: `%${search}%` } },
        });
        return productFound.length > 0
          ? res.status(200).send(productFound)
          : res.status(404).send("no product found :(");
      }
    }

    const products = await product.findAll(patterns);
    res.status(200).send(products);
  } catch (err) {
    res.status(400).send(err);
  }
};
