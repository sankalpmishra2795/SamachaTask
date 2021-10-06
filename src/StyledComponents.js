import styled from "styled-components";



export const SectionWrapper = styled.div`
    margin:1rem auto;
    width:75vw;
    padding-top: 12px;
    display:flex ;
    flex-wrap: wrap;
    justify-content: space-between ;
`
export const NavLinkContaner = styled.div`
    height:7vh ;
    border-bottom: 1px solid #ccc;
        
`

export const NavLinkContanerWrapper = styled.div`
        margin: auto ;
        padding-top: 12px ;
        width: 75vw ;
        display: flex ;
        justify-content: space-around;
        align-items: center ;

`
export const NavLinkChild = styled.li` 
    list-style: none ;

    @media (max-width: 800px) {
        font-size: 10px;
        }
        @media (max-width: 600px) {
            font-size: 6px;
            }

`

export const CardWrapper = styled.div`
        width:230px;
        height:230px;
        margin-bottom:2rem;
        :hover {
            box-shadow: 0 14px 28px rgba(79 9 120), 0 10px 10px rgba(0,0,0,0.22);
            transition: box-shadow 0.3s ease-in-out;
          }
          @media (max-width: 600px) {
            width:180px;
            }
`

export const HeaderWrapper = styled.div`
    height: 10vh;
    background: rgb(99 9 210);
`
export const HeaderContaner = styled.div`
        margin: auto ;
        padding-top: 12px ;
        width: 75vw ;
        display: flex ;
        justify-content: space-between ;
        align-items: center ;
`

export const HeaderInputBox = styled.input`
    border-radius: 5px ;
    border: none ;
    background: rgb(201 168 243) ;
    outline: none;

`

export const HeaderInputBoxWrapper = styled.div`
    display: flex ;

`




// Mobile_View component

export const HeaderMobileWraper = styled.div`
    height: 15vh ;
    display: flex ;
    justify-content: space-around ;
    align-items: center ;


`

export const NavLinkChildMobile = styled.li` 
    list-style: none ;
`

export const NavMobileWraper = styled.div`
    height: 10vh ;
    display: flex ;
    justify-content: space-around ;
    align-items: center ;


`

export const SectionMobileWraper = styled.div`
    width: 100% ;
    display: flex ;
    justify-content: space-evenly ;


`