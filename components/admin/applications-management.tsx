"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { UserCheck, UserX, Eye, Download, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function ApplicationsManagement() {
  const [selectedApplication, setSelectedApplication] = useState<any>(null)
  const { t, locale } = useTranslation()

  const applications = [
    {
      id: 1,
      name: "Marie Kouam",
      email: "marie.kouam@example.com",
      phone: "+237 123 456 789",
      organization: "ARMP",
      position: "Directrice des Marchés",
      membershipType: locale === "fr" ? "Institutionnel" : "Institutional",
      status: "pending",
      submittedDate: "2024-01-15",
      documents: [
        { name: "CV.pdf", size: "2.1 MB" },
        { name: "Diplomes.pdf", size: "1.8 MB" },
        { name: "Lettre_motivation.pdf", size: "0.5 MB" },
      ],
      motivation:
        locale === "fr"
          ? "Je souhaite rejoindre l'APMC pour contribuer à l'amélioration des pratiques des marchés publics au Cameroun et partager mon expertise avec la communauté professionnelle."
          : "I wish to join CAPPP to contribute to improving public procurement practices in Cameroon and share my expertise with the professional community.",
    },
    {
      id: 2,
      name: "Paul Mbarga",
      email: "paul.mbarga@example.com",
      phone: "+237 987 654 321",
      organization: "Université de Yaoundé",
      position: "Étudiant en Master",
      membershipType: locale === "fr" ? "Étudiant" : "Student",
      status: "pending",
      submittedDate: "2024-01-14",
      documents: [
        { name: "CV_Etudiant.pdf", size: "1.2 MB" },
        { name: "Attestation_inscription.pdf", size: "0.8 MB" },
      ],
      motivation:
        locale === "fr"
          ? "En tant qu'étudiant en droit des marchés publics, je souhaite approfondir mes connaissances pratiques et me connecter avec des professionnels du secteur."
          : "As a student in public procurement law, I wish to deepen my practical knowledge and connect with sector professionals.",
    },
    {
      id: 3,
      name: "Sophie Nkomo",
      email: "sophie.nkomo@example.com",
      phone: "+237 555 123 456",
      organization: "Consultant Indépendant",
      position: "Consultante Senior",
      membershipType: locale === "fr" ? "Individuel" : "Individual",
      status: "approved",
      submittedDate: "2024-01-13",
      reviewedDate: "2024-01-14",
      documents: [
        { name: "CV_Consultant.pdf", size: "2.5 MB" },
        { name: "Certifications.pdf", size: "3.2 MB" },
        { name: "References.pdf", size: "1.1 MB" },
      ],
    },
    {
      id: 4,
      name: "Robert Essomba",
      email: "robert.essomba@example.com",
      phone: "+237 777 888 999",
      organization: "Ministère des Finances",
      position: "Chef de Service",
      membershipType: locale === "fr" ? "Individuel" : "Individual",
      status: "rejected",
      submittedDate: "2024-01-12",
      reviewedDate: "2024-01-13",
      rejectionReason:
        locale === "fr" ? "Documents incomplets - diplômes manquants" : "Incomplete documents - missing diplomas",
      documents: [{ name: "CV_Incomplet.pdf", size: "1.0 MB" }],
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            <Clock className="h-3 w-3 mr-1" />
            {locale === "fr" ? "En attente" : "Pending"}
          </Badge>
        )
      case "approved":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="h-3 w-3 mr-1" />
            {locale === "fr" ? "Approuvé" : "Approved"}
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="destructive">
            <XCircle className="h-3 w-3 mr-1" />
            {locale === "fr" ? "Rejeté" : "Rejected"}
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const handleApprove = (applicationId: number) => {
    console.log("Approving application:", applicationId)
    // Handle approval logic
  }

  const handleReject = (applicationId: number) => {
    console.log("Rejecting application:", applicationId)
    // Handle rejection logic
  }

  const pendingCount = applications.filter((app) => app.status === "pending").length
  const approvedCount = applications.filter((app) => app.status === "approved").length
  const rejectedCount = applications.filter((app) => app.status === "rejected").length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary">
            {locale === "fr" ? "Gestion des candidatures" : "Applications Management"}
          </h2>
          <p className="text-muted-foreground">
            {locale === "fr"
              ? "Examinez et validez les demandes d'adhésion"
              : "Review and validate membership applications"}
          </p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          {locale === "fr" ? "Exporter rapport" : "Export Report"}
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-primary">{applications.length}</div>
            <div className="text-sm text-muted-foreground">
              {locale === "fr" ? "Total candidatures" : "Total applications"}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">{pendingCount}</div>
            <div className="text-sm text-muted-foreground">{locale === "fr" ? "En attente" : "Pending"}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{approvedCount}</div>
            <div className="text-sm text-muted-foreground">{locale === "fr" ? "Approuvées" : "Approved"}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">{rejectedCount}</div>
            <div className="text-sm text-muted-foreground">{locale === "fr" ? "Rejetées" : "Rejected"}</div>
          </CardContent>
        </Card>
      </div>

      {/* Applications Table */}
      <Card>
        <CardHeader>
          <CardTitle>{locale === "fr" ? "Liste des candidatures" : "Applications List"}</CardTitle>
          <CardDescription>
            {locale === "fr" ? "Gérez les demandes d'adhésion" : "Manage membership requests"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{locale === "fr" ? "Candidat" : "Applicant"}</TableHead>
                <TableHead>{locale === "fr" ? "Organisation" : "Organization"}</TableHead>
                <TableHead>{locale === "fr" ? "Type" : "Type"}</TableHead>
                <TableHead>{locale === "fr" ? "Statut" : "Status"}</TableHead>
                <TableHead>{locale === "fr" ? "Date soumission" : "Submitted"}</TableHead>
                <TableHead>{locale === "fr" ? "Documents" : "Documents"}</TableHead>
                <TableHead>{locale === "fr" ? "Actions" : "Actions"}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" alt={application.name} />
                        <AvatarFallback className="text-xs">
                          {application.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{application.name}</div>
                        <div className="text-sm text-muted-foreground">{application.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="text-sm font-medium">{application.organization}</div>
                      <div className="text-sm text-muted-foreground">{application.position}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{application.membershipType}</Badge>
                  </TableCell>
                  <TableCell>{getStatusBadge(application.status)}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {new Date(application.submittedDate).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US")}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {application.documents.length} {locale === "fr" ? "fichiers" : "files"}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedApplication(application)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>
                              {locale === "fr" ? "Détails de la candidature" : "Application Details"}
                            </DialogTitle>
                            <DialogDescription>
                              {locale === "fr"
                                ? "Examinez les informations du candidat"
                                : "Review applicant information"}
                            </DialogDescription>
                          </DialogHeader>
                          {selectedApplication && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium">
                                    {locale === "fr" ? "Nom complet" : "Full Name"}
                                  </label>
                                  <p className="text-sm text-muted-foreground">{selectedApplication.name}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Email</label>
                                  <p className="text-sm text-muted-foreground">{selectedApplication.email}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">
                                    {locale === "fr" ? "Téléphone" : "Phone"}
                                  </label>
                                  <p className="text-sm text-muted-foreground">{selectedApplication.phone}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">
                                    {locale === "fr" ? "Organisation" : "Organization"}
                                  </label>
                                  <p className="text-sm text-muted-foreground">{selectedApplication.organization}</p>
                                </div>
                              </div>

                              {selectedApplication.motivation && (
                                <div>
                                  <label className="text-sm font-medium">
                                    {locale === "fr" ? "Lettre de motivation" : "Cover Letter"}
                                  </label>
                                  <p className="text-sm text-muted-foreground mt-1">{selectedApplication.motivation}</p>
                                </div>
                              )}

                              <div>
                                <label className="text-sm font-medium">
                                  {locale === "fr" ? "Documents joints" : "Attached Documents"}
                                </label>
                                <div className="space-y-2 mt-2">
                                  {selectedApplication.documents.map((doc: any, index: number) => (
                                    <div
                                      key={index}
                                      className="flex items-center justify-between p-2 bg-muted/30 rounded"
                                    >
                                      <span className="text-sm">{doc.name}</span>
                                      <div className="flex items-center space-x-2">
                                        <span className="text-xs text-muted-foreground">{doc.size}</span>
                                        <Button variant="ghost" size="sm">
                                          <Download className="h-3 w-3" />
                                        </Button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {selectedApplication.status === "pending" && (
                                <div className="flex space-x-2 pt-4">
                                  <Button onClick={() => handleApprove(selectedApplication.id)} className="flex-1">
                                    <UserCheck className="h-4 w-4 mr-2" />
                                    {locale === "fr" ? "Approuver" : "Approve"}
                                  </Button>
                                  <Button
                                    variant="destructive"
                                    onClick={() => handleReject(selectedApplication.id)}
                                    className="flex-1"
                                  >
                                    <UserX className="h-4 w-4 mr-2" />
                                    {locale === "fr" ? "Rejeter" : "Reject"}
                                  </Button>
                                </div>
                              )}

                              {selectedApplication.rejectionReason && (
                                <div className="p-3 bg-red-50 border border-red-200 rounded">
                                  <div className="flex items-center">
                                    <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                                    <span className="text-sm font-medium text-red-800">
                                      {locale === "fr" ? "Raison du rejet" : "Rejection Reason"}
                                    </span>
                                  </div>
                                  <p className="text-sm text-red-700 mt-1">{selectedApplication.rejectionReason}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>

                      {application.status === "pending" && (
                        <>
                          <Button size="sm" onClick={() => handleApprove(application.id)}>
                            <UserCheck className="h-4 w-4" />
                          </Button>
                          <Button variant="destructive" size="sm" onClick={() => handleReject(application.id)}>
                            <UserX className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
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
