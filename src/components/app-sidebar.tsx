import * as React from "react"
import {
  BrainCircuit,
  ListTodo,
} from "lucide-react"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  projects: [
    {
      name: "Murojaah Harian",
      url: "/dashboard/user/murojaah-harian",
      icon: ListTodo,
    },
    {
      name: "AI Rekomendasi",
      url: "/dashboard/user/ai-rekomendasi",
      icon: BrainCircuit,
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const filteredProjects = data.projects

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <img
                src="/MurajaApp-logo-blue.svg"
                alt="MTA Learning Management System"
                className="lg:h-20 h-16 rounded-lg"
              />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={filteredProjects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
