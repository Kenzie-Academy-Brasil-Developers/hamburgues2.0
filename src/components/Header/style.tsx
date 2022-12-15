import styled from "styled-components";

export const StyleHeader = styled.header`
    width: 100%;
    min-height: 5rem;
    background-color:  #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    padding-top: 1.25rem;
    padding-bottom: 0.625rem;
    flex-wrap: wrap;
    @media (min-width:400px){  
        flex-wrap: nowrap;
    }

    .divOne{
        width: 100%;
        max-width: 1200px;
        
        display: flex;   
        justify-content: space-between;
        gap: 1.25rem;
     .loganRemove{
         display: none;
         @media (min-width:640px){  
                display: flex;        
    }
     }   

        
    div{
        display: flex;
        background-color:#FFFFFF ;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 22.8125rem;
        height: 3.75rem;
        border: 0.125rem solid #E0E0E0;
        border-radius: 0.5rem;
        padding: 0rem 0.625rem 0rem 0.625rem;
    }
        input{
            background: #FFFFFF;
            border: 0.125rem solid #E0E0E0;
            border-radius: 0.5rem;
            padding-left: 0.625rem;
            border: none;
        }
        button{
            width: 53px;
            height: 40px;
            background: #27AE60;
            border: 2px solid #27AE60;
        }
    }
    article{
        min-height:5rem;
        display: flex;
        padding-left: 25px;
        gap: 25px; 
        div{
            display: flex;
            align-items: center;
            position: relative;
            span{
                background-color: #27AE60;
                width: 15px;
                text-align: center;
                color: white;
                border-radius: 40%;

                position: absolute;
                right: 5px;
                top: 20px;
            }
        }
        img{
            cursor: pointer;
            padding: 10px;
        }
    }
  
`