"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Settings, Globe, Mail, Bell, Palette, Database } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function SettingsManagement() {
  const { locale } = useTranslation()
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [maintenanceMode, setMaintenanceMode] = useState(false)
  const [memberRegistration, setMemberRegistration] = useState(true)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-heading text-3xl font-bold text-primary">
            {locale === "fr" ? "Paramètres" : "Settings"}
          </h1>
          <p className="text-muted-foreground">
            {locale === "fr" ? "Configurez les paramètres généraux du site" : "Configure general site settings"}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              {locale === "fr" ? "Paramètres généraux" : "General Settings"}
            </CardTitle>
            <CardDescription>
              {locale === "fr" ? "Configuration de base du site" : "Basic site configuration"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="site-name">{locale === "fr" ? "Nom du site" : "Site Name"}</Label>
              <Input id="site-name" defaultValue="APMC - Association des Praticiens des Marchés Publics au Cameroun" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="site-description">{locale === "fr" ? "Description" : "Description"}</Label>
              <Textarea
                id="site-description"
                rows={3}
                defaultValue={
                  locale === "fr"
                    ? "Association professionnelle des praticiens des marchés publics au Cameroun"
                    : "Professional association of public procurement practitioners in Cameroon"
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email">{locale === "fr" ? "Email de contact" : "Contact Email"}</Label>
              <Input id="contact-email" type="email" defaultValue="contact@apmc.cm" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="default-language">{locale === "fr" ? "Langue par défaut" : "Default Language"}</Label>
              <Select defaultValue="fr">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              {locale === "fr" ? "Configuration email" : "Email Configuration"}
            </CardTitle>
            <CardDescription>
              {locale === "fr" ? "Paramètres d'envoi d'emails" : "Email sending settings"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="smtp-host">{locale === "fr" ? "Serveur SMTP" : "SMTP Server"}</Label>
              <Input id="smtp-host" placeholder="smtp.gmail.com" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="smtp-port">{locale === "fr" ? "Port" : "Port"}</Label>
                <Input id="smtp-port" placeholder="587" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="smtp-security">{locale === "fr" ? "Sécurité" : "Security"}</Label>
                <Select defaultValue="tls">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tls">TLS</SelectItem>
                    <SelectItem value="ssl">SSL</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="smtp-username">{locale === "fr" ? "Nom d'utilisateur" : "Username"}</Label>
              <Input id="smtp-username" placeholder="your-email@gmail.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="smtp-password">{locale === "fr" ? "Mot de passe" : "Password"}</Label>
              <Input id="smtp-password" type="password" placeholder="••••••••" />
            </div>

            <Button variant="outline" className="w-full bg-transparent">
              {locale === "fr" ? "Tester la configuration" : "Test Configuration"}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              {locale === "fr" ? "Notifications" : "Notifications"}
            </CardTitle>
            <CardDescription>
              {locale === "fr" ? "Gérez les notifications système" : "Manage system notifications"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">
                  {locale === "fr" ? "Notifications par email" : "Email Notifications"}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {locale === "fr" ? "Envoyer des notifications par email" : "Send email notifications"}
                </p>
              </div>
              <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">
                  {locale === "fr" ? "Inscription des membres" : "Member Registration"}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {locale === "fr" ? "Permettre l'inscription de nouveaux membres" : "Allow new member registration"}
                </p>
              </div>
              <Switch checked={memberRegistration} onCheckedChange={setMemberRegistration} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">{locale === "fr" ? "Mode maintenance" : "Maintenance Mode"}</Label>
                <p className="text-sm text-muted-foreground">
                  {locale === "fr" ? "Activer le mode maintenance" : "Enable maintenance mode"}
                </p>
              </div>
              <Switch checked={maintenanceMode} onCheckedChange={setMaintenanceMode} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Palette className="h-5 w-5 mr-2" />
              {locale === "fr" ? "Apparence" : "Appearance"}
            </CardTitle>
            <CardDescription>
              {locale === "fr" ? "Personnalisez l'apparence du site" : "Customize site appearance"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="primary-color">{locale === "fr" ? "Couleur principale" : "Primary Color"}</Label>
              <div className="flex space-x-2">
                <Input id="primary-color" type="color" defaultValue="#1e40af" className="w-16 h-10" />
                <Input defaultValue="#1e40af" className="flex-1" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="secondary-color">{locale === "fr" ? "Couleur secondaire" : "Secondary Color"}</Label>
              <div className="flex space-x-2">
                <Input id="secondary-color" type="color" defaultValue="#dc2626" className="w-16 h-10" />
                <Input defaultValue="#dc2626" className="flex-1" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="logo-upload">{locale === "fr" ? "Logo du site" : "Site Logo"}</Label>
              <Input id="logo-upload" type="file" accept="image/*" />
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="h-5 w-5 mr-2" />
              {locale === "fr" ? "Sauvegarde et maintenance" : "Backup & Maintenance"}
            </CardTitle>
            <CardDescription>
              {locale === "fr" ? "Outils de sauvegarde et maintenance" : "Backup and maintenance tools"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex-col bg-transparent">
                <Database className="h-6 w-6 mb-2" />
                <span className="text-sm">{locale === "fr" ? "Sauvegarder BD" : "Backup Database"}</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col bg-transparent">
                <Settings className="h-6 w-6 mb-2" />
                <span className="text-sm">{locale === "fr" ? "Optimiser BD" : "Optimize Database"}</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col bg-transparent">
                <Globe className="h-6 w-6 mb-2" />
                <span className="text-sm">{locale === "fr" ? "Vider cache" : "Clear Cache"}</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline">{locale === "fr" ? "Réinitialiser" : "Reset"}</Button>
        <Button>{locale === "fr" ? "Sauvegarder les modifications" : "Save Changes"}</Button>
      </div>
    </div>
  )
}
