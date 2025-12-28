import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row-reverse bg-white dark:bg-slate-900 group/design-root">
      {/* VISUAL SECTION (Left Half on Desktop) */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-slate-50">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZccOf2BnU8alHKrTNeAn7um3HfljIiLPxWJOkkV_t8mzziKZZgz0YACgr07jKh0qqIZVeBtw2-mZI6cUYJ3M9H16Hf7uhzLxOuDdxgwnINhxq2_s3-fV77tlGB1Lsws1xAVuytiAB84_fNBiwOVbFHIdC8BVgjOdPxfD_XXaYYOYjtDNf_goF7rOPRpm93oYwWUfOONkJgoq2CgxJw7qr-C2D6bsc77dtMxnVbf89mA9nwUsKyuu2lenu433jdWn00rE4VymiE9NU")',
          }}
        ></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/90 to-primary/40 md:bg-gradient-to-r md:from-primary/90 md:to-primary/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        {/* Content */}
        <div className="relative z-20 flex flex-col justify-end md:justify-center h-full p-8 md:p-16 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
              <span className="material-symbols-outlined text-3xl md:text-5xl">
                medical_services
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">
              فارما ماب
            </h1>
          </div>
          <p className="text-lg md:text-2xl font-medium text-white/90 max-w-md leading-relaxed">
            بوصلتك لأقرب صيدلية. رفيقك الصحي الموثوق أينما كنت.
          </p>
        </div>
      </div>

      {/* FORM SECTION (Right Half on Desktop) */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12 lg:p-24 w-full md:w-1/2 bg-white dark:bg-slate-900">
        <div className="w-full max-w-[480px] flex flex-col gap-6 fade-in-up">
          {/* Header */}
          <div className="flex flex-col gap-2 text-start">
            <h2 className="text-[#0d131b] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
              تسجيل الدخول
            </h2>
            <p className="text-[#64748b] dark:text-slate-400 text-base font-normal leading-normal">
              مرحباً بعودتك! الرجاء إدخال بياناتك للمتابعة.
            </p>
          </div>
          {/* Form */}
          <form
            className="flex flex-col gap-5 mt-4"
            onSubmit={(e: React.FormEvent) => e.preventDefault()}
          >
            {/* Email/Phone Input */}
            <label className="flex flex-col gap-2">
              <span className="text-[#0d131b] dark:text-slate-200 text-sm font-bold">
                البريد الإلكتروني أو رقم الهاتف
              </span>
              <div className="relative flex items-center">
                <input
                  className="form-input peer w-full rounded-xl border border-[#cfd9e7] bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-white h-14 px-4 pl-12 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none placeholder:text-[#94a3b8]"
                  placeholder="example@email.com"
                  type="text"
                />
                <span className="material-symbols-outlined absolute left-4 text-[#64748b] peer-focus:text-primary transition-colors">
                  mail
                </span>
              </div>
            </label>
            {/* Password Input */}
            <label className="flex flex-col gap-2">
              <span className="text-[#0d131b] dark:text-slate-200 text-sm font-bold">
                كلمة المرور
              </span>
              <div className="relative flex items-center">
                <input
                  className="form-input peer w-full rounded-xl border border-[#cfd9e7] bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-white h-14 px-4 pl-12 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none placeholder:text-[#94a3b8]"
                  placeholder="••••••••"
                  type="password"
                />
                <span className="material-symbols-outlined absolute left-4 text-[#64748b] cursor-pointer hover:text-primary transition-colors">
                  visibility_off
                </span>
              </div>
            </label>
            {/* Utilities */}
            <div className="flex items-center justify-between mt-1">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input
                    className="peer h-5 w-5 rounded border-2 border-slate-300 text-primary focus:ring-offset-0 focus:ring-2 focus:ring-primary/20 transition-all checked:bg-primary checked:border-primary cursor-pointer appearance-none bg-white"
                    type="checkbox"
                  />
                  <span className="material-symbols-outlined absolute text-white text-[16px] pointer-events-none opacity-0 peer-checked:opacity-100 left-[2px] top-[2px]">
                    check
                  </span>
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">
                  تذكرني
                </span>
              </label>
              <a
                className="text-sm font-bold text-primary hover:text-primary-dark transition-colors"
                href="#"
              >
                نسيت كلمة المرور؟
              </a>
            </div>
            {/* Primary Button */}
            <button className="w-full h-14 bg-primary hover:bg-primary-dark text-white text-lg font-bold rounded-xl shadow-lg shadow-primary/30 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 mt-2">
              <span>تسجيل الدخول</span>
              <span className="material-symbols-outlined rtl:rotate-180">
                arrow_forward
              </span>
            </button>
          </form>
          {/* Divider */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
            <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium">
              أو سجل الدخول عبر
            </span>
            <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
          </div>
          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 h-14 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-white">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                ></path>
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                ></path>
              </svg>
              <span className="font-bold text-slate-700 dark:text-slate-200">
                Google
              </span>
            </button>
            <button className="flex items-center justify-center gap-3 h-14 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-white">
              <svg
                className="w-6 h-6 text-[#1877F2]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
              <span className="font-bold text-slate-700 dark:text-slate-200">
                Facebook
              </span>
            </button>
          </div>
          {/* Footer Link */}
          <div className="flex justify-center mt-4">
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              ليس لديك حساب؟{" "}
              <Link
                className="text-primary font-bold hover:underline"
                to="/signup"
              >
                أنشئ حساباً جديداً
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
