import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link href="/">
          <a>Sustainable E-commerce</a>
        </Link>
      </h1>
      <nav>
        <Link href="/cart">
          <a>Cart</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
