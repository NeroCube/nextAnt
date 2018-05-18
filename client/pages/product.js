import React from 'react'

import withApollo from '../src/lib/withApollo'
import Product from '../src/container/product'

const ProductPage = () => <Product />

export default withApollo(ProductPage)
