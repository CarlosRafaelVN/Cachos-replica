import { useState } from 'react';
import { communityPosts } from '../../data/homePageData.js';

function CommunityCard({ post }) {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <article className="community-card">
      <div className="community-card__media">
        <video
          className="community-card__video"
          src={post.imageUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`Video de ${post.author}`}
          onError={() => setVideoFailed(true)}
        />
        {videoFailed && (
          <a className="community-card__video-fallback" href={post.ctaUrl} target="_blank" rel="noreferrer">
            Ver video en Instagram <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
      <blockquote className="community-card__quote">{post.quote}</blockquote>
      <div className="community-card__rating" role="img" aria-label={`${post.rating} de 5 estrellas`}>
        {'★'.repeat(post.rating)}
      </div>
      <p className="community-card__author">{post.author}</p>
      <a className="community-card__instagram" href={post.ctaUrl} target="_blank" rel="noreferrer">
        {post.ctaText}
      </a>
    </article>
  );
}

export default function CommunitySection() {
  return (
    <section className="community-section" aria-label="Testimonios de la comunidad">
      <div className="community-section__grid">
        {communityPosts.map((post) => (
          <CommunityCard key={post.author} post={post} />
        ))}
      </div>
    </section>
  );
}
