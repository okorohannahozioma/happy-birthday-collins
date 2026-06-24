import { Hero } from '@/components/hero'
import { PhotoGallery } from '@/components/photo-gallery'
import {Message } from '@/components/message'
import { MessageGrid } from '@/components/message-grid'
import { ConfettiGreeting } from '@/components/confetti-greeting'

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <ConfettiGreeting />
      <Hero />
      <PhotoGallery />
      <MessageGrid />
      <Message />
    </main>
  )
}