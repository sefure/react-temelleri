export default function Product({productObj}){
  //eğer productObj aktif değise hiçbir değer döndürme
  if(!productObj.is_active) return null;

  //f20 classını da price classının üzerine ekledik. Koşula bağlı olarak bir css özelliğini istediğimiz elementle ilişkilendirebiliriz
  return (
    <div className='card shadow-sm'>
      <img className='card-img-top p-2 p-md-3 border-bottom' src= { "/img/" + productObj.image } alt=""/>
      <div className='card-body'>
        <h2 className='card-title'>{ productObj.title }</h2>
        <p className='card-text'>{ productObj.description }</p>
        <span className= 'badge text-bg-success'>{ productObj.price } TL</span> 
      </div>
      
    </div>
  );
}