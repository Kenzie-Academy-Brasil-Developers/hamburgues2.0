import styled from "styled-components";  
 export  const StyleUl = styled.ul `
    width: 100%;
    max-width: 1200px;
    display: flex;
    gap: 56px;
    overflow-y: hidden;
    padding-left: 0.625rem;
    padding-bottom: 0.625rem; 

    article{
        width: 100%;
        text-align: center;
        h1{
            font-size: 2.1875rem;
        }
    }

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
        background: var(--color-grey-1);
        border: 2px solid #E0E0E0;
        border-radius: 0.3125rem;
        img{
            width: 60%;
            height: 9.375rem;
            background: var(--color-grey-1);
            
        }
        div{
            
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
                color: var(--color-grey-4);
            }
            span{
                font-weight: 400;
                font-size: 0.75rem;
                line-height: 1rem;
                color: var(--color-grey-3);
            }
            p{
                font-weight: 600;
                font-size: 0.875rem;
                line-height: 1.5rem;
                color: var(--color-grenn);
            }
            button{
                width: 106px;
                height: 40px;
                color:var(--color-grey-2);
                background: #BDBDBD;

                :hover{
                    background-color:var(--color-grenn);
                }
            }
        }
     }
 `