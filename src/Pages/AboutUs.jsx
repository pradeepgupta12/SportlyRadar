

// import React, { useState, useEffect } from "react";
// import { Activity, Zap, Globe, BarChart3, CalendarDays } from "lucide-react";

// const AboutUs = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState({});

//   const sportImages = [
//     {
//       url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1600&h=600&fit=crop",
//       name: "Cricket"
//     },
//     {
//       url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1600&h=600&fit=crop",
//       name: "Football"
//     },
//     {
//       url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1600&h=600&fit=crop",
//       name: "Basketball"
//     },
//     {
//       url: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=1600&h=600&fit=crop",
//       name: "Hockey"
//     },
//     {
//       url: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1600&h=600&fit=crop",
//       name: "Tennis"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % sportImages.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     const elements = document.querySelectorAll("[data-animate]");
//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="w-full bg-gradient-to-b from-gray-50 to-white">
//       {/* FULL WIDTH CAROUSEL - unchanged */}
//       <div className="relative w-full h-96 overflow-hidden">
//         {sportImages.map((sport, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentImageIndex ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <img
//               src={sport.url}
//               alt={sport.name}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
//             <div className="absolute inset-0 flex items-center justify-center">
//               <h2 className="text-white text-5xl font-bold drop-shadow-lg">{sport.name}</h2>
//             </div>
//           </div>
//         ))}

//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
//           {sportImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentImageIndex(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentImageIndex
//                   ? "bg-white scale-125"
//                   : "bg-white/50 hover:bg-white/80"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

//         {/* HERO TEXT - unchanged */}
//         <div className="text-center max-w-4xl mx-auto mb-24">
//           <h1 
//             id="hero-title"
//             data-animate
//             className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-1000 ${
//               isVisible["hero-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//             }`}
//           >
//             We Watch the Numbers. <br />
//             <span className="text-indigo-600">You Enjoy the Action</span>
//           </h1>
//           <p 
//             id="hero-desc"
//             data-animate
//             className={`mt-6 text-gray-600 text-lg sm:text-xl leading-relaxed transition-all duration-1000 ${
//               isVisible["hero-desc"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//             }`}
//           >
//             Being a sports fan today is hard work. One eye on the T20 match,
//             another on the Premier League table, and constant refreshes for live
//             tennis scores.
//           </p>
//         </div>

//         {/* STORY - Now beautiful animated cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-28">
//           <div 
//             id="story-card-1"
//             data-animate
//             className={`bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-700 group ${
//               isVisible["story-card-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
//             }`}
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-400 transform group-hover:rotate-12 group-hover:scale-110">
//                 <Zap size={28} />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900">Built to Calm the Chaos</h2>
//             </div>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               SportlyRadar.com was built to calm the chaos. We are a team of data geeks, sports journalists, and die-hard fans who believe following your favourite sports shouldn't require five different subscriptions.
//             </p>
//           </div>

//           <div 
//             id="story-card-2"
//             data-animate
//             className={`bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-700 group ${
//               isVisible["story-card-2"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
//             }`}
//             style={{ transitionDelay: "150ms" }}
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-400 transform group-hover:rotate-12 group-hover:scale-110">
//                 <Activity size={28} />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900">The SportlyRadar Appeal</h2>
//             </div>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               We don't just give you the score — we let you feel the pulse of the game. A unified dashboard for multi-sport fans tired of switching between apps and tabs.
//             </p>
//           </div>
//         </div>

//         {/* MISSION */}
//         <div className="mb-28">
//           <h2 
//             id="mission-title"
//             data-animate
//             className={`text-4xl font-bold text-gray-900 text-center mb-16 transition-all duration-1000 ${
//               isVisible["mission-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//             }`}
//           >
//             Our Mission
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <MissionCard index={0} isVisible={isVisible["mission-0"]} />
//             <MissionCard index={1} isVisible={isVisible["mission-1"]} />
//             <MissionCard index={2} isVisible={isVisible["mission-2"]} />
//           </div>
//         </div>

