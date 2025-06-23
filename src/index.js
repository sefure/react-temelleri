import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

//Bir expretion yardımıyla map methodu kullanark gelen her bir item bilgisini Product komponente dışarıdan gönderdik.
//Ayrıca her bir komponentin birbirinden farklı olduğunu göstermek adına productlara index parametreli key atadık.


//productObj objesini kullanmadan önce props methodud kullandık. Ancak daha sade bir kodlama olması için props metodunu kaldırdık. Props methodu ne işe yarar: 
// Props’lar , bir componentten başka bir componente veri aktarımı yapmamızı sağlar. 
// Props’lar salt okunur (read-only) dir. Değiştirilemezler. Data; ana componentten alt componentlere geçerken alt componentler tarafından herhangi bir değişime uğramaz.

createRoot(document.getElementById('root')).render(
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)


//reportWebVitals();
