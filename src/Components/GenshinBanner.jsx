import { useState, useEffect } from "react";
import axios from "axios";

const GenshinBanner = () => {
  const [serverData, setServerData] = useState(null);
  const [selectedServer, setSelectedServer] = useState('Asia'); // Server default

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://genshin-banner-countdown.netlify.app/api/actual');
        if (response.data) {
          setServerData(response.data);
        } else {
          console.error('Server data not available in the response.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
    
  const handleServerChange = (event) => {
    setSelectedServer(event.target.value);
  };

  return (
    <div>
      {serverData && (
        <select className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm" value={selectedServer} onChange={handleServerChange}>
          {Object.keys(serverData).map((server) => (
            <option key={server} value={server}>
              {server}
            </option>
          ))}
        </select>
      )}

      {serverData && serverData[selectedServer] ? (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
            <h2 className="p-2 bg-slate-900 text-white text-center"> Server Yang Dipilih : {selectedServer}</h2>
            <table className="w-full text-sm text-left rtl:text-right text-black">
                <tbody>
                    <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">Hari</th>
                        <td className="px-6 py-4">{serverData[selectedServer].days}</td>
                    </tr>
                    <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">Jam</th>
                        <td className="px-6 py-4">{serverData[selectedServer].hours}</td>
                    </tr>
                    <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">Menit</th>
                        <td className="px-6 py-4">{serverData[selectedServer].minutes}</td>
                    </tr>
                    <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">Maintenance</th>
                        <td className="px-6 py-4">{serverData[selectedServer].maintenance ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">Waktu Tersisa</th>
                        <td className="px-6 py-4">{serverData[selectedServer].timeFormatted}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      ) : (
        <p>{serverData ? 'Server Yang Dipilih Tidak Ada' : 'Loading...'}</p>
      )}
    </div>
  );
};

export default GenshinBanner;
