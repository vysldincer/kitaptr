import React from 'react';
import ReactDOM from "react-dom";
import Highlighter from 'react-highlight-words';

const Sonuclar = (props) => {

    const gelenDizi = props.sonuclar;
    const value = props.value;

    return (


        <div className=" sonuclar bg-gray-100     rounded-xl p-8 mt-3">
            {gelenDizi.length > 0 && gelenDizi.map((item, index) => {

                return (
                    <div key={index} className={" " + (item.sure_yer == 'Mekki' ? 'bg-green-500' : 'bg-indigo-500') + "  w-100 rounded p-2 text-white divide-y divide-white-600 text-md text-center mb-3 "} >
                        <div className="flex divide-x  space-x-4 text-center divide-white-600 ">
                            <div className="w-1/2">{item.sure_adi}</div>
                            <div className="w-1/2">{item.sure_yer}</div>
                        </div>

                        <div className="pt-3">

                            <Highlighter
                                highlightClassName="YourHighlightClass"
                                searchWords={[value]}
                                autoEscape={true}
                                textToHighlight={item.text}
                            />
                        </div>
                    </div>
                )

            })}


        </div >
    )
}


export default Sonuclar
