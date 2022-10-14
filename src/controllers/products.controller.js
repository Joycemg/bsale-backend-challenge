import { Op } from 'sequelize';
import { product, category } from '../models/index.js';

/**
 * It gets a product by its ID
 * @returns An array of product
 */
export const getProduct = async (req, res) => {
  const { productByID } = req.params;

  try {
    const oneProduct = await product.findOne({
      attributes: {
        exclude: ['categoryId'],
      },
      where: { productId: productByID },
    });
    return oneProduct
      ? res.status(200).send(oneProduct)
      : res.status(404).send('no product found :(');
  } catch (err) {
    return res.status(400).send(err);
  }
};

/**
 * It gets all the products from the database and sends them to the client
 * @returns The products are being returned.
 */
export const getProducts = async (req, res) => {
  const patterns = {
    /* A pattern that is used to exclude the categoryId from the product model */

    attributes: {
      exclude: ['categoryId'],
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
      const productFound = await product.findAll({
        ...patterns,
        where: { name: { [Op.like]: `%${search}%` } },
      });
      return productFound.length > 0
        ? res.status(200).send(productFound)
        : res.status(404).send('no product found :(');
    }

    const products = await product.findAll(patterns);
    return res.status(200).send(products);
  } catch (err) {
    return res.status(400).send(err);
  }
};
