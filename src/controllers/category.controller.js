import product from "../models/product.model.js";
import category from "../models/category.model.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await category.findAll();
    return res.status(200).send(categories);
  } catch (error) {}
};

export const productsByCategory = async (req, res) => {
  const { categoryByID } = req.params;

  try {
    const products = await product.findAll({
      attributes: {
        exclude: ["categoryId"],
      },
      where: { category: categoryByID },
    });

    return products.length > 0
      ? res.status(200).send(products)
      : res.status(404).send("no products found :(");
  } catch (error) {}
};
