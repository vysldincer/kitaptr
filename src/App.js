import './App.css';

function App() {
  return (
    <div className="App  ">
      <div className="container p-4 sm:p-0 sm:mx-auto  h-auto  ">

        <div className="bg-gray-100 rounded-xl p-8 mt-3 text-center text-4xl font-bold">
          <h1>Mekki - Medeni Analiz</h1>
        </div>

        <div className="md:flex   bg-gray-100     md:divide-x  divide-blue-400 text-center  rounded-xl p-8 mt-3">

          <div className=" md:flex-grow  p-3  ">
            <input type="text" className="w-full h-10 p-3 rounded-sm  border" placeholder="Kelime Ara" />
          </div>


          <div className="   p-3  ">
            <button className="bg bg-blue-400 w-full h-10 px-9   text-white hover:bg-blue-900 transition duration-500 ease-in-out font-bold"> Arama Yap</button>
          </div>


        </div>


        <div className=" bg-blue-100   text-center  rounded-xl p-8 mt-3">

          <div className="  h-12 mb-2 rounded-md flex items-center justify-center text-blue-500 text-2xl font-extrabold">BULUNAN SONUÇLAR</div>


          <div className="grid  grid-cols-1 gap-2 lg:grid-cols-4 lg:gap-4">

            <div className="bg-blue-200 pl-4 h-10 rounded flex items-center justify-between  text-blue-700 text-2xl ">
              Âyet Sayısı : <div className="bg-blue-500 border text-white leading-10 px-2 h-full ">1</div>
            </div>

            <div className="bg-blue-200 pl-4 h-10 rounded flex items-center justify-between  text-blue-700 text-2xl ">
              Mekki Âyet Sayısı : <div className="bg-blue-500 border text-white leading-10 px-2 h-full ">1</div>
            </div>

            <div className="bg-blue-200 pl-4 h-10 rounded flex items-center justify-between  text-blue-700 text-2xl ">
              Medeni Âyet Sayısı : <div className="bg-blue-500 border text-white leading-10 px-2 h-full ">1</div>
            </div>

            <div className="bg-blue-200 pl-4 h-10 rounded flex items-center justify-between  text-blue-700 text-2xl ">
              Toplam Sonuç : <div className="bg-blue-500 border text-white leading-10 px-2 h-full ">1</div>
            </div>

          </div>

        </div>


        <div className=" sonuclar bg-gray-100     rounded-xl p-8 mt-3">

          <div className="bg-green-500 w-100 rounded p-2 text-white divide-y divide-white-600 text-xl text-center mb-3 ">
            <div className="flex divide-x  space-x-4 text-center divide-white-600 ">
              <div className="w-1/2">Fatiha 1 </div>  
              <div className="w-1/2">Mekki</div> 
            </div>
            <div className="pt-3">
            Göklerin ve yerin Hükümdarlığının Allah'a aid olduğunu bilmez misin? Allah'tan başka dost ve yardımcınız yoktur.
            </div>
          </div>

          <div className="bg-green-500 w-100 rounded p-2 text-white divide-y divide-white-600 text-xl text-center mb-3 ">
            <div className="flex divide-x  space-x-4 text-center divide-white-600 ">
              <div className="w-1/2">Fatiha 1 </div>  
              <div className="w-1/2">Mekki</div> 
            </div>
            <div className="pt-3">
            Göklerin ve yerin Hükümdarlığının Allah'a aid olduğunu bilmez misin? Allah'tan başka dost ve yardımcınız yoktur.
            </div>
          </div>

          <div className="bg-green-500 w-100 rounded p-2 text-white divide-y divide-white-600 text-xl text-center mb-3 ">
            <div className="flex divide-x  space-x-4 text-center divide-white-600 ">
              <div className="w-1/2">Fatiha 1 </div>  
              <div className="w-1/2">Mekki</div> 
            </div>
            <div className="pt-3">
            Göklerin ve yerin Hükümdarlığının Allah'a aid olduğunu bilmez misin? Allah'tan başka dost ve yardımcınız yoktur.
            </div>
          </div>

          <div className="bg-indigo-500 w-100 rounded p-2 text-white divide-y divide-white-600 text-xl text-center mb-3 ">
            <div className="flex divide-x  space-x-4 text-center divide-white-600 ">
              <div className="w-1/2">Fatiha 1 </div>  
              <div className="w-1/2">Medeni</div> 
            </div>
            <div className="pt-3">
            Göklerin ve yerin Hükümdarlığının Allah'a aid olduğunu bilmez misin? Allah'tan başka dost ve yardımcınız yoktur.
            </div>
          </div>

          <div className="bg-indigo-500 w-100 rounded p-2 text-white divide-y divide-white-600 text-xl text-center mb-3 ">
            <div className="flex divide-x  space-x-4 text-center divide-white-600 ">
              <div className="w-1/2">Fatiha 1 </div>  
              <div className="w-1/2">Medeni</div> 
            </div>
            <div className="pt-3">
            Göklerin ve yerin Hükümdarlığının Allah'a aid olduğunu bilmez misin? Allah'tan başka dost ve yardımcınız yoktur.
            </div>
          </div>

          

        </div>

      </div>
    </div>
  );
}

export default App;
