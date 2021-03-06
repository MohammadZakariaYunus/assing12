import { useEffect, useState } from "react";

const useProductDetail = productId => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://pacific-savannah-50768.herokuapp.com/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [productId]);
    return [product]
}
export default useProductDetail;