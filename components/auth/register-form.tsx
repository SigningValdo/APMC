"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, UserPlus, AlertCircle, Upload } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    position: "",
    membershipType: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })

  const { t, locale } = useTranslation()
  const router = useRouter()

  const getLocalizedHref = (href: string) => {
    return locale === "fr" ? href : `/${locale}${href}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess("")

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError(locale === "fr" ? "Les mots de passe ne correspondent pas" : "Passwords do not match")
      setIsLoading(false)
      return
    }

    if (!formData.agreeTerms) {
      setError(
        locale === "fr"
          ? "Vous devez accepter les conditions d'utilisation"
          : "You must accept the terms and conditions",
      )
      setIsLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setSuccess(
        locale === "fr"
          ? "Inscription réussie ! Votre candidature est en cours de validation."
          : "Registration successful! Your application is under review.",
      )

      // Redirect after success
      setTimeout(() => {
        router.push(getLocalizedHref("/login"))
      }, 2000)
    } catch (err) {
      setError(
        locale === "fr" ? "Une erreur est survenue lors de l'inscription" : "An error occurred during registration",
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <Card className="shadow-lg">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
          <UserPlus className="h-8 w-8 text-secondary-foreground" />
        </div>
        <CardTitle className="font-heading text-2xl text-primary">
          {locale === "fr" ? "Adhésion APMC" : "CAPPP Membership"}
        </CardTitle>
        <CardDescription>
          {locale === "fr" ? "Rejoignez notre communauté de professionnels" : "Join our community of professionals"}
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
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">{locale === "fr" ? "Prénom" : "First Name"} *</Label>
              <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">{locale === "fr" ? "Nom" : "Last Name"} *</Label>
              <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{locale === "fr" ? "Adresse email" : "Email address"} *</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{locale === "fr" ? "Téléphone" : "Phone"} *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+237 XXX XXX XXX"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">{locale === "fr" ? "Organisation" : "Organization"} *</Label>
            <Input
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="position">{locale === "fr" ? "Poste occupé" : "Position"} *</Label>
            <Input id="position" name="position" value={formData.position} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label>{locale === "fr" ? "Type d'adhésion" : "Membership Type"} *</Label>
            <Select onValueChange={(value) => handleSelectChange("membershipType", value)}>
              <SelectTrigger>
                <SelectValue placeholder={locale === "fr" ? "Sélectionner" : "Select"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">{locale === "fr" ? "Individuel" : "Individual"}</SelectItem>
                <SelectItem value="institutional">{locale === "fr" ? "Institutionnel" : "Institutional"}</SelectItem>
                <SelectItem value="student">{locale === "fr" ? "Étudiant" : "Student"}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">{locale === "fr" ? "Mot de passe" : "Password"} *</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">
              {locale === "fr" ? "Confirmer le mot de passe" : "Confirm Password"} *
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>

          <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
            <Label className="text-sm font-medium">{locale === "fr" ? "Documents requis" : "Required Documents"}</Label>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• {locale === "fr" ? "CV actualisé" : "Updated CV"}</p>
              <p>• {locale === "fr" ? "Copie des diplômes" : "Copy of diplomas"}</p>
              <p>• {locale === "fr" ? "Lettre de motivation" : "Cover letter"}</p>
            </div>
            <Button type="button" variant="outline" size="sm" className="w-full bg-transparent">
              <Upload className="mr-2 h-4 w-4" />
              {locale === "fr" ? "Télécharger les documents" : "Upload documents"}
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeTerms: checked as boolean }))}
            />
            <Label htmlFor="agreeTerms" className="text-sm">
              {locale === "fr" ? "J'accepte les " : "I accept the "}
              <Link href={getLocalizedHref("/terms")} className="text-secondary hover:underline">
                {locale === "fr" ? "conditions d'utilisation" : "terms and conditions"}
              </Link>
              {locale === "fr" ? " et la " : " and "}
              <Link href={getLocalizedHref("/privacy")} className="text-secondary hover:underline">
                {locale === "fr" ? "politique de confidentialité" : "privacy policy"}
              </Link>
            </Label>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                {locale === "fr" ? "Inscription..." : "Registering..."}
              </div>
            ) : (
              <>
                <UserPlus className="mr-2 h-4 w-4" />
                {locale === "fr" ? "S'inscrire" : "Register"}
              </>
            )}
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            {locale === "fr" ? "Déjà membre ?" : "Already a member?"}{" "}
            <Link href={getLocalizedHref("/login")} className="text-secondary hover:underline font-medium">
              {locale === "fr" ? "Se connecter" : "Sign in"}
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
