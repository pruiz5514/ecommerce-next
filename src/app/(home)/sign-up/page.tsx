"use client"
import Form from '@/components/Form/Form'
import './signUp.css'
import Main from "@/components/Main/Main"
import Input from '@/components/UI/Input/Input'
import Button from '@/components/UI/Button/Button'

const Signup = ()=>{
    return(
        <>
            <Main>
                <h1 className="sign-up_h1">Crear una cuenta</h1>
                <section className='form_section'>
                    <Form>
                        <Input placeholder='Nombre' type='text' name='name'/>
                        <Input placeholder='Correo electronico' type='email' name='email'/>
                        <Input placeholder='Contraseña' type='password' name='password'/>
                        <Input placeholder='Confirmar contraseña' type='password' name='confirmPassword'/>
                        <Button>Crear cuenta</Button>
                    </Form>
                </section>
                
            </Main>
        </>
    )
}

export default Signup