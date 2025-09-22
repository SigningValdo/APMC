"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Shield, Key, AlertTriangle, Users, Activity, Lock } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function SecurityManagement() {
  const { locale } = useTranslation()
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true)
  const [loginNotifications, setLoginNotifications] = useState(true)
  const [sessionTimeout, setSessionTimeout] = useState(true)

  const securityLogs = [
    {
      id: 1,
      action: locale === "fr" ? "Connexion administrateur" : "Admin login",
      user: "admin@apmc.cm",
      ip: "192.168.1.100",
      timestamp: "2024-01-15T10:30:00",
      status: "success",
    },
    {
      id: 2,
      action: locale === "fr" ? "Tentative de connexion échouée" : "Failed login attempt",
      user: "unknown@example.com",
      ip: "45.123.45.67",
      timestamp: "2024-01-15T09:15:00",
      status: "failed",
    },
    {
      id: 3,
      action: locale === "fr" ? "Modification des paramètres" : "Settings modified",
      user: "admin@apmc.cm",
      ip: "192.168.1.100",
      timestamp: "2024-01-14T16:45:00",
      status: "success",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            {locale === "fr" ? "Succès" : "Success"}
          </Badge>
        )
      case "failed":
        return <Badge variant="destructive">{locale === "fr" ? "Échec" : "Failed"}</Badge>
      case "warning":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            {locale === "fr" ? "Attention" : "Warning"}
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-heading text-3xl font-bold text-primary">{locale === "fr" ? "Sécurité" : "Security"}</h1>
          <p className="text-muted-foreground">
            {locale === "fr" ? "Gérez la sécurité et les accès" : "Manage security and access"}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Shield className="h-5 w-5 mr-2 text-green-600" />
              {locale === "fr" ? "Statut sécurité" : "Security Status"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600 mb-2">{locale === "fr" ? "Sécurisé" : "Secure"}</div>
            <p className="text-sm text-muted-foreground">
              {locale === "fr" ? "Tous les systèmes fonctionnent normalement" : "All systems operating normally"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
              {locale === "fr" ? "Alertes actives" : "Active Alerts"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600 mb-2">2</div>
            <p className="text-sm text-muted-foreground">
              {locale === "fr" ? "Tentatives de connexion suspectes" : "Suspicious login attempts"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-600" />
              {locale === "fr" ? "Sessions actives" : "Active Sessions"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600 mb-2">8</div>
            <p className="text-sm text-muted-foreground">
              {locale === "fr" ? "Utilisateurs connectés" : "Connected users"}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="h-5 w-5 mr-2" />
              {locale === "fr" ? "Paramètres de sécurité" : "Security Settings"}
            </CardTitle>
            <CardDescription>
              {locale === "fr" ? "Configurez les options de sécurité" : "Configure security options"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">
                  {locale === "fr" ? "Authentification à deux facteurs" : "Two-Factor Authentication"}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {locale === "fr" ? "Sécurisez votre compte avec 2FA" : "Secure your account with 2FA"}
                </p>
              </div>
              <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">
                  {locale === "fr" ? "Notifications de connexion" : "Login Notifications"}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {locale === "fr" ? "Recevez des alertes pour les nouvelles connexions" : "Get alerts for new logins"}
                </p>
              </div>
              <Switch checked={loginNotifications} onCheckedChange={setLoginNotifications} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">{locale === "fr" ? "Expiration de session" : "Session Timeout"}</Label>
                <p className="text-sm text-muted-foreground">
                  {locale === "fr" ? "Déconnexion automatique après inactivité" : "Auto logout after inactivity"}
                </p>
              </div>
              <Switch checked={sessionTimeout} onCheckedChange={setSessionTimeout} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="session-duration">
                {locale === "fr" ? "Durée de session (minutes)" : "Session Duration (minutes)"}
              </Label>
              <Input id="session-duration" type="number" defaultValue="30" className="w-32" />
            </div>

            <Button className="w-full">{locale === "fr" ? "Sauvegarder les paramètres" : "Save Settings"}</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Key className="h-5 w-5 mr-2" />
              {locale === "fr" ? "Gestion des mots de passe" : "Password Management"}
            </CardTitle>
            <CardDescription>
              {locale === "fr" ? "Politiques et sécurité des mots de passe" : "Password policies and security"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="min-length">{locale === "fr" ? "Longueur minimale" : "Minimum Length"}</Label>
              <Input id="min-length" type="number" defaultValue="8" className="w-32" />
            </div>

            <div className="space-y-2">
              <Label>{locale === "fr" ? "Exigences" : "Requirements"}</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">{locale === "fr" ? "Majuscules requises" : "Uppercase required"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">{locale === "fr" ? "Chiffres requis" : "Numbers required"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">
                    {locale === "fr" ? "Caractères spéciaux requis" : "Special characters required"}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="expiry-days">{locale === "fr" ? "Expiration (jours)" : "Expiry (days)"}</Label>
              <Input id="expiry-days" type="number" defaultValue="90" className="w-32" />
            </div>

            <Button className="w-full">{locale === "fr" ? "Appliquer la politique" : "Apply Policy"}</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="h-5 w-5 mr-2" />
            {locale === "fr" ? "Journal de sécurité" : "Security Log"}
          </CardTitle>
          <CardDescription>
            {locale === "fr" ? "Activités récentes liées à la sécurité" : "Recent security-related activities"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {securityLogs.map((log) => (
              <div key={log.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{log.action}</h4>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
                    <span>{log.user}</span>
                    <span>•</span>
                    <span>IP: {log.ip}</span>
                    <span>•</span>
                    <span>
                      {new Date(log.timestamp).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US")}{" "}
                      {new Date(log.timestamp).toLocaleTimeString(locale === "fr" ? "fr-FR" : "en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">{getStatusBadge(log.status)}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
