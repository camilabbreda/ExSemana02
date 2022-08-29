import React, { useState, useEffect, useRef } from 'react';

export default function Exercise08() {
    const files = [{
        id: 1,
        nome: 'Audaces 4D',
        downloaded: 0,
        isDownloading: false
    }, {
        id: 2,
        nome: 'Revit',
        downloaded: 0,
        isDownloading: false
    }, {
        id: 3,
        nome: 'AutoCad',
        downloaded: 0,
        isDownloading: false
    }
    ]


    const [file, setFile] = useState(files)
    const intervalId = useRef();
    const i = 0
    function iniciarDownload(key) {
        intervalId.current = setInterval(() => {
            const newFile = file.map(item => {
                return item.id === key ? { ...item, downloaded: i += 1, isDownloading: true } : item
            })
            setFile(prev => prev = newFile)
        },1000);
    }


    // useEffect(() => {
    //     file.map(item => {
    //         if (item.isDownloading && item.downloaded >= 100) {
    //             clearInterval(intervalId.current)
    //             item.isDownloading = false;
    //             item.downloaded = 0;
    //             console.log(item);
    //         }
    //     })
    //     console.log(file);

    // }, [file])



    return (
        <>
            {file.map((item) => (
                <div style={{ 'display': 'flex', 'flexDirection': 'column', 'maxWidth': '240px', 'margin': '0 auto', 'alignItems': 'center' }}>
                    <h4 key={item.id}>{item.nome} - {item.isDownloading}</h4>
                    <progress key={item.id} value={item.downloaded} min="0" max="100"></progress>
                    <button key={item.id} onClick={() => iniciarDownload(item.id)}>Download</button>
                </div>
            ))}
        </>
    )
}