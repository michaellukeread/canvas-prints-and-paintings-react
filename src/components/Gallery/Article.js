const Article = ({ id, title, image, was, now, doOpen }) => (
  <article
    className="group flex cursor-pointer flex-col items-center gap-4 overflow-hidden rounded-sm"
    onClick={doOpen(id)}
  >
    <img
      className="w-96 duration-200 group-hover:scale-105"
      src={image.url}
      alt={title}
    />
    <p className="uppercase tracking-wider text-white">{title}</p>
    {/* <div className="text-xl text-slate-900 flex gap-4">
      <del className="strike">A${was}</del>
      <p className="font-medium">A${now}</p>
    </div> */}
  </article>
)

export default Article
