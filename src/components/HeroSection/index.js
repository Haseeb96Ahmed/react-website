import React, {useState} from 'react'
import Video from '../../videos/video.mov'
import { Button } from '../ButtonElements'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'

const HeroSection = () => {
const [hover, setHover] = useState(false)

const onHover = () =>{
    setHover(!hover)
}

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>
                        WELCOME TO MY PORTFOLIO
                    </HeroH1>
                    <HeroP>
                        I'm Haseeb Ahmed, and I design websites. My other skills are to edit videos, graphic design, photos.
                        While I'm based in Karachi, Pakistan, I help create websites for people all over the world. 
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                            LEARN MORE {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection;
