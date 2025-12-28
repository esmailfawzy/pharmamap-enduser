import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [accountType, setAccountType] = useState("user");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (accountType === "pharmacist") {
      navigate("/pharmacy-registration");
    } else {
      // Handle normal user signup or navigate to home
      console.log("User signup");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Left Section: Branding & Illustration */}
      <div className="relative w-full md:w-5/12 lg:w-1/2 min-h-[200px] md:min-h-screen flex flex-col justify-end p-8 md:p-12 lg:p-16 overflow-hidden bg-slate-100">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz8WjEJNk8kqTrPG2jGqZe2R5OAHG9GGuhKbCREjX9Jyeqikz2iYFR1lwbu7TGLzrsR8ncR2dGhS5uGPYLt73FKHWxxsaj-yftcJBMcxuVjtODhm03RbZto-GF3YshX_xVPUq8i-dOfwFo7u5jjnQk_rM7IPNRi_mrA9Gk4Z1D3yTLM7CNFFWr-SfiGXESjNkQ_DyBox0DtXx-8O-wmUiyh2erSbueBDLCEWL3r5hRejY6Kn767fEK3dBcfFOTeQ1weuwNedn8Idzj"
            alt="Medical background"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-blue-900/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-start gap-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
              <span className="material-symbols-outlined text-white text-3xl">
                local_pharmacy
              </span>
            </div>
            <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
              فارما ماب
            </h1>
          </div>
          <p className="text-white/90 text-lg md:text-2xl font-medium leading-relaxed max-w-md hidden md:block">
            بوصلتك لأقرب صيدلية
            <br />
            <span className="text-base font-normal text-white/80 mt-2 block">
              منصة الرعاية الصحية المتكاملة التي تربطك بأقرب الخدمات الطبية
              بسرعة وسهولة.
            </span>
          </p>
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col justify-center items-center p-4 md:p-8 lg:p-12 bg-white dark:bg-background-dark overflow-y-auto">
        <div className="w-full max-w-lg animate-fade-in-up">
          {/* Form Header */}
          <div className="mb-8 text-center md:text-right">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
              إنشاء حساب جديد
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base">
              أدخل بياناتك للتسجيل في فارما ماب
            </p>
          </div>

          {/* Account Type Selector */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              نوع الحساب:
            </label>
            <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl flex relative">
              {/* User Option */}
              <label className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="account_type"
                  value="user"
                  className="peer sr-only"
                  checked={accountType === "user"}
                  onChange={() => setAccountType("user")}
                />
                <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-bold transition-all duration-200 text-slate-500 hover:text-slate-700 peer-checked:bg-white peer-checked:text-primary peer-checked:shadow-sm dark:peer-checked:bg-slate-700 dark:peer-checked:text-primary-400">
                  <span className="material-symbols-outlined text-[20px]">
                    person
                  </span>
                  <span>مستخدم / باحث عن دواء</span>
                </div>
              </label>
              {/* Pharmacist Option */}
              <label className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="account_type"
                  value="pharmacist"
                  className="peer sr-only"
                  checked={accountType === "pharmacist"}
                  onChange={() => setAccountType("pharmacist")}
                />
                <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-bold transition-all duration-200 text-slate-500 hover:text-slate-700 peer-checked:bg-white peer-checked:text-primary peer-checked:shadow-sm dark:peer-checked:bg-slate-700 dark:peer-checked:text-primary-400">
                  <span className="material-symbols-outlined text-[20px]">
                    storefront
                  </span>
                  <span>صيدلي / مالك صيدلية</span>
                </div>
              </label>
            </div>
          </div>

          <form className="flex flex-col gap-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label
                className="text-sm font-medium text-slate-700 dark:text-slate-300"
                htmlFor="fullname"
              >
                الاسم بالكامل
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors text-[20px]">
                    person
                  </span>
                </div>
                <input
                  type="text"
                  id="fullname"
                  className="block w-full rounded-xl border-slate-200 bg-slate-50 py-3.5 pr-11 pl-4 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 transition-all shadow-sm"
                  placeholder="أدخل اسمك الثلاثي"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label
                className="text-sm font-medium text-slate-700 dark:text-slate-300"
                htmlFor="email"
              >
                البريد الإلكتروني
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors text-[20px]">
                    mail
                  </span>
                </div>
                <input
                  type="email"
                  id="email"
                  className="block w-full rounded-xl border-slate-200 bg-slate-50 py-3.5 pr-11 pl-4 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 transition-all shadow-sm"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label
                className="text-sm font-medium text-slate-700 dark:text-slate-300"
                htmlFor="phone"
              >
                رقم الهاتف
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors text-[20px]">
                    call
                  </span>
                </div>
                <input
                  type="tel"
                  id="phone"
                  dir="ltr"
                  className="block w-full rounded-xl border-slate-200 bg-slate-50 py-3.5 pr-11 pl-4 text-right text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 transition-all shadow-sm"
                  placeholder="05xxxxxxxx"
                />
              </div>
            </div>

            {/* Password Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Password */}
              <div className="space-y-1.5">
                <label
                  className="text-sm font-medium text-slate-700 dark:text-slate-300"
                  htmlFor="password"
                >
                  كلمة المرور
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors text-[20px]">
                      lock
                    </span>
                  </div>
                  <input
                    type="password"
                    id="password"
                    className="block w-full rounded-xl border-slate-200 bg-slate-50 py-3.5 pr-11 pl-10 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 transition-all shadow-sm"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 focus:outline-none"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      visibility
                    </span>
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <label
                  className="text-sm font-medium text-slate-700 dark:text-slate-300"
                  htmlFor="confirm_password"
                >
                  تأكيد كلمة المرور
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors text-[20px]">
                      lock_reset
                    </span>
                  </div>
                  <input
                    type="password"
                    id="confirm_password"
                    className="block w-full rounded-xl border-slate-200 bg-slate-50 py-3.5 pr-11 pl-4 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 transition-all shadow-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 mt-2">
              <div className="flex h-6 items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-700"
                />
              </div>
              <div className="text-sm leading-6">
                <label
                  htmlFor="terms"
                  className="font-medium text-slate-700 dark:text-slate-300"
                >
                  أوافق على{" "}
                  <a
                    href="#"
                    className="text-primary hover:text-primary-dark hover:underline"
                  >
                    الشروط والأحكام
                  </a>{" "}
                  و{" "}
                  <a
                    href="#"
                    className="text-primary hover:text-primary-dark hover:underline"
                  >
                    سياسة الخصوصية
                  </a>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSignUp}
              className="mt-4 w-full rounded-xl bg-primary py-4 px-4 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary-dark hover:shadow-primary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all transform active:scale-[0.98]"
            >
              إنشاء الحساب
            </button>
          </form>

          {/* Footer Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              لديك حساب بالفعل؟{" "}
              <Link
                to="/login"
                className="font-bold text-primary hover:text-primary-dark hover:underline transition-colors"
              >
                سجل الدخول هنا
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
