import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sustainable E-commerce</title>
        <meta name="description" content="Eco-friendly products for a sustainable future" />
      </Head>
      <Header />
      <main className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  )
}

export default Home
