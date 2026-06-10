
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterTabs from '@/components/FilterTabs';
import ProjectCard from '@/components/ProjectCard';


//images
// Portfolio Images

import w1 from "@/assets/images/w1.png";
import w2 from "@/assets/images/w2.png";
import w3 from "@/assets/images/w3.png";
import w4 from "@/assets/images/w4.png";
import w5 from "@/assets/images/w5.png";
import w6 from "@/assets/images/w6.png";
import w7 from "@/assets/images/w7.png";
import w8 from "@/assets/images/w8.png";
import w9 from "@/assets/images/w9.png";
import w10 from "@/assets/images/w10.png";
import w11 from "@/assets/images/w11.png";
import w12 from "@/assets/images/w12.png";
import w13 from "@/assets/images/w13.png";
import w14 from "@/assets/images/w14.png";
import w15 from "@/assets/images/w15.png";
import w16 from "@/assets/images/w16.png";
import w17 from "@/assets/images/w17.png";
import w18 from "@/assets/images/w18.png";
import w19 from "@/assets/images/w19.png";
import w20 from "@/assets/images/w20.png";

// Industry Images

import ind3 from "@/assets/images/ind3.png";
import ind4 from "@/assets/images/ind4.png";
import ind5 from "@/assets/images/ind5.png";
import ind6 from "@/assets/images/ind6.png";


