import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Recycle, Calendar, Leaf, Truck } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-[calc(100vh-8rem)] transition-theme">
      <section className="container px-4 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-4">
            <Recycle className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Welcome to <span className="text-primary">EcoCycle Hub</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Your community's smart solution for sustainable waste management. Track collections, learn recycling and make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" onClick={() => navigate("/auth")} className="text-lg px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/auth")} className="text-lg px-8">
              Sign In
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Everything You Need
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-primary/10">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Smart Calendar</h3>
              <p className="text-muted-foreground">
                Never miss a collection day with our interactive calendar and reminders
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-primary/10">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Real-time Status</h3>
              <p className="text-muted-foreground">
                Track collection routes and get instant updates on delays
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-primary/10">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Eco Tips</h3>
              <p className="text-muted-foreground">
                Learn sustainable practices and improve your recycling score
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-primary/10">
                <Recycle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Separation Guide</h3>
              <p className="text-muted-foreground">
                Easy-to-follow guides for proper waste sorting
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 py-16 md:py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Join the Cycle?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Start managing your waste sustainably today
        </p>
        <Button size="lg" onClick={() => navigate("/auth")} className="text-lg px-12">
          Join Now
        </Button>
      </section>
    </div>
  );
};

export default Index;
