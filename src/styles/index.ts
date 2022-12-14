import { createGlobalStyle } from "styled-components";


export  const GlobalStyled = createGlobalStyle`
 *{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
 :root{
  --color-grenn: #27AE60;
  --color-grenn-light:#93D7AF;
  
  --color-grey-1: #F5F5F5;
  --color-grey-2: #E0E0E0;
  --color-grey-3: #828282;
  --color-grey-4: #333333;
  --color-grey-5: #999999;

  --color-sucess :#168821;
  --color-error :#E60000;
 }

 button{
    cursor: pointer;
    border: none;
    border-radius: 8px;
 }
 input{
    
    color: #999999;
    background: #F5F5F5;
    border: 2px solid #F5F5F5;
    border-radius: 8px;
 }

`