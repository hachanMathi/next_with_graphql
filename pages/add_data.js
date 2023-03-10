import Head from 'next/head'
import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react'
import { useRouter } from "next/router"
import Layout from './Layout'

export default function AddData() {

    const [inputValues, setInputValues] = useState({})
    const router = useRouter()

    const handleClick = () => {
        var query = `mutation newProduct($input: ProductInput) {
      newProduct(input: $input) {
        name
        productionCapacity
        price
        description
      }
    }`;

        fetch('http://localhost:3000/api/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: {
                    input: {
                        ...inputValues
                    }
                }
            })
        })
            .then(r => r.json())
            .then(data => {
                router.push("/productList")
            });
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Product Application</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <div >
                    <div className="container h-100 " style={{width : "28%"}}>
                        <div className="h-100 text-center " >
                            <h2 className='pt-2'>Product Details</h2>
                            <h2 className='pt-2'>Add the data to the database</h2>
                            <div className="py-3">
                                <h5>Product Name</h5>
                                <input type="text" id="name" label="Mobile Name" variant="standard" onChange={(e) => setInputValues({ ...inputValues, [e.target.id]: e.target.value })} />
                            </div>
                            <div className="py-3">
                                <h5>Production Capacity</h5>
                                <input type="text" id="productionCapacity" label="Description" variant="standard" onChange={(e) => setInputValues({ ...inputValues, [e.target.id]: Number(e.target.value) })} />
                            </div>
                            <div className="py-3">
                                <h5>Price</h5>
                                <input type="text" id="price" label="Description" variant="standard" onChange={(e) => setInputValues({ ...inputValues, [e.target.id]: Number(e.target.value) })} />
                            </div>
                            <div className="py-3">
                                <h5>Description</h5>
                                <textarea type="text" id="description" label="Description" variant="standard" onChange={(e) => setInputValues({ ...inputValues, [e.target.id]: e.target.value })} />
                            </div>
                            <div>
                                <button className="btn btn-success" onClick={handleClick}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
