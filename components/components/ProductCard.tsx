import Link from 'next/link'

interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="mt-1">${product.price}</p>
      <Link href={`/product/${product.id}`}>
        <a className="mt-2 inline-block text-blue-500">View Details</a>
      </Link>
    </div>
  )
}

export default ProductCard
