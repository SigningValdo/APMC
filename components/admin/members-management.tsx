"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Filter, MoreHorizontal, UserPlus, Mail, Phone, Edit, Trash2, Eye, Download } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function MembersManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const { t, locale } = useTranslation()

  const members = [
    {
      id: 1,
      name: "Jean Dupont",
      email: "jean.dupont@example.com",
      phone: "+237 123 456 789",
      organization: "Ministère des Marchés Publics",
      membershipType: locale === "fr" ? "Individuel" : "Individual",
      status: "active",
      joinDate: "2022-03-15",
      lastLogin: "2024-01-15",
    },
    {
      id: 2,
      name: "Marie Kouam",
      email: "marie.kouam@example.com",
      phone: "+237 987 654 321",
      organization: "ARMP",
      membershipType: locale === "fr" ? "Institutionnel" : "Institutional",
      status: "active",
      joinDate: "2021-11-20",
      lastLogin: "2024-01-14",
    },
    {
      id: 3,
      name: "Paul Mbarga",
      email: "paul.mbarga@example.com",
      phone: "+237 555 123 456",
      organization: "Université de Yaoundé",
      membershipType: locale === "fr" ? "Étudiant" : "Student",
      status: "inactive",
      joinDate: "2023-09-10",
      lastLogin: "2023-12-20",
    },
    {
      id: 4,
      name: "Sophie Nkomo",
      email: "sophie.nkomo@example.com",
      phone: "+237 777 888 999",
      organization: "Consultant Indépendant",
      membershipType: locale === "fr" ? "Individuel" : "Individual",
      status: "suspended",
      joinDate: "2023-01-05",
      lastLogin: "2024-01-10",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            {locale === "fr" ? "Actif" : "Active"}
          </Badge>
        )
      case "inactive":
        return <Badge variant="secondary">{locale === "fr" ? "Inactif" : "Inactive"}</Badge>
      case "suspended":
        return <Badge variant="destructive">{locale === "fr" ? "Suspendu" : "Suspended"}</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getMembershipTypeBadge = (type: string) => {
    const colors = {
      Individuel: "bg-blue-100 text-blue-800",
      Individual: "bg-blue-100 text-blue-800",
      Institutionnel: "bg-purple-100 text-purple-800",
      Institutional: "bg-purple-100 text-purple-800",
      Étudiant: "bg-orange-100 text-orange-800",
      Student: "bg-orange-100 text-orange-800",
    }

    return <Badge className={colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800"}>{type}</Badge>
  }

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.organization.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary">
            {locale === "fr" ? "Gestion des membres" : "Members Management"}
          </h2>
          <p className="text-muted-foreground">
            {locale === "fr" ? "Gérez les membres de votre association" : "Manage your association members"}
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            {locale === "fr" ? "Exporter" : "Export"}
          </Button>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            {locale === "fr" ? "Ajouter membre" : "Add Member"}
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-primary">524</div>
            <div className="text-sm text-muted-foreground">{locale === "fr" ? "Total membres" : "Total members"}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">498</div>
            <div className="text-sm text-muted-foreground">{locale === "fr" ? "Membres actifs" : "Active members"}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600">20</div>
            <div className="text-sm text-muted-foreground">
              {locale === "fr" ? "Membres inactifs" : "Inactive members"}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">6</div>
            <div className="text-sm text-muted-foreground">
              {locale === "fr" ? "Membres suspendus" : "Suspended members"}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>{locale === "fr" ? "Liste des membres" : "Members List"}</CardTitle>
              <CardDescription>
                {locale === "fr" ? "Recherchez et gérez vos membres" : "Search and manage your members"}
              </CardDescription>
            </div>
            <div className="flex space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={locale === "fr" ? "Rechercher..." : "Search..."}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                {locale === "fr" ? "Filtres" : "Filters"}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{locale === "fr" ? "Membre" : "Member"}</TableHead>
                <TableHead>{locale === "fr" ? "Contact" : "Contact"}</TableHead>
                <TableHead>{locale === "fr" ? "Organisation" : "Organization"}</TableHead>
                <TableHead>{locale === "fr" ? "Type" : "Type"}</TableHead>
                <TableHead>{locale === "fr" ? "Statut" : "Status"}</TableHead>
                <TableHead>{locale === "fr" ? "Adhésion" : "Joined"}</TableHead>
                <TableHead>{locale === "fr" ? "Dernière connexion" : "Last Login"}</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" alt={member.name} />
                        <AvatarFallback className="text-xs">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-muted-foreground">ID: {member.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Mail className="h-3 w-3 mr-1" />
                        {member.email}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Phone className="h-3 w-3 mr-1" />
                        {member.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{member.organization}</div>
                  </TableCell>
                  <TableCell>{getMembershipTypeBadge(member.membershipType)}</TableCell>
                  <TableCell>{getStatusBadge(member.status)}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {new Date(member.joinDate).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US")}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-muted-foreground">
                      {new Date(member.lastLogin).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US")}
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          {locale === "fr" ? "Voir profil" : "View Profile"}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          {locale === "fr" ? "Modifier" : "Edit"}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="h-4 w-4 mr-2" />
                          {locale === "fr" ? "Envoyer email" : "Send Email"}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          {locale === "fr" ? "Supprimer" : "Delete"}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
