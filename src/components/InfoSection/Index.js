import React from 'react'
import { Button } from '../ButtonElements'
import { BtnWrap, Column1, Column2, Heading, Img, Img1, Img2, ImgP, ImgP1, ImgP2, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements'

const InfoSection = ({lightBg, 
    id, 
    imgStart, 
    topline, 
    headline, 
    darkText, 
    description, 
    ReactName, 
    RubyName, 
    PythonName, 
    PythonName2,  
    buttonLabel, 
    img, 
    img1,
    img2,
    alt, 
    alt1, 
    alt2, 
    lightText,  
    primary,
    dark, 
    dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        
                        <Column1>
                        <TextWrapper>
                            <TopLine> {topline} </TopLine>
                            <Heading lightText={lightText}> {headline} </Heading>
                            <Subtitle darkText={darkText}> {description} </Subtitle>
                            <BtnWrap>
                                <Button to = "home" 
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact="true"
                                offset={-80} 
                                primary={primary ? 1:0} 
                                dark={dark ? 1:0}
                                dark2={dark2 ? 1:0}> {buttonLabel} </Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        
                        <Column2>
                           <ImgWrap>
                                <Img src={img} alt={alt} />
                                <ImgP class="ReactName" > {ReactName} </ImgP>                                
                                <Img1 src={img1} alt={alt1} />
                                <ImgP1 class="RubyName" > {RubyName} </ImgP1>                                
                                <Img2 src={img2} alt={alt2} />
                                <ImgP2 class="PythonName"> {PythonName}{PythonName2} </ImgP2>                                
                            </ImgWrap>                             
                        </Column2>

                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>   
        </>
    )
}

export default InfoSection

