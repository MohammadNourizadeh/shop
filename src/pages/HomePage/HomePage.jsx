import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/card/Card";
import PageBtn from "../../components/pageBtn/PageBtn";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  // state
  // const [products, setProducts] = useState([]);
  const [focusedPage, setFocusedPage] = useState(1);

  // var
  const products = useLoaderData();

  // // side effect
  // useEffect(() => {
  //   fetch("https://api.escuelajs.co/api/v1/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  const createPagination = (products) => {
    const pages = [];
    let currentPage = 1;

    products.map((_, index) => {
      if (index % 10 === 0) {
        pages.push(currentPage);
        currentPage++;
      }
    });

    return pages.map((pageNum) => (
      <PageBtn
        pageNum={pageNum}
        key={pageNum}
        onChange={(pageNumber) => {
          setFocusedPage(pageNumber);
        }}
      />
    ));
  };

  return (
    <>
      <div className={styles.king}>
        <div className={styles.productScontainer}>
          {products.map((product, index) => {
            if (index >= focusedPage * 10 - 10 && index < focusedPage * 10) {
              return <Card product={product} key={product.id} />;
            }
          })}
        </div>
        <div className={styles.pageNumbersContainer}>
          {createPagination(products)}
        </div>
      </div>
    </>
  );
}
