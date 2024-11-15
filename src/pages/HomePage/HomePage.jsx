import { useLoaderData } from "react-router-dom";
import Card from "../../components/card/Card";
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

  return (
    <div className={styles.king}>
      {products.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
}
