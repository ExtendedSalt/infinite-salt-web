import { css } from "@emotion/css";
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {

    return (
        <div className='bg-[#0a0a0a] border border-transparent border-t-white/20' style={{ fontFamily: "Montserrat" }}>
            <footer className=" pt-12 pb-8 lg:pb-4">
                <div className='container flex flex-col mx-auto lg:flex-row justify-between text-white w-screen px-12 lg:px-0'>
                    <div className='flex flex-col'>
                        <b className="mb-4">GENSHIN LEADERBOARD</b>
                        <Link href={'/speedrun/abyss'} passHref>
                            <a className="opacity-40 hover:opacity-100 duration-300">Speedrun Abyss</a>
                        </Link>
                        <Link href={'/form'} passHref>
                            <a className="opacity-40 hover:opacity-100 duration-300">Form Submittion</a>
                        </Link>
                        <a className="opacity-40">Event Submittion</a>
                    </div>
                    <div className='flex flex-col pt-12 lg:pt-0'>
                        <b className="mb-4" >Blog</b>
                        <a className="opacity-40" >DPS</a>
                        <a className="opacity-40" >Charector Guide</a>
                        <a className="opacity-40" >Artifact Guide</a>
                        <a className="opacity-40" >Weapon Guide</a>
                        <br />
                    </div>
                    <div className='flex flex-col pt-12 lg:pt-0'>
                        <b className="mb-4">FOLLOW AND CONTACT US</b>
                        <a className="opacity-40 hover:opacity-100 duration-300 flex" href={'https://www.youtube.com/channel/UC4ADfFxYcIK2cRZ1yGrZ7vQ'}>
                            <FontAwesomeIcon icon={faYoutube} className='opacity-50 hover:opacity-100 duration-200 h-6 w-6' />&nbsp;Youtube
                        </a>
                        <a className="opacity-40 hover:opacity-100 duration-300 flex" href={'https://discord.gg/tgxYTXvJsx'}>
                            <FontAwesomeIcon icon={faDiscord} className='opacity-50 hover:opacity-100 duration-200 h-6 w-6' />&nbsp;Discord
                        </a>
                        <a className="opacity-40 hover:opacity-100 duration-300 flex" href={'https://www.facebook.com/infsalt.th'}>
                            <FontAwesomeIcon icon={faFacebook} className='opacity-50 hover:opacity-100 duration-200 h-6 w-6' />&nbsp;Facebook Fanpage
                        </a>
                        <a className="opacity-40 hover:opacity-100 duration-300 flex" href={'https://www.facebook.com/groups/infsaltly.nchcct'}>
                            <FontAwesomeIcon icon={faFacebook} className='opacity-50 hover:opacity-100 duration-200 h-6 w-6' />&nbsp;Facebook Group
                        </a>
                        <a className="opacity-40 hover:opacity-100 duration-300 flex" href={'https://twitter.com/nxanywhere3704'}>
                            <FontAwesomeIcon icon={faTwitter} className='opacity-50 hover:opacity-100 duration-200 h-6 w-6' />&nbsp;Rinechxn
                        </a>
                        <br />
                    </div>
                    <div className='flex flex-col pt-12 lg:pt-0'>
                        <a className="mb-4 flex"><FontAwesomeIcon icon={faReact} className='duration-200 h-6 w-6' />&nbsp;| React 18.0.0</a>
                        <a className="opacity-40 hover:opacity-100 duration-300 hover:duration-150" href={'https://nextjs.org'}>Next.js 12.1.4</a>
                        <p>
                            <p className="opacity-40">Web Developed by <br /> </p>
                            <a href="https://www.nailordx.com/" className='opacity-40 hover:opacity-100 duration-300 hover:duration-150'>Nawapon Boonjua & </a>
                            <br />
                            <a href="https://www.theiceji.com/" className='opacity-40 hover:opacity-100 duration-300 hover:duration-150'>Jirayu Nilapan</a>
                        </p>

                        <a className="opacity-40">Director by NEiX</a>
                    </div>
                </div>
                <div className="px-4 pt-[48px] pb-[72px] flex flex-col items-center justify-center">
                    <div className="w-48 fill-white px-3" style={{ color: "white" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1288.27 174.43">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_4" data-name="Layer 4">
                                    <polygon className="cls-1" points="10.75 165.92 87.22 94.79 163.69 166.17 10.75 165.92" />
                                    <rect className="cls-2" x="8" y="8" width="158.43" height="158.43" />
                                    <text className="cls-3" transform="matrix(0.78, -0.62, 0.62, 0.78, 31.21, 122.6)">???</text>
                                    <text className="cls-3" transform="translate(110.58 95.88) rotate(38.32)">???</text>
                                    <circle className="cls-1" cx="87.22" cy="58.95" r="24.59" />
                                    <text className="cls-4" transform="translate(74.96 71.98)">$</text>
                                    <path className="cls-5" d="M198.2,13.42h24.24V118.16H198.2Z" />
                                    <path className="cls-5" d="M343.34,13.42V118.16h-19.9L271.22,54.57v63.59H247.28V13.42h20L319.4,77V13.42Z" />
                                    <path className="cls-5" d="M392.42,32.87V60.55H440.9V80H392.42v38.15H368.18V13.42h79.16V32.87Z" />
                                    <path className="cls-5" d="M463.8,13.42H488V118.16H463.8Z" />
                                    <path className="cls-5" d="M608.94,13.42V118.16H589L536.82,54.57v63.59H512.88V13.42h20L585,77V13.42Z" />
                                    <path className="cls-5" d="M633.78,13.42H658V118.16H633.78Z" />
                                    <path className="cls-5" d="M704.56,33.17H671V13.42h91.27V33.17H728.8v85H704.56Z" />
                                    <path className="cls-5" d="M856.43,98.71v19.45h-81.1V13.42h79.16V32.87H799.42V55.61h48.63V74.47H799.42V98.71Z" />
                                    <path className="cls-5" d="M928.48,116.59q-11.6-3.36-18.63-8.75l8.23-18.26a55.71,55.71,0,0,0,16,7.93,60,60,0,0,0,18.56,3q10.32,0,15.26-3.07c3.29-2,4.94-4.76,4.94-8.16a7.82,7.82,0,0,0-2.92-6.21,22.32,22.32,0,0,0-7.48-4q-4.58-1.5-12.35-3.29a170.69,170.69,0,0,1-19.6-5.69A31.77,31.77,0,0,1,917.41,61q-5.48-6.28-5.47-16.76a29.17,29.17,0,0,1,4.94-16.53Q921.83,20.3,931.77,16t24.32-4.34a80.37,80.37,0,0,1,19.6,2.4,57.89,57.89,0,0,1,16.76,6.88L985,39.3q-14.52-8.22-29-8.23-10.19,0-15,3.3A10,10,0,0,0,936,43.05q0,5.39,5.61,8t17.13,5.16a172.12,172.12,0,0,1,19.6,5.69,32.58,32.58,0,0,1,13.1,9q5.46,6.14,5.46,16.61a28.61,28.61,0,0,1-5,16.38q-5,7.41-15,11.75T952.5,120A85.52,85.52,0,0,1,928.48,116.59Z" />
                                    <path className="cls-5" d="M1082.53,95.72H1033.9l-9.28,22.44H999.78l46.68-104.74h24l46.83,104.74H1091.8Zm-7.63-18.41-16.61-40.1-16.61,40.1Z" />
                                    <path className="cls-5" d="M1128.16,13.42h24.24v85h52.53v19.75h-76.77Z" />
                                    <path className="cls-5" d="M1230.51,33.17H1197V13.42h91.27V33.17h-33.52v85h-24.24Z" />
                                    <path className="cls-5" d="M204.2,141.49h-4.58v-2.17h11.74v2.17h-4.59v11.66H204.2Z" />
                                    <path className="cls-5" d="M229.53,139.32v13.83H227v-5.93h-7.15v5.93h-2.57V139.32h2.57V145H227v-5.71Z" />
                                    <path className="cls-5" d="M246.17,150h-6.92l-1.36,3.2h-2.65l6.22-13.83H244l6.24,13.83h-2.68Zm-.85-2-2.61-6-2.59,6Z" />
                                    <path className="cls-5" d="M255.94,139.32h2.57v13.83h-2.57Z" />
                                    <path className="cls-5" d="M266.2,139.32h2.57V151H276v2.17h-9.8Z" />
                                    <path className="cls-5" d="M291.05,150h-6.91l-1.37,3.2h-2.64l6.22-13.83h2.53l6.24,13.83h-2.69Zm-.85-2-2.61-6-2.59,6Z" />
                                    <path className="cls-5" d="M313.12,139.32v13.83H311l-7.62-9.36v9.36h-2.55V139.32h2.11l7.63,9.37v-9.37Z" />
                                    <path className="cls-5" d="M320.78,139.32h6.05a8.74,8.74,0,0,1,3.93.86,6.35,6.35,0,0,1,2.67,2.43,7.39,7.39,0,0,1,0,7.25,6.35,6.35,0,0,1-2.67,2.43,8.74,8.74,0,0,1-3.93.86h-6.05ZM326.71,151a5.88,5.88,0,0,0,2.68-.59,4.1,4.1,0,0,0,1.77-1.65,5.28,5.28,0,0,0,0-5,4.12,4.12,0,0,0-1.77-1.66,5.88,5.88,0,0,0-2.68-.59h-3.36V151Z" />
                                    <path className="cls-5" d="M353.07,152.43a6.72,6.72,0,0,1-2.64-2.54,7,7,0,0,1-1-3.65,7,7,0,0,1,1-3.66,6.81,6.81,0,0,1,2.65-2.54,8.29,8.29,0,0,1,6.89-.32,6.25,6.25,0,0,1,2.37,1.72L360.69,143a4.83,4.83,0,0,0-3.69-1.62,5.12,5.12,0,0,0-2.55.62,4.44,4.44,0,0,0-1.76,1.73,5,5,0,0,0-.63,2.51,5,5,0,0,0,.63,2.51,4.48,4.48,0,0,0,1.76,1.72,5.13,5.13,0,0,0,2.55.63,4.82,4.82,0,0,0,3.69-1.64l1.66,1.58a6.42,6.42,0,0,1-2.38,1.72,8.05,8.05,0,0,1-3.11.59A7.84,7.84,0,0,1,353.07,152.43Z" />
                                    <path className="cls-5" d="M371.12,152.43a6.82,6.82,0,0,1-2.67-2.55,7.33,7.33,0,0,1,0-7.29,6.82,6.82,0,0,1,2.67-2.55,8.37,8.37,0,0,1,7.63,0,6.77,6.77,0,0,1,2.66,2.54,7.37,7.37,0,0,1,0,7.31,6.77,6.77,0,0,1-2.66,2.54,8.37,8.37,0,0,1-7.63,0Zm6.3-2a4.45,4.45,0,0,0,1.74-1.73,5,5,0,0,0,.63-2.5,5,5,0,0,0-.63-2.5,4.41,4.41,0,0,0-1.74-1.74,5.31,5.31,0,0,0-5,0,4.45,4.45,0,0,0-1.73,1.74,4.87,4.87,0,0,0-.64,2.5,4.92,4.92,0,0,0,.64,2.5,4.49,4.49,0,0,0,1.73,1.73,5.24,5.24,0,0,0,5,0Z" />
                                    <path className="cls-5" d="M401.76,153.15l0-9.17-4.54,7.59h-1.15l-4.54-7.47v9.05h-2.45V139.32h2.11l5.49,9.17,5.4-9.17h2.11l0,13.83Z" />
                                    <path className="cls-5" d="M424.58,153.15l0-9.17L420,151.57h-1.15l-4.54-7.47v9.05h-2.45V139.32H414l5.49,9.17,5.4-9.17H427l0,13.83Z" />
                                    <path className="cls-5" d="M436.18,151.74a6.26,6.26,0,0,1-1.6-4.61v-7.81h2.56V147c0,2.71,1.18,4.07,3.52,4.07s3.5-1.36,3.5-4.07v-7.71h2.53v7.81a6.3,6.3,0,0,1-1.59,4.61,7,7,0,0,1-8.92,0Z" />
                                    <path className="cls-5" d="M466.52,139.32v13.83h-2.11l-7.63-9.36v9.36h-2.55V139.32h2.12l7.62,9.37v-9.37Z" />
                                    <path className="cls-5" d="M474.19,139.32h2.56v13.83h-2.56Z" />
                                    <path className="cls-5" d="M487.24,141.49h-4.58v-2.17H494.4v2.17h-4.59v11.66h-2.57Z" />
                                    <path className="cls-5" d="M506.05,148.27v4.88h-2.57v-4.84l-5.43-9h2.75l4.05,6.74,4.09-6.74h2.53Z" />
                                    <path className="cls-6" d="M526.5,138.49h2.27V157H526.5Z" />
                                    <path className="cls-6" d="M545.84,141.14h2.57v12h-2.57Z" />
                                    <path className="cls-6" d="M568.38,139.32v13.83h-2.11l-7.63-9.36v9.36h-2.55V139.32h2.12l7.62,9.37v-9.37Z" />
                                    <path className="cls-6" d="M578.61,141.47v4.21h6.68v2.18h-6.68v5.29h-2.56V139.32h10.09v2.15Z" />
                                    <path className="cls-6" d="M592.58,139.32h2.57v13.83h-2.57Z" />
                                    <path className="cls-6" d="M615.12,139.32v13.83H613l-7.63-9.36v9.36h-2.54V139.32H605l7.62,9.37v-9.37Z" />
                                    <path className="cls-6" d="M622.79,139.32h2.57v13.83h-2.57Z" />
                                    <path className="cls-6" d="M635.85,141.49h-4.59v-2.17H643v2.17h-4.59v11.66h-2.56Z" />
                                    <path className="cls-6" d="M659.26,151v2.15H648.89V139.32H659v2.15h-7.53v3.6h6.68v2.11h-6.68V151Z" />
                                    <path className="cls-6" d="M676.67,152.89a6.45,6.45,0,0,1-2.36-1.2l.89-2a6.94,6.94,0,0,0,2.08,1.1,7.69,7.69,0,0,0,2.48.42,4.25,4.25,0,0,0,2.3-.49,1.49,1.49,0,0,0,.77-1.3,1.28,1.28,0,0,0-.43-1,2.81,2.81,0,0,0-1.08-.6c-.43-.15-1-.31-1.77-.5a20.35,20.35,0,0,1-2.56-.75,4.26,4.26,0,0,1-1.68-1.17,3.18,3.18,0,0,1-.7-2.17,3.63,3.63,0,0,1,.62-2.08,4.2,4.2,0,0,1,1.88-1.49,7.55,7.55,0,0,1,3.07-.56,10,10,0,0,1,2.49.32,6.77,6.77,0,0,1,2.11.91l-.81,2a8.36,8.36,0,0,0-1.9-.81,7.16,7.16,0,0,0-1.91-.27,4,4,0,0,0-2.26.51,1.57,1.57,0,0,0-.74,1.36,1.24,1.24,0,0,0,.42,1,3.1,3.1,0,0,0,1.08.6c.43.14,1,.31,1.78.49a18.47,18.47,0,0,1,2.52.74,4.28,4.28,0,0,1,1.69,1.18,3.06,3.06,0,0,1,.71,2.13,3.61,3.61,0,0,1-.63,2.07,4.22,4.22,0,0,1-1.88,1.49,7.87,7.87,0,0,1-3.09.55A10.37,10.37,0,0,1,676.67,152.89Z" />
                                    <path className="cls-6" d="M700.82,150h-6.91l-1.36,3.2H689.9l6.22-13.83h2.53l6.24,13.83h-2.68Zm-.85-2-2.6-6-2.59,6Z" />
                                    <path className="cls-6" d="M710.6,139.32h2.57V151h7.23v2.17h-9.8Z" />
                                    <path className="cls-6" d="M727.91,141.49h-4.58v-2.17h11.73v2.17h-4.58v11.66h-2.57Z" />
                                    <path className="cls-6" d="M753,152.43a6.82,6.82,0,0,1-2.67-2.55,7.33,7.33,0,0,1,0-7.29A6.82,6.82,0,0,1,753,140a8.35,8.35,0,0,1,7.62,0,6.74,6.74,0,0,1,2.67,2.54,7.37,7.37,0,0,1,0,7.31,6.74,6.74,0,0,1-2.67,2.54,8.35,8.35,0,0,1-7.62,0Zm6.3-2a4.45,4.45,0,0,0,1.74-1.73,5,5,0,0,0,.63-2.5,5,5,0,0,0-.63-2.5A4.41,4.41,0,0,0,759.3,142a5.31,5.31,0,0,0-5,0,4.48,4.48,0,0,0-1.74,1.74,5,5,0,0,0-.63,2.5,5,5,0,0,0,.63,2.5,4.52,4.52,0,0,0,1.74,1.73,5.24,5.24,0,0,0,5,0Z" />
                                    <path className="cls-6" d="M773.51,141.47v4.21h6.67v2.18h-6.67v5.29h-2.57V139.32H781v2.15Z" />
                                    <path className="cls-6" d="M806.32,146.08h2.43v5.51a7.57,7.57,0,0,1-2.49,1.3,9.33,9.33,0,0,1-2.92.46,8,8,0,0,1-3.82-.92,6.77,6.77,0,0,1-2.66-2.54,7.37,7.37,0,0,1,0-7.31,6.74,6.74,0,0,1,2.67-2.54,8,8,0,0,1,3.85-.92,8.27,8.27,0,0,1,3.16.58,6.25,6.25,0,0,1,2.39,1.68L807.31,143a5.19,5.19,0,0,0-3.82-1.58,5.33,5.33,0,0,0-2.59.61,4.46,4.46,0,0,0-1.78,1.72,4.91,4.91,0,0,0-.64,2.53,4.8,4.8,0,0,0,.64,2.48,4.58,4.58,0,0,0,1.78,1.74,5.18,5.18,0,0,0,2.57.64,5.54,5.54,0,0,0,2.85-.72Z" />
                                    <path className="cls-6" d="M826.45,151v2.15H816.08V139.32h10.09v2.15h-7.52v3.6h6.67v2.11h-6.67V151Z" />
                                    <path className="cls-6" d="M845.55,139.32v13.83h-2.11l-7.63-9.36v9.36h-2.54V139.32h2.11l7.63,9.37v-9.37Z" />
                                    <path className="cls-6" d="M854.42,152.89a6.42,6.42,0,0,1-2.37-1.2l.89-2a6.88,6.88,0,0,0,2.09,1.1,7.64,7.64,0,0,0,2.48.42,4.3,4.3,0,0,0,2.3-.49,1.51,1.51,0,0,0,.76-1.3,1.25,1.25,0,0,0-.43-1,2.85,2.85,0,0,0-1.07-.6c-.44-.15-1-.31-1.78-.5a20.87,20.87,0,0,1-2.56-.75,4.26,4.26,0,0,1-1.68-1.17,3.18,3.18,0,0,1-.7-2.17,3.71,3.71,0,0,1,.62-2.08,4.2,4.2,0,0,1,1.88-1.49,7.59,7.59,0,0,1,3.07-.56,10,10,0,0,1,2.49.32,6.66,6.66,0,0,1,2.11.91l-.8,2a8.56,8.56,0,0,0-1.9-.81,7.28,7.28,0,0,0-1.92-.27,4,4,0,0,0-2.26.51,1.59,1.59,0,0,0-.74,1.36,1.24,1.24,0,0,0,.42,1,3.3,3.3,0,0,0,1.08.6c.44.14,1,.31,1.78.49a18.66,18.66,0,0,1,2.53.74,4.35,4.35,0,0,1,1.69,1.18,3.1,3.1,0,0,1,.7,2.13,3.68,3.68,0,0,1-.62,2.07,4.3,4.3,0,0,1-1.89,1.49,7.82,7.82,0,0,1-3.08.55A10.28,10.28,0,0,1,854.42,152.89Z" />
                                    <path className="cls-6" d="M881.89,139.32v13.83h-2.57v-5.93h-7.15v5.93H869.6V139.32h2.57V145h7.15v-5.71Z" />
                                    <path className="cls-6" d="M889.55,139.32h2.57v13.83h-2.57Z" />
                                    <path className="cls-6" d="M912.09,139.32v13.83H910l-7.63-9.36v9.36H899.8V139.32h2.12l7.62,9.37v-9.37Z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <p className="uppercase text-sm font-medium opacity-70">by nxhouse studio</p>
                </div>
            </footer>
        </div>
    )
}