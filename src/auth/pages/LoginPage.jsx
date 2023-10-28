import { useEffect } from 'react';
import { useAuthStore, useForm } from '../../hooks/index';

import { Tabs, TabList, TabPanels, Tab, TabPanel, Image, Box, AbsoluteCenter } from '@chakra-ui/react'
import Swal from 'sweetalert2';
import { Player } from '@lottiefiles/react-lottie-player';

import './LoginPage.css';
import logo from '../../assets/logo-plannly.png';
import lotiAnimation from '../../assets/animation-login2.json';



const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: '',
}


export const LoginPage = () => {

    const { startLogin, errorMessage, startRegister } = useAuthStore();

    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields);
    const { registerName, registerEmail, registerPassword, registerPassword2, onInputChange: onRegisterInputChange } = useForm(registerFormFields);


    const loginSubmit = (e) => {
        e.preventDefault();

        startLogin({ email: loginEmail, password: loginPassword })
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        if (registerPassword !== registerPassword2) {
            Swal.fire('Error en el registro', 'Las contraseñas no coinciden', 'error');
            return;
        }

        startRegister({ name: registerName, email: registerEmail, password: registerPassword })
    }

    useEffect(() => {
        if (errorMessage !== undefined) {
            Swal.fire('Error en la autenticación', errorMessage, 'error');
        }


    }, [errorMessage])

    return (
        <div className="container login-container" >
            <Box position='relative' h='100px'>
                <AbsoluteCenter p='4' axis='both'>
                    <Image src={logo} width="10vw" />
                </AbsoluteCenter>
            </Box>
            <div className="row mt-3">
                <div className="col-md-6">
                    <Tabs isFitted variant='enclosed'>
                        <TabList
                            display="flex"
                            flexDirection={{ base: "column", md: "row" }}
                            alignItems="center"
                            justifyContent="center"
                            borderBottom="0px"
                        >
                            <Tab
                                _selected={{ color: "white", bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "10px", width: "20%", border: "0px" }}
                                width={{ base: "100%", md: "auto" }}
                                mb={{ base: 2, md: 0 }}
                                mr={{ base: 0, md: 4 }}
                                color="white"
                                border="1px solid white"
                                borderRadius="10px"
                            >Iniciar Sesión</Tab>

                            <Tab
                                _selected={{ color: "white", bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "10px", width: "20%", border: "0px" }}
                                width={{ base: "100%", md: "auto" }}
                                mb={{ base: 2, md: 0 }}
                                mr={{ base: 0, md: 4 }}
                                color="white"
                                border="1px solid white"
                                borderRadius="10px"
                            >Registrarse</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <div className="login-form-1 mt-5  bg-transparent  mx-auto ">
                                    <h3 className='fw-normal text-center text-white'>Inicia sesión para acceder a tus eventos, recordatorios y planificaciones</h3>
                                    <form onSubmit={loginSubmit} className='mt-4 w-75 mx-auto'>
                                        <div className="form-group mb-2 p-2">
                                            <label className='text-white'>Ingresa tu correo Electronico</label>
                                            <input
                                                type="text"
                                                className="form-control bg-transparent mt-1"
                                                placeholder="Correo"
                                                name="loginEmail"
                                                value={loginEmail}
                                                onChange={onLoginInputChange}
                                                style={{ color: "white" }}
                                            />
                                        </div>
                                        <div className="form-group mb-2 p-2">
                                            <label className='text-white'>Ingresa tu contraseña</label>
                                            <input
                                                type="password"
                                                className="form-control bg-transparent mt-1"
                                                placeholder="Contraseña"
                                                name="loginPassword"
                                                value={loginPassword}
                                                onChange={onLoginInputChange}
                                            />
                                        </div>
                                        <div className="form-group mb-2 text-center mt-5">
                                            <input
                                                type="submit"
                                                className="btnSubmit fw-bold rounded"
                                                value="Iniciar sesión"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="login-form-2  mt-5  bg-transparent  mx-auto">
                                    <h3 className='fw-normal text-center text-white'>Regístrate para comenzar a crear eventos, establecer recordatorios y planificar tu tiempo.</h3>
                                    <form onSubmit={registerSubmit} className='mt-4 w-75 mx-auto'>
                                        <div className="form-group mb-2">
                                            <label className='text-white'>Ingresa tu Nombre</label>
                                            <input
                                                type="text"
                                                className="form-control bg-transparent mt-1"
                                                placeholder="Nombre"
                                                name="registerName"
                                                value={registerName}
                                                onChange={onRegisterInputChange}
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label className='text-white'>Ingresa tu correo Electronico</label>
                                            <input
                                                type="email"
                                                className="form-control bg-transparent mt-1"
                                                placeholder="Correo"
                                                name="registerEmail"
                                                value={registerEmail}
                                                onChange={onRegisterInputChange}
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label className='text-white'>Ingresa tu contraseña</label>
                                            <input
                                                type="password"
                                                className="form-control bg-transparent mt-1"
                                                placeholder="Contraseña"
                                                name="registerPassword"
                                                value={registerPassword}
                                                onChange={onRegisterInputChange}
                                            />
                                        </div>

                                        <div className="form-group mb-2">
                                            <label className='text-white'>Ingresa nuevamente tu contraseña</label>
                                            <input
                                                type="password"
                                                className="form-control bg-transparent mt-1"
                                                placeholder="Repita la contraseña"
                                                name="registerPassword2"
                                                value={registerPassword2}
                                                onChange={onRegisterInputChange}
                                            />
                                        </div>

                                        <div className="form-group mb-2 text-center mt-5">
                                            <input
                                                type="submit"
                                                className="btnSubmit fw-bold rounded"
                                                value="Crear cuenta" />
                                        </div>
                                    </form>
                                </div>
                            </TabPanel>

                        </TabPanels>
                    </Tabs>
                </div>
                <div className="col-md-6">
                    <Player autoplay loop src={lotiAnimation} style={{ height: 'auto', width: '100%' }}></Player>
                </div>
            </div>

        </div>
    )
}