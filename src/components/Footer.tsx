import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">

        {/* GRID — center on mobile, left on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 text-center md:text-left">

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary flex items-center justify-center md:justify-start gap-2">
              <Phone className="h-5 w-5" />
              Contact Us
            </h3>

            <p>
              +91 88865 13111<br />
              +91 88865 73111
            </p>

            <p className="mt-4 flex items-center justify-center md:justify-start gap-2">
              <Mail className="h-4 w-4" />
              ravscorporateservice@gmail.com
            </p>

            <p className="mt-2">
              www.ravscorporateservice.com
            </p>
          </div>

          {/* HEAD OFFICE */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary flex items-center justify-center md:justify-start gap-2">
              <MapPin className="h-5 w-5" />
              Corporate Office
            </h3>

            <p>
              D.No:5-6-39/1, Pithapuram Road<br />
              Besides Patel Hyper Market<br />
              Near by RTO Office<br />
              Kakinada-533003<br />
              East Godavari District, AP, India
            </p>
          </div>

          {/* BRANCH OFFICE */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary flex items-center justify-center md:justify-start gap-2">
              <MapPin className="h-5 w-5" />
              Branch Office
            </h3>

            <p>
              H.No:9-2-50/1, Plot.No:58<br />
              Balaji Nilayam, R and R Colony<br />
              Vinay Nagar<br />
              Hyderabad, Telangana-500037, India
            </p>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT — always centered */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} RAVS Corporate Services. All rights reserved. | ISO 9001:2015, ISO 45001:2018, ISO 14001:2015 Certified
          </p>
          <p className="text-sm mt-2">
            GSTIN: 37CLDPG0536R1ZS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
