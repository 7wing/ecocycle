import { Calendar, Lightbulb, TrendingUp, Leaf, Truck, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const collectionDays = [1, 4, 8, 11, 15, 18, 22, 25, 29];

function getNextCollectionDate(collectionDays) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const nextDay = collectionDays.find(day => day >= today.getDate());

  if (nextDay) {
    return new Date(year, month, nextDay);
  } else {
    const nextMonth = month + 1;
    return new Date(year, nextMonth, collectionDays[0]);
  }
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [nextCollection, setNextCollection] = useState(null);

  useEffect(() => {
    const date = getNextCollectionDate(collectionDays);
    setNextCollection(date);
  }, []);

  const routeStatus = "On Time!";
  const ecoScore = 87;
  const ecoTip = "Tip: Rinse your containers to prevent pests!";

  const nextCollectionDate = nextCollection
    ? nextCollection.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    : "Loading...";

  const nextCollectionTime = "7:00 AM";

  return (
    <div className="container px-4 py-8 max-w-6xl mx-auto transition-theme">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-muted-foreground">Here's your waste collection overview</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Next Collection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">{nextCollectionDate}</div>
            <div className="text-lg text-muted-foreground">{nextCollectionTime}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              Route Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge 
              className="text-base px-4 py-1 bg-success/10 text-success hover:bg-success/20"
            >
              {routeStatus}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Eco Score
            </CardTitle>
            <CardDescription>Your recycling performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary">{ecoScore}%</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Button 
          variant="outline" 
          className="h-20 flex flex-col gap-2"
          onClick={() => navigate("/calendar")}
        >
          <Calendar className="h-6 w-6" />
          <span>Collection Calendar</span>
        </Button>
        <Button 
          variant="outline" 
          className="h-20 flex flex-col gap-2"
          onClick={() => navigate("/guide")}
        >
          <Leaf className="h-6 w-6" />
          <span>Separation Guide</span>
        </Button>
        <Button 
          variant="outline" 
          className="h-20 flex flex-col gap-2"
          onClick={() => navigate("/bulk-request")}
        >
          <FileText className="h-6 w-6" />
          <span>Bulk Item Request</span>
        </Button>
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Lightbulb className="h-5 w-5" />
            EcoTip of the Day
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">{ecoTip}</p>
        </CardContent>
      </Card>
    </div>
  );
}
