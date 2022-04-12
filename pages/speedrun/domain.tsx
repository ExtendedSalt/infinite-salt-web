import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import { charimg } from '../../components/char'
import Image from 'next/image'
import { css } from '@emotion/css'

export const getServerSideProps = async () => {
    const res = await axios.get(process.env.API_URL)
    const data = res.data.data
    return {
        props: {
            data: data
        }
    }
}


export default function Abyss({ data }) {
    
    const [IsData,setIsData] = useState(false)
    useEffect(() => {
        setIsData(data)
    }, [data])


    const abbg = css`
            background-image: url('/AbyssBG.jpg');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;    
        `
    const container = css`
            width: 100vw;
            height: 100%;
            padding-bottom: 4rem;
        `

    return (
        <>
            <Head>
                <title>สถิติการท้าท้ายอบิส | Genshin Leaderboard</title>
            </Head>
            <div className={abbg}>
                <div className={container}>
                    <div>
                        <div className="pb-16">
                            <div className="px-4 md:px-12 lg:px-64 pb-16" style={{ paddingTop: '120px' }}>
                                <div>
                                    <h1 className="text-5xl">Domain Leaderboards</h1>
                                    <br />
                                    <b>เกณฑ์และกติกา</b>
                                    <p>อบิสชั้น 12-1-1 (กองโจร) รับตั้งแต่ 30 วิลงมา และมากกว่านั้น</p>
                                    <p>อบิสชั้น 12-1-2 (Ruin guard) รับตั้งแต่ 7 วินาทีลงมาและมากกว่านั้น</p>
                                    <p>อบิสชั้น 12-2-1 (whopper flower) รับตั้งแต่ 13 วินาทีลงมาและมากกว่านั้น</p>
                                    <p></p>
                                    <p></p>
                                    <br />
                                    <div>
                                        <b>คุณสามารถส่งฟอร์มผลการท้าทายได้ที่นี่</b>
                                        <br />
                                        <div className='h-[32px] w-[120px] items-center justify-center'>
                                            <Link href={'/form'} passHref>
                                                <a>กดเลย!!!</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div className='w-full bg-black/50'>
                                    <div className="px-4 md:px-10 py-4 md:py-7">
                                        <div className="flex items-center justify-between">
                                            <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-white">Leaderboard Database</p>
                                          
                                        </div>
                 
                                    </div>
                                    <div className="mt-1 overflow-y-scroll" style={{ height: "50vh" }}>
                                        <table className='w-full whitespace-nowrap'>
                                            <thead>
                                                <tr>
                                                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-white-300 border-cyan-700">Version</th>
                                                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-white-300 border-cyan-700">Floor</th>
                                                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-white-300 border-cyan-700">AKA</th>
                                                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-white-300 border-cyan-700">Uid</th>
                                                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-white-300 border-cyan-700">time</th>
                                                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-white-300 border-cyan-700">Partyteam</th>
                                                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-white-300 border-cyan-700">server</th>
                                                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-white-300 border-cyan-700">Country</th>
                                                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-white-300 border-cyan-700">notes</th>
                                                </tr>
                                            </thead>
                                            {IsData && (
                                                <>
                                                    {data.map((v: any, i: number) => (<Items d={v} key={i} />))}
                                                </>
                                                )

                                            }


                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Items = ({ d }) => {

    return (
        <tbody>
            <tr className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex relative'>
                <p className='absolute top-[9px]'>{d.versiongi}</p>
            </tr>
            <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                <p>12 -&nbsp;{d.floorroom} - {d.floorhalf}</p>
            </td>
            <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                <a href={d.url} className="font-bold hover:underline hover:underline-offset-4 duration-200">{d.name}</a>
            </td>
            <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                <p>{d.uid}</p>
            </td>
            <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                <p>{d.time}</p>
            </td>
            <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex space-x-4'>
                {d.partyteam && (
                    <div className='w-8 h-8'>
                        <Image src={`/src/charector` + charimg[d.partyteam]} width={256} height={256} />
                    </div>
                )}

                {d.partyteam2 && (
                    <div className='w-8 h-8'>
                        <Image src={`/src/charector` + charimg[d.partyteam2]} width={256} height={256} />
                    </div>
                )}

                {d.partyteam3 && (
                    <div className='w-8 h-8'>
                        <Image src={`/src/charector` + charimg[d.partyteam3]} width={256} height={256} />
                    </div>
                )}

                {d.partyteam4 && (
                    <div className='w-8 h-8'>
                        <Image src={`/src/charector` + charimg[d.partyteam4]} width={256} height={256} />
                    </div>
                )}
            </td>
            <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                <p>{d.server}</p>
            </td>
            <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                <p>{d.country}</p>
            </td>
            <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                <a>{d.note}</a>
            </td>
        </tbody>
    )
}