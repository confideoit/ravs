import { useState, useMemo } from "react";
import {
  Download,
  Award,
  Users,
  Shield,
  Leaf,
  X,
  Building2,
  Layers,
  Paintbrush,
  MapPin as MapPinIcon,
  ListChecks,
} from "lucide-react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Certificates from "@/components/Certificates";
import ServiceDetails from "@/components/ServiceDetails";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type LocationData = {
  [state: string]: {
    [district: string]: string[];
  };
};

const locations: LocationData = {
  Telangana: {
    Adilabad: [
      "Adilabad",
      "Asifabad",
      "Bazarhathnoor",
      "Bejjur",
      "Bela",
      "Bellampalle",
      "Bhainsa",
      "Bhimini",
      "Boath",
      "Chennur",
      "Dahegaon",
      "Dandepalle",
      "Dilawarpur",
      "Gudihathnoor",
      "Ichoda",
      "Inderavelly",
      "Jainad",
      "Jainoor",
      "Jaipur",
      "Jannaram",
      "Kaddam",
      "Kagaznagar",
      "Kasipet",
      "Kerameri",
      "Khanapur",
      "Kotapalle",
      "Kouthala",
      "Kubeer",
      "Kuntala",
      "Laxmanchanda",
      "Lokeswaram",
      "Luxettipet",
      "Mamda",
      "Mancherial",
      "Mandamarri",
      "Mudhole",
      "Narnoor",
      "Nennal",
      "Neradigonda",
      "Nirmal",
      "Rebbana",
      "Sarangapur",
      "Sirpur",
      "Talamadugu",
      "Tamsi",
      "Tandur",
      "Tanoor",
      "Tiryani",
      "Utnoor",
      "Vemanpalle",
      "Wankdi",
    ],
    Hyderabad: ["Hyderabad", "Secunderabad", "Madhapur", "Gachibowli", "Kukatpally"],
  },

  "Andhra Pradesh": {
    EastGodavari: ["Kakinada", "Rajahmundry", "Tuni"],
    Krishna: ["Vijayawada", "Machilipatnam"],
  },

  TamilNadu: {
    Chennai: ["Adyar", "T Nagar", "Anna Nagar", "Velachery", "Tambaram"],
  },

  Karnataka: {
    Bengaluru: ["Koramangala", "Indiranagar", "Whitefield", "Electronic City", "MG Road"],
  },
};

const countryCodes = [
  { code: "+91", label: "India (+91)" },
  { code: "+1", label: "USA (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+61", label: "Australia (+61)" },
];

const About: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "+91",
    phone: "",
    email: "",
    state: "",
    district: "",
    city: "",
    pincode: "",
    comments: "",
  });

  const states = useMemo(() => Object.keys(locations), []);
  const districts = useMemo(
    () => (formData.state ? Object.keys(locations[formData.state]) : []),
    [formData.state]
  );
  const cities = useMemo(
    () =>
      formData.state && formData.district
        ? locations[formData.state][formData.district] || []
        : [],
    [formData.state, formData.district]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "state") {
      setFormData((p) => ({ ...p, state: value, district: "", city: "", pincode: "" }));
      return;
    }
    if (name === "district") {
      setFormData((p) => ({ ...p, district: value, city: "", pincode: "" }));
      return;
    }
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isValidPhone = (phone: string) => /^[0-9]{6,15}$/.test(phone.replace(/\D/g, ""));
  const isValidPincode = (pin: string) => /^[0-9]{5,6}$/.test(pin.trim());

  const handleDownloadClick = () => setShowForm(true);

  // -----------------------------------------------------------------------
  // 🚀 FINAL SILENT BACKEND SEND (NO POPUPS, NO WHATSAPP)
  // -----------------------------------------------------------------------
  // -----------------------------------------------------------------------
