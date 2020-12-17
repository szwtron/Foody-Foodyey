import React from 'react';
import chris from './Chriss.jpg';
import stainley from './Stainley.jpg';
import julius from './Julius.jpg';
import isla from './Isla.jpg'
import instagram from './Instagram.png'
import twitter from './Twitter.png'
import facebook from './Facebook.png'
import umn from './umn.png'

export default function About(){
    return (
        <div>
            <div className="container">
                <h1 style={{textAlign: "center", marginTop: "50px"}}>About Us</h1>
                <h3 style={{textAlign: "center"}}>Team REMBO</h3>
                <h3 style={{textAlign: "center"}}>(IF300-B & IF300-BL) Introduction to Internet Technology Project Test </h3>
                <div className="Profile">
                    <div className="chris" style={{ color: "white", textAlign: "center" }}>
                        <img className="" src={chris} alt="chris" style= {{height: "300px", width: "300px", borderRadius: "100%", marginTop: "100px", objectFit: "cover"}}></img>
                        <br></br>
                        <p style={{ fontSize: "30px" }}>Christian Richard Halim</p>
                        <p style={{ fontSize: "20px" }}>00000035752</p>

                        <div className="Instagram">
                            <a href="https://www.instagram.com/chri1stal/" rel="noopener noreferrer" style={{ color: "#f4c10f", fontSize: "50px", display: "flex" }}>
                                <img src= {instagram} alt="instagram" style= {{height: "50px", width: "50px", display:"inline-lock", margin: "auto"}}></img>
                            </a>
                        </div>

                        <div className="Twitter">
                            <a href="https://twitter.com/Chri1sT" rel="noopener noreferrer" style={{ color: "#f4c10f", fontSize: "50px", display: "flex" }}>
                                <img src= {twitter} alt="twitter" style= {{height: "50px", width: "50px", display:"inline-block", margin: "auto"}}></img>
                            </a>
                        </div>

                        <div className="Facebook">
                            <a href="https://www.facebook.com/christian.halim.716" rel="noopener noreferrer" style={{ color: "#f4c10f", fontSize: "50px", display: "flex" }}>
                                <img src= {facebook} alt="facebook" style= {{height: "50px", width: "50px", display:"inline-block", margin: "auto"}}></img>
                            </a>
                        </div>

                    </div>

                    <div className="" style={{ color: "white", textAlign: "center" }}>
                        <img className="" src={julius} alt="julius" style= {{height:"300px", width: "300px", borderRadius: "50%", marginTop: "50px"}}></img>
                        <p style={{ fontSize: "30px" }}>Julius Cannavaro Harland</p>
                        <p style={{ fontSize: "20px" }}>00000036395</p>

                        <div className="Instagram">
                            <a href="https://www.instagram.com/juliuscannavaro11/" rel="noopener noreferrer" style={{ color: "#f4c10f", fontSize: "50px", display: "flex" }}>
                                <img src= {instagram} alt="instagram" style= {{height: "50px", width: "50px", display:"inline-lock", margin: "auto"}}></img>
                            </a>
                        </div>

                    </div>

                    <div className="" style={{ color: "white", textAlign: "center" }}>
                    <img className="" src={stainley} alt="stainley" style= {{height:"300px", width: "300px", borderRadius: "50%", marginTop: "50px"}}></img>
                        <p style={{ fontSize: "30px" }}>Stainley Suryadinata Winoto</p>
                        <p style={{ fontSize: "20px" }}>00000036396</p>

                        <div className="Instagram">
                            <a href="https://www.instagram.com/stainleysw/" rel="noopener noreferrer" style={{ color: "#f4c10f", fontSize: "50px", display: "flex" }}>
                                <img src= {instagram} alt="instagram" style= {{height: "50px", width: "50px", display:"inline-lock", margin: "auto"}}></img>
                            </a>
                        </div>

                    </div>

                    <div className="" style={{ color: "white", textAlign: "center" }}>
                    <img className="" src={isla} alt="isla" style= {{height:"300px", width: "300px", borderRadius: "50%", marginTop: "50px"}}></img>
                        <p style={{ fontSize: "30px" }}>Tubagus Jamil A.K.A ISLA</p>
                        <p style={{ fontSize: "20px" }}>00000036011</p>
                        <div className="Instagram">
                            <a href="https://www.instagram.com/islatoen/" rel="noopener noreferrer" style={{ color: "#f4c10f", fontSize: "50px", display: "flex" }}>
                                <img src= {instagram} alt="instagram" style= {{height: "50px", width: "50px", display:"inline-lock", margin: "auto"}}></img>
                            </a>
                        </div>
                    </div>

                </div>
                </div>

                <div style={{ color: "white", textAlign: "center", marginTop: "100px", padding: "50px"}}>
                    <a href="https://www.umn.ac.id/" target="_blank" rel="noopener noreferrer">
                    <img  className=""src={umn} alt="umn" style= {{ height: "200px", textAlign: "center"}}></img>
                    </a>
                    <p style={{ fontSize: "30px", textAlign: "center", color: "white", marginTop: "20px" }}>Universitas Multimedia Nusantara</p>
                    <p style={{ fontSize: "25px", textAlign: "center", color: "white" }}>Informatics Faculty</p>
                </div>
                
                <footer>
                    <div class="row mt-5">
                    <div class="mt-5 mb-3 col-sm-12" style={{ textAlign: "center", padding: "5px" }}>
                        <h3>Created By</h3>
                        <p style={{ color:"white" }}> &copy; Team REMBO <br></br>2020</p>
                        </div>
                    </div>
                </footer>
            
        </div>
    );
}
