import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Message Received!",
      description:
        "Thank you for contacting us. Our team will reach you shortly.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      projectType: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background pt-[208px]">
      <Header />
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us for any inquiries about our construction
            services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Phone className="h-6 w-6 text-primary" />
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Head Office - Kakinada</h3>
                  <p className="text-sm text-muted-foreground">
                    D.No:5-6-39/1, Pithapuram Road<br />
                    Besides Patel Hyper Market<br />
                    Near by RTO Office<br />
                    Kakinada-533003<br />
                    East Godavari District, AP, India
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">
                    Branch Office - Hyderabad
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    H.No:9-2-50/1, Plot.No:58<br />
                    Balaji Nilayam, R and R Colony<br />
                    Vinay Nagar<br />
                    Hyderabad, Telangana-500037, India
                  </p>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Phone:</span>
                  </div>

                  {/* Phone Clickable */}
                  <p className="text-sm text-muted-foreground">
                    <a href="tel:+918886513111" className="hover:underline">
                      +91 88865 13111
                    </a>
                    <br />
                    <a href="tel:+918886573111" className="hover:underline">
                      +91 88865 73111
                    </a>
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Email:</span>
                  </div>

                  {/* Gmail Compose Link (WORKING NEW TAB) */}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ravscorporateservice@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    ravscorporateservice@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    <strong>GSTIN:</strong> 37CLDPG0536R1ZS
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
              <h3 className="text-xl font-bold mb-4">Why Choose RAVS?</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>8 Years of Construction Excellence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    ISO 9001:2015, ISO 45001:2018, ISO 14001:2015 Certified
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>100+ Successful Projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Presence across AP & Telangana</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) =>
                    setFormData({ ...formData, subject: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="quote">Project Quote</SelectItem>
                    <SelectItem value="land">Land Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="projectType">Project Type</Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, projectType: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                    <SelectItem value="hospitality">Hospitality</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
