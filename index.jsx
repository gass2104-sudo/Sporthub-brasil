import Header from '../components/Header'
import Hero from '../components/Hero'
import NewsCard from '../components/NewsCard'
import dummy from '../lib/dummyData'

export default function Home(){
  return (
    <div>
      <Header />
      <Hero />
      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4">Últimas notícias</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dummy.articles.map(a => <NewsCard key={a.id} item={a} />)}
          </div>
        </section>
        <aside>
          <div className="border p-4 rounded">
            <h3 className="font-semibold">Próximos jogos</h3>
            <ul className="text-sm mt-2">
              <li>Futebol: Flamengo x Palmeiras — 20:00</li>
              <li>NBA: Lakers x Celtics — 21:30</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  )
}
