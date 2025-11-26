import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Download } from "lucide-react";
import iso9001 from "@/assets/certificates/iso-9001-2015.png";
import iso45001 from "@/assets/certificates/iso-45001-2018.png";
import iso14001 from "@/assets/certificates/iso-14001-2015.png";

const certificates = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    scope: "Providing Services Of Civil Work Construction",
    image: iso9001,
    issuedBy: "DQS Certifications India Pvt Ltd"
  },
  {
    id: "iso-45001",
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety Management System",
    scope: "Providing Services Of Civil Work Construction",
    image: iso45001,
    issuedBy: "DQS Certifications India Pvt Ltd"
  },
  {
    id: "iso-14001",
    title: "ISO 14001:2015",
    subtitle: "Environmental Management System",
    scope: "Providing Services Of Civil Work Construction",
    image: iso14001,
    issuedBy: "DQS Certifications India Pvt Ltd"
  }
];

const Certificates = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
          <Award className="h-8 w-8 text-primary" />
          ISO Certifications
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We are proud to hold multiple ISO certifications, demonstrating our commitment to quality, safety, and environmental management.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <Dialog key={cert.id}>
            <DialogTrigger asChild>
              <Card className="p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cert.subtitle}</p>
                  <Button variant="outline" size="sm">
                    View Certificate
                  </Button>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  {cert.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-semibold">{cert.subtitle}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <strong>Scope:</strong> {cert.scope}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Issued By:</strong> {cert.issuedBy}
                  </p>
                </div>
                <div className="border rounded-lg overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={`${cert.title} Certificate`}
                    className="w-full h-auto"
                  />
                </div>
                <Button className="w-full" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Certificate
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
