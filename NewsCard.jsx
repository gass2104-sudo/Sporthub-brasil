export default function NewsCard({ item }){
  return (
    <article className="border p-4 rounded-md">
      <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 font-semibold">{item.title}</h3>
      <p className="text-sm text-gray-600">{item.excerpt}</p>
    </article>
  )
}
