import Layout from "./Layout"
import Link from "next/link"

const schema = `
# Products
type Product {
  id: ID
  name: String
  productionCapacity: Int
  price: Float
  description: String
}

input ProductInput {
  name: String!
  productionCapacity: Int!
  price: Float!
  description: String
}

type Query {
  getProducts: [Product]
  getProduct(id: ID!): Product
}

type Mutation {
  newProduct(input: ProductInput): Product
  updateProduct(id: ID!, input: ProductInput): Product
  deleteProduct(id: ID!): String
}
`

const GraphQL = () => {
    return (
        <>
            <Layout>
                <div className="p-5">
                    <ul>
                        <li className="pt-2">
                            <b>What is GraphQL?</b>
                            <ul>
                                <li className="pt-2">GraphQL is a query language invented by Facebook in 2012 that offers a standard interface for data retrieval and modification between the client and the server</li>
                                <li className="pt-2">The client asks for various data from the GraphQL server via queries. The response format is described in the query and defined by the client instead of the server: they are called client‐specified queries.</li>
                                <li className="pt-2">The structure of the data is not hardcoded as in traditional REST APIs - this makes retrieving data from the server more efficient for the client.</li>
                            </ul>
                        </li>
                        <li className="pt-2"><b>What is GraphQL schema?  </b>
                            <ul>
                                <li className="pt-2">Every GraphQL server has two core parts that determine how it works: a schema and resolve functions.</li>
                                <li className="pt-2">The schema is a model of the data that can be fetched through the GraphQL server. It defines what queries clients are allowed to make, what types of data can be fetched from the server, and what the relationships between these types are.</li>
                                <ul>Diffenece between Query and mutation
                                    <li className="pt-2"><b>Query : </b> Queries are used to fetch data from a server</li>
                                    <li className="pt-2"><b>Mutation : </b> Mutations are used to modify or write server-side data</li>
                                    <div className="pt-2"><pre>{schema}</pre></div>
                                </ul>
                            </ul>
                        </li>
                        <li className="pt-2">
                            <b>Is GraphQL a Database Technology?</b>
                            <ul>
                                <li className="pt-2">No. GraphQL is often confused with being a database technology  </li>
                                <li className="pt-2"> GraphQL is a query language for APIs - not databases</li>
                            </ul>
                        </li>
                        <li className="pt-2">
                            <b> Is GraphQL only for React / Javascript Developers?</b>
                            <ul>
                                <li className="pt-2">No. GraphQL is an API technology so it can be used in any context where an API is required.</li>
                                <li className="pt-2">On the backend, a GraphQL server can be implemented in any programming language that can be used to build a web server</li>
                            </ul>
                        </li>
                        <li className="pt-2">
                            <b> Where is GraphQL useful?</b>
                            <ul>
                                <li className="pt-2">GraphQL helps where your client needs a flexible response format to avoid extra queries and/or massive data transformation with the overhead of keeping them in sync.</li>
                                <li className="pt-2">Using a GraphQL server makes it very easy for a client side developer to change the response format without any change on the backend <b><Link href="https://graphql.org/">Learn More</Link></b></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Layout>

        </>
    )
}

export default GraphQL