import styled from "styled-components";  
 export  const StyleUl = styled.ul `
    width: 100%;
    max-width: 1200px;
    display: flex;
    gap: 56px;
    overflow-y: hidden;
    padding-left: 0.625rem;
    padding-bottom: 0.625rem; 

    @media(min-width:661px){
         flex-direction: row;
         flex-wrap: wrap; 
         justify-content: center;
    }
     li{
        min-width: 18.125rem;
        height: 21.625rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #F5F5F5;
        border: 2px solid #E0E0E0;
        border-radius: 0.3125rem;
        img{
            width: 60%;
            height: 9.375rem;
            background: #F5F5F5;
            
        }
        div{
            background-color: white;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0.9375rem;
            padding: 0.625rem;

            h3{
                font-weight: 700;
                font-size: 1.125rem;
                line-height: 1.5rem;
                color: #333333;
            }
            span{
                font-weight: 400;
                font-size: 0.75rem;
                line-height: 1rem;
                color: #828282;
            }
            p{
                font-weight: 600;
                font-size: 0.875rem;
                line-height: 1.5rem;
                color: var(--color-grenn);
            }
            @media(max-width:600px){
        li{
            background-color: red;
        }
    }
        }
     }
 `