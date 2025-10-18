import ProductsPage from "@/src/app/products/components/ProductsPage"
import Navbar from "@/src/components/usable/navbar"
import Footer from "@/src/components/usable/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <ProductsPage />
      <Footer />
    </>
  )
}
