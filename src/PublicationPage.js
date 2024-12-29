import React from "react";
import "./PublicationPage.css";

const publications = [
    { 
        year: "Preprints", 
        title: "EditSplat: Multi-View Fusion and Attention-Guided Optimization for View-Consistent 3D Scene Editing with 3D Gaussian Splatting", 
        journal: "arXiv:2412.11520", 
        authors: "Dong In Lee, Hyeongcheol Park, Jiyoung Seo, Eunbyung Park, Hyunje Park, Ha Dam Baek, Shin Sangheon, Sangmin kim, Sangpil Kim",
        links: {
            paper: "https://arxiv.org/abs/2412.11520",
            project: "https://kuai-lab.github.io/editsplat2024/",
            code: "Coming soon"
        }
    },
    { 
        year: "Preprints", 
        title: "Generative Densification: Learning to Densify Gaussians for High-Fidelity Generalizable 3D Reconstruction", 
        journal: "arXiv:2412.06234", 
        authors: "Seungtae Nam*, Xiangyu Sun*, Gyeongjin Kang, Younggeun Lee, Seungjun Oh, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2412.06234",
            project: "https://stnamjef.github.io/GenerativeDensification/",
            code: "https://github.com/stnamjef/GenerativeDensification"
        }
    },
    { 
        year: "Preprints", 
        title: "PIG: Physics-Informed Gaussians as Adaptive Parametric Mesh Representations", 
        journal: "arXiv:2412.05994", 
        authors: "Namgyu Kang*, Jaemin Oh*, Youngjoon Hong, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2412.05994",
            project: "https://namgyukang.github.io/Physics-Informed-Gaussians/",
            code: "https://github.com/NamGyuKang/Physics-Informed-Gaussians"
        } 
    },
    { 
        year: "Preprints", 
        title: "MetaFormer: High-fidelity Metalens Imaging via Aberration Correcting Transformers", 
        journal: "arXiv:2412.04591", 
        authors: "Byeonghyeon Lee, Youbin Kim, Yongjae Jo, Hyunsu Kim, Hyemi Park, Yangkyu Kim, Debabrata Mandal, Praneeth Chakravarthula, Inki Kim, Eunbyung Park" ,
        links: {
            paper: "https://arxiv.org/abs/2412.04591",
            project: "https://benhenryl.github.io/MetaFormer/",
            code: "https://github.com/benhenryL/MetaFormer"
        } 
    },
    { 
        year: "Preprints", 
        title: "SelfSplat: Pose-Free and 3D Prior-Free Generalizable 3D Gaussian Splatting", 
        journal: "arXiv:2411.17190", 
        authors: "Gyeongjin Kang, Jisang Yoo, Jihyeon Park, Seungtae Nam, Hyeonsoo Im, Sangheon Shin, Sangpil Kim, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2411.17190",
            project: "https://gynjn.github.io/selfsplat/",
            code: "https://github.com/Gynjn/selfsplat"
        } 
    },
    { 
        year: "Preprints", 
        title: "Separable Physics-informed Neural Networks for Solving the BGK Model of the Boltzmann Equation", 
        journal: "arXiv:2403.06342", 
        authors: "Jaemin Oh, Seung Yeon Cho, Seok-Bae Yun, Eunbyung Park, Youngjoon Hong",
        links: {
            paper: "https://arxiv.org/abs/2403.06342",
        }
    },
    { year: 2025, title: "Sequence Matters: Harnessing Video Models in 3D Super-Resolution", journal: "AAAI 2025", authors: "Hyun-kyu Ko*, Dongheok Park*, Youngin Park, Byeonghyeon Lee, Juhee Han, Eunbyung Park" },
    { year: 2025, title: "DiffuseHigh: Training-free Progressive High-Resolution Image Synthesis through Structure Guidance", journal: "AAAI 2025", authors: "Younghyun Kim*, Geunmin Hwang*, Junyu Zhang, Eunbyung Park" },
    { year: 2025, title: "CodecNeRF: Toward Fast Encoding and Decoding, Compact, and High-quality Novel-view Synthesis", journal: "AAAI 2025", authors: "Gyeongjin Kang*, Younggeun Lee*, Seungjun Oh, Eunbyung Park" },
    { year: 2024, title: "Parameter-Efficient Instance-Adaptive Neural Video Compression", journal: "ACCV 2024 Oral (acceptance rate = 5.6%)", authors: "Seungjun Oh*, Hyunmo Yang*, Eunbyung Park" },
    { year: 2024, title: "F-3DGS: Factorized Coordinates and Representations for 3D Gaussian Splatting", journal: "ACM MM 2024", authors: "Xiangyu Sun, Joo Chan Lee, Daniel Rho, Jong Hwan Ko, Usman Ali, Eunbyung Park" },
    { year: 2024, title: "Deblurring 3D Gaussian Splatting", journal: "ECCV 2024", authors: "Byeonghyeon Lee*, Howoong Lee*, Xiangyu Sun, Usman Ali, Eunbyung Park" },
    { year: 2024, title: "Continuous Memory Representation for Anomaly Detection", journal: "ECCV 2024", authors: "Joo Chan Lee*, Taejune Kim*, Eunbyung Park, Simon S. Woo, Jong Hwan Ko" },
    { year: 2024, title: "Freq-Mip-AA : Frequency Mip Representation for Anti-Aliasing Neural Radiance Fields", journal: "ICIP 2024 Best Paper Candidates", authors: "Youngin Park, Seungtae Nam, Cheul-hee Hahm, Eunbyung Park" },
    { year: 2024, title: "Compact 3D Gaussian Representation for Radiance Field", journal: "CVPR 2024 Highlight (acceptance rate = 2.8%)", authors: "Joo Chan Lee, Daniel Rho, Xiangyu Sun, Jong Hwan Ko, Eunbyung Park" },
    { year: 2024, title: "Residual Learning in Diffusion Models", journal: "CVPR 2024 Highlight (acceptance rate = 2.8%)", authors: "Junyu Zhang, Daochang Liu, Eunbyung Park, Shichao Zhang, Chang Xu" },
    { year: 2024, title: "Coordinate-Aware Modulation for Neural Fields", journal: "ICLR 2024 Spotlight (acceptance rate = 5.01%)", authors: "Joo Chan Lee, Daniel Rho, Seungtae Nam, Jong Hwan Ko, Eunbyung Park" },
    { year: 2024, title: "Sharp-NeRF: Grid-based Fast Deblurring Neural Radiance Field using Sharpness Prior", journal: "WACV 2024", authors: "Byeonghyeon Lee*, Howoong Lee*, Usman Ali, Eunbyung Park" },
    { year: 2024, title: "Rethinking Convolutional Neural Networks for Trajectory Refinement", journal: "Pattern Recognition, Elsevier, 2024", authors: "Hanbit Yoon, Usman Ali, Joonhee Choi, Eunbyung Park" },
    { year: 2024, title: "Hydra: Multi-head Low-rank Adaptation for Parameter Efficient Fine-tuning", journal: "Neural Networks, Elsevier, 2024", authors: "Sanghyeon Kim*, Hyunmo Yang*, Younghyun Kim*, Youngjoon Hong, Eunbyung Park" },
];

