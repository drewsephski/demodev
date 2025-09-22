"use client";

import Link from "next/link";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { UserButton } from "@clerk/nextjs";
import {
  BarChart3,
  Home,
  Settings,
  Users,
  Calendar,
  Bell,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-background">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        {/* Sidebar */}
        <ResizablePanel defaultSize={20} minSize={10} maxSize={25}>
          <div className="flex h-full flex-col border-r bg-muted/10">
            {/* Logo */}
            <div className="flex h-14 items-center px-4 border-b">
              <h1 className="font-bold text-lg">Dashboard</h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  size="sm"
                  asChild
                >
                  <Link href="/dashboard" className="w-full flex items-center">
                    <Home className="mr-2 h-4 w-4" />
                    Overview
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  size="sm"
                  asChild
                >
                  <Link
                    href="/dashboard/analytics"
                    className="w-full flex items-center"
                  >
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Analytics
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  size="sm"
                  asChild
                >
                  <Link
                    href="/dashboard/users"
                    className="w-full flex items-center"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Users
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  size="sm"
                  asChild
                >
                  <Link
                    href="/dashboard/calendar"
                    className="w-full flex items-center"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Calendar
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  size="sm"
                  asChild
                >
                  <Link
                    href="/dashboard/settings"
                    className="w-full flex items-center"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Main Content Area */}
        <ResizablePanel defaultSize={80}>
          <ResizablePanelGroup direction="vertical">
            {/* Header */}
            <ResizablePanel defaultSize={10} minSize={8} maxSize={15}>
              <div className="flex h-full items-center justify-between px-6 border-b bg-background">
                <div className="flex items-center space-x-4">
                  <h2 className="text-2xl font-bold">Dashboard</h2>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search..." className="w-64 pl-8" />
                  </div>
                  <Button variant="ghost" size="icon">
                    <Bell className="h-4 w-4" />
                  </Button>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
            </ResizablePanel>

            <ResizableHandle />

            {/* Main Dashboard Content */}
            <ResizablePanel defaultSize={90}>
              <div className="p-6 space-y-6 h-full overflow-y-auto">
                {children}
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
