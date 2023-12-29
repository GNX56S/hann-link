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
          <ButtonLink logo="/src/assets/youtube_ktkpng.png" nama="Youtube" tujuan="https://google.com"/>
          <ButtonLink logo="/src/assets/tiktok_3k.png" nama="TikTok 1" tujuan="https://google.com"/>
          <ButtonLink logo="/src/assets//tiktok_3k.png" nama="TikTok 2" tujuan="https://google.com"/>
          <ButtonLink logo="/src/assets/github_ktk.png" nama="Github" tujuan="https://google.com"/>
          <ButtonLink logo="/src/assets/swr.png" nama="Saweria" tujuan="https://google.com"/>
        </div>
      </main>
    </>
  )
}

export default App
