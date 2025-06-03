
"use client";
import { useEffect } from 'react';

export default function TallyForm() {
  useEffect(() => {
    const iframe = document.querySelector('iframe[data-tally-src]');
    if (iframe) {
      iframe.src = iframe.dataset.tallySrc;
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <iframe data-tally-src="https://tally.so/embed/mRaN59?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="177" frameborder="0" marginheight="0" marginwidth="0" title="Planning UZ"></iframe>

    </div>
  );
}
