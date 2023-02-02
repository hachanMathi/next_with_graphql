import Layout from "./Layout"


const Mongoose = () => {

    const schema = `
    var blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: { type: Date, default: Date.now },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: ‘Comment’ }]
    });
    `

    return (
        <>
            <Layout>
                <ul>
                    <li className="pt-2"><b>What is MongoDB ?</b>
                        <ul>
                            <li className="pt-2">MongoDB is an open-source NoSQL database written in C++ language. It uses JSON-like documents with optional schemas.</li>
                            <li className="pt-2">It provides easy scalability and is a cross-platform, document-oriented database.</li>
                            <li className="pt-2">MongoDB works on the concept of Collection and Document</li>
                        </ul>
                    </li>
                    <li className="pt-2"><b>What is a Document in MongoDB?</b>
                        <ul>
                            <li className="pt-2">A Document in MongoDB is an ordered set of keys with associated values. It is represented by a map, hash, or dictionary. In JavaScript, documents are represented as objects:
                                <div>{`{ "greeting": "Hello world!" }`}</div>
                            </li>
                        </ul>
                    </li>
                    <li className="pt-2"><b>What is a Collection in MongoDB?</b>
                        <ul>
                            <li className="pt-2">A collection in MongoDB is a group of documents. If a document is the MongoDB analog of a row in a relational database, then a collection can be thought of as the analog to a table.
                                <div><pre>{`{"greeting" : "Hello world!", "views": 3}
{"signoff": "Good bye"}`}</pre></div>
                            </li>
                        </ul>
                    </li>
                    <li className="pt-2"><b>What are Databases in MongoDB?</b>
                        <ul>
                            <li className="pt-2">MongoDB groups collections into databases. MongoDB can host several databases, each grouping together collections. Some reserved database names are as follows:
                                <div><p>Admin</p><p>local</p><p>config</p></div>
                            </li>
                        </ul>
                    </li>
                    <li className="pt-2"><b>What is Mongoose?</b>
                        <ul><li className="pt-2">Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.</li></ul></li>
                    <li className="pt-2"><b>Can you give me an example of how you would define a schema in Mongoose?</b>
                        <ul><li className="pt-2">A schema in Mongoose is simply a representation of the structure of your data. For example, if you were creating a schema for a blog post, it might look something like this:
                            <pre>{schema}</pre></li></ul></li>
                    <li className="pt-2"><b>How can we use mongoose models to create, read, update, and delete documents from our database?</b>
                        <ul><li className="pt-2">We can use mongoose models to create, read, update, and delete documents from our database by using the model functions create(), find(), update(), and deleteOne().</li></ul></li>
                </ul>
            </Layout>
        </>
    )
}

export default Mongoose