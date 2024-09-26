import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          productId = '1'
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
        <ProductItem
          productId = '2'
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
        <ProductItem
          productId = '3'
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
        <ProductItem
          productId = '4'
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