function PortfolioPage() {

  const [activeCategory, setActiveCategory] = useState('all');

  const [showTourModal, setShowTourModal] = useState(false);

  const [selectedTour, setSelectedTour] = useState(null);

  const openTour = (project) => {
    setSelectedTour(project);
    setShowTourModal(true);
  };

  const closeTour = () => {
    setShowTourModal(false);
    setSelectedTour(null);
  };

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

    {
      id: 1,
      title: "Samraat Apna Ghar",
      category: "real-estate",
      client: "Samraat Group",
      description: "Interactive residential property virtual tour.",
      image: w1,
      tourUrl: "https://app.cloudpano.com/tours/RlO6rgfJS/"
    },

    {
      id: 2,
      title: "Riddhi Exotica",
      category: "real-estate",
      client: "Riddhi Group",
      description: "Luxury residential project walkthrough.",
      image: w2,
      tourUrl: "https://app.cloudpano.com/tours/DA7EYiOJE/"
    },

    {
      id: 3,
      title: "ABH Industrial Plots Phase 2",
      category: "plotting",
      client: "ABH Group",
      description: "Industrial plotting virtual tour.",
      image: w3,
      tourUrl: "https://app.cloudpano.com/tours/-hGPxaR2U/"
    },

    {
      id: 4,
      title: "URBAN SYTES GROUP PLOTS",
      category: "plotting",
      client: "Urban Sytes",
      description: "Premium NA plotting project.",
      image: w4,
      tourUrl: "https://app.cloudpano.com/tours/fr6K6w0y1/"
    },

    {
      id: 13,
      title: "Growth Euphoria Riverside",
      category: "plotting",
      client: "Growth Euphoria",
      description: "Premium riverside plotting.",
      image: w5,
      tourUrl: "https://app.cloudpano.com/tours/YK7DG8-XF/"
    },

    {
      id: 14,
      title: "Growth Euphoria Lake View",
      category: "plotting",
      client: "Growth Euphoria",
      description: "Lake view plotting project.",
      image: w6,
      tourUrl: "https://app.cloudpano.com/tours/YK7DG8-XF/"
    },

    {
      id: 15,
      title: "Trinity Plots",
      category: "plotting",
      client: "Trinity",
      description: "Premium plotting project.",
      image: w7,
      tourUrl: "https://app.cloudpano.com/tours/RLpY4XWm1/"
    },

    {
      id: 16,
      title: "Nature Village",
      category: "plotting",
      client: "Nature Village",
      description: "Nature inspired plotting development.",
      image: w20,
      tourUrl: "https://app.cloudpano.com/tours/EqmVLBIkIWvD/"
    },

    {
      id: 17,
      title: "Aura Interior",
      category: "interior",
      client: "Aura Interior",
      description: "Luxury interior virtual walkthrough.",
      image: w8,
      tourUrl: "https://app.cloudpano.com/tours/1ZSdkI9lP/"
    },

    {
      id: 18,
      title: "CREDAI 2025",
      category: "expo",
      client: "CREDAI",
      description: "Property exhibition virtual tour.",
      image: ind6,
      tourUrl: "https://app.cloudpano.com/tours/9h3FCyAmi/"
    },

    {
      id: 19,
      title: "MAHA TECH",
      category: "expo",
      client: "MAHA TECH",
      description: "Technology expo showcase.",
      image: w9,
      tourUrl: "https://app.cloudpano.com/tours/8-H3Ahf06/"
    },

    {
      id: 20,
      title: "IIID Exhibition",
      category: "expo",
      client: "IIID",
      description: "Interior design exhibition.",
      image: w10,
      tourUrl: "https://app.cloudpano.com/tours/Het-5DGip/"
    },

    {
      id: 21,
      title: "NATCO Expo",
      category: "expo",
      client: "NATCO",
      description: "Industrial exhibition tour.",
      image: w11,
      tourUrl: "https://app.cloudpano.com/tours/W8pDkaKNQ/"
    },

    {
      id: 22,
      title: "MOACON",
      category: "expo",
      client: "MOACON",
      description: "Conference and expo experience.",
      image: w12,
      tourUrl: "https://app.cloudpano.com/tours/_8-1bCqih/"
    },

    {
      id: 23,
      title: "Maharashtra International Trade Expo 2025",
      category: "expo",
      client: "MITE",
      description: "International trade exhibition.",
      image: w13,
      tourUrl: "https://app.cloudpano.com/tours/xS-1IXSCf/"
    },

    {
      id: 24,
      title: "CREDAI Shelter Expo 2024",
      category: "expo",
      client: "CREDAI Nashik",
      description: "Property expo walkthrough.",
      image: ind6,
      tourUrl: "https://app.cloudpano.com/tours/9h3FCyAmi/"
    },

    {
      id: 25,
      title: "Sapkal Knowledge Hub",
      category: "education",
      client: "Sapkal Knowledge Hub",
      description: "Educational campus virtual tour.",
      image: w15,
      tourUrl: "https://app.cloudpano.com/tours/dP-q0e1mgmOn/"
    },

    {
      id: 26,
      title: "Skin Access Clinic",
      category: "healthcare",
      client: "Skin Access",
      description: "Healthcare facility virtual tour.",
      image: ind3,
      tourUrl: "https://app.cloudpano.com/tours/bXsaoFHv9/"
    },

    {
      id: 27,
      title: "THS Clinic",
      category: "healthcare",
      client: "THS Clinic",
      description: "Clinic interior virtual walkthrough.",
      image: w16,
      tourUrl: "https://app.cloudpano.com/tours/-cA1aT1cF/"
    },

    {
      id: 28,
      title: "Nashik Ganga Ghat",
      category: "government",
      client: "Government Project",
      description: "Tourism and heritage showcase.",
      image: ind4,
      tourUrl: "https://app.cloudpano.com/tours/XSmWGW3e6/"
    },

    {
      id: 29,
      title: "Trimbakeshwar",
      category: "government",
      client: "Government Project",
      description: "Religious tourism virtual tour.",
      image: w17,
      tourUrl: "https://app.cloudpano.com/tours/eeGGt6LeW/"
    },

    {
      id: 30,
      title: "Ranji Match Golf Club",
      category: "government",
      client: "Sports Authority",
      description: "Sports event virtual coverage.",
      image: w18,
      tourUrl: "https://app.cloudpano.com/tours/dEETujGAt/"
    },

    {
      id: 31,
      title: "City Center Mall",
      category: "mall",
      client: "City Center Mall",
      description: "Retail destination virtual tour.",
      image: w19,
      tourUrl: "https://app.cloudpano.com/tours/m6-g82UFt/"
    },

    {
      id: 32,
      title: "Jewellery Showroom",
      category: "mall",
      client: "Jewellery Store",
      description: "Luxury jewellery store walkthrough.",
      image: ind5,
      tourUrl: "https://app.cloudpano.com/tours/cpdUSOLWp/"
    }

  ];
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
        (project) =>
          project.category === activeCategory
      );
      

  return (
    <>
      <Helmet>
        <title>Portfolio | Sivaraa Infotech</title>

        <meta
          name="description"
          content="Explore immersive virtual tours, plotting projects, real estate showcases, government projects, healthcare, education and expo experiences."
        />
      </Helmet>

      <Header />

      {/* HERO */}

      <section className="relative overflow-hidden pt-36 pb-24 bg-gradient-to-br from-black via-slate-950 to-cyan-950">

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">

          <span className="inline-flex items-center px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-400 text-sm uppercase tracking-widest">
            360° Virtual Tour Portfolio
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black text-white">
            Explore Our Projects
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
            Discover immersive virtual tours created for Real Estate,
            Plotting Projects, Government Initiatives, Education,
            Healthcare, Retail Spaces and Exhibitions.
          </p>

        </div>

      </section>

      {/* PORTFOLIO */}

      <section className="relative py-16 bg-slate-950 min-h-screen">

        <div className="max-w-7xl mx-auto px-4">

          {/* FILTERS */}

          <div className="mb-12">
            <FilterTabs
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {/* COUNT */}

          <div className="mb-10 text-center">

            <p className="text-slate-400">

              Showing

              <span className="mx-2 text-cyan-400 font-bold">
                {filteredProjects.length}
              </span>

              Projects

            </p>

          </div>

          {/* GRID */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {filteredProjects.map((project, index) => (

              <div
                key={project.id}
                className="
                rounded-3xl
                overflow-hidden
                bg-slate-900
                border
                border-cyan-500/10
                hover:border-cyan-400/40
                transition-all
                duration-500
                hover:-translate-y-2
              "
              >

                <ProjectCard
  {...project}
  delay={index * 0.05}
  onViewTour={() => openTour(project)}
/>

                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

              </div>

            ))}

          </div>

          {/* EMPTY */}

          {filteredProjects.length === 0 && (

            <div className="text-center py-24">

              <h3 className="text-3xl font-bold text-white mb-4">
                No Projects Found
              </h3>

              <p className="text-slate-400">
                Projects for this category will appear here.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* TOUR MODAL */}

{showTourModal && selectedTour && (

  <div
    className="
      fixed
      inset-0
      z-[9999]
      bg-black/80
      backdrop-blur-xl
      flex
      items-center
      justify-center
      p-4
      animate-in
      fade-in
      duration-300
    "
  >

    <div
      className="
        relative
        w-full
        max-w-7xl
        h-[92vh]
        rounded-[32px]
        overflow-hidden
        border
        border-cyan-400/20
        bg-gradient-to-br
        from-slate-950
        via-slate-900
        to-cyan-950
        shadow-[0_0_80px_rgba(34,211,238,0.15)]
        animate-in
        zoom-in-95
        duration-300
      "
    >

      {/* Glow Effects */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />

      {/* Close Button */}

      <button
        onClick={closeTour}
        className="
          absolute
          top-4
          right-4
          z-50
          w-10
          h-10
          rounded-full
          bg-white/10
          backdrop-blur-md
          border
          border-white/20
          text-white
          text-lg
          hover:bg-red-500
          hover:scale-110
          transition-all
          duration-300
          flex
          items-center
          justify-center
        "
      >
        ✕
      </button>

      <div className="h-full flex flex-col">

        {/* Header */}

        <div
          className="
            px-6
            py-4
            border-b
            border-cyan-500/10
            bg-white/5
            backdrop-blur-md
          "
        >

          <h2 className="text-xl md:text-2xl font-bold text-white">
            {selectedTour.title}
          </h2>

          <p className="text-cyan-400 text-sm mt-1">
            {selectedTour.client}
          </p>

        </div>

        {/* IFRAME */}

        <div className="flex-1 p-4">

          <div
            className="
              w-full
              h-full
              rounded-2xl
              overflow-hidden
              border
              border-cyan-500/20
              shadow-[0_0_50px_rgba(34,211,238,0.15)]
              bg-black
            "
          >

            <iframe
              src={selectedTour.tourUrl}
              title={selectedTour.title}
              className="w-full h-full"
              allowFullScreen
            />

          </div>

        </div>

      </div>

    </div>

  </div>

)}

            <div className="h-full flex flex-col">

              <div className="p-6 border-b border-slate-800">

                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedTour.title}
                </h2>

                <p className="text-cyan-400">
                  {selectedTour.client}
                </p>

              </div>

              <iframe
                src={selectedTour.tourUrl}
                title={selectedTour.title}
                className="w-full flex-1"
                allowFullScreen
              />

            </div>

          </div>

        </div>

      )}

      <Footer />
    </>
  );
}

export default PortfolioPage;