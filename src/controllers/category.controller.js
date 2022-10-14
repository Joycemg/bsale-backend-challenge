import product from '../models/product.model.js';
import category from '../models/category.model.js';

/**
 * It fetches all the categories from the database and sends them to the client
 * @returns An array of categories
 */
export const getCategories = async (req, res) => {
  try {
    const categories = await category.findAll();
    return res.status(200).send(categories);
  } catch (err) {
    return res.status(400).send(err);
  }
};

/**
 * It finds all products that have a category that matches the categoryByID parameter in the request
 * @param req - the request object
 * @param res - the response object
 * @returns An array of products that match the category ID
 */
export const productsByCategory = async (req, res) => {
  const { categoryByID } = req.params;

  try {
    const products = await product.findAll({
      attributes: {
        exclude: ['categoryId'],
      },
      where: { category: categoryByID },
    });

    return products.length > 0
      ? res.status(200).send(products)
      : res.status(404).send('no products found :(');
  } catch (err) {
    return res.status(400).send(err);
  }
};
