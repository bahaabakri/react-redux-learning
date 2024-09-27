import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          productId = '1'
          title='I phone 16'
          price={6}
          description='This is a first product - amazing!'
        />
        <ProductItem
          productId = '2'
          title='Samsung Galaxy S24'
          price={12}
          description='This is a second product - amazing!'
        />
        <ProductItem
          productId = '3'
          title='Huawei P60'
          price={16}
          description='This is a third product - amazing!'
        />
        <ProductItem
          productId = '4'
          title='Samsung A71'
          price={3.5}
          description='This is a fourth product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
