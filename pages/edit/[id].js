import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios"
import Layout from "../Layout";

const Edit = () => {

  const router = useRouter();
  let id = router.query["id"];
  const [data, setData] = useState({})

  useEffect(() => {
    var query = `
    query getProduct($id : ID! ) {
      getProduct (id : $id ){
                  name
                  id
                  price
                  productionCapacity
                  description
      }
          }`

    fetch(`http://localhost:3000/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          id
        },
      })
    })
      .then(r => r.json())
      .then(data => {
        setData(data.data.getProduct)
      });

  }, [])

  const handleClick = () => {
    var query = `mutation updateProduct($id: ID! , $input: ProductInput) {
            updateProduct(id : $id , input: $input) {
            name
            productionCapacity
            price
            description
          }
        }`;

    fetch(`http://localhost:3000/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          id, input: {
            name: data.name,
            productionCapacity: data.productionCapacity,
            price: data.price,
            description: data.description
          }
        },
      })
    })
      .then(r => r.json())
      .then(data => {
        router.push("/productList")
        console.log('data returned:', data)
      });
  }

  return (
    <>
      <Layout>
        <div className="container h-100" style={{ width: "28%" }}>
          <div className="h-100 text-center ">
            <div className="col-10 col-md-8 col-lg-6">
              <h2 className='pt-2'>Edit the Product Details</h2>
              <div className="py-3">
                <h5>Product Name</h5>
                <input type="text" id="name" label="Mobile Name" variant="standard" defaultValue={data.name} onChange={(e) => setData({ ...data, [e.target.id]: e.target.value })} />
              </div>
              <div className="py-3">
                <h5>Production Capacity</h5>
                <input type="text" id="productionCapacity" label="Description" variant="standard" defaultValue={data.productionCapacity} onChange={(e) => setData({ ...data, [e.target.id]: Number(e.target.value) })} />
              </div>
              <div className="py-3">
                <h5>Price</h5>
                <input type="text" id="price" label="Description" variant="standard" defaultValue={data.price} onChange={(e) => setData({ ...data, [e.target.id]: Number(e.target.value) })} />
              </div>
              <div className="py-3">
                <h5>Description</h5>
                <input type="text" id="description" label="Description" variant="standard" defaultValue={data.description} onChange={(e) => setData({ ...data, [e.target.id]: e.target.value })} />
              </div>
              <div>
                <button className="btn btn-success" onClick={handleClick}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Edit