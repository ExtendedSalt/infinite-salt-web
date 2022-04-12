import Head from "next/head"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
// import { useTranslation } from 'next-i18next'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Form = () => {
    const router = useRouter()

    useEffect(() => {
        if (!session) {
            signIn()
        }

    }, [])

    const [Data, setData] = useState({
        name: '',
        uid: '',
        server: '',
        versiongi: '',
        floorroom: '',
        floorhalf: '',
        country: '',
        partyteam: '',
        partyteam2: '',
        partyteam3: '',
        partyteam4: '',
        time: '',
        url: '',
        note: ''
    })

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setData((state) => ({
            ...state,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/test', Data)
            console.log(res.data)
            if (res.status === 201) {
                toast.success("ส่งฟอร์มเรียบร้อยแล้ว"), {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }
            }
        } catch (e) {

            toast.error("เซิร์ฟพัง: " + e), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,

            }
        }
    }

    // const { t } = useTranslation('form')

    const { data: session } = useSession()
    if (session) {
        console.log(session)
        const contextClass = {
            success: 'bg-green-600',
            error: 'bg-red-600',
            info: 'bg-gray-600',
            warning: 'bg-orange-400',
            default: 'bg-black',
            dark: 'bg-white-600 font-gray-300',
        }

        return (
            <>
                <Head>
                    <title>Speedrun Abyss Submittion</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

                </Head>

                <div className="w-screen h-full md:h-screen bg-[url('/AbyssBG.jpg')] bg-cover bg-no-repeat">
                    <div className="px-4 sm:px-8 xl:px-72 pb-11 lg:pb-0" style={{ paddingTop: "120px" }}>

                        <div className="mt-10 md:px-8 sm:mt-0">
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                <div className="md:col-span-1">
                                    <div className="px-4 sm:px-0">
                                        <h3 className="text-lg font-medium leading-6 text-white-900">Speedrun Abyss Submittion</h3>
                                        <p className="mt-1 text-sm text-white-600">กรอกเสร็จข้อมูลจะเข้าระบบและแสดงล่วงหน้าทันที</p>
                                        <br />

                                        <a className="text-sm">ทีมงานจะนับเวลาแบบ goldenhouse และจะอัพเดทอีกที ซึ่งจะแสดงข้อมูลก่อนล่วงหน้าก่อน</a>
                                        <br /><br />
                                        <a className="text-sm">UID ของคุณต้องมองเห็นได้ในการส่งวิดีโอทั้งหมด คุณไม่สามารถใช้บัญชีอื่นในการส่งได้ หากคุณต้องการปกปิด UID ของคุณ โปรด DM พิสูจน์ว่าวิดีโอนั้นเป็นของคุณเอง</a>
                                        <br /><br />
                                        <a className="text-sm">ห้ามใช้โปรแกรมช่วยเล่นทุกชนิด หากตรวจสอบเจอจะทำการลบออกจากกระดานนี้ทันที</a>
                                    </div>
                                </div>
                                <div className="mt-5 md:mt-0 md:col-span-2">
                                    <form action="#" onSubmit={handleSubmit}>
                                        <div className="shadow overflow-hidden sm:rounded-md">
                                            <div className="px-4 py-5 bg-black/30 sm:p-6">
                                                <div className="grid grid-cols-6 gap-6">
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="first-name" className="block text-sm font-medium text-white-700">
                                                            UID (User ID)
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="uid"
                                                            id="uid"
                                                            onChange={handleChange}
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-white-300 rounded-md text-white bg-black/20 backdrop-blur-xl"
                                                            required={true}
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="last-name" className="block text-sm font-medium text-white-700">
                                                            นามแฝง (Alias)
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            onChange={handleChange}
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-white-300 rounded-md text-white bg-black/20 backdrop-blur-xl"
                                                            required={true}
                                                        />
                                                    </div>




                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="version-gi" className="block text-sm font-medium text-white-700">
                                                            เวอร์ชั่นในเกม (Version)
                                                        </label>
                                                        <select
                                                            id="versiongi"
                                                            name="versiongi"
                                                            onChange={handleChange}
                                                            className="mt-1 block w-full py-2 px-3 border border-white-300 bg-black/20 backdrop-blur-xl rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            required={true}
                                                        >
                                                            <option className="bg-black">---</option>
                                                            <option className="bg-black">2.6</option>
                                                            <option className="bg-black">2.5</option>

                                                        </select>
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="abyssfloor" className="block text-sm font-medium text-white-700">
                                                            Abyss ชั้น 12
                                                        </label>
                                                        <select
                                                            id="floorhalf"
                                                            name="floorhalf"
                                                            onChange={handleChange}
                                                            className="mt-1 block w-full py-2 px-3 border border-white-300 bg-black/20 backdrop-blur-xl rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            required={true}
                                                        >
                                                            <option className="bg-black">-เลือกครึ่ง-</option>
                                                            <option className="bg-black">ครึ่งบน</option>
                                                            <option className="bg-black">ครึ่งล่าง</option>
                                                            <option className="bg-black">ทั้งคู่</option>
                                                        </select>
                                                        <select
                                                            id="floorroom"
                                                            name="floorroom"
                                                            onChange={handleChange}
                                                            className="mt-1 block w-full py-2 px-3 border border-white-300 bg-black/20 backdrop-blur-xl rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            required={true}
                                                        >
                                                            <option className="bg-black">-เลือกห้อง-</option>
                                                            <option className="bg-black">1</option>
                                                            <option className="bg-black">2</option>
                                                            <option className="bg-black">3</option>

                                                        </select>
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="Server" className="block text-sm font-medium text-white-700">
                                                            เลือกเซิร์ฟเวอร์
                                                        </label>
                                                        <select
                                                            id="server"
                                                            name="server"
                                                            onChange={handleChange}
                                                            className="mt-1 block w-full py-2 px-3 border border-white-300 bg-black/20 backdrop-blur-xl rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            required={true}
                                                        >
                                                            <option className="bg-black">---</option>
                                                            <option className="bg-black">เอเชีย</option>
                                                            <option className="bg-black">ยุโรป</option>
                                                            <option className="bg-black">อเมริกา</option>
                                                            <option className="bg-black">จีน</option>
                                                            <option className="bg-black">ไต้หวัน / ฮ่องกง</option>

                                                        </select>
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="version-gi" className="block text-sm font-medium text-white-700">
                                                            ทีมปาร์ตี้
                                                        </label>
                                                        <select
                                                            id="partyteam"
                                                            name="partyteam"
                                                            onChange={handleChange}
                                                            className="mt-1 block w-full py-2 px-3 border border-white-300 bg-black/20 backdrop-blur-xl rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            required={true}
                                                        >
                                                            <option className="bg-black">---</option>
                                                            <option className="bg-black">Albedo</option>
                                                            <option className="bg-black">Aloy</option>
                                                            <option className="bg-black">Amber</option>
                                                            <option className="bg-black">Arataki Itto</option>
                                                            <option className="bg-black">Babara</option>
                                                            <option className="bg-black">Beitou</option>
                                                            <option className="bg-black">Bennett</option>
                                                            <option className="bg-black">Chongyun</option>
                                                            <option className="bg-black">Diluc</option>
                                                            <option className="bg-black">Diona</option>
                                                            <option className="bg-black">Eula</option>
                                                            <option className="bg-black">Fischl</option>
                                                            <option className="bg-black">Ganyu</option>
                                                            <option className="bg-black">Gorou</option>
                                                            <option className="bg-black">Hu Tao</option>
                                                            <option className="bg-black">Jean</option>
                                                            <option className="bg-black">Kaedehara Kazuha</option>
                                                            <option className="bg-black">Kaeya</option>
                                                            <option className="bg-black">Kamisato Ayaka</option>
                                                            <option className="bg-black">Kamisato Ayato</option>
                                                            <option className="bg-black">Keqing</option>
                                                            <option className="bg-black">Klee</option>
                                                            <option className="bg-black">Kujou Sara</option>
                                                            <option className="bg-black">Lisa</option>
                                                            <option className="bg-black">Mona</option>
                                                            <option className="bg-black">Ningguang</option>
                                                            <option className="bg-black">Noelle</option>
                                                            <option className="bg-black">Qiqi</option>
                                                            <option className="bg-black">Raiden Shogun</option>
                                                            <option className="bg-black">Razor</option>
                                                            <option className="bg-black">Rosaria</option>
                                                            <option className="bg-black">Sangonomiya Kokomi</option>
                                                            <option className="bg-black">Sayu</option>
                                                            <option className="bg-black">Shenhe</option>
                                                            <option className="bg-black">Sucrose</option>
                                                            <option className="bg-black">Tartaglia</option>
                                                            <option className="bg-black">Thoma</option>
                                                            <option className="bg-black">Traveler</option>
                                                            <option className="bg-black">Venti</option>
                                                            <option className="bg-black">Xiangling</option>
                                                            <option className="bg-black">Xiao</option>
                                                            <option className="bg-black">Xingqiu</option>
                                                            <option className="bg-black">Xinyan</option>
                                                            <option className="bg-black">Yae Miko</option>
                                                            <option className="bg-black">Yanfei</option>
                                                            <option className="bg-black">Yoimiya</option>
                                                            <option className="bg-black">Yun Jin</option>
                                                            <option className="bg-black">Zhongli</option>
                                                        </select>
                                                        <select
                                                            id="partyteam2"
                                                            name="partyteam2"
                                                            onChange={handleChange}
                                                            className="mt-1 block w-full py-2 px-3 border border-white-300 bg-black/20 backdrop-blur-xl rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            required={true}
                                                        >   <option className="bg-black">---</option>
                                                            <option className="bg-black">Albedo</option>
                                                            <option className="bg-black">Aloy</option>
                                                            <option className="bg-black">Amber</option>
                                                            <option className="bg-black">Arataki Itto</option>
                                                            <option className="bg-black">Babara</option>
                                                            <option className="bg-black">Beitou</option>
                                                            <option className="bg-black">Bennett</option>
                                                            <option className="bg-black">Chongyun</option>
                                                            <option className="bg-black">Diluc</option>
                                                            <option className="bg-black">Diona</option>
                                                            <option className="bg-black">Eula</option>
                                                            <option className="bg-black">Fischl</option>
                                                            <option className="bg-black">Ganyu</option>
                                                            <option className="bg-black">Gorou</option>
                                                            <option className="bg-black">Hu Tao</option>
                                                            <option className="bg-black">Jean</option>
                                                            <option className="bg-black">Kaedehara Kazuha</option>
                                                            <option className="bg-black">Kaeya</option>
                                                            <option className="bg-black">Kamisato Ayaka</option>
                                                            <option className="bg-black">Kamisato Ayato</option>
                                                            <option className="bg-black">Keqing</option>
                                                            <option className="bg-black">Klee</option>
                                                            <option className="bg-black">Kujou Sara</option>
                                                            <option className="bg-black">Lisa</option>
                                                            <option className="bg-black">Mona</option>
                                                            <option className="bg-black">Ningguang</option>
                                                            <option className="bg-black">Noelle</option>
                                                            <option className="bg-black">Qiqi</option>
                                                            <option className="bg-black">Raiden Shogun</option>
                                                            <option className="bg-black">Razor</option>
                                                            <option className="bg-black">Rosaria</option>
                                                            <option className="bg-black">Sangonomiya Kokomi</option>
                                                            <option className="bg-black">Sayu</option>
                                                            <option className="bg-black">Shenhe</option>
                                                            <option className="bg-black">Sucrose</option>
                                                            <option className="bg-black">Tartaglia</option>
                                                            <option className="bg-black">Thoma</option>
                                                            <option className="bg-black">Traveler</option>
                                                            <option className="bg-black">Venti</option>
                                                            <option className="bg-black">Xiangling</option>
                                                            <option className="bg-black">Xiao</option>
                                                            <option className="bg-black">Xingqiu</option>
                                                            <option className="bg-black">Xinyan</option>
                                                            <option className="bg-black">Yae Miko</option>
                                                            <option className="bg-black">Yanfei</option>
                                                            <option className="bg-black">Yoimiya</option>
                                                            <option className="bg-black">Yun Jin</option>
                                                            <option className="bg-black">Zhongli</option>

                                                        </select>
                                                        <select
                                                            id="partyteam3"
                                                            name="partyteam3"
                                                            onChange={handleChange}
                                                            className="mt-1 block w-full py-2 px-3 border border-white-300 bg-black/20 backdrop-blur-xl rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            required={true}
                                                        >
                                                            <option className="bg-black">---</option>
                                                            <option className="bg-black">Albedo</option>
                                                            <option className="bg-black">Aloy</option>
                                                            <option className="bg-black">Amber</option>
                                                            <option className="bg-black">Arataki Itto</option>
                                                            <option className="bg-black">Babara</option>
                                                            <option className="bg-black">Beitou</option>
                                                            <option className="bg-black">Bennett</option>
                                                            <option className="bg-black">Chongyun</option>
                                                            <option className="bg-black">Diluc</option>
                                                            <option className="bg-black">Diona</option>
                                                            <option className="bg-black">Eula</option>
                                                            <option className="bg-black">Fischl</option>
                                                            <option className="bg-black">Ganyu</option>
                                                            <option className="bg-black">Gorou</option>
                                                            <option className="bg-black">Hu Tao</option>
                                                            <option className="bg-black">Jean</option>
                                                            <option className="bg-black">Kaedehara Kazuha</option>
                                                            <option className="bg-black">Kaeya</option>
                                                            <option className="bg-black">Kamisato Ayaka</option>
                                                            <option className="bg-black">Kamisato Ayato</option>
                                                            <option className="bg-black">Keqing</option>
                                                            <option className="bg-black">Klee</option>
                                                            <option className="bg-black">Kujou Sara</option>
                                                            <option className="bg-black">Lisa</option>
                                                            <option className="bg-black">Mona</option>
                                                            <option className="bg-black">Ningguang</option>
                                                            <option className="bg-black">Noelle</option>
                                                            <option className="bg-black">Qiqi</option>
                                                            <option className="bg-black">Raiden Shogun</option>
                                                            <option className="bg-black">Razor</option>
                                                            <option className="bg-black">Rosaria</option>
                                                            <option className="bg-black">Sangonomiya Kokomi</option>
                                                            <option className="bg-black">Sayu</option>
                                                            <option className="bg-black">Shenhe</option>
                                                            <option className="bg-black">Sucrose</option>
                                                            <option className="bg-black">Tartaglia</option>
                                                            <option className="bg-black">Thoma</option>
                                                            <option className="bg-black">Traveler</option>
                                                            <option className="bg-black">Venti</option>
                                                            <option className="bg-black">Xiangling</option>
                                                            <option className="bg-black">Xiao</option>
                                                            <option className="bg-black">Xingqiu</option>
                                                            <option className="bg-black">Xinyan</option>
                                                            <option className="bg-black">Yae Miko</option>
                                                            <option className="bg-black">Yanfei</option>
                                                            <option className="bg-black">Yoimiya</option>
                                                            <option className="bg-black">Yun Jin</option>
                                                            <option className="bg-black">Zhongli</option>

                                                        </select>
                                                        <select
                                                            id="partyteam4"
                                                            name="partyteam4"
                                                            onChange={handleChange}
                                                            className="mt-1 block w-full py-2 px-3 border border-white-300 bg-black/20 backdrop-blur-xl rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            required={true}
                                                        >
                                                            <option className="bg-black">---</option>
                                                            <option className="bg-black">Albedo</option>
                                                            <option className="bg-black">Aloy</option>
                                                            <option className="bg-black">Amber</option>
                                                            <option className="bg-black">Arataki Itto</option>
                                                            <option className="bg-black">Babara</option>
                                                            <option className="bg-black">Beitou</option>
                                                            <option className="bg-black">Bennett</option>
                                                            <option className="bg-black">Chongyun</option>
                                                            <option className="bg-black">Diluc</option>
                                                            <option className="bg-black">Diona</option>
                                                            <option className="bg-black">Eula</option>
                                                            <option className="bg-black">Fischl</option>
                                                            <option className="bg-black">Ganyu</option>
                                                            <option className="bg-black">Gorou</option>
                                                            <option className="bg-black">Hu Tao</option>
                                                            <option className="bg-black">Jean</option>
                                                            <option className="bg-black">Kaedehara Kazuha</option>
                                                            <option className="bg-black">Kaeya</option>
                                                            <option className="bg-black">Kamisato Ayaka</option>
                                                            <option className="bg-black">Kamisato Ayato</option>
                                                            <option className="bg-black">Keqing</option>
                                                            <option className="bg-black">Klee</option>
                                                            <option className="bg-black">Kujou Sara</option>
                                                            <option className="bg-black">Lisa</option>
                                                            <option className="bg-black">Mona</option>
                                                            <option className="bg-black">Ningguang</option>
                                                            <option className="bg-black">Noelle</option>
                                                            <option className="bg-black">Qiqi</option>
                                                            <option className="bg-black">Raiden Shogun</option>
                                                            <option className="bg-black">Razor</option>
                                                            <option className="bg-black">Rosaria</option>
                                                            <option className="bg-black">Sangonomiya Kokomi</option>
                                                            <option className="bg-black">Sayu</option>
                                                            <option className="bg-black">Shenhe</option>
                                                            <option className="bg-black">Sucrose</option>
                                                            <option className="bg-black">Tartaglia</option>
                                                            <option className="bg-black">Thoma</option>
                                                            <option className="bg-black">Traveler</option>
                                                            <option className="bg-black">Venti</option>
                                                            <option className="bg-black">Xiangling</option>
                                                            <option className="bg-black">Xiao</option>
                                                            <option className="bg-black">Xingqiu</option>
                                                            <option className="bg-black">Xinyan</option>
                                                            <option className="bg-black">Yae Miko</option>
                                                            <option className="bg-black">Yanfei</option>
                                                            <option className="bg-black">Yoimiya</option>
                                                            <option className="bg-black">Yun Jin</option>
                                                            <option className="bg-black">Zhongli</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-span-4 sm:col-span-4 lg:col-span-3">
                                                        <label htmlFor="city" className="block text-sm font-medium text-white-700">
                                                            ประเทศ
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="country"
                                                            id="country"
                                                            onChange={handleChange}
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-white-300 rounded-md text-white bg-black/20 backdrop-blur-xl"
                                                            required={true}
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                                        <label htmlFor="region" className="block text-sm font-medium text-white-700">
                                                            ลิ้งคลิป
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="url"
                                                            id="url"
                                                            onChange={handleChange}
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-white-300 rounded-md text-white bg-black/20 backdrop-blur-xl"
                                                            required={true}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-3 bg-black-50 text-right sm:px-6">
                                                <button
                                                    type="submit"
                                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    ส่ง!!
                                                </button>

                                            </div>
                                            <ToastContainer
                                                toastClassName={({ type }) =>
                                                    contextClass[type || 'default'] +
                                                    'relative flex p-1 mt-3 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-opacity-30 backdrop-filter backdrop-blur-md border border-white/10'
                                                }
                                                bodyClassName={() => 'text-sm font-white font-med block p-3 flex'}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </>
        )
    } else {

        return (
            <div className="w-screen h-screen flex justify-center items-center">
                <div>

                    <h3> Redirecting.... </h3>
                </div>
            </div>
        )
    }
}

export default Form;


