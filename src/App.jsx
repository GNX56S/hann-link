import ButtonLink from './Components/ButtonLink'
import Profiles from './Components/Profiles'

function App() {

  return (
    <>
      <main className="container bg-slate-100 h-screen">
        <div>
          <Profiles/>
        </div>
        <div className='w-80 m-auto h-[380px] grid grid-cols-2 gap-1'>
          <ButtonLink logo="/src/assets/discord_ktk.png" nama="Discord" tujuan="https://discord.gg/9nZe5ypCdH"/>
          <ButtonLink logo="/src/assets/youtube_ktkpng.png" nama="Youtube" tujuan="https://www.youtube.com/@MhankWhyno"/>
          <ButtonLink logo="/src/assets/tiktok_3k.png" nama="Hann 1" tujuan="https://www.tiktok.com/@tambahram"/>
          <ButtonLink logo="/src/assets/tiktok_3k.png" nama="Hann 2" tujuan="https://www.tiktok.com/@tambahssd"/>
          <ButtonLink logo="/src/assets/github_ktk.png" nama="Github" tujuan="https://github.com/GNX56S"/>
          <ButtonLink logo="/src/assets/swr.png" nama="Saweria" tujuan="https://saweria.co/tambahram"/>
        </div>
      </main>
    </>
  )
}

export default App
