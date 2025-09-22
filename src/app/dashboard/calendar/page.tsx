import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarPage() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array.from({ length: 35 }, (_, i) => i - 2);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>October 2025</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 border-t border-l">
          {days.map((day) => (
            <div
              key={day}
              className="p-2 border-b border-r text-center font-semibold text-sm"
            >
              {day}
            </div>
          ))}
          {dates.map((date, i) => (
            <div
              key={i}
              className={`p-2 border-b border-r h-24 ${date < 1 || date > 31 ? "bg-muted/50" : ""}`}
            >
              {date > 0 && date < 32 && (
                <span className="font-semibold text-sm">{date}</span>
              )}
              {date === 8 && (
                <div className="mt-1 text-xs bg-primary/20 text-primary-foreground rounded-sm p-1">
                  Team Sync
                </div>
              )}
              {date === 15 && (
                <div className="mt-1 text-xs bg-green-500/20 text-green-700 rounded-sm p-1">
                  Product Launch
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
