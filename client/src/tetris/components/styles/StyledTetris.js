import styled from "styled-components";

import bkImage from '../../img/BK.png';

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bkImage});
    background-size: cover;
    overflow: hidden;
`

export const StyledTetris = styled.div`
    display: flex;
    aligh-item: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;

    aside{
        width: 100%;
        max-width: 200px;
        display: blovk;
        padding: 0 20px;
    }
`
