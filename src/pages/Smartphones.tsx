import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
import { Filter, SortAsc } from "lucide-react";
import { Button } from "@/components/ui/button";

const Smartphones = () => {
  const smartphones = getProductsByCategory("smartphones");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Smartphones</h1>
            <p className="text-muted-foreground">
              Latest smartphones with cutting-edge technology and premium features
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {smartphones.map((phone) => (
            <ProductCard key={phone.id} product={phone} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Smartphones;