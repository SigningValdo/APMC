"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export function ContactInfo() {
  const { t, locale } = useTranslation();

  const contactDetails = [
    {
      icon: MapPin,
      title: locale === "fr" ? "Adresse" : "Address",
      content: ["Quartier Bastos", "BP 1234 Yaoundé", "Cameroun"],
    },
    {
      icon: Phone,
      title: locale === "fr" ? "Téléphone" : "Phone",
      content: ["+237 222 123 456", "+237 677 890 123"],
    },
    {
      icon: Mail,
      title: "Email",
      content: ["contact@apmc-cameroun.org", "info@apmc-cameroun.org"],
    },
    {
      icon: Clock,
      title: locale === "fr" ? "Horaires" : "Hours",
      content: [
        locale === "fr"
          ? "Lundi - Vendredi: 8h00 - 17h00"
          : "Monday - Friday: 8:00 AM - 5:00 PM",
        locale === "fr"
          ? "Samedi: 8h00 - 12h00"
          : "Saturday: 8:00 AM - 12:00 PM",
        locale === "fr" ? "Dimanche: Fermé" : "Sunday: Closed",
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">
              {locale === "fr"
                ? "Informations de contact"
                : "Contact Information"}
            </h2>
            <p className="text-muted-foreground">
              {locale === "fr"
                ? "Plusieurs moyens de nous joindre selon vos préférences"
                : "Multiple ways to reach us according to your preferences"}
            </p>
          </div>

          <div className="grid gap-6">
            {contactDetails.map((detail, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <detail.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-2">
                        {detail.title}
                      </h3>
                      <div className="space-y-1">
                        {detail.content.map((line, lineIndex) => (
                          <p key={lineIndex} className="text-muted-foreground">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-primary mb-4 text-center">
                {locale === "fr" ? "Suivez-nous" : "Follow Us"}
              </h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6 text-secondary" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
