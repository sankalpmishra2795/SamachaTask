import React, { useEffect, useState } from 'react'
import { getNewsList } from '../../Api/NewsApi'
import { Card } from '../../CommanComponents/Card'
import { Loader } from '../../CommanComponents/Loader'
import { SectionWrapper } from '../../StyledComponents'

export const Section = () => {
const [newsList, setNewsList] = useState([])
const [loading, setLoading] = useState(true)
    useEffect(() => {
        getNewsList().then(res =>{
            if(res && res.data && res.data.articles){
            setLoading(false)
            setNewsList(res.data.articles)
            }
        })
    }, [])



    return (
        <SectionWrapper >
            {loading ? 

              <Loader />
            
            :
             newsList && newsList.length && newsList.map((news, i) => {
                return(
                    news.urlToImage && <Card key={i} imageUrl={news.urlToImage}/>
                )
            })
            }
           
        </SectionWrapper>
    )
}
