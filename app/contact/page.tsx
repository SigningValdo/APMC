import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { ContactInfo } from "@/components/sections/contact-info";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <ContactHero />
        <div className="grid lg:grid-cols-2 gap-0">
          <ContactForm />
          <ContactInfo />
        </div>
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg text-primary mb-4 text-center">
              Notre localisation
            </h3>
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0158267493896!2d11.516666!3d3.8480556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf1a1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sBastos%2C%20Yaound%C3%A9%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={"Localisation APMC/CAPPP"}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {
                "Quartier Bastos, Yaoundé - Cliquez sur la carte pour obtenir l'itinéraire"
              }
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
