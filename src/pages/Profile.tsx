import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProfileEditModal from "../components/features/ProfileEditModal";

interface UserData {
  name: string;
  email: string;
  phone: string;
}

const Profile = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    name: "أحمد محمد",
    email: "ahmed@example.com",
    phone: "+966 55 123 4567",
  });

  const handleSaveUserData = (newData: UserData) => {
    setUserData(newData);
    setIsEditModalOpen(false);
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
        {/* Main Content */}
        <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full">
          {/* Page Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-text-main dark:text-white mb-2">
              الملف الشخصي
            </h2>
            <p className="text-text-muted">
              إدارة معلوماتك الشخصية وعناوين التوصيل
            </p>
          </div>

          {/* Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar: User Info & Settings */}
            <div className="lg:col-span-4 space-y-6">
              {/* Profile Card */}
              <div className="bg-white dark:bg-[#1a2332] rounded-xl p-6 shadow-sm border border-primary-light dark:border-slate-800 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-l from-primary/10 to-primary/5"></div>
                <div className="relative z-10 mt-8 mb-4">
                  <div
                    className="size-28 rounded-full bg-cover bg-center border-4 border-white dark:border-slate-800 shadow-md"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB8EgEQcsMKDp7cihTB53szJYKYqen11TVoQPubWmBRGSs14LPnD3ciiAYrlBFSbXzCoLLy6hoX3n7LfDu_b2sSuZowpCZCmrvcZhT6fKULVooQyYW8RmsIJxPgP-oS5KvlM5xUrTV8HYXqup544MJ7fC0DP0JYT7xO6sY0R4EkIoyhu4GG1eO7CrI2uK_mYiL_e4cX7z56euqAcKDp1kjcsNY6VZiLRDQO_28lHYWWgUJKk7szKsOjlqUbKQu08wZ0r-nSfr1doOtS')",
                    }}
                  ></div>
                  <button
                    aria-label="Edit photo"
                    className="absolute bottom-1 left-1 bg-primary text-white p-1.5 rounded-full shadow-lg hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      edit
                    </span>
                  </button>
                </div>
                <h3 className="text-xl font-bold text-text-main dark:text-white flex items-center justify-center gap-2">
                  {userData.name}
                  <button
                    onClick={() => setIsEditModalOpen(true)}
                    className="size-7 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all cursor-pointer"
                    title="تعديل المعلومات"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      edit
                    </span>
                  </button>
                </h3>
                <p className="text-text-muted mb-4 text-sm" dir="ltr">
                  {userData.email} | {userData.phone}
                </p>
                <div className="w-full h-px bg-primary-light dark:bg-slate-800 my-4"></div>
                <div className="flex justify-around w-full text-center">
                  <div>
                    <span className="block text-2xl font-bold text-primary">
                      12
                    </span>
                    <span className="text-xs text-text-muted">طلب سابق</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-primary">
                      3
                    </span>
                    <span className="text-xs text-text-muted">وصفات طبية</span>
                  </div>
                </div>
              </div>

              {/* Settings Card */}
              <div className="bg-white dark:bg-[#1a2332] rounded-xl shadow-sm border border-primary-light dark:border-slate-800 overflow-hidden">
                <div className="p-4 border-b border-primary-light dark:border-slate-800">
                  <h4 className="font-bold text-lg flex items-center gap-2 text-text-main dark:text-white">
                    <span className="material-symbols-outlined text-primary">
                      settings
                    </span>
                    الإعدادات والحساب
                  </h4>
                </div>
                <div className="flex flex-col">
                  <a
                    className="flex items-center justify-between p-4 hover:bg-primary-light/30 dark:hover:bg-slate-800/50 transition-colors border-b border-primary-light dark:border-slate-800 last:border-0 group cursor-pointer"
                    href="#"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-muted group-hover:text-primary">
                        lock
                      </span>
                      <span className="font-medium text-text-main dark:text-white">
                        تغيير كلمة المرور
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-text-muted text-sm rotate-180">
                      arrow_back_ios
                    </span>
                  </a>
                  <a
                    className="flex items-center justify-between p-4 hover:bg-primary-light/30 dark:hover:bg-slate-800/50 transition-colors border-b border-primary-light dark:border-slate-800 last:border-0 group cursor-pointer"
                    href="#"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-text-muted group-hover:text-primary">
                        language
                      </span>
                      <span className="font-medium text-text-main dark:text-white">
                        اللغة
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-text-muted">العربية</span>
                      <span className="material-symbols-outlined text-text-muted text-sm rotate-180">
                        arrow_back_ios
                      </span>
                    </div>
                  </a>
                  <a
                    className="flex items-center justify-between p-4 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors group cursor-pointer"
                    href="#"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-danger">
                        logout
                      </span>
                      <span className="font-medium text-danger">
                        تسجيل الخروج
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content Area: Saved Items */}
            <div className="lg:col-span-8 space-y-6">
              {/* Saved Locations */}
              <div className="bg-white dark:bg-[#1a2332] rounded-xl shadow-sm border border-primary-light dark:border-slate-800">
                <div className="p-5 border-b border-primary-light dark:border-slate-800 flex justify-between items-center flex-wrap gap-4">
                  <h4 className="font-bold text-lg flex items-center gap-2 text-text-main dark:text-white">
                    <span className="material-symbols-outlined text-primary">
                      location_on
                    </span>
                    عناويني المحفوظة
                  </h4>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-all text-sm font-bold cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">
                      add
                    </span>
                    إضافة عنوان جديد
                  </button>
                </div>
                <div className="divide-y divide-primary-light dark:divide-slate-800">
                  {/* Location Item 1 */}
                  <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary-light dark:bg-slate-700 p-3 rounded-lg text-primary shrink-0">
                        <span className="material-symbols-outlined">home</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-bold text-text-main dark:text-white">
                            المنزل
                          </p>
                          <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">
                            الافتراضي
                          </span>
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed">
                          الرياض، حي العليا، شارع الأمير سلطان، مبنى 12، شقة 4
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                      <button
                        className="size-9 flex items-center justify-center rounded-lg text-text-muted hover:text-primary hover:bg-primary-light transition-colors cursor-pointer"
                        title="تعديل"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          edit
                        </span>
                      </button>
                      <button
                        className="size-9 flex items-center justify-center rounded-lg text-text-muted hover:text-danger hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors cursor-pointer"
                        title="حذف"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          delete
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Location Item 2 */}
                  <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary-light dark:bg-slate-700 p-3 rounded-lg text-text-muted shrink-0">
                        <span className="material-symbols-outlined">work</span>
                      </div>
                      <div>
                        <p className="font-bold text-text-main dark:text-white mb-1">
                          العمل
                        </p>
                        <p className="text-sm text-text-muted leading-relaxed">
                          الرياض، واجهة روشن، بوابة 3، مكتب 202
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                      <button
                        className="size-9 flex items-center justify-center rounded-lg text-text-muted hover:text-primary hover:bg-primary-light transition-colors cursor-pointer"
                        title="تعديل"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          edit
                        </span>
                      </button>
                      <button
                        className="size-9 flex items-center justify-center rounded-lg text-text-muted hover:text-danger hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors cursor-pointer"
                        title="حذف"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          delete
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Saved Medicines */}
              <div className="bg-white dark:bg-[#1a2332] rounded-xl shadow-sm border border-primary-light dark:border-slate-800">
                <div className="p-5 border-b border-primary-light dark:border-slate-800">
                  <h4 className="font-bold text-lg flex items-center gap-2 text-text-main dark:text-white">
                    <span className="material-symbols-outlined text-primary">
                      medication
                    </span>
                    أدويتي المفضلة
                  </h4>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Medicine Card 1 */}
                    <div className="border border-primary-light dark:border-slate-700 rounded-lg p-4 flex items-center justify-between group hover:border-primary transition-all bg-background-light dark:bg-slate-800/30">
                      <div className="flex items-center gap-3">
                        <div className="bg-white dark:bg-slate-700 p-2 rounded-full shadow-sm shrink-0">
                          <span className="material-symbols-outlined text-primary">
                            pill
                          </span>
                        </div>
                        <div>
                          <p className="font-bold text-sm text-text-main dark:text-white">
                            Concor 5mg
                          </p>
                          <p className="text-xs text-secondary mt-0.5 flex items-center gap-1">
                            <span className="block size-1.5 bg-secondary rounded-full"></span>
                            متوفر
                          </p>
                        </div>
                      </div>
                      <button
                        className="opacity-0 group-hover:opacity-100 p-2 text-text-muted hover:text-danger transition-all cursor-pointer"
                        title="إزالة من المفضلة"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          favorite
                        </span>
                      </button>
                    </div>

                    {/* Medicine Card 2 */}
                    <div className="border border-primary-light dark:border-slate-700 rounded-lg p-4 flex items-center justify-between group hover:border-primary transition-all bg-background-light dark:bg-slate-800/30">
                      <div className="flex items-center gap-3">
                        <div className="bg-white dark:bg-slate-700 p-2 rounded-full shadow-sm shrink-0">
                          <span className="material-symbols-outlined text-primary">
                            vaccines
                          </span>
                        </div>
                        <div>
                          <p className="font-bold text-sm text-text-main dark:text-white">
                            Panadol Extra
                          </p>
                          <p className="text-xs text-secondary mt-0.5 flex items-center gap-1">
                            <span className="block size-1.5 bg-secondary rounded-full"></span>
                            متوفر
                          </p>
                        </div>
                      </div>
                      <button
                        className="opacity-0 group-hover:opacity-100 p-2 text-text-muted hover:text-danger transition-all cursor-pointer"
                        title="إزالة من المفضلة"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          favorite
                        </span>
                      </button>
                    </div>

                    {/* Medicine Card 3 */}
                    <div className="border border-primary-light dark:border-slate-700 rounded-lg p-4 flex items-center justify-between group hover:border-primary transition-all bg-background-light dark:bg-slate-800/30">
                      <div className="flex items-center gap-3">
                        <div className="bg-white dark:bg-slate-700 p-2 rounded-full shadow-sm shrink-0">
                          <span className="material-symbols-outlined text-primary">
                            medication_liquid
                          </span>
                        </div>
                        <div>
                          <p className="font-bold text-sm text-text-main dark:text-white">
                            Omega 3 Fish Oil
                          </p>
                          <p className="text-xs text-text-muted mt-0.5">
                            غير متوفر حالياً
                          </p>
                        </div>
                      </div>
                      <button
                        className="opacity-0 group-hover:opacity-100 p-2 text-text-muted hover:text-danger transition-all cursor-pointer"
                        title="إزالة من المفضلة"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          favorite
                        </span>
                      </button>
                    </div>

                    {/* Add New Medicine Placeholder */}
                    <button className="border border-dashed border-primary/40 rounded-lg p-4 flex items-center justify-center gap-2 text-primary hover:bg-primary/5 transition-colors h-full min-h-[76px] cursor-pointer">
                      <span className="material-symbols-outlined text-[20px]">
                        add_circle
                      </span>
                      <span className="font-bold text-sm">إضافة دواء جديد</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />

      {/* Edit Profile Modal */}
      <ProfileEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        userData={userData}
        onSave={handleSaveUserData}
      />
    </>
  );
};

export default Profile;
