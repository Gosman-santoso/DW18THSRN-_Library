import React from 'react';

import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { MdLibraryBooks, MdLibraryAdd } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

import './home.css';

function Index(){
    return(
        <div className="box-home">
            <nav>
                <div className="head">
                    <div className="icon"> 
                        <img src={require('./../../Components/img/Icon.png')} alt=""/>
                        <h1><i>Lib'rary</i></h1>  
                    </div> 
                    <div className="photo">
                        <img src={require('./../../Components/img/Ellipse1.png')} alt=""/>
                        <h2>User</h2>
                    </div>
                </div>
                <div className="menu">
                    <p className="nav-btn active"><CgProfile />  Profile</p>
                    <p className="nav-btn"><MdLibraryBooks />  My Library</p>
                    <p className="nav-btn"><MdLibraryAdd />  Add Book</p>
                </div>
                <div className="logout">
                <Link to="/" style={{textDecoration : 'none'}}><p className="nav-btn"><IoIosLogOut />  Logout</p></Link>         
                </div>
          </nav>
          <main>
              <div className="cover-img">
                    <div className="des">
                        <h1>Share, read and <i>love</i></h1>
                        <p>Reading is fascinating</p>
                    </div>
                    <img src={require('./../../Components/book/Fix-You-by-ACI-Nouraicha-Afta1.png')} alt=""/>
                </div>
               
                <div className="list-book">
                    <div className="navigasi">
                        <h1>List Book</h1>
                        <button className="">Category</button>
                    </div>
                    <ul>
                        <li>
                            <div>
                                <img src={require('./../../Components/book/What-If.png')} alt=""/>
                                <h5>What if? Absurd Questions</h5>
                                <p>Randall Munroe</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={require('./../../Components/book/Glyph.png')} alt=""/>
                                <h5>Glyph: New look on things</h5>
                                <p>Morris Williamson</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={require('./../../Components/book/Tes-on-the-Road.png')} alt=""/>
                                <h5>Harry Potter and Goblet of Fire</h5>
                                <p>J.K. Rownling</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={require('./../../Components/book/Harry-Potter-Goblet-of-Fire.png')} alt=""/>
                                <h5>What if? Absurd Questions</h5>
                                <p>Randall Munroe</p>
                            </div>
                        </li>
                    </ul>
              </div>
          </main>
        </div>
    );
}

export default Index;