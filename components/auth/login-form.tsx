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
import { Eye, EyeOff, LogIn, AlertCircle } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock authentication logic
      if (formData.email === "admin@apmc.cm" && formData.password === "admin123") {
        // Redirect to admin dashboard
        router.push(getLocalizedHref("/admin"))
      } else if (formData.email && formData.password) {
        // Redirect to member area
        router.push(getLocalizedHref("/member"))
      } else {
        throw new Error("Invalid credentials")
      }
    } catch (err) {
      setError(locale === "fr" ? "Email ou mot de passe incorrect" : "Invalid email or password")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card className="shadow-lg">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <LogIn className="h-8 w-8 text-primary-foreground" />
        </div>
        <CardTitle className="font-heading text-2xl text-primary">
          {locale === "fr" ? "Connexion" : "Sign In"}
        </CardTitle>
        <CardDescription>
          {locale === "fr" ? "Accédez à votre espace membre APMC" : "Access your CAPPP member area"}
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

          <div className="space-y-2">
            <Label htmlFor="email">{locale === "fr" ? "Adresse email" : "Email address"}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={locale === "fr" ? "votre@email.com" : "your@email.com"}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">{locale === "fr" ? "Mot de passe" : "Password"}</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder={locale === "fr" ? "Votre mot de passe" : "Your password"}
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

          <div className="flex items-center justify-between text-sm">
            <Link href={getLocalizedHref("/forgot-password")} className="text-secondary hover:underline">
              {locale === "fr" ? "Mot de passe oublié ?" : "Forgot password?"}
            </Link>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                {locale === "fr" ? "Connexion..." : "Signing in..."}
              </div>
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" />
                {locale === "fr" ? "Se connecter" : "Sign In"}
              </>
            )}
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            {locale === "fr" ? "Pas encore membre ?" : "Not a member yet?"}{" "}
            <Link href={getLocalizedHref("/register")} className="text-secondary hover:underline font-medium">
              {locale === "fr" ? "Créer un compte" : "Create account"}
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
