import Image from 'next/image'
import Hero from './componants/view/Hero/Hero'
import ProductsType from '@/app/componants/view/ProductsTypes/ProductsType'

// import ProductthruApi from './componants/view/ProductThruApi'

async function fetchalldata() {
//  let res = await fetch(`${Base_Api}/Api/product`)
//  if(!res.ok){
//   throw new Error("Failed to fetch data")
//  }
//  return res.json()
  return {response : "hi"}
}
export default async function Home() {
  // let {response} = await fetchalldata()
 
  return (
    <>
      <Hero/>
      <ProductsType/>
      {/* <ProductthruApi productData ={response}/> */}
    </>
    )
}
