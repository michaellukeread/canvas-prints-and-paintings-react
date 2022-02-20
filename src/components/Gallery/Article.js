const Article = ({ id, title, image, was, now, doOpen }) => (
  <article
    className="flex flex-col gap-4 items-center rounded-sm cursor-pointer group overflow-hidden"
    onClick={doOpen(id)}
  >
    <img
      className="w-96 aspect-square group-hover:scale-105 duration-200"
      src={image.url}
      alt={title}
    />
    <h2 className="text-slate-100 tracking-wider uppercase">{title}</h2>
    {/* <div className="text-xl text-slate-900 flex gap-4">
      <del className="strike">A${was}</del>
      <p className="font-medium">A${now}</p>
    </div> */}
  </article>
)

export default Article
