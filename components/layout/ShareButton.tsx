'use client';

import { Share2 } from 'lucide-react';

export default function ShareButton({ title }: { title: string }) {
  function handleShare() {
    if (typeof navigator !== 'undefined') {
      navigator.share?.({
        title,
        url: window.location.href,
      });
    }
  }

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700"
    >
      <Share2 className="h-4 w-4" />
      Share
    </button>
  );
}
