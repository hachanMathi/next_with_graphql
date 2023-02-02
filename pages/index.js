import Image from "next/image"
import logo from "../public/computer.jpg"
import Link from "next/link"
import Layout from "./Layout"

const Home = () => {
    return (
        <>
            <Layout>
            <div className="backGroundImage">
                <div className="container pt-5 mt-5">
                    <div className="row">
                        <div className="col forComputerImg">
                            <label className="collabration">COLLABRATION</label>
                            <h1>One Software platform</h1>
                            <div className="forComputerImg">
                                <h1 className="forHeading">Learn About</h1>
                                <h1 className="forHeading">NextJs+Graphql+MongoDB</h1>
                            </div>
                            <div className="pt-5">
                                <Link href="/description">
                                    <button className="btn btn-primary" >Learn more</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="forComputerImg">
                                <Image src={logo} alt="computer" width="500px" height="400px" className="opacityImg" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        </>
    )
}

export default Home 