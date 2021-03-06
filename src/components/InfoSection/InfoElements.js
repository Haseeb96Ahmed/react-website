import styled from 'styled-components'

export const InfoContainer = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? 'linear-gradient(314deg, #d9edee, transparent)' : 'linear-gradient(0deg, #010606, #000000eb)')};
@media screen and ( max-width: 960px){
    padding: 100px 20px;
}
`

export const InfoWrapper = styled.div`
display: grid;
 z-index: 1;
 height: 860px;
 width: 100%;
 max-width: 1100px;
 margin-right: auto;
 margin-left: auto;
 padding-top:40px;
 padding-bottom:40px;
 padding-left:auto;
 padding-right:auto;
 justify-content: center;
`

export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and ( max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`

export const TopLine = styled.p`
color: #01bf71;
font-size: 20px;
line-height: 16px;
font-weight: 750;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 78px;
line-height: 1.1;
font-weight: 600;
color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

@media screen and ( max-width: 480px){
font-size: 32px;
`

export const Subtitle = styled.p`
font-size: 25px !important;
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({darkText}) => (darkText ? '#010606' : '#fff' )};
`

export const BtnWrap = styled.div`
display: flex;
justfy-content: flex-start;
`

export const ImgWrap = styled.div`
max-width: 500px;
height: 100%;
`

export const Img = styled.img`
width: 85%;
transform: rotate(135deg);
animation-name:rotate;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

:after{
    transform:rotate(360deg);
    }
:before{
transform:rotate(360deg);
}

@keyframes rotate{

    100%{
      transform:rotate(360deg);
    }
`
  export const Img1 = styled.img`
  width: 85%;
  margin: -59px 0 0 0;
  `
  export const Img2 = styled.img`
  width: 85%;
  margin: 0 0 50px 0;
  padding-right: 0;
  `
 export const ImgP = styled.h6`
padding-right: 60px;
 justify-content: center;
font-size: 70px;
font-family: 'Anita  Semi-square';
color:#00d8ff;
height: 100px auto;
align-items: center;
margin:auto;
text-align:center;
 `
 export const ImgP1 = styled.h6`
 margin: -100px 0 -42px -83px;
padding-right: 60px;
justify-content: center;
font-size: 60px;
font-family: 'Anita  Semi-square';
color:#990e16bf;
height: 100px auto;
align-items: center;
margin:auto;
text-align:center;
 `
 export const ImgP2 = styled.h6`
padding-right: 40px;
justify-content: center;
font-size: 60px;
font-family: 'Anita  Semi-square';
color:#00d8ff;
height: 100px auto;
align-items: center;
margin:auto;
text-align:center;
 `