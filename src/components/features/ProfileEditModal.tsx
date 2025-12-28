import React, { useState, useEffect } from "react";
import { UserData } from "../../types";

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  userData: UserData;
  onSave: (data: UserData) => void;
}

const ProfileEditModal: React.FC<ProfileEditModalProps> = ({
  isOpen,
  onClose,
  userData,
  onSave,
}) => {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (userData) {
      setFormData(userData);
    }
  }, [userData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#1a2332] rounded-xl shadow-xl w-full max-w-md border border-primary-light dark:border-slate-800 animate-in fade-in zoom-in duration-200">
        <div className="p-5 border-b border-primary-light dark:border-slate-800 flex justify-between items-center">
          <h3 className="text-xl font-bold text-text-main dark:text-white">
            تعديل المعلومات الشخصية
          </h3>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-danger transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-text-main dark:text-white">
              الاسم الكامل
            </label>
            <div className="relative">
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted material-symbols-outlined text-[20px]">
                person
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pr-10 pl-4 py-2.5 rounded-lg border border-primary-light dark:border-slate-700 bg-background-light dark:bg-slate-800/50 text-text-main dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="الاسم الكامل"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-text-main dark:text-white">
              البريد الإلكتروني
            </label>
            <div className="relative">
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted material-symbols-outlined text-[20px]">
                mail
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pr-10 pl-4 py-2.5 rounded-lg border border-primary-light dark:border-slate-700 bg-background-light dark:bg-slate-800/50 text-text-main dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="البريد الإلكتروني"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-text-main dark:text-white">
              رقم الهاتف
            </label>
            <div className="relative">
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted material-symbols-outlined text-[20px]">
                phone
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pr-10 pl-4 py-2.5 rounded-lg border border-primary-light dark:border-slate-700 bg-background-light dark:bg-slate-800/50 text-text-main dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="رقم الهاتف"
                dir="ltr"
                required
              />
            </div>
          </div>

          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 rounded-lg border border-primary-light dark:border-slate-700 text-text-muted hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors font-medium cursor-pointer"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 rounded-lg bg-primary text-white hover:bg-blue-700 transition-colors font-bold shadow-sm shadow-primary/20 cursor-pointer"
            >
              حفظ التغييرات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEditModal;
