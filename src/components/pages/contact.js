import React from "react";
import contactPic from "../../../static/assets/images/bio/IMG-5118.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
            className="left-column"
            style={{
                background: "url(" + contactPic + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            >    
            </div>
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone-square" />
                        </div>
                        <div className="text">
                            (318)581-1146
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>
                        <div className="text">
                            seanbass99@gmail.com
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="home" />
                        </div>
                        <div className="text">
                            Many, LA 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}