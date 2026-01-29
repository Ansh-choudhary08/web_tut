import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const serverresponse = await fetch('https://fakestoreapi.com/products')
        const data = await serverresponse.json()
        setData(data)
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData() 
  }, []) 

  return (
    <div className=' flex  items-center justify-center flex-wrap' >
      {
        data.map((item) => (
          
            <div key={item.id} className="item-card flex h-[400px] w-[200px] 
          flex-col p-4 m-4 border rounded">
            <h2>{item.title}</h2>
            
            <p>Price: {item.price*80}</p>
            <img src={item.image} alt={item.title} style={{ width: '100px' }} />
            
            <h1>{item.category}</h1>
            <button className=' border-2 bg-amber-300 hover:scale-120 hover:bg-black hover:text-white transition-transform'>Add to cart</button>
          </div>
        ))
      }
    </div>
  )
}
export default App