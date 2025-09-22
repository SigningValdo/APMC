"use client"

import { useState } from "react"
import { AdminSidebar } from "./admin-sidebar"
import { MembersManagement } from "./members-management"
import { ApplicationsManagement } from "./applications-management"
import { ContentManagement } from "./content-management"
import { EventsManagement } from "./events-management"
import { MessagesManagement } from "./messages-management"
import { FilesManagement } from "./files-management"
import { SecurityManagement } from "./security-management"
import { SettingsManagement } from "./settings-management"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, FileText, Calendar, Bell, UserCheck, AlertTriangle, TrendingUp } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const { t, locale } = useTranslation()

  const stats = [
    {
      icon: Users,
      label: locale === "fr" ? "Membres totaux" : "Total Members",
      value: "524",
      change: "+12",
      changeType: "positive" as const,
    },
    {
      icon: UserCheck,
      label: locale === "fr" ? "Candidatures en attente" : "Pending Applications",
      value: "18",
      change: "+5",
      changeType: "neutral" as const,
    },
    {
      icon: Calendar,
      label: locale === "fr" ? "Événements ce mois" : "Events This Month",
      value: "8",
      change: "+2",
      changeType: "positive" as const,
    },
    {
      icon: FileText,
      label: locale === "fr" ? "Documents publiés" : "Published Documents",
      value: "156",
      change: "+8",
      changeType: "positive" as const,
    },
  ]

  const recentApplications = [
    {
      name: "Marie Kouam",
      email: "marie.kouam@example.com",
      type: locale === "fr" ? "Individuel" : "Individual",
      date: "2024-01-15",
      status: "pending",
    },
    {
      name: "Paul Mbarga",
      email: "paul.mbarga@example.com",
      type: locale === "fr" ? "Institutionnel" : "Institutional",
      date: "2024-01-14",
      status: "pending",
    },
    {
      name: "Sophie Nkomo",
      email: "sophie.nkomo@example.com",
      type: locale === "fr" ? "Étudiant" : "Student",
      date: "2024-01-13",
      status: "approved",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary">{locale === "fr" ? "En attente" : "Pending"}</Badge>
      case "approved":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            {locale === "fr" ? "Approuvé" : "Approved"}
          </Badge>
        )
      case "rejected":
        return <Badge variant="destructive">{locale === "fr" ? "Rejeté" : "Rejected"}</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case "members":
        return <MembersManagement />
      case "applications":
        return <ApplicationsManagement />
      case "content":
        return <ContentManagement />
      case "events":
        return <EventsManagement />
      case "messages":
        return <MessagesManagement />
      case "uploads":
        return <FilesManagement />
      case "security":
        return <SecurityManagement />
      case "settings":
        return <SettingsManagement />
      case "dashboard":
      default:
        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="font-heading text-3xl font-bold text-primary">
                  {locale === "fr" ? "Tableau de bord" : "Dashboard"}
                </h1>
                <p className="text-muted-foreground">
                  {locale === "fr" ? "Vue d'ensemble de votre association" : "Overview of your association"}
                </p>
              </div>
              <Button>
                <Bell className="h-4 w-4 mr-2" />
                {locale === "fr" ? "Notifications" : "Notifications"}
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      </div>
                      <stat.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <div className="flex items-center mt-4">
                      <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                      <span className="text-sm text-green-600">{stat.change}</span>
                      <span className="text-sm text-muted-foreground ml-1">
                        {locale === "fr" ? "ce mois" : "this month"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Applications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UserCheck className="h-5 w-5 mr-2" />
                    {locale === "fr" ? "Candidatures récentes" : "Recent Applications"}
                  </CardTitle>
                  <CardDescription>
                    {locale === "fr" ? "Demandes d'adhésion en attente" : "Pending membership requests"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentApplications.map((application, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{application.name}</h4>
                          <p className="text-xs text-muted-foreground">
                            {application.email} • {application.type}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(application.date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US")}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(application.status)}
                          {application.status === "pending" && (
                            <div className="flex space-x-1">
                              <Button size="sm" variant="outline" className="h-8 px-2 bg-transparent">
                                ✓
                              </Button>
                              <Button size="sm" variant="outline" className="h-8 px-2 bg-transparent">
                                ✗
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 bg-transparent"
                    onClick={() => setActiveTab("applications")}
                  >
                    {locale === "fr" ? "Voir toutes les candidatures" : "View all applications"}
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>{locale === "fr" ? "Actions rapides" : "Quick Actions"}</CardTitle>
                  <CardDescription>
                    {locale === "fr" ? "Tâches courantes d'administration" : "Common administrative tasks"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="h-20 flex-col bg-transparent"
                      onClick={() => setActiveTab("members")}
                    >
                      <Users className="h-6 w-6 mb-2" />
                      <span className="text-xs">{locale === "fr" ? "Gérer membres" : "Manage Members"}</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-20 flex-col bg-transparent"
                      onClick={() => setActiveTab("content")}
                    >
                      <FileText className="h-6 w-6 mb-2" />
                      <span className="text-xs">{locale === "fr" ? "Gérer contenu" : "Manage Content"}</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-20 flex-col bg-transparent"
                      onClick={() => setActiveTab("events")}
                    >
                      <Calendar className="h-6 w-6 mb-2" />
                      <span className="text-xs">{locale === "fr" ? "Gérer événements" : "Manage Events"}</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-20 flex-col bg-transparent"
                      onClick={() => setActiveTab("messages")}
                    >
                      <AlertTriangle className="h-6 w-6 mb-2" />
                      <span className="text-xs">{locale === "fr" ? "Gérer messages" : "Manage Messages"}</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-20 flex-col bg-transparent"
                      onClick={() => setActiveTab("uploads")}
                    >
                      <Users className="h-6 w-6 mb-2" />
                      <span className="text-xs">{locale === "fr" ? "Gérer fichiers" : "Manage Files"}</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-20 flex-col bg-transparent"
                      onClick={() => setActiveTab("security")}
                    >
                      <Users className="h-6 w-6 mb-2" />
                      <span className="text-xs">{locale === "fr" ? "Sécurité" : "Security"}</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-20 flex-col bg-transparent"
                      onClick={() => setActiveTab("settings")}
                    >
                      <Users className="h-6 w-6 mb-2" />
                      <span className="text-xs">{locale === "fr" ? "Paramètres" : "Settings"}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 overflow-auto">
        <div className="p-8">{renderContent()}</div>
      </div>
    </div>
  )
}
