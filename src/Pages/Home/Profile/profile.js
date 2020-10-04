import React from 'react';

import { FiMail, FiPhone } from 'react-icons/fi';
import { FaTransgender } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';

import './profile.css';

function Profile(){
    return(
        <div className="box-profile">
            <div className="profile-data">
                <h1 style={{marginTop:'3vh'}}>Profile</h1>
                <div className="cover-profile">
                <ul>
                        <li>
                            <FiMail className="logo-icon"/>
                            <span>
                                <h5>username@gmail.com</h5>
                                <p>Email</p>
                            </span>
                        </li>
                        <li>
                            <FaTransgender className="logo-icon"/>
                            <span>
                                <h5>Male</h5>
                                <p>Gender</p>
                            </span>
                        </li>
                        <li>
                            <FiPhone className="logo-icon"/>
                            <span>
                                <h5>0812-8623-8911</h5>
                                <p>Mobile Phone</p>
                            </span>
                        </li>
                        <li>
                            <GrLocation className="logo-icon"/>
                            <span>
                                <h5>Jalan Mawar No.70</h5>
                                <p>Address</p>
                            </span>
                        </li>
                    </ul>
                    <div className="box-gambar">
                        <img src={require('./../../../Components/img/Rectangle12.png')} alt="ohoto-profile"/>
                        <button>Change Photo Profile</button>
                    </div>
                </div>
                <div className="list-book">
                    <h1 style={{marginTop:'2vh'}}>My Books</h1>
                    <ul>
                        <li>
                            <div style={{marginTop:'5px'}}>
                                <img src={require("./../../../Components/img/Rectangle9.png")} alt="book"/>
                                <h5>Blockchain with Hyperledger</h5>
                                <p>Username</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;