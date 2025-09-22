import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MemberDashboard } from "@/components/member/member-dashboard"

export default function MemberPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <MemberDashboard />
      </main>
      <Footer />
    </div>
  )
}
