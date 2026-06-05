
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterTabs from '@/components/FilterTabs';
import ProjectCard from '@/components/ProjectCard';

function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
  { value: 'all', label: 'All Works' },
  { value: 'real-estate', label: 'Real Estate' },
  { value: 'plotting', label: 'Plotting Projects' },
  { value: 'interior', label: 'Interior Design' },
  { value: 'expo', label: 'Exhibitions & Expo' },
  { value: 'education', label: 'Education' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'government', label: 'Government' },
  { value: 'mall', label: 'Malls & Retail' }
];

const projects = [

  // =========================
  // REAL ESTATE
  // =========================
  {
    id: 1,
    title: "Samraat Apna Ghar",
    category: "real-estate",
    client: "Samraat Group",
    description: "Interactive residential property virtual tour.",
    tourId: "RlO6rgfJS",
    image: "/portfolio/samraat.jpg"
  },
  {
    id: 2,
    title: "Riddhi Exotica",
    category: "real-estate",
    client: "Riddhi Group",
    description: "Luxury residential project walkthrough.",
    tourId: "DA7EYiOJE",
    image: "/portfolio/riddhi.jpg"
  },

  // =========================
  // PLOTTING PROJECTS
  // =========================
  {
    id: 3,
    title: "ABH Industrial Plots Phase 2",
    category: "plotting",
    client: "ABH Group",
    description: "Industrial plotting virtual tour.",
    tourId: "Sem8kmZIp",
    image: "/portfolio/abh.jpg"
  },

  {
    id: 4,
    title: "Urban Sytes Nandur",
    category: "plotting",
    client: "Urban Sytes",
    description: "Premium NA plotting project.",
    tourId: "ieUqNz0zd",
    image: "/portfolio/urban-nandur.jpg"
  },

  {
    id: 5,
    title: "Urban Sytes Chandsi",
    category: "plotting",
    client: "Urban Sytes",
    description: "Virtual tour for plotting development.",
    tourId: "IQP0V54U3",
    image: "/portfolio/chandsi.jpg"
  },

  {
    id: 6,
    title: "Urban Sytes Mhasrul",
    category: "plotting",
    client: "Urban Sytes",
    description: "Plot showcase near Surti Foods.",
    tourId: "RihXkAYDz",
    image: "/portfolio/mhasrul.jpg"
  },

  {
    id: 7,
    title: "Urban Sytes Warvandi Road",
    category: "plotting",
    client: "Urban Sytes",
    description: "Premium plotting development.",
    tourId: "QpGU9YXK-",
    image: "/portfolio/warvandi.jpg"
  },

  {
    id: 8,
    title: "Urban Sytes Vadner",
    category: "plotting",
    client: "Urban Sytes",
    description: "360° plot experience.",
    tourId: "8y0r3ijfw",
    image: "/portfolio/vadner.jpg"
  },

  {
    id: 9,
    title: "Urban Sytes Mane Nagar",
    category: "plotting",
    client: "Urban Sytes",
    description: "Interactive plotting project.",
    tourId: "Uvc1yYSdn",
    image: "/portfolio/manenagar.jpg"
  },

  {
    id: 10,
    title: "Urban Sytes Pathardi",
    category: "plotting",
    client: "Urban Sytes",
    description: "Pathardi plotting showcase.",
    tourId: "tDdH0Lfs4",
    image: "/portfolio/pathardi.jpg"
  },

  {
    id: 11,
    title: "Urban Sytes Chamer Leni",
    category: "plotting",
    client: "Urban Sytes",
    description: "NA plotting project tour.",
    tourId: "fr6K6w0y1",
    image: "/portfolio/chamerleni.jpg"
  },

  {
    id: 12,
    title: "Urban Sytes Gangapur",
    category: "plotting",
    client: "Urban Sytes",
    description: "Interactive plotting solution.",
    tourId: "OpqpRAGkr",
    image: "/portfolio/gangapur.jpg"
  },

  {
    id: 13,
    title: "Growth Euphoria Riverside",
    category: "plotting",
    client: "Growth Euphoria",
    description: "Premium riverside plotting.",
    tourId: "YK7DG8-XF",
    image: "/portfolio/riverside.jpg"
  },

  {
    id: 14,
    title: "Growth Euphoria Lake View",
    category: "plotting",
    client: "Growth Euphoria",
    description: "Lake view plotting project.",
    tourId: "YK7DG8-XF",
    image: "/portfolio/lakeview.jpg"
  },

  {
    id: 15,
    title: "Trinity Plots",
    category: "plotting",
    client: "Trinity",
    description: "Premium plotting project.",
    tourId: "RLpY4XWm1",
    image: "/portfolio/trinity.jpg"
  },

  {
    id: 16,
    title: "Nature Village",
    category: "plotting",
    client: "Nature Village",
    description: "Nature inspired plotting development.",
    tourId: "EqmVLBIkIWvD",
    image: "/portfolio/naturevillage.jpg"
  },

  // =========================
  // INTERIOR
  // =========================

  {
    id: 17,
    title: "Aura Interior",
    category: "interior",
    client: "Aura Interior",
    description: "Luxury interior virtual walkthrough.",
    tourId: "1ZSdkI9lP",
    image: "/portfolio/aura-interior.jpg"
  },

  // =========================
  // EXPO
  // =========================

  {
    id: 18,
    title: "CREDAI 2025",
    category: "expo",
    client: "CREDAI",
    description: "Property exhibition virtual tour.",
    tourId: "9h3FCyAmi",
    image: "/portfolio/credai2025.jpg"
  },

  {
    id: 19,
    title: "MAHA TECH",
    category: "expo",
    client: "MAHA TECH",
    description: "Technology expo showcase.",
    tourId: "8-H3Ahf06",
    image: "/portfolio/mahatech.jpg"
  },

  {
    id: 20,
    title: "IIID Exhibition",
    category: "expo",
    client: "IIID",
    description: "Interior design exhibition.",
    tourId: "Het-5DGip",
    image: "/portfolio/iiid.jpg"
  },

  {
    id: 21,
    title: "NATCO Expo",
    category: "expo",
    client: "NATCO",
    description: "Industrial exhibition tour.",
    tourId: "W8pDkaKNQ",
    image: "/portfolio/natco.jpg"
  },

  {
    id: 22,
    title: "MOACON",
    category: "expo",
    client: "MOACON",
    description: "Conference and expo experience.",
    tourId: "_8-1bCqih",
    image: "/portfolio/moacon.jpg"
  },

  {
    id: 23,
    title: "Maharashtra International Trade Expo 2025",
    category: "expo",
    client: "MITE",
    description: "International trade exhibition.",
    tourId: "xS-1IXSCf",
    image: "/portfolio/mite.jpg"
  },

  {
    id: 24,
    title: "CREDAI Shelter Expo 2024",
    category: "expo",
    client: "CREDAI Nashik",
    description: "Property expo walkthrough.",
    tourId: "bHHZ--8mA",
    image: "/portfolio/shelterexpo.jpg"
  },

  // =========================
  // EDUCATION
  // =========================

  {
    id: 25,
    title: "Sapkal Knowledge Hub",
    category: "education",
    client: "Sapkal Knowledge Hub",
    description: "Educational campus virtual tour.",
    tourId: "8m_RTf6lhI7d",
    image: "/portfolio/sapkal.jpg"
  },

  // =========================
  // HEALTHCARE
  // =========================

  {
    id: 26,
    title: "Skin Access Clinic",
    category: "healthcare",
    client: "Skin Access",
    description: "Healthcare facility virtual tour.",
    tourId: "bXsaoFHv9",
    image: "/portfolio/skinaccess.jpg"
  },

  {
    id: 27,
    title: "THS Clinic",
    category: "healthcare",
    client: "THS Clinic",
    description: "Clinic interior virtual walkthrough.",
    tourId: "-cA1aT1cF",
    image: "/portfolio/ths.jpg"
  },

  // =========================
  // GOVERNMENT
  // =========================

  {
    id: 28,
    title: "Nashik Ganga Ghat",
    category: "government",
    client: "Government Project",
    description: "Tourism and heritage showcase.",
    tourId: "9pcg5drfQ",
    image: "/portfolio/gangaghat.jpg"
  },

  {
    id: 29,
    title: "Trimbakeshwar",
    category: "government",
    client: "Government Project",
    description: "Religious tourism virtual tour.",
    tourId: "U51vppK5c",
    image: "/portfolio/trimbak.jpg"
  },

  {
    id: 30,
    title: "Ranji Match Golf Club",
    category: "government",
    client: "Sports Authority",
    description: "Sports event virtual coverage.",
    tourId: "dEETujGAt",
    image: "/portfolio/ranji.jpg"
  },

  // =========================
  // MALL & RETAIL
  // =========================

  {
    id: 31,
    title: "City Center Mall",
    category: "mall",
    client: "City Center Mall",
    description: "Retail destination virtual tour.",
    tourId: "m6-g82UFt",
    image: "/portfolio/citycenter.jpg"
  },

  {
    id: 32,
    title: "Jewellery Showroom",
    category: "mall",
    client: "Jewellery Store",
    description: "Luxury jewellery store walkthrough.",
    tourId: "cpdUSOLWp",
    image: "/portfolio/jewellery.jpg"
  }

];
const filteredProjects =
  activeCategory === 'all'
    ? projects
    : projects.filter(
        (project) => project.category === activeCategory
      );

