import React, { useState, useEffect, useRef } from 'react';

export default function Exercise07() {
    const files = {
        nome: 'Audaces 4D',
        downloaded: 0,
        isDownloading: false
    }

    const [file, setFile] = useState(files)
    const intervalId = useRef();

function iniciarDownload(){
    intervalId.current = setInterval(()=>{
        setFile(prev => ({
            ...prev,
            isDownloading:true,
            downloaded:prev.downloaded +=1
        }))
    },50);
}

useEffect(()=>{
    if(file.isDownloading && file.downloaded >= 100){
        clearInterval(intervalId.current)
        setFile( prev => ({
            ...prev,
            downloaded:0,
            isDownloading: false
        }))
    }

},[file])


    return (
        <>
            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'maxWidth': '240px', 'margin': '0 auto', 'alignItems': 'center' }}>
                <h4>{file.nome} - {file.isDownloading}</h4>
                <progress value={file.downloaded} min="0" max="100"></progress>
                <button onClick={iniciarDownload}>Download</button>
            </div>
        </>
    )
}