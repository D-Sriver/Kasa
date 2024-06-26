import Banner from "../components/Banner"
import Main from "../components/Main"
import bannerCover from '../images/montagnes-vallee.png'

export default function Home() {
  return (
    <div><Banner title="Chez vous, partout et ailleurs" cover={bannerCover} />
    <Main />
    </div>
  )
}