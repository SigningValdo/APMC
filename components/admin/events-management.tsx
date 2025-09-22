"use client"
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
import { Calendar, Plus, MapPin, Users, Clock, Edit, Trash2 } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function EventsManagement() {
  const { locale } = useTranslation()

  const events = [
    {
      id: 1,
      title: locale === "fr" ? "Formation sur les nouveaux textes réglementaires" : "Training on New Regulatory Texts",
      date: "2024-02-15",
      time: "09:00",
      location: locale === "fr" ? "Hôtel Hilton, Yaoundé" : "Hilton Hotel, Yaoundé",
      participants: 45,
      maxParticipants: 60,
      status: "upcoming",
      type: locale === "fr" ? "Formation" : "Training",
    },
    {
      id: 2,
      title: locale === "fr" ? "Assemblée Générale Annuelle 2024" : "Annual General Assembly 2024",
      date: "2024-03-20",
      time: "14:00",
      location: locale === "fr" ? "Centre de Conférences, Douala" : "Conference Center, Douala",
      participants: 120,
      maxParticipants: 150,
      status: "upcoming",
      type: locale === "fr" ? "Assemblée" : "Assembly",
    },
    {
      id: 3,
      title: locale === "fr" ? "Atelier pratique : Évaluation des offres" : "Practical Workshop: Bid Evaluation",
      date: "2024-01-10",
      time: "10:00",
      location: locale === "fr" ? "Salle de formation APMC" : "APMC Training Room",
      participants: 25,
      maxParticipants: 30,
      status: "completed",
      type: locale === "fr" ? "Atelier" : "Workshop",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            {locale === "fr" ? "À venir" : "Upcoming"}
          </Badge>
        )
      case "ongoing":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            {locale === "fr" ? "En cours" : "Ongoing"}
          </Badge>
        )
      case "completed":
        return <Badge variant="secondary">{locale === "fr" ? "Terminé" : "Completed"}</Badge>
      case "cancelled":
        return <Badge variant="destructive">{locale === "fr" ? "Annulé" : "Cancelled"}</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-heading text-3xl font-bold text-primary">
            {locale === "fr" ? "Gestion des événements" : "Events Management"}
          </h1>
          <p className="text-muted-foreground">
            {locale === "fr"
              ? "Organisez et gérez les formations, assemblées et ateliers"
              : "Organize and manage trainings, assemblies and workshops"}
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              {locale === "fr" ? "Nouvel événement" : "New Event"}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{locale === "fr" ? "Créer un nouvel événement" : "Create New Event"}</DialogTitle>
              <DialogDescription>
                {locale === "fr"
                  ? "Planifiez un nouvel événement pour vos membres"
                  : "Plan a new event for your members"}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="event-title">{locale === "fr" ? "Titre de l'événement" : "Event Title"}</Label>
                <Input id="event-title" placeholder={locale === "fr" ? "Nom de l'événement" : "Event name"} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="event-date">{locale === "fr" ? "Date" : "Date"}</Label>
                  <Input id="event-date" type="date" />
                </div>
                <div>
                  <Label htmlFor="event-time">{locale === "fr" ? "Heure" : "Time"}</Label>
                  <Input id="event-time" type="time" />
                </div>
              </div>
              <div>
                <Label htmlFor="event-location">{locale === "fr" ? "Lieu" : "Location"}</Label>
                <Input id="event-location" placeholder={locale === "fr" ? "Adresse du lieu" : "Venue address"} />
              </div>
              <div>
                <Label htmlFor="max-participants">
                  {locale === "fr" ? "Nombre maximum de participants" : "Maximum Participants"}
                </Label>
                <Input id="max-participants" type="number" placeholder="50" />
              </div>
              <div>
                <Label htmlFor="event-description">{locale === "fr" ? "Description" : "Description"}</Label>
                <Textarea
                  id="event-description"
                  rows={4}
                  placeholder={locale === "fr" ? "Description de l'événement..." : "Event description..."}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">{locale === "fr" ? "Annuler" : "Cancel"}</Button>
                <Button>{locale === "fr" ? "Créer événement" : "Create Event"}</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{locale === "fr" ? "Événements à venir" : "Upcoming Events"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              {events.filter((e) => e.status === "upcoming").length}
            </div>
            <p className="text-sm text-muted-foreground">{locale === "fr" ? "Ce mois" : "This month"}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {locale === "fr" ? "Participants inscrits" : "Registered Participants"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              {events.reduce((sum, event) => sum + event.participants, 0)}
            </div>
            <p className="text-sm text-muted-foreground">{locale === "fr" ? "Total" : "Total"}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {locale === "fr" ? "Taux de participation" : "Participation Rate"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">87%</div>
            <p className="text-sm text-muted-foreground">{locale === "fr" ? "Moyenne" : "Average"}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            {locale === "fr" ? "Tous les événements" : "All Events"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(event.date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US")}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {event.time}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.location}
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {event.participants}/{event.maxParticipants}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{event.type}</Badge>
                  {getStatusBadge(event.status)}
                  <div className="flex space-x-1">
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
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
