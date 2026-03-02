import React from "react";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    column1: [
      { name: "About", href: "#" },
      { name: "Categories", href: "#" },
      { name: "Magazine", href: "#" },
      { name: "Jury", href: "#" },
    ],
    column2: [
      { name: "Terms", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "FAQ", href: "/faq" },
    ],
  };

  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="text-yellow-600">
              <div className="text-3xl font-serif">AVA</div>
              <div className="text-[9px] tracking-widest -mt-1">ART VISION</div>
              <div className="text-[8px] tracking-wider -mt-0.5">AWARDS</div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Maecenas risus gravida
              diam iectus augue dignissim placerat sit vel. Amet.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              <a
                href="#"
                className="w-8 h-8 rounded bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded bg-green-600 flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1 Links */}
          <div>
            <div className="flex flex-col space-y-3">
              {footerLinks.column1.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-yellow-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 Links */}
          <div>
            <div className="flex flex-col space-y-3">
              {footerLinks.column2.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-yellow-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gray-400" />
                <span className="text-sm">+5668512585465</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-400" />
                <span className="text-sm">abcd@gmail.com</span>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-white font-medium mb-3">Address</h3>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-gray-400 mt-0.5" />
                <span className="text-sm">Woodbridge, VA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-500">
            © Art Vision Awards - Where Art Meets Vision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import { Star, Mail, Phone, MapPin } from "lucide-react";

// const Footer=()=> {
//   return (
//     <footer className="bg-black text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
//                 <Star
//                   className="w-5 h-5 text-gray-900"
//                   fill="currentColor"
//                 />
//               </div>
//               <div>
//                 <div className="text-lg">THE VISION</div>
//                 <div className="text-yellow-500 text-sm">
//                   AWARDS
//                 </div>
//               </div>
//             </div>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Celebrating excellence in cinematic storytelling
//               and artistic vision since 2020.
//             </p>
//           </div>

//           <div>
//             <h4 className="mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-yellow-500 transition-colors"
//                 >
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-yellow-500 transition-colors"
//                 >
//                   Categories
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-yellow-500 transition-colors"
//                 >
//                   Nominees
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-yellow-500 transition-colors"
//                 >
//                   Past Winners
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="mb-4">Connect</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-yellow-500 transition-colors"
//                 >
//                   News & Updates
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-yellow-500 transition-colors"
//                 >
//                   Press Kit
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-yellow-500 transition-colors"
//                 >
//                   Partners
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-yellow-500 transition-colors"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="mb-4">Contact Info</h4>
//             <ul className="space-y-3 text-sm">
//               <li className="flex items-start gap-2">
//                 <Mail className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-400">
//                   info@visionawards.com
//                 </span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <Phone className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-400">
//                   +1 (555) 123-4567
//                 </span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <MapPin className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-400">
//                   Los Angeles, CA
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-400 text-sm">
//               © 2024 The Vision Awards. All rights reserved.
//             </p>
//             <div className="flex gap-6 text-sm">
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-yellow-500 transition-colors"
//               >
//                 Privacy Policy
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-yellow-500 transition-colors"
//               >
//                 Terms of Service
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-yellow-500 transition-colors"
//               >
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


// export default Footer;