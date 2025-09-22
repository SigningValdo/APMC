import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ResourcesHero } from "@/components/sections/resources-hero"
import { ResourcesLibrary } from "@/components/sections/resources-library"
import { ResourcesCategories } from "@/components/sections/resources-categories"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ResourcesHero />
        <ResourcesCategories />
        <ResourcesLibrary />
      </main>
      <Footer />
    </div>
  )
}
