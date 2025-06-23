import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import reportWebVitals from './reportWebVitals';

function App(){
  return (
    <>
      <Header/>
      <ProductList/>
      <Footer/>
    </>
  );
}

function Header(){
  //style bilgisi için obje tanımladık. ayrıyeten tanımlamak yerine h1 etiketine tekrar bir süslü parantez ile de obje tanımlayabiliriz.
  const style = {
    color: "red",
    fontSize: "30px",
    textTransform: "uppercase"
  };
  return <h1 style={ style }>Header</h1>;
}

//Bir expretion yardımıyla map methodu kullanark gelen her bir item bilgisini Product komponente dışarıdan gönderdik.
//Ayrıca her bir komponentin birbirinden farklı olduğunu göstermek adına productlara index parametreli key atadık.
function ProductList(){
  const items = [
    {
      "image": "1.jpg",
      "title": "IPhone 16",
      "description": "Lorem ipsum dolor sit amet.",
      "price": 8000,
      "is_active": true
    },
    {
      "image": "2.jpg",
      "title": "IPhone 17",
      "description": "Lorem ipsum dolor sit amet.",
      "price": 9000,
      "is_active": true
    },
    {
      "image": "3.jpg",
      "title": "IPhone 18",
      "description": "Lorem ipsum dolor sit amet.",
      "price": 10000,
      "is_active": true
    },
    {
      "image": "4.jpg",
      "title": "IPhone 19",
      "description": "Lorem ipsum dolor sit amet.",
      "price": 11000,
      "is_active": true
    }
  ];

  //const items = [];

  return (
    //class js için geçerli jsx de className kullanılr
    <>
      <h2 className='title'>Product List</h2>
      {
        //items listesinin eleman büyüklüğü 0 dan büyükse yani liste üzerinde eleman varsa product listesini ekrana yazdır.
        items.length > 0 ? (
          <div id='product-list'>
            {
              items.map((item, index) => (
                <Product key = {index} productObj = { item }/>
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

//productObj objesini kullanmadan önce props methodud kullandık. Ancak daha sade bir kodlama olması için props metodunu kaldırdık. Props methodu ne işe yarar: 
// Props’lar , bir componentten başka bir componente veri aktarımı yapmamızı sağlar. 
// Props’lar salt okunur (read-only) dir. Değiştirilemezler. Data; ana componentten alt componentlere geçerken alt componentler tarafından herhangi bir değişime uğramaz.
function Product({productObj}){
  //eğer productObj aktif değise hiçbir değer döndürme
  if(!productObj.is_active) return null;

  //f20 classını da price classının üzerine ekledik. Koşula bağlı olarak bir css özelliğini istediğimiz elementle ilişkilendirebiliriz
  return (
    <div>
      <img src= { "/img/" + productObj.image } alt=""/>
      <h2>{ productObj.title }</h2>
      <p>{ productObj.description }</p>
      <span className= { `f20 ${productObj.price < 10000 ? "discount" : "price"}`}>{ productObj.price } TL</span> 
    </div>
  );
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour; //açılış ve kapanış saatine göre açık mı kapalı mı olduğunu koşul koyarak belirledik
  
  return (
    <footer>
      {
        //turner operatörü ile eğer açıksa bunu döner. Eğer kapalıysa diğerini döner. Bunu aynı zmanda and(&&) operatörü ile de yapabiliriz ama sadece true da olacak içeriği döner.
        isOpen ? (
          <p>Akşam {closeHour}'e kadar sipariş verebilirsiniz.</p>
        ):
        (
          <p>Şu an kapalıyız. Açılış saatimiz {openHour}.</p>
        )
      }
    </footer>
  );
}

createRoot(document.getElementById('root')).render(
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)


//reportWebVitals();