// ✅ FINAL UPDATED BACKEND WHATSAPP + EMAIL (NO POPUPS, BACKGROUND SEND)
// -----------------------------------------------------------------------
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Validation
  if (!formData.firstName.trim() || !formData.lastName.trim()) {
    return alert("Please enter your full name.");
  }
  if (!isValidEmail(formData.email)) return alert("Enter a valid email.");
  if (!isValidPhone(formData.phone)) return alert("Enter a valid phone number.");
  if (!formData.state) return alert("Select a state.");
  if (!formData.district) return alert("Select a district.");
  if (!formData.city) return alert("Select a city.");
  if (!isValidPincode(formData.pincode)) return alert("Enter a valid pincode.");

  const payload = {
    name: `${formData.firstName} ${formData.lastName}`,
    mobile: `${formData.countryCode} ${formData.phone}`,
    email: formData.email,
    location: `${formData.city}, ${formData.district}, ${formData.state}`,
    pincode: formData.pincode,
    comments: formData.comments || "N/A",
  };

  try {
    // 🔥 Send data to backend API (server will handle WhatsApp + Email)
    const res = await fetch("/api/send-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return alert("Failed to submit form. Try again.");
    }

    // UI feedback
    setSubmitted(true);

    setTimeout(() => {
      setShowForm(false);

      // Auto-download PDF
      window.open("/RAVS_Company_Profile.pdf", "_blank");

      setSubmitted(false);
    }, 1200);
  } catch (err) {
    alert("Something went wrong. Try again.");
  }
};
// -----------------------------------------------------------------------

  // -----------------------------------------------------------------------

  const companyInfo = {
    established: "2017",
    founder: "Rtn. Er. G. Surya Ravi Kumar",
    credentials: "DCE, B.Tech (Civil), AMIE",
  };

  const serviceDetails = [
    { name: "RCC Frame Structure", icon: <Building2 className="h-5 w-5" /> },
    { name: "Pre-Engineered Building (PEB)", icon: <Layers className="h-5 w-5" /> },
    { name: "Interior & Exterior Design", icon: <Paintbrush className="h-5 w-5" /> },
    { name: "Land Consultancy", icon: <MapPinIcon className="h-5 w-5" /> },
    { name: "Elevator Construction", icon: <ListChecks className="h-5 w-5" /> },
  ];

  const values = [
    { icon: Award, title: "Uncompromising Quality", description: "Premium materials, advanced techniques." },
    { icon: Users, title: "Client-Centric Approach", description: "Transparency and timely communication." },
    { icon: Shield, title: "Safety & Compliance", description: "Strict safety and quality standards." },
    { icon: Leaf, title: "Sustainable Practices", description: "Eco-friendly construction methods." },
  ];

  return (
<div className="min-h-screen flex flex-col pt-[120px] md:pt-[180px] ">
      <Header />
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-secondary mb-4">About RAVS Corporate Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building Excellence Since {companyInfo.established}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card className="border-2 border-primary w-full min-w-0">
            <CardHeader>
              <CardTitle className="text-2xl">Who We Are</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                M/s. RAVS Corporate Services is one of the leading organizations in the
                construction-based service sector. We deliver our best services with clear
                representation. RAVS Corporate Services was established in {companyInfo.established}.
              </p>
              <p>
                Founded by {companyInfo.founder} ({companyInfo.credentials}), we are an ISO-registered,
                full-service construction firm serving commercial, industrial and infrastructure sectors.
              </p>

              <div className="pt-4">
                <Button onClick={handleDownloadClick} className="w-full">
                  <Download className="mr-2 h-5 w-5" />
                  Download Company Profile PDF
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent w-full min-w-0">
            <CardHeader>
              <CardTitle className="text-2xl">Our Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {serviceDetails.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg hover:bg-primary/20 cursor-pointer"
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="text-primary mt-1">{service.icon}</div>
                    <span className="font-medium">{service.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="text-center hover:shadow-xl hover:scale-105 transition-all">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Certificates />
      </main>

      <Footer />

      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
              onClick={() => setShowForm(false)}
            >
              <X />
            </button>

            {submitted ? (
              <div className="text-center text-green-600 text-xl font-semibold py-6">
                ✅ Thank you! Opening PDF…
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-center mb-4 text-primary">
                  Please Provide Your Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input name="firstName" placeholder="First Name" className="border p-2 rounded w-full" value={formData.firstName} onChange={handleChange} required />
                    <input name="lastName" placeholder="Last Name" className="border p-2 rounded w-full" value={formData.lastName} onChange={handleChange} required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="border p-2 rounded">
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.label}
                        </option>
                      ))}
                    </select>

                    <input name="phone" placeholder="Phone Number" className="border p-2 rounded" value={formData.phone} onChange={handleChange} required />
                    <input name="pincode" placeholder="Pincode" className="border p-2 rounded" value={formData.pincode} onChange={handleChange} required />
                  </div>

                  <input name="email" placeholder="Email ID" type="email" className="border p-2 rounded w-full" value={formData.email} onChange={handleChange} required />

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <select name="state" value={formData.state} onChange={handleChange} className="border p-2 rounded" required>
                      <option value="">Select State</option>
                      {states.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>

                    <select name="district" value={formData.district} onChange={handleChange} className="border p-2 rounded" required disabled={!formData.state}>
                      <option value="">{formData.state ? "Select District" : "Select State first"}</option>
                      {districts.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>

                    <select name="city" value={formData.city} onChange={handleChange} className="border p-2 rounded" required disabled={!formData.district}>
                      <option value="">{formData.district ? "Select City" : "Select District first"}</option>
                      {cities.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <textarea name="comments" placeholder="Comments / Requirements (optional)" className="border p-2 rounded w-full" rows={3} value={formData.comments} onChange={handleChange} />

                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
                      Submit & Download
                    </Button>
                    <Button type="button" className="flex-1 bg-gray-200 text-black" onClick={() => setShowForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {selectedService && (
        <ServiceDetails
          open={!!selectedService}
          onOpenChange={(open) => !open && setSelectedService(null)}
          service={selectedService}
        />
      )}
    </div>
  );
};

export default About;