//         {/* OFFERINGS */}
//         <div>
//           <h2 
//             id="offer-title"
//             data-animate
//             className={`text-4xl font-bold text-gray-900 text-center mb-16 transition-all duration-1000 ${
//               isVisible["offer-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//             }`}
//           >
//             What We Offer
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <OfferCard index={0} isVisible={isVisible["offer-0"]} />
//             <OfferCard index={1} isVisible={isVisible["offer-1"]} />
//             <OfferCard index={2} isVisible={isVisible["offer-2"]} />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// /* Reusable Animated Mission Card */
// const MissionCard = ({ index, isVisible }) => {
//   const items = [
//     { icon: BarChart3, title: "Accuracy First", desc: "Rumours belong on social media. Facts belong here. Every stat, schedule change and ranking is verified.", color: "indigo" },
//     { icon: Zap, title: "Speed Matters", desc: "In sports, a second is a lifetime. Our real-time systems ensure you're always ahead.", color: "blue" },
//     { icon: Globe, title: "All Sports, Equal Love", desc: "From World Cup finals to mid-table hockey matches — if it's competitive, it's on our Radar.", color: "purple" }
//   ];

//   const { icon: Icon, title, desc, color } = items[index];

//   return (
//     <div 
//       id={`mission-${index}`}
//       data-animate
//       className={`bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-700 group ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
//       }`}
//       style={{ transitionDelay: `${index * 150}ms` }}
//     >
//       <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-${color}-50 text-${color}-600 mb-6 transform transition-all duration-400 group-hover:bg-${color}-600 group-hover:text-white group-hover:rotate-6 group-hover:scale-110`}>
//         <Icon size={32} />
//       </div>
//       <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">{title}</h3>
//       <p className="text-gray-600 leading-relaxed">{desc}</p>
//     </div>
//   );
// };

// /* Reusable Animated Offer Card */
// const OfferCard = ({ index, isVisible }) => {
//   const items = [
//     { icon: Activity, title: "Live Match Centres", desc: "Rich dashboards with live scores and commentary across 5+ major sports.", color: "indigo" },
//     { icon: BarChart3, title: "Player Analytics", desc: "Career graphs, form guides, performance trends and rankings.", color: "blue" },
//     { icon: CalendarDays, title: "Global Schedule", desc: "One master calendar so you never miss a kick-off or a single ball.", color: "purple" }
//   ];

//   const { icon: Icon, title, desc, color } = items[index];

//   return (
//     <div 
//       id={`offer-${index}`}
//       data-animate
//       className={`bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-700 group ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
//       }`}
//       style={{ transitionDelay: `${index * 150}ms` }}
//     >
//       <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-${color}-50 text-${color}-600 mb-6 transform transition-all duration-400 group-hover:bg-${color}-600 group-hover:text-white group-hover:rotate-6 group-hover:scale-110`}>
//         <Icon size={32} />
//       </div>
//       <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">{title}</h3>
//       <p className="text-gray-600 leading-relaxed">{desc}</p>
//     </div>
//   );
// };

// export default AboutUs;


import React, { useState, useEffect } from "react";
import { Activity, Zap, Globe, BarChart3, CalendarDays } from "lucide-react";

