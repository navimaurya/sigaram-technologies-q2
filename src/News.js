import React, { useEffect } from 'react'


function News() {


    useEffect(()=>{
    Instance.get('apiKey=b290557bb7084fa7b084c4f23a6e2c0a').then((d)=>{
        console.log()
    })
    },[])
    return (
        <div>
            
        </div>
    )
}

export default News
