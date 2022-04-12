import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { css } from '@emotion/css'
// import { useTranslation } from 'next-i18next'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// import nextI18NextConfig from '../next-i18next.config.js';
import Cliprame from '../components/clipframe'
import axios from 'axios'

import { motion } from 'framer-motion'

const Home: NextPage = ({ data }) => {

  const [IsData, setIsData] = useState(false)
  useEffect(() => {
    setIsData(data)
  }, [data])

  const bgx = css`
    background-image: url('/Untitle0.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  `

  const container = css`
    width: 100vw;
    height: 100%;
  `

  // const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>Genshin Leaderboard</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <div className={bgx}>
        <div className={container}>
          <div className="lg:flex lg:items-center lg:justify-center lg:h-screen">
            <div className="pl-6 pr-6 xl:pl-[20rem] xl:pr-[20rem]" style={{ paddingTop: "120px" }}>
              <div className="lg:pl-0 flex flex-col w-full">
                <b className="text-sm" style={{ fontFamily: "Montserrat" }}>Welcome to</b>
                <b className="text-5xl sm:text-6xl text-[#2effee]" style={{ fontFamily: "Montserrat" }}>The Infinite Salt Thailand~!</b>
                <p className="tracking-wide uppercase">พื้นที่ชาว Genshin ของประเทศไทยและภูมิภาคเอเชียตะวันออกเฉียงใต้ สำหรับ SpeedRun DPS และ Hyper-Investment</p>
              </div>
              <div style={{ paddingBottom: '15px' }}>
                <div style={{ paddingTop: "20px" }}>
                  <b>hyperinvestment คืออะไร</b> <br />
                  <a>Hyperinvestment ไม่ได้หมายถึงการใช้จ่ายเงินไปกับเกมเสมอไป แต่เป็นการลงทุนด้านทรัพยากรและเวลาสูงที่มุ่งเป้าไปที่การทำให้ตัวละครหรือทีมสมบูรณ์แบบ สิ่งที่ Golden House พยายามจะหล่อเลี้ยงคือการผลักดันขีดจำกัดของสิ่งที่เป็นไปได้ใน Genshin Impact และสำรวจเพดานของตัวละครทุกตัวในเกม ลืมเรื่องความคุ้มค่าไปได้เลย เพราะที่นี่เป็นสถานที่สำหรับทุกคนที่สนใจที่จะนำเสนอตัวละครเฉพาะที่ดีที่สุดออกมา ไม่ว่าจะต้องใช้อะไร!</a>
                </div>
                <div style={{ paddingTop: "20px" }}>
                  <b>Speedrunning</b> <br />
                  <a>ที่ระดับสูงสุดของการลงทุน คำถามมักจะไม่ใช่ว่าคุณสามารถเคลียร์เนื้อหาในเกมนี้ได้หรือไม่ แต่คือคุณจะเคลียร์เนื้อหาได้เร็วแค่ไหน Speedrunning ท้าทายขอบเขตของทั้งการอุทิศทรัพยากรและทักษะของผู้เล่น ทำให้เป็นสนามทดสอบที่สำคัญในการสังเกตผลของการลงทุนมากเกินไป ส่วน Speedrunning ยอมรับการส่ง speedrun ในประเภท speedrunning ต่างๆ เช่น Spiral Abyss และ Domain วิ่ง นอกจากนี้ยังทุ่มเทให้กับการสร้างกลยุทธ์ทางทฤษฎี speedrun เพื่อให้ได้เวลาที่ต่ำที่สุดเท่าที่จะเป็นไปได้</a>
                </div>
                <div style={{ paddingTop: "20px" }}>
                  <b>DPS หรือเรียกอีกอย่างว่า “Damage Per Screenshot”</b> <br />
                  <a>แม้ว่าโดยทั่วไปแล้วจะใช้งานไม่ได้ในเกมมาตรฐาน แต่การค้นหาจำนวนความเสียหายสูงสุดที่คุณสามารถทำได้ในการโจมตีครั้งเดียวนั้นเป็นอีกพื้นที่หนึ่งที่การลงทุนมากเกินไปมักจะสัมผัส DPS เป็นหนึ่งในวิธีที่ตรงไปตรงมาที่สุดในการสำรวจเพดานของตัวละครแต่ละตัวในเกมนี้ กระตุ้นให้เราค้นหาตัวคูณที่มากขึ้นเรื่อยๆ ส่วน DPS ยอมรับการส่งความเสียหายต่อเนื่องสำหรับตัวละครทั้งหมด และยึดติดอยู่กับการสร้างทฤษฎีเพื่อให้ได้ตัวเลขความเสียหายสูงสุดสำหรับตัวละครแต่ละตัว</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center pb-8" style={{ fontFamily: 'Montserrat' }}>
            <b className="text-1xl lg:text-4xl">Leaderboard Player Preview</b>
          </div>
          <div className='w-screen lg:h-1/2 overflow-hidden flex justify-center pb-16'>
            <div className='w-full px-3 lg:px-0 lg:w-2/5'>
              {IsData && (
                <Cliprame data={data} />
              )}
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Home

export const getServerSideProps = async ({ locale }) => {
  const res = await axios.get(process.env.API_URL)
  const data = res.data.data
  return {
    props: {
      data: data,
    }
  }
}