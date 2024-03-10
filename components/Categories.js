import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ProductCard from "./ProductCard"

export default function Categories({ category }) {
  const productsQuery = useStaticQuery(graphql`
    query categories {
      dataJson(products: { elemMatch: { topDeals: { eq: false } } }) {
        products {
          categories
          featured
          href
          id
          imageAlt
          name
          price
          topDeals
          imageSrc {
            childImageSharp {
              gatsbyImageData(
                width: 500
                blurredOptions: { width: 50 }
                transformOptions: { cropFocus: CENTER }
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `)
  const products = productsQuery.dataJson.products
  return (
    <div className="bg-white">
      <div>
        <h2 className="flex bg-primary text-2xl font-bold tracking-tight text-white px-6 py-2 rounded-t-lg">
          {title}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