return (
  <>
    <Helmet>
      <title>Portfolio | Sivaraa Infotech</title>
      <meta
        name="description"
        content="Explore our 360° Virtual Tours, Plotting Projects, Real Estate Showcases, Government Projects, Healthcare, Education, Expo Events and more."
      />
    </Helmet>

    <Header />

    {/* Hero Section */}
    <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50 border-b border-cyan-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.08),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm mb-6">
          360° Virtual Tour Portfolio
        </span>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6">
          Our Portfolio
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
          Explore immersive virtual experiences created for Real Estate,
          Plotting Projects, Government Initiatives, Healthcare, Education,
          Retail Spaces, Exhibitions and more.
        </p>
      </div>
    </section>

    {/* Portfolio Section */}
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filter Tabs */}
        <div className="mb-14">
          <FilterTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Results Count */}
        <div className="mb-10 text-center">
          <p className="text-slate-500 font-medium">
            Showing{" "}
            <span className="text-cyan-600 font-bold">
              {filteredProjects.length}
            </span>{" "}
            Projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              delay={index * 0.05}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <h3 className="text-2xl font-bold text-slate-800 mb-3">
              No Projects Found
            </h3>
            <p className="text-slate-500">
              Projects for this category will appear here.
            </p>
          </div>
        )}
      </div>
    </section>

    <Footer />
  </>
);
}

export default PortfolioPage;