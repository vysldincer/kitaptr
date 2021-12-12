import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

import BulunanSonuclar from './BulunanSonuclar';
import Sonuclar from './Sonuclar';



const App = () => {

  let [value, setValue] = useState('');
  let [ayetSayisi, setAyetSayisi] = useState('');
  let [kelimeSayi, setKelimeSayi] = useState('');
  let [medeniSayi, setMedeniSayi] = useState('');
  let [mekkiSayi, setMekkiSayi] = useState('');

  let [sonuclar, setSonuclar] = useState({});

  let [varmi, setVarmi] = useState(false);
  let [hataMesaage, setHataMessage] = useState('');



  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();


    axios.post('http://localhost/test/api.php', {
      kelime: value,
    })
      .then(function (response) {
        if (response.data.status === 'success') {
          setVarmi(true);
          setAyetSayisi(response.data.ayetSayi);
          setKelimeSayi(response.data.kelimeSayi);
          setMedeniSayi(response.data.medeniSayi);
          setMekkiSayi(response.data.mekkiSayi);
          setSonuclar(response.data.message);
          setHataMessage('');
        } else {
          setVarmi(false);
          setHataMessage(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }


  return (
    <div className="App  ">

      <div className="container p-4 sm:p-0 sm:mx-auto  h-auto  ">

        <div className="bg-gray-100 rounded-xl p-8 mt-3 text-center text-4xl font-bold">
          <h1>Mekki - Medeni Analiz</h1>
        </div>

        <div className="md:flex   bg-gray-100     md:divide-x  divide-blue-400 text-center  rounded-xl p-8 mt-3">

          <div className=" md:flex-grow  p-3  ">
            <input type="text" className="w-full h-10 p-3 rounded-sm  border" placeholder="Kelime Ara" value={value}
              onChange={handleChange} />
          </div>

          <div className="  p-3  ">
            <button onClick={handleSubmit} className="bg bg-blue-400 w-full h-10 px-9   text-white hover:bg-blue-900 transition duration-500 ease-in-out font-bold"> Arama Yap</button>
          </div>

        </div>

        {varmi &&
          <BulunanSonuclar
            ayetSayisi={ayetSayisi}
            kelimeSayi={kelimeSayi}
            medeniSayi={medeniSayi}
            mekkiSayi={mekkiSayi}
          />
        }

        {varmi &&
          <Sonuclar sonuclar={sonuclar} value={value} />
        }
        {hataMesaage &&
          <div className="bg-red-500 rounded-xl p-8 mt-3 text-center text-3xl text-white">
            <h1>{hataMesaage}</h1>
          </div>
        }

      </div>
    </div>
  );
}



export default App;
