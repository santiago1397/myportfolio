import React from 'react'
import Image from 'next/image'
import { Title, Socials, ImgContainer } from '../styles/HeroStyles'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import LetterAnimation from './LetterAnimation'
import Parallax from './Parallax'
import TextAnimationWriting from './TextAnimationWriting'

export const Hero: React.FC = () => {

    return (
        <div id='Home'>


            <Parallax lmao='-2'>

                <Title >
                    <ImgContainer>
                        <Image src='/teemo.png' alt='test' width={835} height={778} layout="responsive" />
                    </ImgContainer>
                    <div className='container'>

                        <p>Hi there, my name is</p>


                        <LetterAnimation text={'SANTIAGO'} />
                        <LetterAnimation text={'VILLAHERMOSA'} />

                        <div style={{ minHeight: '2.2em' }}>
                            <TextAnimationWriting />
                        </div>
                    </div>

                    <div className='container'>
                        <Socials >
                            <a href="https://github.com/santiago1397" target="_blank" rel="noopener noreferrer">
                                <AiFillGithub size="100%" />
                            </a>
                            <a href='https://www.linkedin.com/in/santiago-villahermosa-9239139b/' target="_blank" rel="noopener noreferrer">
                                <AiFillLinkedin size="100%" />
                            </a>
                            <a href='https://twitter.com/santiago1397' target="_blank" rel="noopener noreferrer">
                                <AiOutlineTwitter size="100%" />
                            </a>
                            <a href='https://api.whatsapp.com/send?phone=584126080560' target="_blank" rel="noopener noreferrer">
                                <IoLogoWhatsapp size="100%" />
                            </a>
                        </Socials>
                    </div>
                </Title>
            </Parallax>
        </div>
    )

}

export default Hero