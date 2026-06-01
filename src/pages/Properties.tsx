import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Building2, Plus, Search, MapPin, Bed, Bath, Square, MoreVertical, Users } from "lucide-react";

interface Property {
  id: number;
  name: string;
  address: string;
  type: string;
  units: number;
  occupied: number;
  rent: number;
  image: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
}

const initialProperties: Property[] = [
  {
    id: 1,
    name: "Oak Street Apartments",
    address: "123 Oak Street, London, E1 6AN",
    type: "Multi-family",
    units: 8,
    occupied: 7,
    rent: 1200,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 950,
  },
  {
    id: 2,
    name: "Pine Avenue Duplex",
    address: "456 Pine Ave, London, SW1A 1AA",
    type: "Duplex",
    units: 2,
    occupied: 2,
    rent: 950,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 750,
  },
  {
    id: 3,
    name: "Maple Drive House",
    address: "789 Maple Dr, Manchester, M1 1AA",
    type: "Single-family",
    units: 1,
    occupied: 1,
    rent: 1450,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
  },
  {
    id: 4,
    name: "Cedar Lane Townhouse",
    address: "321 Cedar Lane, Birmingham, B1 1AA",
    type: "Townhouse",
    units: 1,
    occupied: 1,
    rent: 1100,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
  },
  {
    id: 5,
    name: "Elm Court Complex",
    address: "555 Elm Court, Leeds, LS1 1AA",
    type: "Multi-family",
    units: 12,
    occupied: 11,
    rent: 1350,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
  },
  {
    id: 6,
    name: "Birch Boulevard Villa",
    address: "888 Birch Blvd, Bristol, BS1 1AA",
    type: "Single-family",
    units: 1,
    occupied: 0,
    rent: 2200,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2500,
  },
];

export default function Properties() {
  const [properties] = useState<Property[]>(initialProperties);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || property.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Properties</h1>
            <p className="text-slate-400 mt-1">Manage your rental properties</p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Property
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Property</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label className="text-slate-300">Property Name</Label>
                  <Input placeholder="e.g., Oak Street Apartments" className="bg-slate-800 border-slate-700" />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-300">Address</Label>
                  <Input placeholder="Full address" className="bg-slate-800 border-slate-700" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Property Type</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-800 border-slate-700">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="single">Single-family</SelectItem>
                        <SelectItem value="multi">Multi-family</SelectItem>
                        <SelectItem value="duplex">Duplex</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Units</Label>
                    <Input type="number" placeholder="1" className="bg-slate-800 border-slate-700" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Bedrooms</Label>
                    <Input type="number" placeholder="2" className="bg-slate-800 border-slate-700" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Bathrooms</Label>
                    <Input type="number" placeholder="1" className="bg-slate-800 border-slate-700" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Sq. Ft.</Label>
                    <Input type="number" placeholder="1000" className="bg-slate-800 border-slate-700" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-300">Monthly Rent (£)</Label>
                  <Input type="number" placeholder="1200" className="bg-slate-800 border-slate-700" />
                </div>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Add Property</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <div className="flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-900 border-slate-800 text-white"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-48 bg-slate-900 border-slate-800 text-white">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-slate-800">
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Single-family">Single-family</SelectItem>
              <SelectItem value="Multi-family">Multi-family</SelectItem>
              <SelectItem value="Duplex">Duplex</SelectItem>
              <SelectItem value="Townhouse">Townhouse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="bg-slate-900/50 border-slate-800 overflow-hidden group hover:border-slate-700 transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute top-3 right-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="bg-black/50 hover:bg-black/70 text-white h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-slate-800 border-slate-700">
                      <DropdownMenuItem className="text-white hover:bg-slate-700">Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-white hover:bg-slate-700">View Details</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-400 hover:bg-slate-700">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/90 text-white">
                    {property.type}
                  </span>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-white">{property.name}</h3>
                <div className="flex items-center gap-1 text-slate-400 text-sm mt-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="truncate">{property.address}</span>
                </div>

                <div className="flex items-center gap-4 mt-4 text-slate-400 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Bed className="h-4 w-4" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bath className="h-4 w-4" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Square className="h-4 w-4" />
                    <span>{property.sqft} ft²</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-slate-400" />
                    <span className="text-sm">
                      <span className={property.occupied === property.units ? "text-emerald-400" : "text-yellow-400"}>
                        {property.occupied}
                      </span>
                      <span className="text-slate-400">/{property.units}</span>
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-white">£{property.rent}</span>
                    <span className="text-slate-400 text-sm">/mo</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="h-12 w-12 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">No properties found matching your criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
