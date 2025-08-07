import Navigation from "@/components/Navigation";
import { Filter, SortAsc } from "lucide-react";
import { Button } from "@/components/ui/button";

const Accessories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Accessories</h1>
            <p className="text-muted-foreground">
              Essential accessories to enhance your tech experience
            </p>
          </div>
          
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline" size="sm">
              <SortAsc className="h-4 w-4 mr-2" />
              Sort
            </Button>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-6">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Coming Soon</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            We're working hard to bring you the best selection of tech accessories. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accessories;