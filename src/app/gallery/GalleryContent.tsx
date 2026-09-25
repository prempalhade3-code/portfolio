"use client";

import Image from "next/image";
import { useState } from "react";

interface Photo {
  src: string;
  alt: string;
  caption: string;
}

const photos: Photo[] = [
  {
    src: "/gallery/project-presentation.jpg",
    alt: "Our team at the final project presentation",
    caption: "Our team at the final project presentation",
  },
  {
    src: "/gallery/hackwith-mumbai.jpg",
    alt: "My team and I after our first hackathon",
    caption: "My team and I after our first hackathon",
  },
  {
    src: "/gallery/dog-helmet.jpg",
    alt: "My love for dogs, summarized in one photo",
    caption: "My love for dogs, summarized in one photo",
  },
  {
    src: "/gallery/college-friends.jpg",
    alt: "The friends I made in my first month at college",
    caption: "The friends I made in my first month at college",
  },
  {
    src: "/gallery/roomies-dinner.jpg",
    alt: "My roommates and I at our first dinner together",
    caption: "My roommates and I at our first dinner together",
  },
  {
    src: "/gallery/birthday-friend.jpg",
    alt: "My first birthday at college, celebrated with a friend",
    caption: "My first birthday at college, celebrated with a friend",
  },
];

function GalleryImage({ photo, index }: { photo: Photo; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative aspect-[4/5] cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        fill
        src={photo.src}
        alt={photo.alt}
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover"
        priority={index < 3}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black/60 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="w-3/4 text-center text-xs text-white">
          {photo.caption}
        </span>
      </div>
    </div>
  );
}

export default function GalleryContent() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {photos.map((photo, index) => (
        <GalleryImage key={photo.src} photo={photo} index={index} />
      ))}
    </div>
  );
}
