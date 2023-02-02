import Layout from "./Layout";

const Graphql = () => {

    const imageImport = `
    import React from "react"
    import logo from "./logo.png" 

    function Header() {
    return <img src={logo} alt="Logo" />
    }

    export default Header
    `

    const gatsbyImage = `
    query MyQuery {
        allMarkdownRemark {
          nodes {
            frontmatter {
              title
              slug
              thumb {
               childImageSharp {
                   fixed {
                     ...GatsbyImageSharpFixed
                 }
               }
              }
            }
          }
        }
      }
    `

    const exampleImage = `
    import { graphql, Link, useStaticQuery } from "gatsby"
    import React from "react"
    import Img from "gatsby-image"

    const GraphqlDef = () => {

    const queryDef = useStaticQuery(graphql"
    query MyQuery {
        allMarkdownRemark {
        nodes {
            frontmatter {
                        title
                        slug
            thumb {
                childImageSharp {
                    fixed {
                    ...GatsbyImageSharpFixed
                }
                }
            }
            }
        }
        }
    }
    ")

    return (
        <>
            <div>
                <div className="d-flex flex-column w-50">
                    <h3>What is GraphQL?</h3>
                    <p>-GrpahQL is a powerful query language</p>
                    <p>-Allows for a more flexible & efficent approach thatn REST</p>
                    {queryDef.allMarkdownRemark.nodes.map((data) => {
                        console.log("data", data);
                        return (
                            <div className="d-flex gap-3 p-2">
                                <Img fixed={data.frontmatter.thumb.childImageSharp.fixed} />
                                {data.frontmatter.title}
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </>
    )
}
`

    const gatsbyConfigure = `
    module.exports = {
        plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        ],
    }`

    const pluginImage = `
        import { StaticImage } from "gatsby-plugin-image"
            export function Sample() {
            return <StaticImage src="../images/dino.png" alt="A dinosaur" />
        }`

    const relativePath = `
        export const nodeFile = graphql'
        query MyQuery {
            allFile {
                nodes {
                    relativePath
                }
            }
        }
    '
        `

    const getHtmlinMD = `
    export const query = graphql'
    query MyQuery {
    allMarkdownRemark {
        nodes {
            html
                frontmatter {
                    slug
                    title
                }
        }
    }
    site {
        siteMetadata{
            title
        }
    }
    }'`

    return (
        <>
            <Layout>
                <div className="px-5 ">
                    <div className="d-flex flex-column py-3">
                        <h5>Define Gatsby</h5>
                        <ul>
                            <li>
                                <span className="px-3">Gatsby is a React-based open source framework for creating websites.</span>
                            </li>
                            <li>
                                <span className="px-3">It uses powerful preconfiguration to build a website that uses only static files for incredibly fast page loads, service workers, code splitting, server-side rendering, intelligent image loading, asset optimization, and data prefetching</span>
                            </li>
                            <li>
                                <span className="px-3">Gatsby is made to collect your data from wherever it may be: Markdown, JSON, your favorite CMS, third party APIs, anywhere! And at build time, it creates an internal GraphQL server of all of this data. So in your react components, all of your data is queried at build time from that same place, in the same way through GraphQL.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex flex-column py-3">
                        <h5>Define Gatsby</h5>
                        <ul>
                            <li>
                                <span className="px-3">Gatsby has unified data layer that enables developers to easily combine data from different sources and render them alongside each other</span>
                            </li>
                            <li>
                                <span className="px-3">Gatsby combines static-site generation, deferred static generation, and intelligent page rendering to selectively preload the content that matters - give you a blazing fast website that feels incredibly fast and performant.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex flex-column py-3">
                        <h5>What is Static site generator?</h5>
                        <li>
                            <span className="px-3">A static site generator is a software application that creates HTML pages from templates or components and a given content source. Most static site generators, including Gatsby, accept Markdown-formatted text files as a source, although Gatsby is not limited to Markdown.</span>
                        </li>
                        <li>
                            <span className="px-3">Static site generators are an alternative to database-driven content management systems</span>
                        </li>
                    </div>
                    <div className="d-flex flex-column py-3">
                        <h5>What is Deferred Static Generation?</h5>
                        <li>
                            <span className="px-3">Deferred Static Generation (or DSG) is a rendering method that seeks to delay or defer the building of certain pages until run-time.</span>
                        </li>
                        <li>
                            <span className="px-3">Each of the deferred pages is only built a single time once deployed: only when that first user makes the request</span>
                        </li>
                    </div>
                    <div className="d-flex flex-column py-3">
                        <h5>Why we go gatsby ?</h5>
                        <li>
                            <span className="px-3">Speed -- Source content faster. Compile and build faster. Build the fastest websites on the web…faster.</span>
                        </li>
                        <li>
                            <span className="px-3">Scale -- Deploy and host on Content Delivery Networks, delivering content to visitors faster than traditional serve</span>
                        </li>
                        <li>
                            <span className="px-3">Security -- Statically generated sites have less vulnerabilities than traditional websites and monolithic platforms.</span>
                        </li>
                    </div>
                    <div className="d-flex flex-column py-3">
                        <h5>Routing</h5>
                        <ul>
                            <li>
                                <span className="px-3">Gatsby sites so fast is that a lot of the work is done at build time. During that process, Gatsby creates paths to access content, handling routing for you</span>
                            </li>
                            <li>
                                <span className="px-3">The simplest way to create a page is to export a React component from a page located in the src/pages directory. For example, exporting a component from src/pages/about.js will create a route at /about.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex flex-column py-3">
                        <h5>Images</h5>
                        <ul>
                            <li>
                                <span className="px-3">Importting Assets Directly to the files</span>
                            </li>
                            <li>
                                <span className="px-3">There are two major ways to import assets, such as images, fonts, and files, into a Gatsby site. The default path is to import the file directly into a Gatsby template, page, or component. The alternative path, which makes sense for some edge cases, is to use the static folder.</span>
                            </li>
                            <span className="px-3">
                                <h5>Importing assets with webpack</h5>
                                <ul>
                                    <li>
                                        <span className="px-3">import a file right in a JavaScript module</span>
                                    </li>
                                    <pre className="px-3">{imageImport}</pre>
                                    <li>
                                        <span className="px-3">Querying for a File in GraphQL using gatsby-source-filesystem</span>
                                    </li>
                                    <h5></h5>
                                    <pre className="px-3">{gatsbyImage}</pre>
                                    <li>
                                        <span className="px-3"> Example </span>
                                    </li>
                                    <pre className="px-3">{exampleImage}</pre>
                                    <h5 className="px-3">Using the Gatsby Image plugin</h5>
                                    <li>
                                        <span className="px-3">Install the following packages</span>
                                    </li>
                                    <span className="px-3">npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp</span>
                                    <h5 className="px-3 py-3">Add the plugins to your gatsby-config.js:</h5>
                                    <pre>{gatsbyConfigure}</pre>
                                    <h5 className="px-3 py-3">Static images</h5>
                                    <span className="px-3">Add the image to your project.</span>
                                    <span className="px-3">A folder such as src/images is a good choice.</span>
                                    <pre className="px-3">{pluginImage}</pre>
                                    <h5>Get a relative path using query</h5>
                                    <pre className="px-3">{relativePath}</pre>
                                    <h5>Get a query for html code in an md file</h5>
                                    <pre className="px-3">{getHtmlinMD}</pre>
                                </ul>
                            </span>
                        </ul>
                    </div>
                    <div className="d-flex flex-column py-3">
                        <h5>What is Usestaticquery ? </h5>
                        <li>
                            <span className="px-3">It is the hook that takes a Graphql Query and returns the data</span>
                        </li>
                    </div>
                    <div className="d-flex flex-column py-3">
                        <h5>What is the source and transform plugins? </h5>
                        <li>
                            <span className="px-3"><b>Source Plugins </b> To connect your gatsby build process data which is usually is external can sometimes be internal too. Data in gatsby sites can come from anywhere <b>Eg</b> APIs,Database ,CMS,Local files</span>
                        </li>
                        <li>
                            <span className="px-3"><b>Transform Plugins</b>A transform plugins takes an input and transform it wholly or in parts</span>
                        </li>
                        <li>
                            <span className="px-3">It is the hook that takes a Graphql Query and returns the data</span>
                        </li>
                    </div>
                    <div className="d-flex flex-column py-3">
                        <h5>Can you give me some examples of famous websites using Gatsby?</h5>
                        <li>
                            <span className="px-3">React, Airbnb, Twitter, and The New York Times.</span>
                        </li>
                    </div>
                    
                </div>

            </Layout>
        </>
    )
}

export default Graphql;