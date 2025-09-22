"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Users,
  UserCheck,
  FileText,
  Calendar,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Upload,
  Shield,
} from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { cn } from "@/lib/utils"

interface AdminSidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function AdminSidebar({ activeTab, onTabChange }: AdminSidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const { t, locale } = useTranslation()

  const menuItems = [
    {
      id: "dashboard",
      icon: BarChart3,
      label: locale === "fr" ? "Tableau de bord" : "Dashboard",
    },
    {
      id: "members",
      icon: Users,
      label: locale === "fr" ? "Membres" : "Members",
      badge: "524",
    },
    {
      id: "applications",
      icon: UserCheck,
      label: locale === "fr" ? "Candidatures" : "Applications",
      badge: "18",
      badgeVariant: "destructive" as const,
    },
    {
      id: "content",
      icon: FileText,
      label: locale === "fr" ? "Contenu" : "Content",
    },
    {
      id: "events",
      icon: Calendar,
      label: locale === "fr" ? "Événements" : "Events",
    },
    {
      id: "messages",
      icon: MessageSquare,
      label: locale === "fr" ? "Messages" : "Messages",
      badge: "5",
    },
    {
      id: "uploads",
      icon: Upload,
      label: locale === "fr" ? "Fichiers" : "Files",
    },
    {
      id: "security",
      icon: Shield,
      label: locale === "fr" ? "Sécurité" : "Security",
    },
    {
      id: "settings",
      icon: Settings,
      label: locale === "fr" ? "Paramètres" : "Settings",
    },
  ]

  return (
    <div className={cn("bg-card border-r transition-all duration-300 flex flex-col", collapsed ? "w-16" : "w-64")}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-primary">
                  {locale === "fr" ? "APMC Admin" : "CAPPP Admin"}
                </div>
              </div>
            </div>
          )}
          <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)} className="ml-auto">
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "secondary" : "ghost"}
              className={cn("w-full justify-start", collapsed && "px-2")}
              onClick={() => onTabChange(item.id)}
            >
              <item.icon className={cn("h-4 w-4", !collapsed && "mr-2")} />
              {!collapsed && (
                <>
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <Badge variant={item.badgeVariant || "secondary"} className="ml-auto text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </>
              )}
            </Button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4">
        <Button variant="outline" className={cn("w-full justify-start", collapsed && "px-2")}>
          <LogOut className={cn("h-4 w-4", !collapsed && "mr-2")} />
          {!collapsed && (locale === "fr" ? "Déconnexion" : "Logout")}
        </Button>
      </div>
    </div>
  )
}
