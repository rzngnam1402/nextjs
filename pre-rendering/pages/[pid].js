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

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    return data;
}

export async function getStaticProps(context) {
    const { params } = context;

    const productID = params.pid;

    const data = await getData();

    const product = data.products.find(product => product.id === productID)

    return {
        props: {
            loadedProduct: product
        }
    }
}

export async function getStaticPaths() {
    const data = await getData();

    const ids = data.products.map(product => product.id);

    const pathsWithParams = ids.map(id => ({ params: { pid: id } }))

    return {
        paths: pathsWithParams,
        fallback: false
    }
}

export default ProductDetailPage