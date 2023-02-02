import Head from 'next/head'
import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from './Layout'
import Image from "next/image"
import Link from 'next/link'
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Product Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="p-5">
          <h2>Example</h2>
          <ul>
            <li className='pt-2'>This application is based on the products . It just stored the products details in the db</li>
            <li className='pt-2'>In this application , I did CURD opertion</li>
            <li className='pt-2'>
            <li className='pt-2'>Click the button to view the examples <Link href="/add_data"><button className='btn btn-primary m-2'>Example</button></Link></li>
              <b>Tech Stack</b>
              <ul>
                <li className='pt-2'> Front end : Next js</li>
                <li className='pt-2'> CSS Framework: Bootstrap 5 </li>
                <li className='pt-2'> Database : Mongo DB</li>
                <li className='pt-2'> Client server : Apollo </li>
              </ul>
              <li className='pt-2'>
                <b>About NextJS Basic</b>
                <ul>
                  <li className='pt-2'>Next.js is an open-source, lightweight React.js framework that facilitates developers to build static and server-side rendering web applicationsS</li>
                  <li className='pt-2'>It was created by Zeit. Next.js framework is based on React, Webpack, and Babel and allows us to write server-rendered React apps easily</li>
                  <li className='pt-2'> It doesn't require any webpack configuration and only needs npm run dev start building your next feature-filled web application.</li>
                  <li className='pt-2'>It provides a faster and optimized development compilation</li>
                  <li className='pt-2'>There are a few things you need to consider when building modern applications.
                    <ul>
                      <li className='pt-2'>
                        <b>User Interface - </b>how users will consume and interact with your application
                      </li>
                      <li className='pt-2'>
                        <b>Routing - </b>how users navigate between different parts of your application
                      </li>
                      <li className='pt-2'>
                        <b> Data Fetching - </b> where your data lives and how to get it
                      </li>
                      <li className='pt-2'>
                        <b>Rendering - </b>when and where you render static or dynamic content
                      </li>
                      <li className='pt-2'>
                        <b>Integrations - </b>what third-party services you use (CMS, auth, payments, etc) and how you connect to them
                      </li>
                      <li className='pt-2'>
                        <b>Infrastructure - </b>where you deploy, store, and run your application code (Serverless, CDN, Edge, etc)
                      </li>
                      <li className='pt-2'>
                        <b>Performance - </b>how to optimize your application for end-users
                      </li>
                      <li className='pt-2'>
                        <b>Scalability - </b>how your application adapts as your team, data, and traffic grow
                      </li>
                      <li className='pt-2'>
                        <b>Developer Experience - </b>your teams experience building and maintaining your application <b><Link href="https://nextjs.org/" >Learn More</Link></b>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='pt-2'>
                <b>About Bootstrap 5</b>
                <ul>
                  <li className='pt-2'> Bootstrap, the world most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.</li>
                  <li className='pt-2'>Bootstrap 5 is completely free to download and use! <b><Link href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" >Learn More</Link></b></li>
                </ul>
              </li>
            </li>
            <li className='pt-2'>
              <b>Mongo Db</b>
              <ul>
                <li className='pt-2'>Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js</li>
                <li className='pt-2'>It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.</li>
                <li className='pt-2'>MongoDB is a schema-less NoSQL document database</li>
                <li className='pt-2'>It means you can store JSON documents in it, and the structure of these documents can vary as it is not enforced like SQL databases</li>
                <li className='pt-2'>This is one of the advantages of using NoSQL as it speeds up application development and reduces the complexity of deployments <b><Link href="https://mongoosejs.com/" >Learn More</Link></b></li>
              </ul>
            </li>
            <li>
              <b>GraphQl</b>
              <ul>
                <li className='pt-2'>Graphql is a query language for api developed by fb</li>
                <li className='pt-2'>It is the schema of the data in the api and gives clients the power to ask for exactly what they need</li>
                <li className='pt-2'>It could aggregate multiple resources requests into a single query</li>
                <li className='pt-2'>It supports mutation </li>
                <li className='pt-2'>Mutations are graphql way of applying data modifications to resources  <b><Link href="https://graphql.org/" >Learn More</Link></b></li>
              </ul>
            </li>
          </ul>
        </div>
      </Layout>
    </div>
  )
}
