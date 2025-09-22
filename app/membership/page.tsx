import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MembershipHero } from "@/components/sections/membership-hero";
import { MembershipTypes } from "@/components/sections/membership-types";
import { MembershipProcess } from "@/components/sections/membership-process";
import { MembershipBenefits } from "@/components/sections/membership-benefits";

export default function MembershipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <MembershipHero />
        {/* <MembershipTypes /> */}
        <MembershipBenefits />
        <MembershipProcess />
      </main>
      <Footer />
    </div>
  );
}
