import React from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="relative flex-1 flex flex-col justify-center items-center py-20 lg:py-32 px-4 z-10 w-full">
      {/* Background Decorative Elements (Anti-gravity Pills) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Top Left */}
        <div className="absolute top-20 -left-10 w-32 h-32 opacity-20 animate-float-slow">
          <img
            alt="3d floating capsule decoration"
            className="w-full h-full object-contain rotate-45"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE90Lezr-btdgLBeTADGwc2ru3IG2oPY8IXMC3bGUzHwrwDv34uSra5c_QtV5APObdr40YWbLS1gEgkZah4HlqdV6wzGdQGK_iyQLU_zEsgQ-nRubIIxD0uPmcZQOzMHtxsiGkKJnCl5994gOG7BZWv_3nedw6DVQo4TZHTpDA-l2PyBFcEc_QFHg--odKNgXkI4d8uXxHZ-FIUKQEcPdncrE3_EnCFGoboQNn2n1wwS6TdIu0aFFZ8LUkYB2qjwb544yGZ6DcqzsO"
          />
        </div>
        {/* Bottom Right */}
        <div className="absolute bottom-20 -right-10 w-40 h-40 opacity-20 animate-float-medium">
          <img
            alt="3d floating pill decoration"
            className="w-full h-full object-contain -rotate-12"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkArO3hgVqAdGAIOvYpixop-fuOk1NR6HmrPKvixy9bhpjhU1FcFUIm2EKz6BDXhJ5bCjt3D_YUNfHH_hxPMR8ERYDTWFyIDpMKTJvZZq9Bj6yWmGGgjePtdPrE1g_ged5rNxJn6ZHl_v7LGjCIbSclJSfDsSlOkLdPYbNnxL3pzdQKZpVX9sCyXL9nGk36SxuCMk5LkHiPpBhlCKUW-PZyxzqhXTVSpvzSJM3FBWlP45ngv4jaIlh4cXf-vVjf9HRowRmyE3rOuMh"
          />
        </div>
        {/* Top Right */}
        <div className="absolute top-40 right-10 w-24 h-24 opacity-10 animate-float-fast">
          <div className="w-full h-full bg-secondary/30 rounded-full blur-xl"></div>
        </div>
        {/* Bottom Left */}
        <div className="absolute bottom-40 left-20 w-16 h-16 opacity-15 animate-float-slow">
          <img
            alt="medical cross decoration"
            className="w-full h-full object-contain rotate-12 filter grayscale opacity-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEVYp_uOp_35VD0W0evK4bOWVSsW8p5rTDsHrn2ua4n7qUHY2kvDCSgoRhCB_lfxfWjljIjzJu1uYLi6YQ0jBCoyQNUrr6PeOIgKIPj8RzLXoMDGz_KdsqxSTIvtjw1hy3pnE6fzWuq0JiUFq-WhafBM4Zb43aBmpnREsNJx1g1HElwScaGTK73E4RcO9pNlODSjfayaMmnH7-enGr9ySbrcDftqfPtH9_rgp3DZ9_Ap27ZjXrzzdC3djRRIIwXYXKumCx_0tA0lLS"
          />
        </div>
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center text-center space-y-8">
        {/* Headings */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-main dark:text-white leading-[1.2]">
            <span className="text-primary">فارما ماب..</span> بوصلتك لأقرب
            صيدلية
          </h1>
          <p className="text-lg md:text-xl text-text-sub dark:text-gray-300 font-medium">
            اعثر على الدواء الذي تحتاجه في ثوانٍ، بكل سهولة وموثوقية.
          </p>
        </div>

        {/* Search Component */}
        <SearchBar />

        {/* Trusted By / Features */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-text-sub dark:text-gray-400 font-medium">
          <div className="flex items-center gap-2 px-4 py-2 bg-surface dark:bg-gray-800 rounded-full">
            <span className="material-symbols-outlined text-secondary text-lg">
              verified
            </span>
            <span>صيدليات معتمدة</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-surface dark:bg-gray-800 rounded-full">
            <span className="material-symbols-outlined text-primary text-lg">
              schedule
            </span>
            <span>خدمة 24 ساعة</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-surface dark:bg-gray-800 rounded-full">
            <span className="material-symbols-outlined text-blue-400 text-lg">
              local_shipping
            </span>
            <span>توصيل سريع</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
