import Head from 'next/head'
import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import Layout from './Layout';

export default function ProductLsit() {

    const [data, setData] = useState({})
    const router = useRouter();

    useEffect(() => {
        const options = {
            method: 'POST',
            url: 'http://localhost:3000/api/graphql',
            headers: {
                'content-type': 'application/json'
            },
            data: {
                query: `{
                getProducts {
                            name
                            id
                            productionCapacity
                            description
                            price
                        }
                    }`
            }
        };
        axios
            .request(options)
            .then(function (response) {
                setData(response.data)

            })
            .catch(function (error) {
                console.log("error",error);
            });
    }, [])

    const handleDelete = (id) => {

        var query = `mutation deleteProduct($id: ID! ) {
                deleteProduct(id : $id ) 
             }`;

        fetch('http://localhost:3000/api/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: { id },
            })
        })
    }

    return (
        <Layout>
            <div>
                <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <table className='table table-bordered m-5' style={{width : "90%"}} >
                    <thead className="thead-dark">
                        <tr className=''>
                            <th>Name </th>
                            <th>Capacity</th>
                            <th>Decscription</th>
                        </tr>
                    </thead>
                    {data?.data?.getProducts.map((val) => {
                        return (
                            <>
                                <tr className="my-3">
                                    <td>{val.name}</td>
                                    <td>{val.productionCapacity}</td>
                                    <td>{val.description}</td>
                                    <td><button className='btn btn-info m-2' onClick={() => router.push(`/edit/${val.id}`)}>Edit</button></td>
                                    <td><button className='btn btn-danger text-dark' onClick={() => handleDelete(val.id)}>Delete</button></td>

                                </tr>
                            </>
                        )
                    })}
                </table>
            </div>
        </Layout>
    )
}
