import HOC from "../components/HOC"
import "./styles/masuk.css"
import background_masuk from "../images/background-masuk.png";
import { InputMedium } from "../components/InputForm";
import { IconEyeCheck, IconEyeOff, IconLock, IconUser } from "@tabler/icons";
import { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Masuk = () => {

    const [password, setPassword] = useState(false)

  return (
    <HOC title="Panti Kita - Masuk">
        <div className="container-halaman-masuk">
            <div className="left-side-register">
                <Link to="/">
                    <img src="./assets/Logo-X-Light-Panti-Kita 1.svg" alt="website-logo"/>
                </Link>
                <div className="wrapper-login">
                    <div className="login-title">
                        <h4>Selamat Datang di Panti Kita</h4>
                        <p>
                        Pengelolaan data panti asuhan menjadi lebih cepat, mudah dan efesien.
                        </p>
                    </div>
                    <label  className="login-input-section">
                        <div className="wrapper-login-section">
                            <p>Username</p>
                            <div className="input-login">
                                <IconUser/>
                                <input type="text" placeholder="username"/>
                            </div>
                        </div>
                        <div className="wrapper-login-section">
                            <p>Password</p>
                            <div className="input-login">
                                <IconLock/>
                                <input type={ password ? "text" : "password"} placeholder="password"/>
                               {password ? <IconEyeCheck className="password-check" onClick={()=>setPassword(!password)}/> :<IconEyeOff className="password-check" onClick={()=>setPassword(!password)}/> }
                            </div>
                        </div>
                        <div className="remember-me-wrapper">
                            <div className="checkbox-remember">
                                <input type="checkbox"/>
                                <p>Ingatkan saya</p>
                            </div>
                            <p>Lupa Password ?</p>
                        </div>
                    </label>
                    <Link to="/dashboard">
                        <Button type="PRIMARY">Masuk</Button>
                    </Link>
                    <div className="register-bottom-section">
                        <p>Belum punya akun?</p>
                        <Button type="RELAWAN">Daftar</Button>
                    </div>
                </div>
            </div>
            <div className="right-side-login">
                <div className="right-top-login">
                    <Link to="/">Beranda</Link>
                    <Link to="/panti-asuhan-kita">Panti Asuhan Kita</Link>
                </div>
                <p>Copyright © 2022 PANTIKITA. All rights reserved.</p>
                <img src={background_masuk} alt="background-masuk"/>
            </div>
        </div>
    </HOC>
  )
}

export default Masuk