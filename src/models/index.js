import category from "./category.model.js";
import product from "./product.model.js";

category.hasMany(product);
product.belongsTo(category);

export { product, category };
