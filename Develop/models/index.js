// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, { //cjs
  foreignKey: 'category_id',  //cjs
});   //cjs
// Categories have many Products
Category.hasMany(Products, {   //cjs
  foreignKey: 'category_id',   //cjs
  onDelete: 'CASCADE',   //cjs
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {   //cjs
  through: {   //cjs
    model: ProductTag,   //cjs
  },   //cjs
})   //cjs
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {   //cjs
  through: {   //cjs
    model: ProductTag,   //cjs
  },   //cjs
})    //cjs

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
