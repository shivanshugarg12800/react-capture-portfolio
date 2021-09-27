import { createGlobalStyle } from "styled-components";
/* 1. with the styled components we can add styling to the different elements of the jsx be it 
   any div, img, button inside the js file only using the syntax
                const StyledComponentName = styled.<element> `
                
                `;

    2. or we can also make a global style file like this and include all the css in a component

    3. If we want to use a pre-written styles of any component
        const styledComponentName = styled( componentName whose styles you want to use) `
        
        
        `;


*/
const GlobalStyled = createGlobalStyle`

*{
    padding : 0;
    margin: 0;
    box-sizing: border-box;
}
body{
  background: #1b1b1b;
  font-family: 'Inter', sans-serif;
}
button{
    font-weight: bold;
    font-size:1.1rem;
    padding : 1rem 2rem;
    cursor: pointer;
    border : 3px solid #23d997;
    background: transparent;
    color: white;
    font-family: 'Inter', sans-serif;
    transition : all 0.3s ease;
    &:hover{
        background-color: #23d997;
        color: white;
    }
}
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight:bold;
    }
    a{
        font-size:1.1rem;
    }
    span{
        font-weight:bold;
        color:#23d997;
    }
    p{
        padding : 3rem 0rem;
        color: #ccc;
        line-height: 150%;
    }
`;
export default GlobalStyled;
