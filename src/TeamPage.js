import React from 'react';
import './TeamPage.css';

const TeamPage = () => {
    const phDStudents = [
        { 
            name: 'Joo Chan Lee', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg',
            desc: '2020.03 - Present',
            email: 'joolee@example.com', 
            homepage: 'https://maincold2.github.io/',
            scholar: 'https://scholar.google.com/citations?user=WKCHKk8AAAAJ&hl=en',
            github: 'https://github.com/maincold2' 
        },
        { 
            name: 'Younggeun Lee', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg',
            desc: '2021.09 - Present',
            email: 'younglee@example.com', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=E4iEBFsAAAAJ',
            github: 'https://github.com/Younggeun-L' 
        },
        { 
            name: 'Seungtae Nam', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg',
            desc: '2022.03 - Present',
            email: 'seungtae@example.com', 
            scholar: 'https://scholar.google.com/citations?user=8NKPmmwCmrAC&hl=en',
            github: 'https://github.com/stnamjef'
        },
        { 
            name: 'Xiangyu Sun', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg',
            desc: '2022.09 - Present',
            email: 'seungtae@example.com', 
            scholar: 'https://scholar.google.com/citations?user=VLzxTrAAAAAJ&hl=en',
            github: 'https://github.com/Xiangyu1Sun'  
        },
        { 
            name: 'Namgyu Kang', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg', 
            desc: '2022.03 - Present',
            email: 'seungtae@example.com', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=yb9y9k8AAAAJ',
            github: 'https://github.com/NamGyuKang' 
        },
        { 
            name: 'Byeonghyeon Lee', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg', 
            desc: '2022.09 - Present',
            email: 'seungtae@example.com', 
            scholar: 'https://scholar.google.com/citations?user=_PhPccYAAAAJ&hl=en',
            github: 'https://github.com/benhenryL' 
        },        
        { 
            name: 'Junyu Zhang', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg',
            desc: '2021.09 - Present',
            email: 'seungtae@example.com', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=3jrCsVoAAAAJ',
            github: ''  
        },
        { 
            name: 'Younghyun Kim', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg',
            desc: '2023.03 - Present',
            email: 'seungtae@example.com', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=4M-6X7MAAAAJ',
            github: 'https://github.com/yhyun225'  
        },
    ];

    const masterStudents = [
        { 
            name: 'Dohyun Kim', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg',
            desc: '2023.03 - Present',
            email: 'seungtae@example.com', 
            scholar: '',
            github: 'https://github.com/unhyop'  
        },
        { 
            name: 'Geunmin Hwang', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg',
            desc: '2023.03 - Present',
            email: 'seungtae@example.com', 
            scholar: '',
            github: 'https://github.com/GeunminHwang'  
        },
        { 
            name: 'Seungjun Oh', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg',
            desc: '2023.09 - Present',
            email: 'seungtae@example.com', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=HMnjBk0AAAAJ',
            github: 'https://github.com/ohsngjun'  
        },
        { 
            name: 'Gyeongjin Kang', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg',
            desc: '2024.03 - Present', 
            email: 'seungtae@example.com', 
            scholar: 'https://scholar.google.com/citations?user=iyQ16vIAAAAJ&hl=en',
            github: 'https://github.com/Gynjn' 
        },
        { 
            name: 'Dongheok Park', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg',
            desc: '2024.03 - Present',
            email: 'seungtae@example.com', 
            scholar: '',
            github: 'https://github.com/DHPark98'  
        },
        { 
            name: 'Hyun-kyu Ko', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg',
            desc: '2024.03 - Present',
            email: 'seungtae@example.com', 
            scholar: '',
            github: 'https://github.com/Ko-Lani'  
        },
        { 
            name: 'Jisang Yoo', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg',
            desc: '2024.03 - Present',
            email: 'seungtae@example.com', 
            scholar: '',
            github: 'https://github.com/Yoo-jisang'  
        },
        { 
            name: 'Hye Jin Jeon', 
            img: process.env.PUBLIC_URL + '/team/temp2.jpg',
            desc: '2024.03 - Present',
            email: 'seungtae@example.com', 
            scholar: '',
            github: 'https://github.com/jeonhhyejin'  
        },
        { 
            name: 'Youbin Kim', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg',
            desc: '2024.09 - Present',
            email: 'ybin108@skku.edu', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=RUiA8-wAAAAJ',
            github: 'https://github.com/Ubin108'  
        },
        { 
            name: 'Ji Hyeon Park', 
            img: process.env.PUBLIC_URL + '/team/temp2.jpg',
            desc: '2024.09 - Present',
            email: 'seungtae@example.com', 
            scholar: '',
            github: 'https://github.com/Kanadae'  
        },
        { 
            name: 'Seungryong Lee', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg',
            desc: '2024.09 - Present',
            email: 'seungtae@example.com', 
            scholar: '',
            github: 'https://github.com/lms20031'  
        },
        { 
            name: 'Eunsoo Lee', 
            img: process.env.PUBLIC_URL + '/team/temp2.jpg',
            desc: '2024.09 - Present',
            email: 'seungtae@example.com', 
            scholar: '',
            github: 'https://github.com/esleeo'  
        },
    ];

    const undergraduateStudents = [
        { 
            name: 'Jinho Park', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg'
        },
        { 
            name: 'Hyunsu Kim', 
            img: process.env.PUBLIC_URL + '/team/temp2.jpg' 
        },
        { 
            name: 'Woojeong Baek', 
            img: process.env.PUBLIC_URL + '/team/temp2.jpg' 
        },
        { 
            name: 'Seungkwon Yang', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg' 
        },
        { 
            name: 'Minseo Lee', 
            img: process.env.PUBLIC_URL + '/team/temp2.jpg' 
        },
    ];

    const alumni = [
        'Daniel Rho (MS, 2020.09 - 2022.08), co-advised by Jong Hwan Ko, KT → PhD student at UNC Chapel Hill',
        'Hanbit Yoon (MS, 2021.09 - 2023.08), co-advised by Joon Hee Choi, Samsung Electronics',
        'Sanghyeon Kim (MS, 2021.09 - 2023.08), LG CNS',
        'Junwoo Cho (MS, 2021.09 - 2023.08), Lunit',
        'Usman Ali (Research Professor, 2022.09 - 2024.02), assistant professor at Sejong University',
        'Seungtae Nam (MS, 2022.03 - 2024.02), PhD student at VSC Lab, SKKU',
        'Hyunmo Yang (MS, 2022.03 - 2024.02)',
        'Namgyu Kang (MS, 2022.03 - 2024.08), PhD student at VSC Lab, SKKU',
        'Byeonghyeon Lee (MS, 2022.09 - 2024.08), PhD student at VSC Lab, SKKU',
        'Howoong Lee (MS, 2022.09 - 2024.08), industrial scholars program, Hanwha Vision',
        'Youngin Park (MS, 2023.03 - 2024.08), part time industrial scholars program, Samsung Electronics]'];

    return (
        <div className="team-page">
            <section>
                <h2>Principal Investigator</h2>
                <div className="profile">
                    <div className="member">
                        <img
                            src={process.env.PUBLIC_URL + '/team/epark.jpg'}
                            alt="Prof. Eunbyung Park"
                            className="profile-img"
                        />
                        
                        <a href="https://silverbottlep.github.io/index.html">Eunbyung Park</a>
                        <div className='bio'>
                            <a href="mailto:epark@skku.edu">
                                <i className="fa fa-envelope-o" style={{ fontSize: '24px', color: 'black' }}></i>
                            </a>
                            <a href="https://silverbottlep.github.io/index.html">
                                <i className="fa fa-home" style={{ fontSize: '24px', color: 'black' }}></i>
                            </a>
                            <a href="https://scholar.google.com/citations?user=iPyuJmQAAAAJ&hl=en">
                                <i className="ai ai-google-scholar" style={{ fontSize: '24px', color: 'black' }}></i>
                            </a>
                            <a href="https://www.linkedin.com/in/eunbyung-park-286384b4/">
                                <i className="fa fa-linkedin" style={{ fontSize: '24px', color: 'black' }}></i>
                            </a>
                            <a href="https://twitter.com/silverbottlep">
                                <i className="fa fa-twitter" style={{ fontSize: '24px', color: 'black' }}></i>
                            </a>
                        </div>
                    </div>
                    <div className="details">
                        <p className="prof-intro">
                            <strong>Education</strong>
                            <ul>
                                <li>Ph.D., Computer Science at University of North Carolina at Chapel Hill, 2014.09 - 2019.12</li>
                                <li>M.S., Computer Science at Seoul National University, 2009.03 - 2011.02</li>
                                <li>B.S., Computer Science at Kyung Hee University, 2002.03 - 2009.02</li>
                            </ul>
                            <strong>Work Experience</strong>
                            <ul>
                                <li>Assistant Professor, <a href="https://ice.skku.edu/eng_ice/programs/departments/elec_intro.do" target="_blank">SKKU</a>, 2021.02 - Present</li>
                                <li>Applied Scientist, <a href="https://msturing.org" target="_blank">Microsoft Project Turing</a>, 2020.09 - 2021.02</li>
                                <li>Research Scientist, <a href="http://nuro.ai/" target="_blank">Nuro</a>, 2019.06 - 2020.08</li>
                                <li>Research Intern, <a href="https://deepmind.com/" target="_blank">Google DeepMind</a>, 2018.06 - 2018.10 </li>
                                <li>Research Intern, <a href="https://www.microsoft.com/en-us/research/" target="_blank">Microsoft Research</a>, 2017.06 - 2017.08</li>
                                <li>Research Intern, <a href="http://www.adobe.com/technology.html" target="_blank">Adobe Research</a>, 2016.06 - 2016.08</li>
                                <li>Research Intern, <a href="https://www.hp.com/us-en/hp-labs.html"  target="_blank">HP Labs</a>, 2015.06 - 2015.08</li>
                            </ul>
                        </p>
                        
                    </div>
                </div>
            </section>


            <section>
                <h2>Ph.D. Students</h2>
                <div className="students">
                    {phDStudents.map((student, index) => (
                        <div key={index} className="member">
                            <img src={student.img} alt={student.name} className="profile-img" />
                            <p>{student.name}</p>
                            <p id='desc'>{student.desc}</p>
                            <div className="student-links">
                                {student.email && <a href={`mailto:${student.email}`}><i className="fa fa-envelope-o" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.homepage && <a href={student.homepage}><i className="fa fa-home" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.scholar && <a href={student.scholar}><i className="ai ai-google-scholar" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.github && <a href={student.github}><i className="fa fa-github" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>Master Students</h2>
                <div className="students">
                    {masterStudents.map((student, index) => (
                        <div key={index} className="member">
                            <img src={student.img} alt={student.name} className="profile-img" />
                            <p>{student.name}</p>
                            <p id='desc'>{student.desc}</p>
                            <div className="student-links">
                                {student.email && <a href={`mailto:${student.email}`}><i className="fa fa-envelope-o" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.scholar && <a href={student.scholar}><i className="ai ai-google-scholar" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.github && <a href={student.github}><i className="fa fa-github" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>Undergraduate Students</h2>
                <div className="students">
                    {undergraduateStudents.map((student, index) => (
                        <div key={index} className="member">
                            <img src={student.img} alt={student.name} className="profile-img" />
                            <p>{student.name}</p>
                            <div className="student-links">
                                {student.email && <a href={`mailto:${student.email}`}><i className="fa fa-envelope-o" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.scholar && <a href={student.scholar}><i className="ai ai-google-scholar" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <section>
                <h2>Alumni</h2>
                <ul className="alumni-list">
                    {alumni.map((alumnus, index) => (
                        <li key={index}>{alumnus}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default TeamPage;