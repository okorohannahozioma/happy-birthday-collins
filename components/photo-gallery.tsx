'use client'

import Image from 'next/image'
import { useState } from 'react'

const galleryItems = [
  {
    id: 1,
    type: 'image',
    title: 'Happy Birthday Collins!',
    aspect: 'aspect-square',
    url: '/pic1.jpeg',
  },
  {
    id: 2,
    type: 'video',
    title: 'Agba baller',
    aspect: 'aspect-video',
    url: '/vid1.mp4',
  },
  {
    id: 3,
    type: 'image',
    title: 'Good Times',
    aspect: 'aspect-square',
    url: '/pic5.jpeg',
  },
  {
    id: 4,
    type: 'image',
    title: 'Good Times',
    aspect: 'aspect-square',
    url: '/pic4.jpeg',
  },
  {
    id: 5,
    type: 'image',
    title: 'Good Times',
    aspect: 'aspect-square',
    url: '/pic2.jpeg',
  },
  {
    id: 6,
    type: 'image',
    title: 'Good Times',
    aspect: 'aspect-square',
    url: '/pic3.jpeg',
  },
]

export function PhotoGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  // Find the currently selected item object for the popup modal
  const selectedItem = galleryItems.find((item) => item.id === selectedId)

  return (
    <section className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Brilliant Boy</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ...Who is now a teenager!
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`${item.aspect} relative rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-2xl`}
            >
              {item.type === 'video' ? (
                <video
                  src={item.url}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              )}

              {/* Title and Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-semibold text-lg">{item.title}</p>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                  {/* Icon changes slightly if it's a video */}
                  {item.type === 'video' ? (
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedId && selectedItem && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedId(null)}
          >
            <div className="relative max-w-4xl w-full cursor-auto" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedId(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors flex items-center gap-2 font-medium"
              >
                Close
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-background flex items-center justify-center">
                {/* Modal View changes depending on media type */}
                {selectedItem.type === 'video' ? (
                  <video
                    src={selectedItem.url}
                    controls
                    autoPlay
                    className="w-full h-full max-h-[70vh] object-contain"
                  />
                ) : (
                  <Image
                    src={selectedItem.url}
                    alt={selectedItem.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                )}
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-white text-xl font-medium">{selectedItem.title}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}