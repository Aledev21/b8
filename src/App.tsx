import coracao1 from './assets/coracao1.svg'
import { Card } from './components/Card'
import { products } from './mock/api'

function App() {
  return (
    <div
      className="
    h-screen 
   flex 
   flex-row
    justify-center
    items-center
    bg-gray-100
    gap-7

    "
    >
      {products.map((item, index) => (
        <Card
          key={`Card_${index}`}
          price={item.price}
          previousPrice={item.previousPrice}
          image={item.image}
          description={item.description}
          priceDescription={item.priceDescription}
        />
      ))}
    </div>
  )
}

export default App
