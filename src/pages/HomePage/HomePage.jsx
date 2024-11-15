import { useLoaderData } from "react-router-dom";
import Card from "../../components/card/Card";
import PageBtn from "../../components/pageBtn/PageBtn";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  // state
  // const [products, setProducts] = useState([]);

  // var
  const products = useLoaderData();

  // // side effect
  // useEffect(() => {
  //   fetch("https://api.escuelajs.co/api/v1/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  const pages = [1, 2, 3, 4, 5];

  return (
    <>
      <div className={styles.king}>
        <div className={styles.productScontainer}>
          {products.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </div>
        <div className={styles.pageNumbersContainer}>
          {pages.map((_, index) => (
            <PageBtn pageNum={index + 1} />
          ))}
        </div>  
      </div>
    </>
  );
}
