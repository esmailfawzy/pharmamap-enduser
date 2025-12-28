import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#101722] transition-colors duration-300">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-md w-full animate-fade-in-up">
          {/* Decorative Elements */}
          <div className="relative mb-8 flex justify-center">
            <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 blur-3xl rounded-full"></div>
            <div className="relative">
              <span className="material-symbols-outlined text-[120px] text-blue-500/50 dark:text-blue-400/40 select-none">
                error_outline
              </span>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-blue-600 dark:text-blue-400">
                404
              </span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            الصفحة غير موجودة
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            عذراً، يبدو أن الصفحة التي تبحث عنها غير موجودة أو تم نقلها لمكان
            آخر. يمكنك العودة للصفحة الرئيسية لمتابعة رحلتك.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
          >
            <span className="material-symbols-outlined">home</span>
            العودة للرئيسية
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
