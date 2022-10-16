import React, { useState, useEffect } from "react";
import Header from "./Header"
import Footer from "./Footer";
function App() {
    const [apiData, setApiData] = useState()
    const apiReq = async () => {
        const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=ATGpzLCrcPpYTelK5cCbAPdp8M7WJLC4bi3Wv9RI')
        const data = await res.json()
        setApiData(data)
    }

    useEffect(() => {
        apiReq()
    }, [])

    // if (apiData) {
    //     console.log(apiData)
    // }
    return (
        <div className="bg-slate-700 min-h-screen">
            <h1 className="not-italic text-4xl text-red-600 font-bold text-center">Explore Our</h1>
            <h1 className="text-4xl text-blue-700 pt-1 font-bold text-center">UniVerse</h1>
            <h1 className="text-center font-sans text-2xl font-bold text-slate-100 pt-8">Today's Picture Of Astronomy</h1>
            <p className="text-slate-100 text-center pt-3">Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
            <Header />
            {apiData ?
                <div>
                <p className="text-center text-white font-bold text-2xl">{apiData.title}</p>
                <p className="text-center text-white font-bold">{apiData.date}</p>
                <div className="flex justify-center">
                <img className="pt-4" src={apiData.url}></img>
                </div>
                <p className="text-white text-xl font-semibold p-4">{apiData.explanation}</p>
                </div>
                : <></>}
                <Footer />
        </div>
    );
}
export default App;