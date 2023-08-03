// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Label from './Components/Label'
import Basic02 from './Components/Basic02';
import Basic03 from './Components/Basic03';
import { FaShoppingCart, FaPhone} from 'react-icons/fa';
import Product from './Components/Product';
import NavigationBar from './Components/NavigationBar'
import VideoList from './Components/VideoList';
import ListNotable from './Components/ListNotable'
import ProductsList from './Components/ProductsList';
import NavigationsBar from './Components/NavigationsBar';
import ButtonLike from './Components/ButtonLike';



function App() {
  // const [count, setCount] = useState(0)

  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    <>
    {/* basic 01 */}
      {/* <div style={{display: 'flex'}}> */}
      <div>Basic01</div>
        <Label type='' label = "Màu sắc"/>
        <Label type ='border' label = "Đen" />
        <Label type ='border' label = "Hồng"/>
        <Label type ='border' label = "Xanh"/>
      {/* </div> */}
    {/* end basic 01 */}

    {/* basic 02 */}
    <div>Basic02</div>
      <Basic02 />
    {/* end basic 02 */}

    {/* basic 03 */}
    <div>Basic03</div>
    <Basic03 icon = {<FaShoppingCart />} label ='Thêm vào giỏ hàng'/>
    <Basic03 icon ={<FaPhone />} type = 'dark' label ='Gọi tư vấn'/>
    {/* end basic 03 */}

    {/* basic 04 */}
    <div>Basic04</div>
    <Product type = 'sale' thumb='./images/imgBasic04.png' sale = '-25%' label ='Cáp chuyển đổi USB-C sang SD'  price = {1290000} price_sale = {790000} />
    {/* end basic 04 */}
    {/* basic 06 */}
    <div>Basic06</div>
    <NavigationBar />
    {/* end basic 06 */}
    {/* basic 07 */}
    <div>Basic07</div>
    <VideoList />
    {/* end basic 07 */}
     {/* basic 08 */}
    <div>Basic08</div>
    <ListNotable />
    {/* end basic 08 */}
    {/* build NavigationsBar */}
    <div>NavigationsBar</div>
    <NavigationsBar/>
    {/* end build NavigationsBar */}
    {/* ProductList */}
    <div>ProductList</div>
    <ProductsList />
    {/* ProductList */}
    </>
  )
}

export default App
