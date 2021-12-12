import React from 'react'

const BulunanSonuclar = (props) => {

    return (
        <div className=" bg-blue-100   text-center  rounded-xl p-4 pb-8 mt-3">

            <div className="  h-12  rounded-md flex items-center justify-center text-blue-500 text-2xl font-extrabold">BULUNAN SONUÇLAR</div>


            <div className="grid  grid-cols-1 gap-2 lg:grid-cols-4 lg:gap-4">

                <div className="bg-blue-200 pl-4 h-10 rounded flex items-center justify-between  text-blue-700 text-md ">
                    Âyet Sayısı : <div className="bg-blue-500 border text-white leading-10 px-2 h-full ">{props.ayetSayisi}</div>
                </div>

                <div className="bg-blue-200 pl-4 h-10 rounded flex items-center justify-between  text-blue-700 text-md ">
                    Mekki Âyet Sayısı : <div className="bg-blue-500 border text-white leading-10 px-2 h-full ">{props.mekkiSayi }</div>
                </div>

                <div className="bg-blue-200 pl-4 h-10 rounded flex items-center justify-between  text-blue-700 text-md ">
                    Medeni Âyet Sayısı : <div className="bg-blue-500 border text-white leading-10 px-2 h-full ">{props.medeniSayi }</div>
                </div>

                <div className="bg-blue-200 pl-4 h-10 rounded flex items-center justify-between  text-blue-700 text-md ">
                    Toplam Sonuç : <div className="bg-blue-500 border text-white leading-10 px-2 h-full ">{props.kelimeSayi }</div>
                </div>

            </div>

        </div>
    )
}


export default BulunanSonuclar
