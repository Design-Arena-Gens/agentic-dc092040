import { VideoCard } from '@/components/VideoCard';
import { fetchTrendingShorts } from '@/lib/fetchTrendingShorts';

export default async function HomePage() {
  const videos = await fetchTrendingShorts();

  return (
    <main>
      <h1>Shorts Trending</h1>
      <p className="subtitle">
        Video pendek paling hangat di Malaysia sekarang. Ketik mana-mana kad untuk menonton terus di TikTok.
      </p>
      {videos.length > 0 ? (
        <section className="grid" aria-label="Senarai video pendek trending">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </section>
      ) : (
        <div className="empty-state">
          <h2>Tiada video ditemui</h2>
          <p>Masalah sementara mengakses sumber trending. Cuba segar semula beberapa minit lagi.</p>
        </div>
      )}
    </main>
  );
}
