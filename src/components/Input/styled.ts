import styled from "styled-components";

export  const StyledInput =styled.div`
    width: 100%;
    height: 3.75rem;

    border: 0.125rem solid var(--color-grey-4);
    border-radius: 0.5rem;
    background: var(--color-grey-2);

    background-color: red;

    position: relative;
    label{
        position: absolute;
        background-color: var(--color-grey-2);
        left: 0.9375rem;
        top: -0.75rem;

        font-weight: 400;
        font-size: 0.75rem;
        line-height: 0.9375rem;
        color: var(--color-grey-5);

        padding: 0.1875rem;
    }
    input{
        width: 100%;
        height: 100%;
        padding-left: 0.9375rem;
    }
    .miINput{
        position: absolute;
        color: red;
        right: 0;
        bottom: -21px;
        text-align: end;
    }
`