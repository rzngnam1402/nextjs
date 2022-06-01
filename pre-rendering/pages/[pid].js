import React from 'react'
import path from 'path'
import fs from 'fs/promises'

const ProductDetailPage = (props) => {
    const { loadedProduct } = props;

    return (
        <>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </>
    )
}

export async function getStaticProps(context) {
    const { params } = context;

    const productID = params.pid;

    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    const product = data.products.find(product => product.id === productID)

    return {
        props: {
            loadedProduct: product
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { pid: 'p1' } },

        ],
        fallback: 'blocking'
    }
}

export default ProductDetailPage