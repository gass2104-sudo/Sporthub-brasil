export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="SportHub Brasil" className="h-10 w-10" />
          <div>
            <h1 className="text-xl font-bold">SportHub Brasil</h1>
            <p className="text-sm text-gray-600">Tudo sobre todos os esportes em um só lugar.</p>
          </div>
        </div>
        <nav>
          <ul className="flex gap-4 text-sm">
            <li>Futebol</li>
            <li>Basquete</li>
            <li>F1</li>
            <li>UFC</li>
            <li>Mais</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