const groupedPublications = publications.reduce((acc, pub) => {
    acc[pub.year] = acc[pub.year] || [];
    acc[pub.year].push(pub);
    return acc;
}, {});

const PublicationPage = () => {
    // 특정 키워드 강조 함수 (위에서 추가한 highlightKeywords 재사용 가능)
    const highlightKeywords = (text) => {
        const keywords = ["Highlight", "Spotlight", "Oral"];
        const parts = text.split(new RegExp(`(${keywords.join("|")})`, "g"));
        return parts.map((part, index) => {
            if (keywords.includes(part)) {
                return (
                    <span key={index} style={{ color: "red", fontWeight: "bold" }}>
                        {part}
                    </span>
                );
            }
            return part;
        });
    };

    return (
        <div className="publication-page">
            {Object.keys(groupedPublications)
                .sort((a, b) => {
                    if (a === "Preprints") return -1;
                    if (b === "Preprints") return 1;
                    return b - a;
                })
                .map((year) => (
                    <div key={year} className="year-section">
                        <h2>{year}</h2>
                        <div className="publication-cards">
                            {groupedPublications[year].map((pub, index) => (
                                <div key={index} className="publication-card">
                                    <h3>{pub.title}</h3>
                                    <p>{pub.authors}</p>
                                    <p>
                                        <strong>{highlightKeywords(pub.journal)}</strong>
                                    </p>
                                    {/* 링크 섹션 */}
                                    <div className="links">
                                        {pub.links?.paper &&
                                            (pub.links.paper === "Coming soon" ? (
                                                <span>Paper (Coming soon)</span>
                                            ) : (
                                                <a href={pub.links.paper} target="_blank" rel="noopener noreferrer">
                                                    Paper
                                                </a>
                                            ))}
                                        {pub.links?.project &&
                                            (pub.links.project === "Coming soon" ? (
                                                <span>Project Page (Coming soon)</span>
                                            ) : (
                                                <a href={pub.links.project} target="_blank" rel="noopener noreferrer">
                                                    Project Page
                                                </a>
                                            ))}
                                        {pub.links?.code &&
                                            (pub.links.code === "Coming soon" ? (
                                                <span><strong>Code (Coming soon)</strong></span>
                                            ) : (
                                                <a href={pub.links.code} target="_blank" rel="noopener noreferrer">
                                                    Code
                                                </a>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default PublicationPage;
