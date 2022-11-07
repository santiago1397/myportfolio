import { SendIcon, TriangleContainer, Container, Form, Input, SubmitBtn, Socials, LoadingAnimation } from '../styles/ContactStyles'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { IoLogoWhatsapp,  } from 'react-icons/io'
import { LetterAnimation2 } from './LetterAnimation'
import emailjs from 'emailjs-com'
import { FormEvent, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MdSend} from 'react-icons/md'



export const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const sendEmail = async (e : FormEvent) => {
        e.preventDefault();
        setLoading(true)

        await emailjs.sendForm('service_xzweopu', 'template_iupg0g8', form.current! , 'KOXbxCzdMte-fWEMn')
            .then((result) => {
                toast.success('Thanks for sending a message!', {
                    position: toast.POSITION.TOP_RIGHT
                });
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        form.current!.reset()
        setLoading(false)
    };


    return (
        <TriangleContainer>
            <div className="triContainer">
                <div className="leftTriangle"></div>
                <div className="rightTriangle"></div>
            </div>
            <Container id="Contact">
            <ToastContainer />
                <LetterAnimation2 text="Contact me" />

                <Form ref={form} onSubmit={sendEmail}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>

                        <Input type="text" name="name" id="name" autoComplete="off" placeholder='Name' required />

                        <Input type="email" name="email" id="name" autoComplete="off" placeholder='Email' required />

                        <textarea  rows={6} name="message" placeholder="Message"></textarea>

                        <div>
                            <SubmitBtn type="submit">Send <SendIcon>{loading? <LoadingAnimation><div></div></LoadingAnimation>:<MdSend width='100%' height='100%'/>}</SendIcon></SubmitBtn>
                        </div>
                    </div>
                </Form>
            </Container>

            <Socials>
                <div>
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
                </div>
            </Socials>
        </TriangleContainer>
    )

}

export default Contact;