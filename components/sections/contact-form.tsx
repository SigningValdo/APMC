"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, AlertCircle, CheckCircle } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const { t, locale } = useTranslation()

  const subjects = [
    { value: "membership", label: locale === "fr" ? "Adhésion" : "Membership" },
    { value: "training", label: locale === "fr" ? "Formation" : "Training" },
    { value: "certification", label: locale === "fr" ? "Certification" : "Certification" },
    { value: "partnership", label: locale === "fr" ? "Partenariat" : "Partnership" },
    { value: "technical", label: locale === "fr" ? "Support technique" : "Technical support" },
    { value: "other", label: locale === "fr" ? "Autre" : "Other" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess(false)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      setError(
        locale === "fr"
          ? "Une erreur est survenue lors de l'envoi du message"
          : "An error occurred while sending the message",
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }))
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="font-heading text-2xl text-primary">
              {locale === "fr" ? "Envoyez-nous un message" : "Send us a message"}
            </CardTitle>
            <CardDescription>
              {locale === "fr"
                ? "Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais"
                : "Fill out the form below and we will get back to you as soon as possible"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="border-green-200 bg-green-50 text-green-800">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    {locale === "fr"
                      ? "Votre message a été envoyé avec succès. Nous vous répondrons bientôt."
                      : "Your message has been sent successfully. We will respond to you soon."}
                  </AlertDescription>
                </Alert>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{locale === "fr" ? "Nom complet" : "Full Name"} *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{locale === "fr" ? "Adresse email" : "Email address"} *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{locale === "fr" ? "Téléphone" : "Phone"}</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+237 XXX XXX XXX"
                />
              </div>

              <div className="space-y-2">
                <Label>{locale === "fr" ? "Sujet" : "Subject"} *</Label>
                <Select onValueChange={handleSelectChange} value={formData.subject}>
                  <SelectTrigger>
                    <SelectValue placeholder={locale === "fr" ? "Sélectionner un sujet" : "Select a subject"} />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject.value} value={subject.value}>
                        {subject.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{locale === "fr" ? "Message" : "Message"} *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder={
                    locale === "fr" ? "Décrivez votre demande en détail..." : "Describe your request in detail..."
                  }
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {locale === "fr" ? "Envoi en cours..." : "Sending..."}
                  </div>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {locale === "fr" ? "Envoyer le message" : "Send Message"}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
