import React, { useEffect, useState } from 'react'
import { getNewsList } from '../../Api/NewsApi'
import { ExtaCard } from '../../CommanComponents/ExtaCard';
import { Loader } from '../../CommanComponents/Loader';
import { MobileCard } from '../../CommanComponents/MobileCard';
import { SectionMobileWraper } from '../../StyledComponents';

export const SectionMobile = () => {
  const [newsList, setNewsList] = useState([])
  const [currentImg, setCurrentImg] = useState(1);
const [loading, setLoading] = useState(true)

  useEffect(() => {
      getNewsList().then(res =>{
          if(res && res.data && res.data.articles){
            setLoading(false)
          setNewsList(res.data.articles)
          }
      })
  }, [])

      const handleClick = (num) => {
        setCurrentImg(num);
      }
    return (
        < >
        {loading ? 
         <Loader />
        
        :
        <>
          <SectionMobileWraper >
              <ExtaCard className='left-curve-border'  imageUrl={newsList.length ? newsList[currentImg-1].urlToImage : ""} />
              <MobileCard className='border'  imageUrl={newsList.length ? newsList[currentImg].urlToImage : ""} />
              <ExtaCard  imageUrl={newsList.length ? newsList[currentImg+1].urlToImage : ""} />

          </SectionMobileWraper>
          
          <ul>
              {newsList.map((ele, ind) => <li onClick={() => handleClick(ind)} style={{...(ind <= currentImg ? {background: '#61dafb'} : {})}}></li>)}
          </ul>
        </>
         }
         
        </>
    )
}
