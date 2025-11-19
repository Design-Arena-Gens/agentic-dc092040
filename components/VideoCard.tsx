import Image from 'next/image';
import Link from 'next/link';

export type VideoItem = {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  uploader: string;
  views: string;
  published: string;
  description?: string;
  duration: number;
};

function formatViews(views: string) {
  const numeric = Number(views);
  if (Number.isNaN(numeric)) return views;
  if (numeric >= 1_000_000) return `${(numeric / 1_000_000).toFixed(1)}M tontonan`;
  if (numeric >= 1_000) return `${(numeric / 1_000).toFixed(1)}K tontonan`;
  return `${numeric} tontonan`;
}

function formatDuration(durationSeconds: number) {
  const rounded = Math.round(durationSeconds);
  const minutes = Math.floor(rounded / 60);
  const seconds = rounded % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export function VideoCard({
  video
}: {
  video: VideoItem;
}) {
  return (
    <Link href={video.url} className="card" target="_blank" rel="noopener noreferrer">
      <div className="thumbnail">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          sizes="(max-width: 600px) 100vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h2>{video.title}</h2>
      <div className="meta">
        <span className="badge" aria-label="Pencipta">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" />
          </svg>
          {video.uploader}
        </span>
        <span className="badge" aria-label="Jumlah tontonan">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Zm0 12.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-8a3 3 0 1 0 .001 6.001A3 3 0 0 0 12 9Z" />
          </svg>
          {formatViews(video.views)}
        </span>
        <span className="badge" aria-label="Tempoh video">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10Zm0-18c4.337 0 8 3.663 8 8s-3.663 8-8 8-8-3.663-8-8 3.663-8 8-8Zm-.5 8.268V7h2v5.232l3.598 2.079-1 1.732L11.5 12.268Z" />
          </svg>
          {formatDuration(video.duration)}
        </span>
        <span className="badge" aria-label="Tarikh terbit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 16H5V10h14v10Zm0-12H5V6h14v2Z" />
          </svg>
          {video.published}
        </span>
      </div>
      {video.description ? <p className="description">{video.description}</p> : null}
    </Link>
  );
}
