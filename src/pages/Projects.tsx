import { useState } from "react";
import { Building2, MapPin, Search } from "lucide-react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { projectsData, Project, City, District } from "@/data/projects";

const Projects = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = selectedState
    ? projectsData.filter(state => state.name === selectedState)
    : projectsData;

  const searchProjects = (query: string) => {
    if (!query.trim()) return [];
    
    const results: Array<{ project: Project; city: string; district: string; state: string }> = [];
    
    projectsData.forEach(state => {
      state.districts.forEach(district => {
        district.cities.forEach(city => {
          city.projects.forEach(project => {
            if (
              project.name.toLowerCase().includes(query.toLowerCase()) ||
              project.address.toLowerCase().includes(query.toLowerCase()) ||
              city.name.toLowerCase().includes(query.toLowerCase()) ||
              district.name.toLowerCase().includes(query.toLowerCase())
            ) {
              results.push({
                project,
                city: city.name,
                district: district.name,
                state: state.name
              });
            }
          });
        });
      });
    });
    
    return results;
  };

  const searchResults = searchQuery.trim() ? searchProjects(searchQuery) : [];

  const getProjectTypeColor = (type: string) => {
    switch (type) {
      case "commercial": return "bg-blue-500";
      case "residential": return "bg-green-500";
      case "industrial": return "bg-orange-500";
      case "hospitality": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background pt-[208px]">
      <Header />
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Building2 className="h-10 w-10 text-primary" />
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our extensive portfolio of 100+ successful projects across Andhra Pradesh and Telangana
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search by project name, location, or district..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Search Results ({searchResults.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((result, idx) => (
                <Card
                  key={idx}
                  className="p-4 cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                  onClick={() => setSelectedProject(result.project)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg">{result.project.name}</h3>
                    <Badge className={getProjectTypeColor(result.project.type)}>
                      {result.project.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2 flex items-start gap-1">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    {result.project.address}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {result.city}, {result.district}, {result.state}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* State Selection */}
        {!selectedState && !searchQuery && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {projectsData.map((state) => {
              const totalProjects = state.districts.reduce(
                (acc, district) => acc + district.cities.reduce((acc2, city) => acc2 + city.projects.length, 0),
                0
              );
              return (
                <Card
                  key={state.name}
                  className="p-8 cursor-pointer hover:shadow-xl transition-all hover:scale-105 bg-gradient-to-br from-primary/10 to-primary/5"
                  onClick={() => setSelectedState(state.name)}
                >
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2">{state.name}</h2>
                    <p className="text-muted-foreground">
                      {state.districts.length} Districts • {totalProjects} Projects
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {/* Districts and Projects */}
        {selectedState && !searchQuery && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">{selectedState}</h2>
              <Button variant="outline" onClick={() => setSelectedState(null)}>
                Back to States
              </Button>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {filteredData[0].districts.map((district) => (
                <AccordionItem key={district.name} value={district.name} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      {district.name}
                      <Badge variant="secondary">
                        {district.cities.reduce((acc, city) => acc + city.projects.length, 0)} Projects
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pt-4">
                      {district.cities.map((city) => (
                        <div key={city.name}>
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-primary" />
                            {city.name}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {city.projects.map((project, idx) => (
                              <Card
                                key={idx}
                                className="p-4 cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                                onClick={() => setSelectedProject(project)}
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <h5 className="font-bold">{project.name}</h5>
                                  <Badge className={getProjectTypeColor(project.type)}>
                                    {project.type}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground flex items-start gap-1">
                                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                  {project.address}
                                </p>
                              </Card>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </main>

      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              {selectedProject?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge className={getProjectTypeColor(selectedProject.type)}>
                  {selectedProject.type}
                </Badge>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-muted-foreground flex items-start gap-2">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  {selectedProject.address}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Description</h4>
                <p className="text-muted-foreground">{selectedProject.description}</p>
              </div>
              {selectedProject.images.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Project Images</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.images.map((img, idx) => (
                      <div key={idx} className="rounded-lg overflow-hidden border">
                        <img src={img} alt={`${selectedProject.name} ${idx + 1}`} className="w-full h-64 object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <Button className="w-full" onClick={() => setSelectedProject(null)}>
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Projects;
