import category from './category.model.js';
import product from './product.model.js';

/* Creating a relationship between the two models. */
category.hasMany(product);
product.belongsTo(category);

export { product, category };
