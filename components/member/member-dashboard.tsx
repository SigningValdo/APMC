"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, FileText, Calendar, Download, Settings, LogOut, Bell, BookOpen, Users, Award } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function MemberDashboard() {
  const { t, locale } = useTranslation()

  const memberInfo = {
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    membershipType: locale === "fr" ? "Individuel" : "Individual",
    memberSince: "2022",
    status: locale === "fr" ? "Actif" : "Active",
  }

  const quickStats = [
    {
      icon: FileText,
      label: locale === "fr" ? "Documents" : "Documents",
      value: "12",
      description: locale === "fr" ? "Téléchargés" : "Downloaded",
    },
    {
      icon: Calendar,
      label: locale === "fr" ? "Événements" : "Events",
      value: "5",
      description: locale === "fr" ? "Participés" : "Attended",
    },
    {
      icon: BookOpen,
      label: locale === "fr" ? "Formations" : "Training",
      value: "3",
      description: locale === "fr" ? "Complétées" : "Completed",
    },
    {
      icon: Award,
      label: locale === "fr" ? "Certifications" : "Certifications",
      value: "2",
      description: locale === "fr" ? "Obtenues" : "Earned",
    },
  ]

  const recentDocuments = [
    {
      title: locale === "fr" ? "Guide des marchés publics 2024" : "Public Procurement Guide 2024",
      type: "PDF",
      date: "2024-01-15",
      size: "2.5 MB",
    },
    {
      title: locale === "fr" ? "Modèle de cahier des charges" : "Specification Template",
      type: "DOCX",
      date: "2024-01-10",
      size: "1.2 MB",
    },
    {
      title: locale === "fr" ? "Réglementation mise à jour" : "Updated Regulations",
      type: "PDF",
      date: "2024-01-05",
      size: "3.1 MB",
    },
  ]

  const upcomingEvents = [
    {
      title: locale === "fr" ? "Formation en passation des marchés" : "Procurement Training",
      date: "2024-02-15",
      time: "09:00",
      location: locale === "fr" ? "Yaoundé" : "Yaoundé",
    },
    {
      title: locale === "fr" ? "Webinaire sur les nouvelles réglementations" : "Webinar on New Regulations",
      date: "2024-02-20",
      time: "14:00",
      location: locale === "fr" ? "En ligne" : "Online",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder.svg" alt={memberInfo.name} />
            <AvatarFallback className="text-lg font-semibold">
              {memberInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-heading text-2xl font-bold text-primary">
              {locale === "fr" ? "Bienvenue, " : "Welcome, "}
              {memberInfo.name}
            </h1>
            <p className="text-muted-foreground">
              {locale === "fr" ? "Membre depuis " : "Member since "}
              {memberInfo.memberSince}
            </p>
            <Badge variant="secondary" className="mt-1">
              {memberInfo.status}
            </Badge>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            {locale === "fr" ? "Notifications" : "Notifications"}
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            {locale === "fr" ? "Paramètres" : "Settings"}
          </Button>
          <Button variant="outline" size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            {locale === "fr" ? "Déconnexion" : "Logout"}
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4 text-center">
              <stat.icon className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm font-medium">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Documents */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              {locale === "fr" ? "Documents récents" : "Recent Documents"}
            </CardTitle>
            <CardDescription>
              {locale === "fr" ? "Vos derniers téléchargements" : "Your latest downloads"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDocuments.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{doc.title}</h4>
                    <p className="text-xs text-muted-foreground">
                      {doc.type} • {doc.size} •{" "}
                      {new Date(doc.date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US")}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              {locale === "fr" ? "Voir tous les documents" : "View all documents"}
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              {locale === "fr" ? "Événements à venir" : "Upcoming Events"}
            </CardTitle>
            <CardDescription>{locale === "fr" ? "Formations et événements" : "Training and events"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 bg-muted/30 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">{event.title}</h4>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>
                      {new Date(event.date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US")} • {event.time}
                    </span>
                    <span>{event.location}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              {locale === "fr" ? "Voir tous les événements" : "View all events"}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>{locale === "fr" ? "Actions rapides" : "Quick Actions"}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <User className="h-6 w-6 mb-2" />
              <span className="text-xs">{locale === "fr" ? "Mon profil" : "My Profile"}</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <FileText className="h-6 w-6 mb-2" />
              <span className="text-xs">{locale === "fr" ? "Ressources" : "Resources"}</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <Users className="h-6 w-6 mb-2" />
              <span className="text-xs">{locale === "fr" ? "Annuaire" : "Directory"}</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <BookOpen className="h-6 w-6 mb-2" />
              <span className="text-xs">{locale === "fr" ? "Formations" : "Training"}</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
