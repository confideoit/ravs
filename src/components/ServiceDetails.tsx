import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

interface ServiceDetailsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: {
    name: string;
    icon: React.ReactNode;
    background: string;
    approach: string[];
    benefits: string[];
    images: string[];
  };
}

const ServiceDetails = ({ open, onOpenChange, service }: ServiceDetailsProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            {service.icon}
            {service.name}
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="approach">Our Approach</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4 mt-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Background</h3>
              <p className="text-muted-foreground">{service.background}</p>
            </div>
            {service.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {service.images.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden border">
                    <img src={img} alt={`${service.name} ${idx + 1}`} className="w-full h-48 object-cover" />
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="approach" className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold mb-4">How We Work</h3>
            <ul className="space-y-3">
              {service.approach.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="benefits" className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold mb-4">Key Benefits</h3>
            <ul className="space-y-3">
              {service.benefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
        
        <div className="flex gap-3 mt-6">
          <Button className="flex-1">Request a Quote</Button>
          <Button variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetails;
