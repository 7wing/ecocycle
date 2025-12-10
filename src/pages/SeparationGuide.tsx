import { Recycle, Leaf, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SeparationGuide() {
  const wasteCategories = [
    {
      title: "Recyclables",
      icon: Recycle,
      color: "text-info",
      bgColor: "bg-info/10",
      borderColor: "border-info/20",
      items: [
        "Paper and cardboard",
        "Plastic bottles and containers",
        "Glass bottles and jars",
        "Metal cans and aluminum foil",
        "Clean pizza boxes"
      ]
    },
    {
      title: "Compost/Organics",
      icon: Leaf,
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20",
      items: [
        "Food scraps and leftovers",
        "Fruit and vegetable peels",
        "Coffee grounds and tea bags",
        "Yard waste and leaves",
        "Eggshells and nutshells"
      ]
    },
    {
      title: "Landfill/General Trash",
      icon: Trash2,
      color: "text-muted-foreground",
      bgColor: "bg-muted",
      borderColor: "border-border",
      items: [
        "Plastic bags and film",
        "Styrofoam containers",
        "Contaminated paper",
        "Non-recyclable plastics",
        "Mixed material items"
      ]
    }
  ];

  return (
    <div className="container px-4 py-8 max-w-6xl mx-auto transition-theme">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Waste Separation Guide</h1>
        <p className="text-muted-foreground">Learn how to properly sort your waste for recycling and composting</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {wasteCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Card 
              key={category.title} 
              className={`${category.bgColor} ${category.borderColor} border-2`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-card ${category.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  {category.title}
                </CardTitle>
                <CardDescription>
                  {category.title === "Recyclables" && "Items that can be recycled"}
                  {category.title === "Compost/Organics" && "Biodegradable organic waste"}
                  {category.title === "Landfill/General Trash" && "Non-recyclable waste"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className={`mt-1 h-1.5 w-1.5 rounded-full ${category.color === 'text-info' ? 'bg-info' : category.color === 'text-success' ? 'bg-success' : 'bg-muted-foreground'} flex-shrink-0`} />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="mt-8 bg-warning/10 border-warning/20">
        <CardHeader>
          <CardTitle>Important Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>• Always rinse containers before recycling to prevent contamination</p>
          <p>• Remove lids and caps from bottles and containers</p>
          <p>• Break down cardboard boxes to save space</p>
          <p>• When in doubt, check with your local recycling guidelines</p>
        </CardContent>
      </Card>
    </div>
  );
}
