import React, {useState} from 'react';

import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';

import './landing.css';
import './../Login/login.css';



function Landing() {
  const [loginOpen, setloginOpen] = useState(false);
  const [registerOpen, setregisterOpen] = useState(false);

    return (
        <div>

        {/* Landing */}

        <div className="box-landing">
            <div className="vektor1">
                <img src={require('./../../Components/img/Vector1.png')} alt=""/>
            </div>
            <header>
                <img src={require('./../../Components/img/Icon.png')} alt=""/>
                <h1>Lib'rary</h1>
            </header>
            <div className="cover">
                <h1><i>Your</i> library anywhere</h1>
                <p>Sign-up today and recieve unlimited access to all of your reading - share your book.</p>
                
                <div className="sign-button">
                    <button onClick={() => setregisterOpen(true)} className="active">Sign Up</button>
                    <button onClick={() => setloginOpen(true)}>Sign In</button>
                </div>
            </div>
        </div>

        {/* Akhir Landing */}



        {/* Login */}

        <Modal isOpen = {loginOpen}>
            <GrClose style={{width: '50px', cursor:'pointer'}} onClick={() => setloginOpen(false)} />
            <div className="box-sign">
                <div className="sign-in">
                    <h1>Sign In</h1>
                    <form action="">
                        <input type="email" name="id" id="id" placeholder="Email"/> <br/>
                        <input type="password" name="password" id="password" placeholder="Password"/>
                       <Link to="/home"><button className="sign-submit">Login</button></Link>
                    </form>
                    <p>Don't have an account ? Klik <button onClick={() => {
                        setregisterOpen(true);
                        setloginOpen(false); 
                    }}><strong>Here</strong></button></p>
                    
                </div>
            </div>
        </Modal>
        
        {/* Akhir Login */}



        {/* Register */}

        <Modal isOpen = {registerOpen}>
            <GrClose style={{width: '50px', cursor:'pointer'}} onClick={() => setregisterOpen(false)} />
            <div className="box-sign">
                <div className="sign-in">
                    <h1>Sign Up</h1>
                    <form action="">
                        <input type="email" name="id" id="id" placeholder="Email"/> <br/>
                        <input type="password" name="password" id="password" placeholder="Password"/>
                        <input type="text" name="fullName" id="fullName" placeholder="Full Name"/>

                        <div className="form-group">
                        <label htmlFor="title">Gender</label>
                        <select name="gender" id="">
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                        </div>

                        <input type="tel" name="phone" id="phone" placeholder="Phone"/>
                        <textarea name="address" id="address" placeholder="Adress"></textarea>
                        <button className="sign-submit" onClick={() => {
                        setloginOpen(true);
                        setregisterOpen(false);
                        }}>Register</button>
                    </form>
                    <p>Already have an account ? Klik <button onClick={() => {
                        setloginOpen(true);
                        setregisterOpen(false);
                    }}><strong>Here</strong></button></p>
                </div>
            </div>
        </Modal>

        {/* Akhir Register */}

        </div>
    );
}

export default Landing;