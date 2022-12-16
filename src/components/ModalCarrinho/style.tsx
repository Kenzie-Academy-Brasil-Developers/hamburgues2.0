import styled from "styled-components";

export  const StyleContainer =styled.div`
   background: rgba(51, 51, 51, 0.5);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding: 0rem 0.625rem;
`
export const StyleAuxi =styled.div`
        width: 100%;
        max-width: 31.25rem;
        min-height: 15.625rem;
        margin-top: 9.375rem;


        background-color: #FFFF;
        /* border: 0.0625rem solid #F5F5F5; */
        border-radius: 0.3125rem;
    
        section{
        width: 100%;
        background: #27AE60;
        border-radius: 0.3125rem 0.3125rem 0rem 0rem;
        height: 3.375rem;
        display: flex;
        justify-content: space-between;
        align-items: center; 

        padding: 0rem 1.25rem;
         h1{
            font-weight: 700;
            font-size: 1.125rem;
            line-height: 1.75rem;
            color: #FFFFFF;
        }
        button{
            font-size: 1.25rem;
            background: #27AE60;
            color: #828282;

            :hover{
                color: red;
            }
        }
    }
    article{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 78%;

        h3{
            font-weight: 700;
            font-size: 1.125rem;
            line-height: 1.5rem;
            color: #333333;
        }
        p{
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 1.5rem;
            color: #828282;
        }
    }
`