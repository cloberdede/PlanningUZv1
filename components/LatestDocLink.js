'use client';
import { useEffect, useState } from 'react';

export default function LatestDocLink() {
  const [link, setLink] = useState('');

  useEffect(() => {
    fetch('/latest-doc.json')
      .then(res => res.json())
      .then(data => setLink(data.link));
  }, []);

  return link ? (
    <div className="p-4 bg-blue-100 rounded text-blue-900">
      📄 <a href={link} target="_blank" rel="noopener noreferrer" className="underline">View the latest Google Doc</a>
    </div>
  ) : (
    <p>Loading document link...</p>
  );
}
