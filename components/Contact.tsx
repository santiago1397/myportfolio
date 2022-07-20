import { Title, TriangleContainer, Container, Form, Input, SubmitBtn, Socials } from '../styles/ContactStyles'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { LetterAnimation2 } from './LetterAnimation'
import emailjs from 'emailjs-com'
import { FormEvent, useRef } from 'react'

export const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null)

    const sendEmail = (e : FormEvent) => {
        e.preventDefault();

        emailjs.sendForm('service_xzweopu', 'template_iupg0g8', form.current! , 'KOXbxCzdMte-fWEMn')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        form.current!.reset()
    };


    return (
        <TriangleContainer>
            <div className="triContainer">
                <div className="leftTriangle"></div>
                <div className="rightTriangle"></div>
            </div>
            <Container id="Contact">

                <LetterAnimation2 text="Contact me" />

                <Form ref={form} onSubmit={sendEmail}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>

                        <Input type="text" name="name" id="name" autoComplete="off" placeholder='Name' required />

                        <Input type="email" name="email" id="name" autoComplete="off" placeholder='Email' required />

                        <textarea rows={6} name="message" placeholder="Message"></textarea>

                        <div>
                            <SubmitBtn type="submit">Send</SubmitBtn>
                        </div>
                    </div>
                </Form>
            </Container>

            <Socials>
                <div>

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
            </Socials>
        </TriangleContainer>
    )

}

export default Contact;