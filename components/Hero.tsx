import React from 'react'
import { Title } from '../styles/HeroStyles'
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
                    <p>Hi there, my name is</p>


                    <LetterAnimation text={'SANTIAGO'} />
                    <LetterAnimation text={'VILLAHERMOSA'} />

                    <div style={{minHeight: '2.2em'}}>
                        <TextAnimationWriting />
                    </div>

                    <div>
                        <div style={{ width: '40%', display: 'flex', justifyContent: 'space-between' }}>
                            <a href="https://github.com/santiago1397" target="_blank" rel="noopener noreferrer">
                                <AiFillGithub size="22px" />
                            </a>
                            <a href='https://www.linkedin.com/in/santiago-villahermosa-9239139b/' target="_blank" rel="noopener noreferrer">
                                <AiFillLinkedin size="22px" />
                            </a>
                            <a href='https://twitter.com/santiago1397' target="_blank" rel="noopener noreferrer">
                                <AiOutlineTwitter size="22px" />
                            </a>
                            <a href='https://api.whatsapp.com/send?phone=584126080560' target="_blank" rel="noopener noreferrer">
                                <IoLogoWhatsapp size="22px" />
                            </a>
                        </div>
                    </div>
                </Title>
            </Parallax>
        </div>
    )

}

export default Hero