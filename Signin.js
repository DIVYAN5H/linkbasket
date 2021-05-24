import React from 'react'
import './Signin.css'

export const Signin = () => {
    return (
        <section className="signinpage">
            <div className="title">
                linkbasket
            </div>
            <div className="card">
                <form className="form" action="Signin">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <div className="ctext">
                        <a href="#">Forgot Password?</a><a href="#">New User</a>
                    </div>
                    <input type="sumbit" className="button a1" value="Login" />
                    <div className="or">
                        <div className="line a1"></div><span>OR</span><div className="line b1"></div>
                    </div>
                    <button className="button a2">Login with google</button>
                </form>
            </div>
            <div className="footer">
                <div className="line a"></div>
                <div className="blines">
                    <div className="title2">linkbasket</div>
                    <div className="social">
                        <div className="insta"><a href="#"><i className="fab fa-instagram fa-3x"></i></a></div>
                        <div className="fb"><a href="#"><i class="fab fa-facebook-square fa-3x"></i></a></div>
                        <div className="lin"><a href="#"><i class="fab fa-linkedin-in fa-3x"></i></a></div>
                    </div>
                </div>
                <div className="line b"></div>
                <div className="rights">
                    <div>copyright&nbsp;&copy;&nbsp;linkbasket&nbsp;2021</div>
                    <div>developed&nbsp;by&nbsp;quadqode</div>
                </div>
            </div>
        </section>
    )
}