import { useState } from "react";
import { FileText, Calendar, MapPin, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function BulkItemRequest() {
  const [itemDescription, setItemDescription] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!itemDescription || !preferredDate || !address) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Bulk item pickup request submitted successfully!", {
      description: "We'll contact you within 24 hours to confirm your pickup date."
    });

    setItemDescription("");
    setPreferredDate("");
    setAddress("");
  };

  return (
    <div className="container px-4 py-8 max-w-3xl mx-auto transition-theme">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-2">
          <Package className="h-8 w-8 text-primary" />
          Bulk Item Request
        </h1>
        <p className="text-muted-foreground">Schedule a pickup for large items that don't fit in regular bins</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Request Bulk Pickup</CardTitle>
          <CardDescription>
            Fill out the form below to schedule a pickup for large items like furniture, appliances or electronics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="description" className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                Item Description
              </Label>
              <Textarea
                id="description"
                placeholder="e.g., Old couch, broken refrigerator, mattress"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                rows={4}
                required
              />
              <p className="text-xs text-muted-foreground">
                Please describe the item(s) and their approximate size
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Preferred Pickup Date
              </Label>
              <Input
                id="date"
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                We'll try our best to accommodate your preferred date
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Pickup Address
              </Label>
              <Input
                id="address"
                type="text"
                placeholder="123 Main St, City, State ZIP"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                Items must be placed at the curb or easily accessible location
              </p>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Submit Request
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="mt-6 p-4 bg-muted rounded-lg space-y-2">
        <h3 className="font-semibold text-sm">Acceptable Items:</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Furniture (couches, chairs, tables)</li>
          <li>• Appliances (refrigerators, washers, dryers)</li>
          <li>• Electronics (TVs, computers, monitors)</li>
          <li>• Mattresses and box springs</li>
        </ul>
        <p className="text-xs text-muted-foreground mt-4">
          Note: Hazardous materials are not accepted. Please contact your local hazardous waste facility for proper disposal.
        </p>
      </div>
    </div>
  );
}
