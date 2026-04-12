import React from "react";
import { useApi } from "../11_CustomHook/useApi";

const FetchProducts = () => {
  let { dbData, loading, error } = useApi("https://dummyjson.com/products");

  console.log(dbData);

  return (
    <div>
      <h1>FetchProducts</h1>

      {loading ? (
        <p>loading...</p>
      ) : (
        dbData?.products.map((product) => {
          return (
            <div key={product.id}>
              <img src={product.thumbnail} alt="" height={200} width={200} />
              <h3>{product.title}</h3>
            </div>
          );
        })
      )}
    </div>
  );
};

export default FetchProducts;
