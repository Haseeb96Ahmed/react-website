import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaLinkedin} from'react-icons/fa';
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                <FooterLink to="/signin"> How it works </FooterLink>
                                <FooterLink to="/signin"> Testimonial </FooterLink>
                                <FooterLink to="/signin"> Careers </FooterLink>
                                <FooterLink to="/signin"> Investors </FooterLink>
                                <FooterLink to="/signin"> Terms of Services </FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                <FooterLink to="/signin"> How it works </FooterLink>
                                <FooterLink to="/signin"> Testimonial </FooterLink>
                                <FooterLink to="/signin"> Careers </FooterLink>
                                <FooterLink to="/signin"> Investors </FooterLink>
                                <FooterLink to="/signin"> Terms of Services </FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                <FooterLink to="/signin"> How it works </FooterLink>
                                <FooterLink to="/signin"> Testimonial </FooterLink>
                                <FooterLink to="/signin"> Careers </FooterLink>
                                <FooterLink to="/signin"> Investors </FooterLink>
                                <FooterLink to="/signin"> Terms of Services </FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                <FooterLink to="/signin"> How it works </FooterLink>
                                <FooterLink to="/signin"> Testimonial </FooterLink>
                                <FooterLink to="/signin"> Careers </FooterLink>
                                <FooterLink to="/signin"> Investors </FooterLink>
                                <FooterLink to="/signin"> Terms of Services </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                        <SocialMedia>
                            <SocialMediaWrap>
                                <SocialLogo to='/'> HASEEB AHMED </SocialLogo>
                                <WebsiteRights> H-AHMED © {new Date().getFullYear()} All rights reserved </WebsiteRights>
                                <SocialIcons>
                                    <SocialIconLink href="//www.facebook.com/haseeb96ahmed/" target="_blank" aria-label="Facebook">
                                        <FaFacebook />
                                    </SocialIconLink>

                                    <SocialIconLink href="//www.instagram.com/haseeb96ahmed/" target="_blank" aria-label="Instagram">
                                        <FaInstagram />
                                    </SocialIconLink>

                                    <SocialIconLink href="//www.youtube.com/channel/UChleNyEwDakKHAE8rtibWfA" target="_blank" aria-label="Youtube">
                                        <FaYoutube />
                                    </SocialIconLink>

                                    <SocialIconLink href="//www.linkedin.com/in/haseeb-bin-jawaid-ab7736191/" target="_blank" aria-label="Linkedin">
                                        <FaLinkedin />
                                    </SocialIconLink>
                                    
                                </SocialIcons>
                            </SocialMediaWrap>
                        </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
