import { FaReact, FaPython, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Home() {
    return (
        <div className="home-container">
            <img
                src="/bmw.jpeg"
                alt="Jay - Fullstack Developer"
                className="profile-img"
            />

            <h1>Jay</h1>
            <p className="subtitle">
                <FaPython color="#3776AB" size={24} style={{ marginRight: "6px" }} />
                <FaReact color="#61DBFB" size={24} style={{ marginRight: "6px" }} />
                Fullstack Developer · React · Django · Supabase
            </p>

            <p className="intro">
                I'm Jay — a versatile Fullstack Developer with a strong command of frontend & backend tech.
                I build fast, scalable, and beautiful web apps using modern stacks like React, Next.js, TypeScript, Node.js, PostgreSQL, and Supabase.
                I love blending clean UX with powerful functionality.
            </p>

            <div className="home-buttons">
                <a href="/john maina cv.odt" download className="btn">
                    <FaDownload />
                    Download CV
                </a>

                <a
                    href="https://github.com/Johnmaina-8"
                    target="_blank"
                    rel="noreferrer"
                    className="btn outline"
                >
                    <FaGithub />
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/john-maina-2000/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn outline"
                >
                    <FaLinkedin />
                    LinkedIn
                </a>
            </div>
        </div>
    );
}

export default Home;
