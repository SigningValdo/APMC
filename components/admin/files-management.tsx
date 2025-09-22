"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Upload, Plus, Search, Download, Trash2, FileText, ImageIcon, File, Folder } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function FilesManagement() {
  const { locale } = useTranslation()

  const files = [
    {
      id: 1,
      name: locale === "fr" ? "Règlement_intérieur_2024.pdf" : "Internal_regulations_2024.pdf",
      type: "pdf",
      size: "2.4 MB",
      uploadDate: "2024-01-15",
      category: locale === "fr" ? "Documents officiels" : "Official Documents",
      downloads: 156,
    },
    {
      id: 2,
      name: locale === "fr" ? "Guide_soumissionnaire.pdf" : "Bidder_guide.pdf",
      type: "pdf",
      size: "1.8 MB",
      uploadDate: "2024-01-10",
      category: locale === "fr" ? "Guides" : "Guides",
      downloads: 89,
    },
    {
      id: 3,
      name: locale === "fr" ? "Logo_APMC_officiel.png" : "APMC_official_logo.png",
      type: "image",
      size: "245 KB",
      uploadDate: "2024-01-08",
      category: locale === "fr" ? "Images" : "Images",
      downloads: 23,
    },
    {
      id: 4,
      name: locale === "fr" ? "Formulaire_adhesion.docx" : "Membership_form.docx",
      type: "document",
      size: "156 KB",
      uploadDate: "2024-01-05",
      category: locale === "fr" ? "Formulaires" : "Forms",
      downloads: 67,
    },
  ]

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-8 w-8 text-red-500" />
      case "image":
        return <ImageIcon className="h-8 w-8 text-green-500" />
      case "document":
        return <File className="h-8 w-8 text-blue-500" />
      default:
        return <File className="h-8 w-8 text-gray-500" />
    }
  }

  const formatFileSize = (bytes: string) => {
    return bytes
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-heading text-3xl font-bold text-primary">
            {locale === "fr" ? "Gestion des fichiers" : "Files Management"}
          </h1>
          <p className="text-muted-foreground">
            {locale === "fr" ? "Gérez les documents, images et fichiers" : "Manage documents, images and files"}
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              {locale === "fr" ? "Télécharger fichier" : "Upload File"}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{locale === "fr" ? "Télécharger un nouveau fichier" : "Upload New File"}</DialogTitle>
              <DialogDescription>
                {locale === "fr" ? "Ajoutez un nouveau document ou fichier" : "Add a new document or file"}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-lg font-medium mb-2">
                  {locale === "fr" ? "Glissez-déposez vos fichiers ici" : "Drag and drop your files here"}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {locale === "fr" ? "ou cliquez pour sélectionner" : "or click to select"}
                </p>
                <Button variant="outline">{locale === "fr" ? "Sélectionner fichiers" : "Select Files"}</Button>
              </div>
              <div className="text-xs text-muted-foreground">
                {locale === "fr"
                  ? "Formats supportés: PDF, DOC, DOCX, XLS, XLSX, PNG, JPG, JPEG (Max: 10MB)"
                  : "Supported formats: PDF, DOC, DOCX, XLS, XLSX, PNG, JPG, JPEG (Max: 10MB)"}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{locale === "fr" ? "Total fichiers" : "Total Files"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{files.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{locale === "fr" ? "Espace utilisé" : "Storage Used"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">4.6 GB</div>
            <p className="text-sm text-muted-foreground">{locale === "fr" ? "sur 10 GB" : "of 10 GB"}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{locale === "fr" ? "Téléchargements" : "Downloads"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              {files.reduce((sum, file) => sum + file.downloads, 0)}
            </div>
            <p className="text-sm text-muted-foreground">{locale === "fr" ? "Ce mois" : "This month"}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{locale === "fr" ? "Nouveaux fichiers" : "New Files"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">12</div>
            <p className="text-sm text-muted-foreground">{locale === "fr" ? "Cette semaine" : "This week"}</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder={locale === "fr" ? "Rechercher des fichiers..." : "Search files..."} className="pl-10" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Folder className="h-5 w-5 mr-2" />
              {locale === "fr" ? "Catégories" : "Categories"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 hover:bg-muted/50 rounded cursor-pointer">
                <span>{locale === "fr" ? "Documents officiels" : "Official Documents"}</span>
                <Badge variant="secondary">8</Badge>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-muted/50 rounded cursor-pointer">
                <span>{locale === "fr" ? "Guides" : "Guides"}</span>
                <Badge variant="secondary">12</Badge>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-muted/50 rounded cursor-pointer">
                <span>{locale === "fr" ? "Formulaires" : "Forms"}</span>
                <Badge variant="secondary">5</Badge>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-muted/50 rounded cursor-pointer">
                <span>{locale === "fr" ? "Images" : "Images"}</span>
                <Badge variant="secondary">15</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>{locale === "fr" ? "Fichiers récents" : "Recent Files"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {files.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getFileIcon(file.type)}
                    <div>
                      <h4 className="font-medium text-sm">{file.name}</h4>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>{file.size}</span>
                        <span>•</span>
                        <span>{new Date(file.uploadDate).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US")}</span>
                        <span>•</span>
                        <span>
                          {file.downloads} {locale === "fr" ? "téléchargements" : "downloads"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{file.category}</Badge>
                    <div className="flex space-x-1">
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
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
    </div>
  )
}
