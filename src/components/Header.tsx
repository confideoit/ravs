import { Link } from "react-router-dom";
import logo from "@/assets/RAVS_CORPORATE.png";

const Header = () => {
  return (
    <header className="bg-[#3f3f3f] fixed top-10 left-0 right-0 z-20 border-b border-border shadow-none">
      <div className="w-full px-4 py-3">
        <div className="relative flex items-center justify-center">

          {/* LEFT LOGO – Mobile smaller, desktop unchanged */}
          <Link to="/" className="absolute left-4">
            <img
              src={logo}
              alt="RAVS Logo Left"
              className="h-8 w-auto md:h-20 cursor-pointer"   // ← mobile smaller (was h-12)
            />
          </Link>

          {/* TITLE – Mobile text smaller & wraps to avoid overlap */}
          <div className="px-6 py-2 text-center ml-12 md:ml-0">
  <h1 className="text-lg md:text-5xl font-bold tracking-tight leading-tight md:leading-none">
    <span className="text-orange-500">RAVS</span>
    <span className="text-white ml-1 md:ml-3">CORPORATE SERVICES</span>
  </h1>
</div>

          {/* RIGHT LOGO – Desktop only (no change) */}
          <Link to="/" className="absolute right-4 hidden md:block">
            <img
              src={logo}
              alt="RAVS Logo Right"
              className="h-20 w-auto cursor-pointer"
            />
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Header;
