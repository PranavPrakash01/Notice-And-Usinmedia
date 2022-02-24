import usInMediaStyles from '../styles/UsInMedia.module.css'

import { useEffect, useState } from 'react'
import axios from 'axios'




const UsInMedia = () => {

    const [cardData, setCardData] = useState([])

    useEffect(async () => {
        await axios.get('http://localhost:1337/api/scraper')
            .then(res => {
                try{
                    setCardData(res.data.articles)
            
                }catch(err){
                    console.log(err);
                }
               
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className={usInMediaStyles.container}>

            <h1 className={usInMediaStyles.title}>US IN MEDIA</h1>
            <p className={usInMediaStyles.viewAll}>VIEW ALL</p>
            <div className={usInMediaStyles.cardsContainer}>

                {cardData.slice(0, 5).map(e => (

                    <div className={usInMediaStyles.card} key={e.title}>
                        <img className={usInMediaStyles.image} src={e.image} alt="template" />
                        <div className="newsTitleBox" >
                            <h2 className={usInMediaStyles.newsTitle}>{e.title}</h2>
                        </div>
                        <h3 className={usInMediaStyles.newsSource}>{e.source}</h3>
                        <h3 className={usInMediaStyles.publishDate}>{e.time}</h3>
                        <a href={e.link} target="_blank">
                            <button className={usInMediaStyles.button}>READ MORE</button>
                        </a>

                    </div>

                ))}
              
            </div>

        </div>
    )
}

export default UsInMedia
