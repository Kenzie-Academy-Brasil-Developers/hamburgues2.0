import styled from "styled-components";

export  const StyleTotalContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    padding-bottom: 15px;

    div{
        width: 94%;
        display: flex;
       
        align-items: center;
        justify-content: space-between;
        height: 35px;
        padding: 0px 15px;

        border-top: 2px solid  #E0E0E0; 

        span{

            color: blue;
        }
    }
    button{
        width: 80%;
        height: 60px;
        background: #E0E0E0;
        border: 2px solid #E0E0E0;
        border-radius: 8px;

        :hover{
            color: white;
            background: #313030;
        }
    }
`