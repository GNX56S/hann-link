import ButtonLink from './Components/ButtonLink'
import GenshinBanner from './Components/GenshinBanner'
import Profiles from './Components/Profiles'

function App() {

  return (
    <>
      <main className="container bg-slate-100 flex flex-col m-auto">
        <div>
          <Profiles/>
        </div>
        <div className='w-80 m-auto h-[380px] grid grid-cols-2 gap-1'>
          <ButtonLink logo="/assets/discord_ktk.png" nama="Discord" tujuan="https://discord.gg/9nZe5ypCdH"/>
          <ButtonLink logo="/assets/youtube_ktkpng.png" nama="Youtube" tujuan="https://www.youtube.com/@MhankWhyno"/>
          <ButtonLink logo="/assets/tiktok_3k.png" nama="Hann 1" tujuan="https://www.tiktok.com/@tambahram"/>
          <ButtonLink logo="/assets/tiktok_3k.png" nama="Hann 2" tujuan="https://www.tiktok.com/@tambahssd"/>
          <ButtonLink logo="/assets/github_ktk.png" nama="Github" tujuan="https://github.com/GNX56S"/>
          <ButtonLink logo="/assets/swr.png" nama="Saweria" tujuan="https://saweria.co/tambahram"/>
        </div>
        <div className='flex flex-col m-auto p-5 mt-5 w-80'>
          <p className='text-center p-4 font-semibold'>SISA WAKTU BANNER GENSHIN SEKARANG</p>
          <GenshinBanner/>
          <div className='flex justify-end p-2'>
            <a className='text-xs text-blue-800' href="https://github.com/bestiannn/genshin-banner-countdown">Genshin Banner Countdown API</a>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
