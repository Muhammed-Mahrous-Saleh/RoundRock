import React from "react";
import Button from "../components/Button.jsx";

const Header = () => {
    return (
        <header className="header h-[100vh] text-center p-8 mx-auto">
            <div className="header-content--container h-[calc(100vh-4rem)] w-full overflow-hidden relative">
                <div className="img-container">
                    <img
                        src="../src/images/trash_header_img.jpg"
                        alt="hero image"
                        className="image-clip h-full object-cover"
                    />
                </div>
                <div className="header-content--title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="header1 md:text-5xl font-bold text-white">
                        <div className="logo-container">
                            <div className="svg-logo-icon"></div>
                        </div>
                        <div className="title">
                            Round Rock
                            <p>Trush Hauling</p>
                        </div>
                    </div>
                    <div className="label">Experts</div>
                    <div className="text-header">
                        <span>Lorem</span>
                        Lorem lorem
                    </div>
                    <div className="about-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the
                    </div>
                    <Button type="primary">Help Me</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
