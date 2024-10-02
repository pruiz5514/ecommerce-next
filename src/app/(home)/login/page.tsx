"use client"
import './login.css'
import Form from "@/components/Form/Form"
import Main from "@/components/Main/Main"
import Button from "@/components/UI/Button/Button"
import Input from "@/components/UI/Input/Input"


const Signup = ()=>{
    return(
        <>
            <Main>
                <h1 className="login_h1">Iniciar sesión</h1>
                <section className='form_section'>
                    <Form>
                        <Input placeholder='Correo electronico' type='email' name='email'/>
                        <Input placeholder='Contraseña' type='password' name='password'/>
                        <Button>Iniciar sesión</Button>
                    </Form>
                </section>
                
            </Main>
        </>
    )
}

export default Signup