import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import TeamPage from './TeamPage';
import PublicationPage from './PublicationPage';
import './App.css';

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(1); // Start at the first image in the extended array
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const images = [
        { src: process.env.PUBLIC_URL + '/home/DiffuseHigh.jpg', alt: 'DiffuseHigh' },
        { src: process.env.PUBLIC_URL + '/home/CodecNerf.jpg', alt: 'CodecNerf' },
        { src: process.env.PUBLIC_URL + '/home/SequenceMatters.jpg', alt: 'SequenceMatters' },
        { src: process.env.PUBLIC_URL + '/home/PEVC.jpg', alt: 'PEVC' },
    ];

    const extendedImages = [images[images.length - 1], ...images, images[0]]; // Add last and first image for smooth looping

    const newsItems = [
        "[2024.12] Three papers, including DiffuseHigh and CodecNeRF, got accepted to AAAI 2025!",
        "[2024.11] DiffuseHigh received the best paper award at JKAIA 2024!",
        "[2024.10] Invited talk at SKKU AI Colloqium 2024 Recorded talk (Korean)",
        "[2024.09] PEFT Video Compression work was selected as an oral presentation in ACCV 2024!",
        "[2024.09] Freq-Mip-AA is considered as a best paper candidate in ICIP 2024!",
        "[2024.07] Two papers accepted to ECCV 2024!",
        "[2024.05] Our lab received the outstanding young scientist grant from National Research Foundation!",
        "[2024.05] Our lab (with Prof Inki Kim) won the grant from Samsung Science & Technology Foundation!",
        "[2024.04] Two CVPR 2024 papers selected as highlight!",
        "[2024.02] Two papers accepted to CVPR 2024!",
        "[2024.01] CAM was accepted to ICLR 2024 as a spotlight!",
        "[2023.11] Invited talk at GIST Colloquium",
        "[2023.09] SPINN was accepted to NeurIPS 2023 as a spotlight!",
        "[2023.09] Two papers accepted to NeurIPS 2023!",
        "[2023.05] Invited talk at UNIST AI graduate seminar",
        "[2023.02] Two papers accepted to CVPR 2023!",
        "[2023.02] Invited talk about SPINN at CRUNCH Seminars at Brown University [Recorded talk]",
        "[2022.11] Invited talk at 2022 KSIAM Annual Meeting",
        "[2022.11] PIXEL was accepted to AAAI 2023",
        "[2022.09] NRFF was accepted to ACCV 2022",
        "[2022.08] PIXEL was selected as a spotlight in DLDE-II (NeurIPS 2022 Workshop)",
        "[2022.08] SPINN received the best paper award in CKAIA 2022",
        "[2022.07] Streamable Neural Fields was accepted to ECCV 2022",
        "[2022.05] Our lab received the Basic Research Lab (BRL) grant from the NRF",
        "[2022.03] Invited talk at Samsung Research",
        "[2021.09] Honor to be selected as a EIRIC rising star",
        "[2021.06] VSC lab was founded",
        "[2021.05] Invited talk at AI Frontiers Summit 2021",
    ];

    const itemsPerPage = 10;
    const totalPages = Math.ceil(newsItems.length / itemsPerPage);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    useEffect(() => {
        let timeout;
        if (currentIndex === 0) {
            timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(images.length); // Jump to the last image without animation
            }, 500);
        } else if (currentIndex === images.length + 1) {
            timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1); // Jump to the first image without animation
            }, 500);
        } else {
            timeout = setTimeout(() => setIsTransitioning(false), 500);
        }
        return () => clearTimeout(timeout);
    }, [currentIndex]);

    useEffect(() => {
        const interval = setInterval(handleNext, 4000);
        return () => clearInterval(interval);
    }, []);

    const currentNewsItems = newsItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <Router>
            <div className="App">
                <nav className="navbar"> 
                    <div className="title">
                        <a href="/" className="title-link">
                            {isSmallScreen ? "VSC Lab" : "Visual and Scientific Computing Lab"}
                        </a>
                    </div>
                    <div className="menu">
                        <Link to="/">Home</Link>
                        <Link to="/team">Team</Link>
                        <Link to="/publication">Publication</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </nav>

                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <main className="main">
                                    <div className="carousel">
                                        <button className="carousel-button prev" onClick={handlePrev}>
                                            <span className="arrow">&#9664;</span>
                                        </button>
                                        <div
                                            className="carousel-images"
                                            style={{
                                                transform: `translateX(-${currentIndex * 100}%)`,
                                                transition: isTransitioning
                                                    ? 'transform 0.5s ease-in-out'
                                                    : 'none',
                                            }}
                                        >
                                            {extendedImages.map((image, index) => (
                                                <img
                                                    key={index}
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="carousel-image"
                                                />
                                            ))}
                                        </div>
                                        <button className="carousel-button next" onClick={handleNext}>
                                            <span className="arrow">&#9654;</span>
                                        </button>
                                        <div className="carousel-indicators">
                                            {images.map((_, index) => (
                                                <span
                                                    key={index}
                                                    className={`indicator ${index + 1 === currentIndex ? 'active' : ''}`}
                                                    onClick={() => {
                                                        if (index + 1 !== currentIndex) {
                                                            setIsTransitioning(true);
                                                            setCurrentIndex(index + 1);
                                                        }
                                                    }}
                                                ></span>
                                            ))}
                                        </div>
                                    </div>
                                </main>

                                <section className="news">
                                    <h2>News</h2>
                                    <ul className="news-list">
                                        {currentNewsItems.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <div className="pagination">
                                        {Array.from({ length: totalPages }, (_, index) => (
                                            <button
                                                key={index}
                                                className={`pagination-button ${
                                                    currentPage === index + 1 ? 'active' : ''
                                                }`}
                                                onClick={() => setCurrentPage(index + 1)}
                                            >
                                                {index + 1}
                                            </button>
                                        ))}
                                    </div>
                                </section>
                            </>
                        }
                    />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/publication" element={<PublicationPage />} />
                    <Route path="*" element={<Navigate to="/" />} /> {}
                </Routes>

                <footer className="footer">
                    <p>Sungkyunkwan University</p>
                    <p>(16419) 2066, SEOBU-RO, JANGAN-GU, SUWON-SI, GYEONGGI-DO, KOREA</p>
                    <p>Contact: epark@skku.edu</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;