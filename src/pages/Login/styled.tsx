import styled from "styled-components";

export const StyledMain=styled.main`
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100vh;

        padding: 0px 15px;
        padding-bottom: 15px;
        
`
export const StyledContainer =styled.div`
        width: 100%;
        max-width: 65.625rem;
        height: 100vh;

        flex-direction: column-reverse;
        display: flex;   
        gap: 50px;  

        @media(min-width: 660px) {
            flex-direction: row;
            height: 28.8125rem;
  }
`
export  const StyledSectionDados =styled.section`
        width: 100%;
        max-width: 500px;

        background: var(--color-grey-2);
        border: 0.125rem solid var(--color-grey-1);
        box-shadow: 0rem 0rem 1.875rem -1.25rem rgba(0, 0, 0, 0.25);
        border-radius: 0.3125rem;  
        form{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.25rem;

            padding: 1.5625rem;

            h2{
                font-weight: 700;
                font-size: 1.125rem;
                line-height: 1.5rem;

                width: 100%;

                color: var(--color-grey-4);

            }
            span{
                font-weight: 400;
                font-size: 0.875rem;
                line-height: 1.125rem;

                width: 15.625rem;
                text-align: center;

                color: var(--color-grey-5);
            }
            .buttonLogar{
                background:var(--color-grenn);
                border-radius: 0.5rem;

                width: 100%;
                height: 3.75rem;

                color: var(--color-grey-2);
                font-weight: 600;
                font-size: 1rem;
                line-height: 1.75rem;

                :hover{
                    background-color: #11532e;
                }
            }
        }

`

export  const StyledSectionRender =styled.section`
    width: 100%;
    max-width: 31.25rem;
    display: flex;
    align-items: center;

    div{
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.375rem;

        padding: 0.625rem;

        @media(min-width: 660px) {
            align-items: flex-start;
  }
        
        .icone{
            width: 3.75rem;
            height: 3.75rem;
            padding: 1.25rem;
            background: rgba(39, 174, 96, 0.1);
            border-radius: 0.3125rem;
        }
        .wtf_img{
            width: 11.3225rem;
            height: 4.9375rem;
            display: none;
            @media(min-width: 660px) {
            display: flex;
  }
        }
        img{
            width: 100%;
            max-width: 15.1875rem;
        }

        article{
            display: flex;
            align-items: center;
            gap: 0.9375rem;
            min-height: 5.9375rem;
            width: 100%;
            max-width: 21.875rem;

            padding-left: 0.625rem;

            border: 0.0625rem solid #E0E0E0;
            box-shadow: 0rem 0.25rem 2.5rem -1.25rem rgba(0, 0, 0, 0.25);
            border-radius: 0.3125rem;
            background: #FFFFFF;

            p{
                width: 12.5rem;

                font-weight: 400;
                font-size: 0.875rem;
                line-height: 1.375rem;
                
                text-align: start;
            }
        }
    }
`