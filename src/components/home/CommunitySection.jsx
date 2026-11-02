import { communityPosts } from '../../data/homePageData.js';

export default function CommunitySection() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6 lg:py-12">
      <h2 className="mb-6 text-[1.9rem] font-black uppercase leading-none tracking-[-0.07em] text-black md:text-[2.5rem]">Cachos estilizado por nuestra comunidad</h2>
      <div className="grid gap-4 xl:grid-cols-3">
        {communityPosts.map((post) => (
          <blockquote key={post.author} className="min-h-[170px] rounded-[18px] border border-black/10 bg-white p-5">
            <p className="text-[0.95rem] leading-6 text-black/80">{post.quote}</p>
            <footer className="mt-5 text-[10px] font-black uppercase tracking-[0.12em] text-black">{post.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}