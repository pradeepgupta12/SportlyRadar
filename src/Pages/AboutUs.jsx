// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="w-full bg-white">
//       {/* Wrapper */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
//         {/* Heading Section */}
//         <div className="text-center max-w-3xl mx-auto mb-14">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
//             We Watch the Numbers. You Enjoy the Action
//           </h1>
//           <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
//             Being a sports fan today is hard work. You have one eye on the T20
//             match, another on the Premier League table, and you're frantically
//             refreshing a browser to see the tennis scores.
//           </p>
//         </div>

//         {/* Intro Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
//           <div>
//             <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
//               Built to Calm the Chaos
//             </h2>
//             <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
//               SportlyRadar.com was built to calm the chaos. We are a team of data
//               geeks, sports journalists, and die-hard fans who believe that
//               following your favourite sports shouldn’t require five different
//               subscriptions.
//             </p>
//           </div>

//           <div className="bg-gray-100 rounded-2xl p-8 shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">
//               The SportlyRadar Appeal
//             </h3>
//             <p className="text-gray-600 leading-relaxed">
//               We don’t just give you the score — we let you feel the pulse of the
//               game. A unified dashboard for multi-sport fans who are tired of
//               switching between apps and tabs.
//             </p>
//           </div>
//         </div>

//         {/* Mission Section */}
//         <div className="mb-20">
//           <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-12">
//             Our Mission
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
//             {/* Mission Card */}
//             <div className="border rounded-2xl p-6 hover:shadow-lg transition">
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                 Accuracy First
//               </h3>
//               <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
//                 Rumours belong on social media. Facts belong here. We verify
//                 every stat, schedule change, and ranking update.
//               </p>
//             </div>

//             <div className="border rounded-2xl p-6 hover:shadow-lg transition">
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                 Speed Matters
//               </h3>
//               <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
//                 In sports, a second is a lifetime. Our real-time infrastructure
//                 ensures you know about the goal before your neighbour hears you
//                 scream.
//               </p>
//             </div>

//             <div className="border rounded-2xl p-6 hover:shadow-lg transition">
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                 All Sports, Equal Love
//               </h3>
//               <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
//                 Whether it's a World Cup final or a mid-table hockey match, if
//                 it's competitive — it's on our Radar.
//               </p>
//             </div>

//           </div>
//         </div>

//         {/* What We Offer */}
//         <div>
//           <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-12">
//             What We Offer
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
//             <div className="bg-gray-50 rounded-2xl p-6">
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                 Live Match Centres
//               </h3>
//               <p className="text-gray-600 text-sm sm:text-base">
//                 Detailed dashboards for 5+ major sports with live scores and
//                 commentary.
//               </p>
//             </div>

//             <div className="bg-gray-50 rounded-2xl p-6">
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                 Player Analytics
//               </h3>
//               <p className="text-gray-600 text-sm sm:text-base">
//                 Career graphs, form guides, performance trends and rankings.
//               </p>
//             </div>

//             <div className="bg-gray-50 rounded-2xl p-6">
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                 Global Schedule
//               </h3>
//               <p className="text-gray-600 text-sm sm:text-base">
//                 A master calendar so you never miss a kick-off or a single ball.
//               </p>
//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AboutUs;



import React from "react";
import { Activity, Zap, Globe, BarChart3, CalendarDays } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block text-sm font-semibold tracking-wider text-indigo-600 uppercase mb-4">
            About SportlyRadar
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            We Watch the Numbers. <br />
            <span className="text-indigo-600">You Enjoy the Action</span>
          </h1>
          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            Being a sports fan today is hard work. One eye on the T20 match,
            another on the Premier League table, and constant refreshes for live
            tennis scores.
          </p>
        </div>

        {/* STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-24">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Built to Calm the Chaos
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              SportlyRadar.com was built to calm the chaos. We are a team of data
              geeks, sports journalists, and die-hard fans who believe following
              your favourite sports shouldn’t require five different
              subscriptions.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The SportlyRadar Appeal
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We don’t just give you the score — we let you feel the pulse of
                the game. A unified dashboard for multi-sport fans tired of
                switching between apps and tabs.
              </p>
            </div>
          </div>
        </div>

        {/* MISSION */}
        <div className="mb-28">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-14">
            Our Mission
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MissionCard
              icon={<BarChart3 size={28} />}
              title="Accuracy First"
              desc="Rumours belong on social media. Facts belong here. Every stat,
              schedule change and ranking is verified."
            />
            <MissionCard
              icon={<Zap size={28} />}
              title="Speed Matters"
              desc="In sports, a second is a lifetime. Our real-time systems ensure
              you’re always ahead."
            />
            <MissionCard
              icon={<Globe size={28} />}
              title="All Sports, Equal Love"
              desc="From World Cup finals to mid-table hockey matches — if it’s
              competitive, it’s on our Radar."
            />
          </div>
        </div>

        {/* OFFERINGS */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-14">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <OfferCard
              icon={<Activity size={26} />}
              title="Live Match Centres"
              desc="Rich dashboards with live scores and commentary across 5+
              major sports."
            />
            <OfferCard
              icon={<BarChart3 size={26} />}
              title="Player Analytics"
              desc="Career graphs, form guides, performance trends and rankings."
            />
            <OfferCard
              icon={<CalendarDays size={26} />}
              title="Global Schedule"
              desc="One master calendar so you never miss a kick-off or a single
              ball."
            />
          </div>
        </div>

      </div>
    </div>
  );
};

/* Components */

const MissionCard = ({ icon, title, desc }) => (
  <div className="bg-white rounded-2xl p-8 border hover:shadow-xl transition">
    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-5">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

const OfferCard = ({ icon, title, desc }) => (
  <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition">
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default AboutUs;
