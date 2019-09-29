import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Title from '../components/title'

export default () => (
    <Layout>
        <Title text='About Me' />
        <div>
            <Link to="/">Home</Link> | <Link to="/about">About me</Link>
        </div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla dolor nisl, in imperdiet dui feugiat sed. Sed convallis rhoncus ex, sit amet laoreet quam pulvinar sit amet. Donec faucibus.
        </p>
    </Layout>
)
