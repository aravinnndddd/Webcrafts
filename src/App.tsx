import React from 'react';
import { GraduationCap, BookOpen, Users, Globe, ChevronRight, Search, Menu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
         
            <div className="flex items-center">
              
           
     <a href=""> <img src="./src/assets/topicon.png" alt="top" className="max-w-[60%] "/></a>
        
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Admissions</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Faculity</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Academics</a>
                <a href="#Department" className="text-gray-300 hover:text-white transition-colors">Departments</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Campus Life</a>
          
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Events</a>
              
            
               
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors">
                  Etlab login
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="./src/assets/cepbg.jpg"
            alt="Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
             A CAMPUS LIFE THAT INSPIRES ENRICHES AND EMPOWERS
            </h1>
          
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center">
                Explore Programs <ChevronRight className="ml-2" aria-hidden="true" />
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
                Announcments
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-black/40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-500/10 p-6 rounded-2xl mb-6 inline-block">
                <BookOpen className="h-12 w-12 text-blue-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Advanced Curriculum</h3>
              <p className="text-gray-400">Industry-aligned programs designed for the future of work</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500/10 p-6 rounded-2xl mb-6 inline-block">
                <Users className="h-12 w-12 text-blue-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert Faculty</h3>
              <p className="text-gray-400">Learn from industry leaders and renowned researchers</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500/10 p-6 rounded-2xl mb-6 inline-block">
                <Globe className="h-12 w-12 text-blue-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Highest Placement</h3>
              <p className="text-gray-400">Our college achieved its highest placement, highlighting student excellence.

              </p>
            </div>
          </div>
        </div>
      </div>

      {/* department Section */}
      <div id='Department' className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
             {
              title: "Mechanical Engineering",
              image: "./src/assets/me.png",
              description: "Department of Mechanical Engineering at the College of Engineering Perumon was established in 2011, offering a B.Tech programme in Mechanical Engineering (NBA Accredited) with an intake of 60 students and a part-time programme for working professionals in Mechanical Engineering with an intake of 30 per year."
            },
              {
                title: "Computer Science and Engineering",
                image: "./src/assets/cse.png",
                description: "Department of Computer Science and Engineering at the College of Engineering Perumon was established in 2000, offering B.Tech programmes in Computer Science and Engineering (NBA Accredited) with an intake of 120 per year and Artificial Intelligence and Data Science with an intake of 60 per year."
              },
              {
                title: "Electronics and Communication Engineering",
                image: "./src/assets/ece.png",
                description: "Department of Electronics and Communication Engineering at the College of Engineering Perumon was established in 2000, offering B.Tech programmes in Electronics & Communication Engineering (NBA Accredited) with an intake of 120 per year and Electronics and Computer Engineering with an intake of 60 per year"
              }, {
                title: "Electrical and Electronics Engineering",
                image: "./src/assets/eee.png",
                description: "Department of Electrical and Electronics Engineering at the College of Engineering Perumon was established in 2000, offering a B.Tech programme in Electrical & Electronics Engineering (NBA Accredited) with an intake of 60 students and a part-time programme for working professionals in Electrical & Electronics Engineering with an intake of 30 per year"
              }, {
                title: "Applied Science",
                image: "./src/assets/as.png",
                description: "Department of Applied Science imparts excellent quality education in the areas like Physics, Chemistry, Mathematics, English and Physical Education, to the future engineers of all streams and enhances innovative thinking among them."
              },
            ].map((program, index) => (
              <div key={index} className="bg-white/5 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{program.title}</h3>
                  <p className="text-gray-400 mb-4">{program.description}</p>
                  <button className="text-blue-400 hover:text-blue-300 flex items-center">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div id="google_translate_element" className="mb-5"></div>
        
        {/* Activities Section */}
        <h4 className="text-lg font-semibold mb-2">Activities</h4>
        <div className="flex flex-wrap gap-4 mb-5">
          {[
            { href: "https://www.perumonec.ac.in/pages/activities/sports.php", text: "Sports" },
            { href: "https://www.perumonec.ac.in/pages/activities/pta.php", text: "Parent Teacher Association(PTA)" },
            { href: "https://www.perumonec.ac.in/pages/facilities/nss.php", text: "National Service Scheme(NSS)" },
            { href: "https://www.perumonec.ac.in/pages/activities/ncc.php", text: "NCC" },
            { href: "https://www.perumonec.ac.in/pages/facilities/cgpc.php", text: "Career Guidance and Placement cell (CGPC)" },
            { href: "https://www.perumonec.ac.in/pages/facilities/professional-bodies.php", text: "Professional Bodies" },
            { href: "https://www.perumonec.ac.in/pages/facilities/iic.php", text: "IIIC & IEDC" },
            { href: "https://www.perumonec.ac.in/pages/facilities/amenities.php", text: "Women's Forum" },
            { href: "https://www.perumonec.ac.in/pages/facilities/alumni.php", text: "Alumni Association" }
          ].map(({ href, text }) => (
            <a key={href} href={href} className="text-blue-400 hover:underline">{text}</a>
          ))}
        </div>
        
        {/* Downloads Section */}
        <h4 className="text-lg font-semibold mb-2">Downloads</h4>
        <div className="flex flex-wrap gap-4 mb-5">
          {[
            { href: "https://www.perumonec.ac.in/pages/downloads/students-form.php", text: "Application Forms (Students)" },
            { href: "https://www.perumonec.ac.in/assets/pdf/wifi.pdf", text: "Wireless Access Authorization Form" },
            { href: "https://ktu.edu.in/eu/acd/academicRegulation.htm", text: "Syllabus" },
            { href: "https://cep.etlab.in/user/login", text: "Attendance Software" },
            { href: "https://www.perumonec.ac.in/pages/downloads/fee.php", text: "Fee Structure" },
            { href: "https://www.perumonec.ac.in/pages/downloads/scholarships.php", text: "Applications for Scholarships" },
            { href: "https://www.perumonec.ac.in/assets/pdf/nirf2024.pdf", text: "NIRF 2024" }
          ].map(({ href, text }) => (
            <a key={href} href={href} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">{text}</a>
          ))}
        </div>
        
        {/* Official Sites Section */}
        <h4 className="text-lg font-semibold mb-2">Official Sites</h4>
        <div className="flex flex-wrap gap-4 mb-5">
          {[
            { href: "http://www.capekerala.org/", text: "CAPE" },
            { href: "https://www.nbaind.org/", text: "NBA" },
            { href: "https://www.perumonec.ac.in/pages/sites/cape-colleges.php", text: "Colleges Under CAPE" },
            { href: "http://www.dtekerala.gov.in/", text: "Directorate of Technical Education" },
            { href: "http://www.aicte-india.org/", text: "AICTE" },
            { href: "http://cusat.ac.in/", text: "CUSAT" },
            { href: "https://ktu.edu.in/home.htm", text: "APJ Abdul Kalam Technological University" }
          ].map(({ href, text }) => (
            <a key={href} href={href} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">{text}</a>
          ))}
        </div>
        
        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          <div>
            <h4 className="text-lg font-semibold">Address</h4>
            <p>College of Engineering Perumon <br /> Perumon P O, Kollam Dist, Kerala, India, <br /> Pin - 691601</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Contact</h4>
            <p><b>Telephone:</b> 0474 2550500, 9447150400 <br /> <b>Email:</b> principal@perumonec.ac.in</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">For admission related queries</h4>
            <p>Smt. Dhanya M - 9447013719 <br /> Sri. Shamim F H - 9747570236</p>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-5 border-t border-gray-700 pt-3 text-center">
          <span>CEP © 2024, All rights reserved.</span>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
