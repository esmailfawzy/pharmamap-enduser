import React from "react";

const Footer = () => {
  return (
    <footer className="bg-surface dark:bg-background-dark border-t border-[#e7eaf3] dark:border-gray-800 py-10 w-full mt-auto">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Brand Footer */}
          <div className="flex items-center gap-2 opacity-80">
            <div className="size-6 bg-primary/10 rounded flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-lg">
                local_pharmacy
              </span>
            </div>
            <span className="text-xl font-bold text-text-main dark:text-white">
              فارما ماب
            </span>
          </div>
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8">
            <a
              className="text-text-sub hover:text-primary transition-colors text-sm font-medium dark:text-gray-400 dark:hover:text-white"
              href="#"
            >
              سياسة الخصوصية
            </a>
            <a
              className="text-text-sub hover:text-primary transition-colors text-sm font-medium dark:text-gray-400 dark:hover:text-white"
              href="#"
            >
              شروط الاستخدام
            </a>
            <a
              className="text-text-sub hover:text-primary transition-colors text-sm font-medium dark:text-gray-400 dark:hover:text-white"
              href="#"
            >
              المساعدة
            </a>
            <a
              className="text-text-sub hover:text-primary transition-colors text-sm font-medium dark:text-gray-400 dark:hover:text-white"
              href="#"
            >
              انضم كصيدلي
            </a>
          </div>
          {/* Socials */}
          <div className="flex gap-4">
            <a
              className="size-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-text-sub hover:text-primary hover:border-primary transition-all"
              href="#"
            >
              <span className="font-display font-bold">X</span>
            </a>
            <a
              className="size-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-text-sub hover:text-purple-600 hover:border-purple-600 transition-all"
              href="#"
            >
              <span className="font-display font-bold">In</span>
            </a>
            <a
              className="size-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-text-sub hover:text-blue-600 hover:border-blue-600 transition-all"
              href="#"
            >
              <span className="font-display font-bold">Fb</span>
            </a>
          </div>
          <div className="h-px w-full max-w-xs bg-gray-200 dark:bg-gray-700 my-2"></div>
          <p
            className="text-text-sub dark:text-gray-500 text-sm font-display text-center"
            dir="ltr"
          >
            © 2024 PharmaMap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
