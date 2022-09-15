import React, { useState, useEffect  } from 'react';
import Product from './product'

export default function Products(props) {
  let [details, setDetails] = useState({})

  useEffect(() => {
    async function call() {
      let response = await fetch('http://localhost:8080/products')
      let json = await response.json()
      setDetails(json)
    }

    call()
  }, [])

  return (
    <div className="row">
      {Object.values(details).map(detail => {
        return <Product
                 id={detail.id}
                 name={detail.name}
                 image={detail.image}
                 type={detail.type.name}
                 description={detail.description} />
        })}
    </div>
  )
}
