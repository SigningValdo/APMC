"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MessageSquare, Plus, Search, Reply, Archive, Trash2, Mail, Clock } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function MessagesManagement() {
  const { locale } = useTranslation()
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null)

  const messages = [
    {
      id: 1,
      from: "marie.kouam@example.com",
      subject: locale === "fr" ? "Question sur les critères d'éligibilité" : "Question about eligibility criteria",
      preview:
        locale === "fr"
          ? "Bonjour, j'aimerais savoir quels sont les critères..."
          : "Hello, I would like to know what are the criteria...",
      date: "2024-01-15T10:30:00",
      status: "unread",
      priority: "normal",
    },
    {
      id: 2,
      from: "paul.mbarga@company.cm",
      subject: locale === "fr" ? "Demande de formation personnalisée" : "Custom training request",
      preview:
        locale === "fr"
          ? "Notre entreprise souhaiterait organiser une formation..."
          : "Our company would like to organize a training...",
      date: "2024-01-14T15:45:00",
      status: "read",
      priority: "high",
    },
    {
      id: 3,
      from: "info@ministry.gov.cm",
      subject: locale === "fr" ? "Invitation à la réunion ministérielle" : "Invitation to ministerial meeting",
      preview:
        locale === "fr"
          ? "Le Ministère vous invite à participer à la réunion..."
          : "The Ministry invites you to participate in the meeting...",
      date: "2024-01-13T09:15:00",
      status: "replied",
      priority: "high",
    },
    {
      id: 4,
      from: "sophie.nkomo@student.edu",
      subject: locale === "fr" ? "Stage étudiant - Demande d'information" : "Student internship - Information request",
      preview:
        locale === "fr"
          ? "Je suis étudiante en master et j'aimerais effectuer..."
          : "I am a master's student and I would like to do...",
      date: "2024-01-12T14:20:00",
      status: "archived",
      priority: "low",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "unread":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{locale === "fr" ? "Non lu" : "Unread"}</Badge>
        )
      case "read":
        return <Badge variant="secondary">{locale === "fr" ? "Lu" : "Read"}</Badge>
      case "replied":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            {locale === "fr" ? "Répondu" : "Replied"}
          </Badge>
        )
      case "archived":
        return <Badge variant="outline">{locale === "fr" ? "Archivé" : "Archived"}</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">{locale === "fr" ? "Urgent" : "High"}</Badge>
      case "normal":
        return <Badge variant="secondary">{locale === "fr" ? "Normal" : "Normal"}</Badge>
      case "low":
        return <Badge variant="outline">{locale === "fr" ? "Faible" : "Low"}</Badge>
      default:
        return <Badge variant="secondary">{priority}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-heading text-3xl font-bold text-primary">
            {locale === "fr" ? "Gestion des messages" : "Messages Management"}
          </h1>
          <p className="text-muted-foreground">
            {locale === "fr" ? "Gérez les messages et communications" : "Manage messages and communications"}
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              {locale === "fr" ? "Nouveau message" : "New Message"}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{locale === "fr" ? "Composer un message" : "Compose Message"}</DialogTitle>
              <DialogDescription>
                {locale === "fr" ? "Envoyez un message à vos membres" : "Send a message to your members"}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="to">{locale === "fr" ? "Destinataire" : "To"}</Label>
                <Input id="to" placeholder={locale === "fr" ? "email@example.com" : "email@example.com"} />
              </div>
              <div>
                <Label htmlFor="subject">{locale === "fr" ? "Sujet" : "Subject"}</Label>
                <Input id="subject" placeholder={locale === "fr" ? "Sujet du message" : "Message subject"} />
              </div>
              <div>
                <Label htmlFor="message">{locale === "fr" ? "Message" : "Message"}</Label>
                <Textarea
                  id="message"
                  rows={8}
                  placeholder={locale === "fr" ? "Votre message..." : "Your message..."}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">{locale === "fr" ? "Brouillon" : "Draft"}</Button>
                <Button>{locale === "fr" ? "Envoyer" : "Send"}</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{locale === "fr" ? "Messages non lus" : "Unread Messages"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              {messages.filter((m) => m.status === "unread").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{locale === "fr" ? "Messages urgents" : "High Priority"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-destructive">
              {messages.filter((m) => m.priority === "high").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{locale === "fr" ? "Réponses en attente" : "Pending Replies"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{messages.filter((m) => m.status === "read").length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{locale === "fr" ? "Messages archivés" : "Archived Messages"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-muted-foreground">
              {messages.filter((m) => m.status === "archived").length}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder={locale === "fr" ? "Rechercher dans les messages..." : "Search messages..."}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="h-5 w-5 mr-2" />
            {locale === "fr" ? "Boîte de réception" : "Inbox"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-muted/50 ${
                  message.status === "unread" ? "bg-blue-50 border-blue-200" : ""
                }`}
                onClick={() => setSelectedMessage(message.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-sm">{message.from}</span>
                    {getPriorityBadge(message.priority)}
                  </div>
                  <h3 className="font-medium">{message.subject}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{message.preview}</p>
                  <div className="flex items-center space-x-2 mt-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>
                      {new Date(message.date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US")}{" "}
                      {new Date(message.date).toLocaleTimeString(locale === "fr" ? "fr-FR" : "en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusBadge(message.status)}
                  <div className="flex space-x-1">
                    <Button size="sm" variant="outline">
                      <Reply className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Archive className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