const AboutUs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const sportImages = [
    { url: "/Image/cricket.jpg", name: "Cricket" },
    { url: "/Image/football.jpg", name: "Football" },
    { url: "/Image/basketball.jpeg", name: "Basketball" },
    { url: "/Image/hockey.jpeg", name: "Hockey" },
    { url: "/Image/tennis.jpeg", name: "Tennis" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sportImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white">
      {/* FULL WIDTH CAROUSEL */}
      <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
        {sportImages.map((sport, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImageIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={sport.url}
              alt={sport.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-2xl tracking-wide">
                {sport.name}
              </h2>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {sportImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* HERO TEXT */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h1
            id="hero-title"
            data-animate
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-1000 ${
              isVisible["hero-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            We Watch the Numbers. <br />
            <span className="text-indigo-600">You Enjoy the Action</span>
          </h1>
          <p
            id="hero-desc"
            data-animate
            className={`mt-6 text-gray-600 text-lg sm:text-xl leading-relaxed transition-all duration-1000 ${
              isVisible["hero-desc"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Being a sports fan today is hard work. One eye on the T20 match,
            another on the Premier League table, and constant refreshes for live
            tennis scores.
          </p>
        </div>

        {/* STORY SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-28">
          <div
            id="story-card-1"
            data-animate
            className={`bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 ease-out group cursor-pointer ${
              isVisible["story-card-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-400 transform group-hover:rotate-12 group-hover:scale-110">
                <Zap size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Built to Calm the Chaos</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              SportlyRadar.com was built to calm the chaos. We are a team of data geeks, sports journalists, and die-hard fans who believe following your favourite sports shouldn't require five different subscriptions.
            </p>
          </div>

          <div
            id="story-card-2"
            data-animate
            className={`bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 ease-out group cursor-pointer ${
              isVisible["story-card-2"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-400 transform group-hover:rotate-12 group-hover:scale-110">
                <Activity size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">The SportlyRadar Appeal</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              We don't just give you the score — we let you feel the pulse of the game. A unified dashboard for multi-sport fans tired of switching between apps and tabs.
            </p>
          </div>
        </div>

        {/* MISSION */}
        <div className="mb-28">
          <h2
            id="mission-title"
            data-animate
            className={`text-4xl font-bold text-gray-900 text-center mb-16 transition-all duration-1000 ${
              isVisible["mission-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Our Mission
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MissionCard index={0} isVisible={isVisible["mission-0"]} />
            <MissionCard index={1} isVisible={isVisible["mission-1"]} />
            <MissionCard index={2} isVisible={isVisible["mission-2"]} />
          </div>
        </div>

        {/* OFFERINGS */}
        <div>
          <h2
            id="offer-title"
            data-animate
            className={`text-4xl font-bold text-gray-900 text-center mb-16 transition-all duration-1000 ${
              isVisible["offer-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <OfferCard index={0} isVisible={isVisible["offer-0"]} />
            <OfferCard index={1} isVisible={isVisible["offer-1"]} />
            <OfferCard index={2} isVisible={isVisible["offer-2"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

/* Mission Card with hover movement */
const MissionCard = ({ index, isVisible }) => {
  const items = [
    { icon: BarChart3, title: "Accuracy First", desc: "Rumours belong on social media. Facts belong here. Every stat, schedule change and ranking is verified.", color: "indigo" },
    { icon: Zap, title: "Speed Matters", desc: "In sports, a second is a lifetime. Our real-time systems ensure you're always ahead.", color: "blue" },
    { icon: Globe, title: "All Sports, Equal Love", desc: "From World Cup finals to mid-table hockey matches — if it's competitive, it's on our Radar.", color: "purple" }
  ];

  const { icon: Icon, title, desc, color } = items[index];

  return (
    <div
      id={`mission-${index}`}
      data-animate
      className={`bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 ease-out group cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-${color}-50 text-${color}-600 mb-6 transform transition-all duration-400 group-hover:bg-${color}-600 group-hover:text-white group-hover:rotate-6 group-hover:scale-110`}>
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
};

/* Offer Card with hover movement */
const OfferCard = ({ index, isVisible }) => {
  const items = [
    { icon: Activity, title: "Live Match Centres", desc: "Rich dashboards with live scores and commentary across 5+ major sports.", color: "indigo" },
    { icon: BarChart3, title: "Player Analytics", desc: "Career graphs, form guides, performance trends and rankings.", color: "blue" },
    { icon: CalendarDays, title: "Global Schedule", desc: "One master calendar so you never miss a kick-off or a single ball.", color: "purple" }
  ];

  const { icon: Icon, title, desc, color } = items[index];

  return (
    <div
      id={`offer-${index}`}
      data-animate
      className={`bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 ease-out group cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-${color}-50 text-${color}-600 mb-6 transform transition-all duration-400 group-hover:bg-${color}-600 group-hover:text-white group-hover:rotate-6 group-hover:scale-110`}>
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
};

export default AboutUs;