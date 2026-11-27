import logo from '../assets/logo.png'


export default function Footer() {
  return (
    <footer className="w-full bg-white border-gray-100 shadow-xs border font-sans text-gray-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-14 pt-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <img src={logo} alt="Cry-Baby" className="mb-4 h-20 w-[72px] object-contain lg:ml-9"/>
          <p className="mb-7 text-[17px] text-gray-600 dark:text-slate-300">
            SN topup, the best fastest topup platform 🚀
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[17px] text-gray-600 dark:text-slate-300">
            <span className="inline-flex items-center gap-2.5">
              <i className="h-2.5 w-2.5 rounded-full bg-green-500" />
              24/7 Customer Support
            </span>
            <span className="inline-flex items-center gap-2.5">
              <i className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              Instant Delivery
            </span>
          </div>
        </div>
        </div>

    </footer>
  );
}