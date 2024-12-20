import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(1); // Start at the first image in the extended array
    const [isTransitioning, setIsTransitioning] = useState(false);

    const images = [
        { src: process.env.PUBLIC_URL + '/DiffuseHigh.jpg', alt: 'DiffuseHigh' },
        { src: process.env.PUBLIC_URL + '/CodecNerf.jpg', alt: 'CodecNerf' },
        { src: process.env.PUBLIC_URL + '/SequenceMatters.jpg', alt: 'SequenceMatters' },
        { src: process.env.PUBLIC_URL + '/PEVC.jpg', alt: 'PEVC' },
    ];

    const extendedImages = [images[images.length - 1], ...images, images[0]]; // Add last and first image for smooth looping

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

    return (
        <div className="App">
            <nav className="navbar">
                <div className="title">Visual and Scientific Computing Lab</div>
                <div className="menu">
                    <a href="#">Home</a>
                    <a href="https://silverbottlep.github.io/pair.html">Team</a>
                    <a href="https://silverbottlep.github.io/publication.html">Publication</a>
                    <a href="https://silverbottlep.github.io/pic.html">Gallery</a>
                    <a href="https://silverbottlep.github.io/index.html">Contact</a>
                </div>
            </nav>

            <main className="main">
                <div className="carousel">
                    <button className="carousel-button prev" onClick={handlePrev}>
                        <span className="arrow">&#9664;</span>
                    </button>
                    <div
                        className="carousel-images"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
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
                    <li>[2024.12] Three papers, including DiffuseHigh and CodecNeRF, got accepted to AAAI 2025!</li>
                    <li>[2024.11] DiffuseHigh received the best paper award at JKAIA 2024!</li>
                    <li>[2024.10] Invited talk at SKKU AI Colloqium 2024 Recorded talk (Korean)</li>
                    <li>[2024.09] PEFT Video Compression work was selected as an oral presentation in ACCV 2024!</li>
                    <li>[2024.09] Freq-Mip-AA is considered as a best paper candidate in ICIP 2024!</li>
                    <li>[2024.07] Two papers accepted to ECCV 2024!</li>
                    <li>[2024.05] Our lab received the outstanding young scientist grant from National Research Foundation!</li>
                    <li>[2024.05] Our lab (with Prof Inki Kim) won the grant from Samsung Science & Technology Foundation!</li>
                    <li>[2024.04] Two CVPR 2024 papers selected as highlight!</li>
                    <li>[2024.02] Two papers accepted to CVPR 2024!</li>
                    <li>[2024.01] CAM was accepted to ICLR 2024 as a spotlight!</li>
                </ul>
            </section>
            <footer className="footer">
                <p>Sungkyunkwan University</p>
                <p>(16419) 2066, SEOBU-RO, JANGAN-GU, SUWON-SI, GYEONGGI-DO, KOREA</p>
                <p>Contact: epark@skku.edu</p>
            </footer>
        </div>
    );
};

export default App;