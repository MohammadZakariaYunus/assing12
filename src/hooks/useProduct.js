import { useEffect, useState } from "react";

const useProduct = () => {
    const [product, setProduct] = useState([]);


    useEffect(() => {
        fetch('https://pacific-savannah-50768.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);
    return [product, setProduct]
}

export default useProduct;