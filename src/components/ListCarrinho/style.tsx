import styled from "styled-components";

export const StyleUlCart = styled.ul`
        width: 100%;
        max-height: 430px;

        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 0px 15px;
        padding-top: 25px;
        padding-bottom: 15px;

        overflow: auto;

        li{
            list-style: none;
             width: 100%;    
            section{
                
                width: 100%;
                height: 120px;
                display: flex;
                align-items: center;
                background-color: #F2F2F2;
            }
            footer{
                display: flex;
                gap: 10px;
                align-items: center;
            }

            aside{
                display: flex;
                flex-direction: column;
                gap: 5px;

               h3{  
                    position: relative;
                    top: -15px;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 0px;
                    color: #333333;  
                    
                }

                strong{
                    display: flex;
                    width: 85px;
                    position: relative;
                    top: 25px;
                    justify-content: center;
                    border: 1px solid #afacac;;
                    span{
                        width: 35px;
                        background-color: white;
                        display: flex;
                        justify-content: center;
                        align-items: center;      
                    }
                    .extra{
                        width: 25px;
                        background: #E0E0E0;
                        color: red;
                        border-radius: 10%;
                    }
                    
                   
                }
            }

            img{
                width: 82px;
                height: 80px;
                background: #E0E0E0;
                
            }
        }
        .lixocs{
                    width: 27px;
                    height: 50px;
                    padding: 5px;
                    background-color: #F2F2F2;
                    
                }
        .btnFinis{
            background-color: #F2F2F2;
            padding: 5px;
        }
`
