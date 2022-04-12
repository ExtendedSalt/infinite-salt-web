import Store from './store'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Sidebar() {
    const navOpen = Store((state) => state.navOpen_speed)
    const setNavOpen = Store((state) => state.setNavOpen_speed)
    const setNavOpenMobile = Store((state) => state.setNavOpen_Mobile)
    const [Drop, setDrop] = useState(false)
    const { data: session } = useSession()
    return (
        <>
            <motion.div
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                exit={{ x: -500 }}
                transition={{
                    duration: 0.4
                }}
                className='w-screen h-screen block fixed lg:hidden z-[90]'>
                <nav className="fixed w-screen h-screen z-10 bg-[#131313]/80 backdrop-blur-lg">
                    <div className="max-w-5xl h-full mx-auto px-6">
                        <div className="flex h-full">
                            <div className="pt-24 xl:justify-between w-full" style={{fontFamily:'Montserrat'}}>
                                <div className="flex flex-col justify-start items-start xl:hidden text-white font-medium w-full">
                                    <b>M E N U</b> <br />
                                    <div className='opacity-75 hover:opacity-100 duration-200' onClick={() => setNavOpenMobile(false)}>
                                        <Link href={'/'}>
                                            <a >HOME</a>
                                        </Link>
                                    </div>

                                    <button onClick={() => setDrop(!Drop)} className="text-white flex flex-col w-full overflow-hidden opacity-75 hover:opacity-100 duration-200" type="button">
                                        SPEEDRUNNING
                                        {/* <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                            </path>
                                        </svg> */}
                                        {Drop && (
                                            <motion.div
                                                initial={{ y: -500 }}
                                                animate={{ y: 0 }}
                                                exit={{ y: -500 }}
                                                transition={{
                                                    duration: 0.2,

                                                }}
                                                onMouseLeave={() => setDrop(false)}
                                                style={{ display: !Drop ? 'none' : 'flex' }}
                                                className="z-10  w-full bg-black/50 backdrop-blur-md rounded divide-y divide-gray-100 shadow flex-col">
                                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 text-left pl-4 " aria-labelledby="dropdownDefault">
                                                    <li onClick={() => {
                                                        setNavOpenMobile(false)
                                                        setNavOpenMobile(false)
                                                    }}>
                                                        <Link href={'/speedrun/abyss'}>
                                                            <a className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Abyss Leaderboard</a>
                                                        </Link>
                                                    </li >
                                                    <li onClick={() => setNavOpenMobile(false)}>
                                                        <a className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Domain Leaderboard</a>
                                                    </li>
                                                    <li onClick={() => setNavOpenMobile(false)}>
                                                        <a className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Event Leaderboard</a>
                                                    </li>
                                                    <li onClick={() => setNavOpenMobile(false)}>
                                                        <a className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Boss Leaderboard</a>
                                                    </li>
                                                    <li onClick={() => setNavOpenMobile(false)}>
                                                        <Link href={'/form'}>
                                                            <a className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Form Request</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </motion.div>)}
                                    </button>

                                    <div className='opacity-75 hover:opacity-100 duration-200' onClick={() => setNavOpenMobile(false)}>
                                        <a href="#">DPS</a>
                                    </div>

                                    <div className='opacity-75 hover:opacity-100 duration-200' onClick={() => setNavOpenMobile(false)}>
                                        <a href="#">CONTACT</a>
                                    </div>
                                    <br />
                                    <div>
                                        <Link href={'https://discord.gg/tgxYTXvJsx'}>
                                            <div className='opacity-50 hover:opacity-100 duration-200 flex'>
                                                <FontAwesomeIcon icon={faDiscord} className='h-6 w-6' />&nbsp;
                                                <a>Discord Community</a>
                                            </div>
                                        </Link>

                                    </div>

                                    <b className="pt-4 pb-1">USER</b>
                                    <div className="flex pt-4 pb-4">
                                        {session && <img src={session.user.image} className="h-14 w-14 rounded-full" />}&nbsp;
                                        <div className="flex flex-col">
                                            {session && <a className="text-sm pt-[2px] items-start pl-2 font-bold">{session.user.name} </a>}
                                            <div className="pl-2">

                                                <button className="border mt-1 w-20 items-start hover:bg-cyan-300 hover:text-black duration-200 text-sm">
                                                    {session ? (
                                                        <a onClick={() => signOut()}>Logout</a>
                                                    ) : (
                                                        <Link href={'/login'}>
                                                            <button onClick={() => setNavOpenMobile(false)}>
                                                                Login
                                                            </button>
                                                        </Link>

                                                    )}

                                                </button>

                                            </div>

                                        </div>


                                    </div>
                                    {/* <div className="pl-1 pt-2">
                                        Language:&nbsp;
                                        <select
                                            className="py-1 px-2 border border-none bg-transparent backdrop-blur-xl rounded-md shadow-sm focus:outline-none sm:text-sm"

                                        >
                                            <option className="bg-black">ENG</option>
                                            <option className="bg-black">TH</option>

                                        </select>
                                    </div> */}


                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </motion.div>
        </>
    )
}