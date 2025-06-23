export default function Footer(){
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