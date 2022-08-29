import {React,useState,useEffect} from 'react'
import Layout from '../Layout/MainLayouts'
import axios from 'axios'
import LoadingIcon from '../components/LoadingIcon';

export default function Carts() {
  const [cart, setCart] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/carts/user/3`)
      .then((response) => {
        console.log("list of shopping cart:", response.data);
        setCart(response.data);
        setIsLoading(false);
      })
      .catch((arr) => {
        console.log(arr);
      });
  }, []);
  if (isLoading) {
    return <LoadingIcon />;
  }

  return (
    <Layout>
    <div>
    {JSON.stringify(cart)}
    </div>
    </Layout>
  )
}
