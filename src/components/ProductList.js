import { items } from "../data";
import Product from "./Product";

export default function ProductList(){
  return (
    //class js için geçerli jsx de className kullanılr
    <>
      {
        //items listesinin eleman büyüklüğü 0 dan büyükse yani liste üzerinde eleman varsa product listesini ekrana yazdır.
        items.length > 0 ? (
          <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4' id='product-list'>
            {
              items.map((item, index) => (
                <div className='col' key = {index}>
                  <Product productObj = { item }/>
                </div>
              )) 
            }  
          </div>
        ) : (
          <p>Şu anda satışta olan ürünümüz yok.</p>
        )
        
      }
      
    </>
  );
}