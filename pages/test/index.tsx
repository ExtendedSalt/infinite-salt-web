const Test = () => {
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <div className="w-[50vw]">
                <table className="border-collapse border border-slate-500 w-full">
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
                    <tbody>
                        <tr>
                            <td className="border border-slate-700 ...">Indiana</td>
                            <td className="border border-slate-700 ...">Indianapolis</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-700 ...">Ohio</td>
                            <td className="border border-slate-700 ...">Columbus</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-700 ...">Michigan</td>
                            <td className="border border-slate-700 ...">Detroit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Test