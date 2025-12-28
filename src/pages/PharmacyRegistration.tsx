import React from "react";

const PharmacyRegistration = () => {
  return (
    <div className="bg-background-light text-slate-900 font-display min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
              <span className="material-symbols-outlined">local_pharmacy</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              PharmaMap
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end text-sm">
              <span className="font-medium text-slate-900">د. أحمد محمد</span>
              <span className="text-xs text-slate-500">صيدلية الشفاء</span>
            </div>
            <button className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
              <span className="material-symbols-outlined">person</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Progress Stepper */}
          <div className="mb-10">
            <nav aria-label="Progress">
              <ol className="flex items-center" role="list">
                {/* Step 1: Completed */}
                <li className="relative pr-8 sm:pr-20">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center"
                  >
                    <div className="h-0.5 w-full bg-primary"></div>
                  </div>
                  <a
                    className="relative flex size-8 items-center justify-center rounded-full bg-primary hover:bg-blue-700"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-white text-sm">
                      check
                    </span>
                    <span className="absolute -bottom-8 w-32 text-center text-sm font-medium text-primary">
                      بيانات الحساب
                    </span>
                  </a>
                </li>
                {/* Step 2: Active (Current Focus) */}
                <li className="relative pr-8 sm:pr-20">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center"
                  >
                    <div className="h-0.5 w-full bg-slate-200"></div>
                  </div>
                  <a
                    aria-current="step"
                    className="relative flex size-8 items-center justify-center rounded-full border-2 border-primary bg-white"
                    href="#"
                  >
                    <span className="size-2.5 rounded-full bg-primary"></span>
                    <span className="absolute -bottom-8 w-32 text-center text-sm font-bold text-primary">
                      بيانات الصيدلية
                    </span>
                  </a>
                </li>
                {/* Step 3: Pending (Visually connected for this flow) */}
                <li className="relative">
                  <a
                    className="group relative flex size-8 items-center justify-center rounded-full border-2 border-slate-300 bg-white hover:border-slate-400"
                    href="#"
                  >
                    <span className="size-2.5 rounded-full bg-transparent group-hover:bg-slate-300"></span>
                    <span className="absolute -bottom-8 w-32 text-center text-sm font-medium text-slate-500">
                      الموقع والتراخيص
                    </span>
                  </a>
                </li>
              </ol>
            </nav>
          </div>

          {/* Main Form Card */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Card Header */}
            <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-900">
                تسجيل بيانات الصيدلية الجديدة
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                يرجى ملء البيانات بدقة لضمان قبول طلب انضمامك لشبكة شفاء.
              </p>
            </div>
            <div className="p-6 md:p-8 space-y-10">
              {/* Section 1: Pharmacy Details */}
              <section className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <span className="material-symbols-outlined text-primary">
                    storefront
                  </span>
                  <h3 className="text-lg font-bold text-slate-800">
                    بيانات الصيدلية الأساسية
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Pharmacy Name */}
                  <div className="col-span-1 md:col-span-2">
                    <label
                      className="block text-sm font-medium text-slate-700 mb-2"
                      htmlFor="pharmacy-name"
                    >
                      اسم الصيدلية
                    </label>
                    <input
                      className="block w-full rounded-lg border-slate-300 bg-slate-50 p-3 text-slate-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      id="pharmacy-name"
                      placeholder="مثال: صيدلية الشفاء - فرع المعادي"
                      type="text"
                    />
                  </div>
                  {/* Phone Number */}
                  <div className="col-span-1 md:col-span-2">
                    <label
                      className="block text-sm font-medium text-slate-700 mb-2"
                      htmlFor="phone"
                    >
                      رقم الهاتف الأرضي / الخط الساخن
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 border-l border-slate-200 pl-3 bg-slate-100 rounded-r-lg">
                        <span className="material-symbols-outlined text-slate-400">
                          phone
                        </span>
                      </div>
                      <input
                        className="block w-full rounded-lg border-slate-300 bg-slate-50 pr-14 p-3 text-slate-900 focus:border-primary focus:ring-primary sm:text-sm"
                        id="phone"
                        placeholder="02-12345678"
                        type="text"
                      />
                    </div>
                  </div>
                  {/* Working Hours */}
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      ساعات العمل
                    </label>
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      <div className="flex items-center gap-2 flex-1 w-full">
                        <span className="text-sm text-slate-500 w-8">من:</span>
                        <select className="block w-full rounded-lg border-slate-300 bg-slate-50 p-2.5 text-slate-900 focus:border-primary focus:ring-primary sm:text-sm">
                          <option>09:00 ص</option>
                          <option>10:00 ص</option>
                        </select>
                      </div>
                      <div className="flex items-center gap-2 flex-1 w-full">
                        <span className="text-sm text-slate-500 w-8">إلى:</span>
                        <select className="block w-full rounded-lg border-slate-300 bg-slate-50 p-2.5 text-slate-900 focus:border-primary focus:ring-primary sm:text-sm">
                          <option>10:00 م</option>
                          <option>11:00 م</option>
                        </select>
                      </div>
                      <div className="flex items-center mt-1 sm:mt-0">
                        <input
                          className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                          id="24h-checkbox"
                          type="checkbox"
                        />
                        <label
                          className="mr-2 block text-sm text-slate-700"
                          htmlFor="24h-checkbox"
                        >
                          مفتوح 24 ساعة
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Delivery Toggle */}
                  <div className="col-span-1 md:col-span-2 bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-base font-medium text-slate-900">
                        خدمة التوصيل
                      </span>
                      <span className="text-sm text-slate-500">
                        هل توفر الصيدلية خدمة توصيل الطلبات للمنازل؟
                      </span>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        className="peer sr-only"
                        type="checkbox"
                        value=""
                      />
                      <div className="peer h-7 w-12 rounded-full bg-slate-200 after:absolute after:right-[2px] after:top-[2px] after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:-translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20"></div>
                    </label>
                  </div>
                </div>
              </section>
              {/* Section 2: Location & Docs */}
              <section className="space-y-6 pt-2">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                  <h3 className="text-lg font-bold text-slate-800">
                    الموقع والتراخيص
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Location Dropdowns */}
                  <div>
                    <label
                      className="block text-sm font-medium text-slate-700 mb-2"
                      htmlFor="governorate"
                    >
                      المحافظة
                    </label>
                    <select
                      className="block w-full rounded-lg border-slate-300 bg-slate-50 p-3 text-slate-900 focus:border-primary focus:ring-primary sm:text-sm"
                      id="governorate"
                    >
                      <option>القاهرة</option>
                      <option>الجيزة</option>
                      <option>الإسكندرية</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-slate-700 mb-2"
                      htmlFor="area"
                    >
                      المنطقة / الحي
                    </label>
                    <select
                      className="block w-full rounded-lg border-slate-300 bg-slate-50 p-3 text-slate-900 focus:border-primary focus:ring-primary sm:text-sm"
                      id="area"
                    >
                      <option>المعادي</option>
                      <option>مدينة نصر</option>
                      <option>مصر الجديدة</option>
                    </select>
                  </div>
                  {/* Detailed Address */}
                  <div className="col-span-1 md:col-span-2">
                    <label
                      className="block text-sm font-medium text-slate-700 mb-2"
                      htmlFor="address"
                    >
                      العنوان بالتفصيل
                    </label>
                    <input
                      className="block w-full rounded-lg border-slate-300 bg-slate-50 p-3 text-slate-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      id="address"
                      placeholder="شارع 9، أمام محطة المترو، عمارة 15"
                      type="text"
                    />
                  </div>
                  {/* Map Picker */}
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      تحديد الموقع على الخريطة
                    </label>
                    <div className="relative h-64 w-full overflow-hidden rounded-xl border border-slate-300 bg-slate-100 group cursor-pointer">
                      {/* Map Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-60 transition-opacity group-hover:opacity-40"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD__cusZbrrPTI7Iucf9xo8V4hcEIBxP-PA9ZDR1dAGwza3wmkvm4vq3GJW5Yms4C536FvcGO8CyhcICWMeqbgsmO27KgrOyQyAWjh_CefA7gvOi4rvdHAIIOtUrLS2XQrMkJ77N7ozGXh6JObQNc6LoxY8oMtKSKOn5P9otTzekC2s_anbOwUM2mK3byxI0LlKgoYE_CfJTWQ_KIyKQcmaGWuAIEPYGZyJlpd-b6pHXTfbUrZacnVaVzwtGsSp65rh2NRBdjwH3Zt4')",
                        }}
                      ></div>
                      {/* Map Action */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <button className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-900 shadow-lg ring-1 ring-slate-900/5 transition hover:scale-105 hover:bg-slate-50">
                          <span className="material-symbols-outlined text-primary">
                            add_location_alt
                          </span>
                          افتح الخريطة لتحديد الموقع بدقة
                        </button>
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-slate-500">
                      سيظهر موقعك للعملاء على الخريطة لتسهيل الوصول إليك.
                    </p>
                  </div>
                  {/* File Upload */}
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      المستندات المطلوبة
                    </label>
                    <div className="flex justify-center rounded-xl border-2 border-dashed border-slate-300 px-6 py-10 transition-colors hover:border-primary hover:bg-slate-50">
                      <div className="text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                          <span className="material-symbols-outlined text-3xl">
                            cloud_upload
                          </span>
                        </div>
                        <div className="mt-4 flex text-sm leading-6 text-slate-600 justify-center">
                          <label
                            className="relative cursor-pointer rounded-md bg-transparent font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-blue-700"
                            htmlFor="file-upload"
                          >
                            <span>اضغط للرفع</span>
                            <input
                              className="sr-only"
                              id="file-upload"
                              name="file-upload"
                              type="file"
                            />
                          </label>
                          <p className="pr-1">أو اسحب الصورة هنا</p>
                        </div>
                        <p className="text-xs leading-5 text-slate-500">
                          صورة رخصة مزاولة المهنة / السجل التجاري (JPG, PNG,
                          PDF)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* Footer Actions */}
            <div className="bg-slate-50 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
              <button
                className="w-full sm:w-auto rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                type="button"
              >
                السابق
              </button>
              <button
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-bold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                type="button"
              >
                إتمام التسجيل
                <span className="material-symbols-outlined text-lg rtl:rotate-180">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PharmacyRegistration;
