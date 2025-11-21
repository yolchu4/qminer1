
    const directionMap = { fa: 'rtl', tr: 'ltr', en: 'ltr' };
    const languageOrder = ['fa', 'tr', 'en'];
    const translations = {
      fa: {
        'nav.home': 'خانه',
        'nav.services': 'خدمات',
        'nav.about': 'درباره ما',
        'nav.insights': 'فرآیند ما',
        'nav.activities': 'فعالیت‌ها',
        'nav.faq': 'سؤالات',
        'nav.contact': 'تماس',
        'hero.titleLine1': 'اپلیکیشن هوش مصنوعی',
        'hero.titleLine2': 'دستیار مهندسین فرآیندهای معدنی و صنعتی',
        'hero.description': 'دستیار هوش مصنوعی در قالب اپلیکیشن موبایل یا سایت متصل به سرور، با دریافت پارامترهای فعلی خط تولید، سایر پارامترهای بهینه را به‌صورت آنلاین و هوشمند پیشنهاد می‌دهد.',
        'hero.primaryCta': 'مشاهده مدل هوش مصنوعی صنعت‌یار',
        'hero.secondaryCta': 'درخواست مشاوره',
        'metrics.experience.value': '۲۵+',
        'metrics.experience.label': 'Years',
        'metrics.experience.desc': 'سال سابقه در صنایع معدنی، شیمیایی و انرژی',
        'metrics.projects.value': '۴۰+',
        'metrics.projects.label': 'Projects',
        'metrics.projects.desc': 'پروژه تکمیل‌شده تحلیل داده و پیاده‌سازی هوش مصنوعی',
        'metrics.satisfaction.value': '۹۸٪',
        'metrics.satisfaction.label': 'Satisfaction',
        'metrics.satisfaction.desc': 'رضایت مشتریان از نتایج بهینه‌سازی خطوط تولید',
        'metrics.industries.value': '۶',
        'metrics.industries.label': 'Industries',
        'metrics.industries.desc': 'تنوع صنایع تحت پوشش: معدن، فولاد، شیمی، نفت و گاز، سیمان، آموزش',
        'benefits.title': 'دستیار هوشمند و مزایای <span class="ai-gradient">تحول‌آفرین</span>',
        'benefits.card1.title': 'یادداشت‌های روزانه و داده‌های آزمایشگاهی',
        'benefits.card1.desc': 'در عصر اطلاعات، داده‌های کنترل کیفی و یادداشت‌های روزانه (دما، فشار، غلظت، حجم و کامنت اپراتورها) به مثابه «خاک معدنی» ارزشمندی هستند که مادهٔ باارزش آن «اطلاعات» است.',
        'benefits.card2.title': 'استخراج اطلاعات با یادگیری عمیق',
        'benefits.card2.desc': 'با پیشرفت الگوریتم‌های هوش مصنوعی (Deep Learning)، امکان استخراج روابط پنهان بین پارامترهای وابسته و کشف الگوهای نهفته در داده‌ها فراهم شده است — حتی در مواردی که برای انسان غیرممکن به نظر می‌رسد.',
        'about.title': 'شرکت <span class="ai-gradient">آوادان</span> — پیشرو در هوش مصنوعی',
        'about.description': 'تیم ما مفتخر است که از جمله اولین گروه‌های پیشرو در کشور باشد که بهره‌گیری از به‌روزترین الگوریتم‌های یادگیری ماشین و هوش مصنوعی را فرا گرفته و در زمینه‌های زیر فعالیت می‌کند:',
        'about.list1': 'کنترل هوشمند و عملی فرآیندهای معدنی، شیمیایی و صنعتی',
        'about.list2': 'مدیریت بهینه خطوط تولید با استفاده از داده‌های تاریخی',
        'about.list3': 'آموزش، راه‌اندازی و ارائه خدمات هوش مصنوعی برای صنایع و ادارات و موسسات آموزشی',
        'services.title': 'محصولات و <span class="ai-gradient">خدمات</span>',
        'services.subtitle': 'طراحی و پیاده‌سازی راهکارهای هوشمند بر اساس نیازهای خاص هر خط تولید',
        'services.card1.title': 'دوره‌های آموزشی هوش مصنوعی',
        'services.card1.desc': 'برگزاری دوره‌های تخصصی یادگیری عمیق، شبکه‌های عصبی و کاربردهای صنعتی هوش مصنوعی',
        'services.card2.title': 'مدل دستیار هوش مصنوعی',
        'services.card2.desc': 'طراحی مدل‌های سفارشی‌سازی‌شده بر اساس آرشیو داده‌های آزمایشگاهی و کنترل کیفی هر خط تولید',
        'services.card3.title': 'سنسور اپتیکی هوشمند',
        'services.card3.desc': 'طراحی سنسور اپتیکی مبتنی بر هوش مصنوعی برای ثبت جابجایی در مقیاس میکرومتری',
        'services.card4.title': 'دستگاه تست مقاومت مواد',
        'services.card4.desc': 'ساخت دستگاه تست مقاومت بتن و فولاد با سنسور اپتیکی هوشمند در آزمایشگاه مقاومت مصالح',
        'services.card5.title': 'نرم‌افزار استخراج فاز لیزری',
        'services.card5.desc': 'بسته نرم‌افزاری برای استخراج فاز از الگوهای تداخلی لیزر به‌منظور تصویربرداری میکرونی و صنعتی',
        'insights.tagline': 'Insight Pipeline',
        'insights.title': 'چگونه داده خام را به تصمیم هوشمند تبدیل می‌کنیم',
        'insights.card1.title': 'اکتشاف داده و یکپارچه‌سازی',
        'insights.card1.desc': 'اتصال به سنسورها، SCADA و یادداشت‌های کیفی؛ پاک‌سازی و برچسب‌گذاری داده‌ها در یک دریاچه داده امن.',
        'insights.card1.point1': '• Data Lake امن',
        'insights.card1.point2': '• داشبورد سلامت داده',
        'insights.card2.title': 'ساخت مدل و شبیه‌سازی',
        'insights.card2.desc': 'طراحی مدل‌های یادگیری عمیق، شبیه‌سازی سناریوها و تنظیم هوشمند هیبریدی برای خطوط تولید متفاوت.',
        'insights.card2.point1': '• AutoML اختصاصی',
        'insights.card2.point2': '• تست پشت خط تولید',
        'insights.card3.title': 'استقرار و همراهی مستمر',
        'insights.card3.desc': 'استقرار دستیار هوشمند روی موبایل، وب یا اتاق کنترل به‌همراه پایش ۲۴/۷ و تقویم به‌روزرسانی مدل.',
        'insights.card3.point1': '• KPI Studio زنده',
        'insights.card3.point2': '• آپدیت دوره‌ای مدل',
        'activities.title': 'فعالیت‌ها و <span class="ai-gradient">تیم متخصص</span>',
        'activities.listTitle': 'بخشی از فعالیت‌های شرکت',
        'activities.item1': 'برگزاری دوره‌های آموزشی هوش مصنوعی و یادگیری عمیق ماشین',
        'activities.item2': 'طراحی مدل دستیار هوش مصنوعی مختص هر فرآیند تولیدی',
        'activities.item3': 'طراحی سنسور اپتیکی با دقت میکرومتری',
        'activities.item4': 'ساخت دستگاه تست مقاومت مواد با سنسور هوشمند',
        'activities.item5': 'طراحی نرم‌افزار استخراج فاز از الگوهای لیزری با روش یادگیری عمیق ماشین',
        'team.title': 'تیم تخصصی آوادان',
        'team.description': 'تیم هوش مصنوعی شرکت آوادان شامل فارغ‌التحصیلان و دانشجویان دکتری دانشگاه‌های <span class="font-semibold">تحصیلات تکمیلی علوم پایه زنجان</span> و <span class="font-semibold">تربيت مدرس تهران</span> است.',
        'team.point1': '✓ ۲۵ سال سابقه در پروژه‌های صنایع سرب و روی و پتروشیمی',
        'team.point2': '✓ ۲۰ سال سابقه در تولید و تدریس نرم‌افزارهای تخصصی مهندسی',
        'team.point3': '✓ ۷ سال تحقیق و توسعه در حوزه هوش مصنوعی و یادگیری عمیق ماشین',
        'team.quote': '<i class="fas fa-lightbulb text-yellow-500 ml-2"></i> انتقال «فوت کوزه‌گری» خط تولید به نسل آینده با الگوریتم‌های یادگیری عمیق',
        'cta.title': 'هوشمندسازی فرآیندهای صنعتی دیگر یک گزینه لوکس نیست!',
        'cta.lead': 'پیاده‌سازی جامع هوش مصنوعی — شامل تحلیل داده، دستیار هوشمند و بهینه‌سازی مصرف مواد اولیه و انرژی — مزایای تحول‌آفرینی به ارمغان می‌آورد.',
        'cta.sublead': 'سفر به سوی صنعت هوشمند با یک قدم کوچک و متمرکز شروع می‌شود. امروز با ما همراه شوید.',
        'cta.button': 'شروع همکاری',
        'faq.tagline': 'FAQ',
        'faq.title': 'سؤالات پرتکرار مشتریان',
        'faq.subtitle': 'با خیال راحت تصمیم بگیرید؛ جزئیات فنی و عملیاتی را شفاف توضیح داده‌ایم.',
        'faq.q1.question': 'شروع یک پروژه چقدر زمان می‌برد؟',
        'faq.q1.answer': 'پس از دریافت داده‌ها و اسناد، طی ۲ تا ۴ هفته گزارش اکتشافی و نقشه راه استقرار را ارائه می‌دهیم. اجرای فاز MVP حدود ۶ تا ۸ هفته طول می‌کشد.',
        'faq.q2.question': 'آیا بدون داده‌های کامل می‌توان پروژه را آغاز کرد؟',
        'faq.q2.answer': 'بله. تیم ما با طراحی سنسور اپتیکی، ابزارک یادداشت اپراتور و لایه هوشمند جمع‌آوری داده، ابتدا داده قابل اتکا ایجاد می‌کند و سپس مدل را آموزش می‌دهد.',
        'faq.q3.question': 'امنیت داده‌ها چگونه تضمین می‌شود؟',
        'faq.q3.answer': 'داده‌ها روی سرور اختصاصی داخل کشور یا زیرساخت مشتری نگهداری می‌شوند، رمزنگاری در حال انتقال و در Rest اعمال شده و قرارداد محرمانگی (NDA) امضا می‌گردد.',
        'contact.title': 'فرم درخواست مشاوره و همکاری',
        'contact.subtitle': 'لطفاً اطلاعات خود را وارد کنید تا با شما تماس بگیریم.',
        'contact.form.nameLabel': 'نام و نام خانوادگی',
        'contact.form.namePlaceholder': 'نام کامل خود را وارد کنید',
        'contact.form.emailLabel': 'ایمیل یا شماره تماس',
        'contact.form.emailPlaceholder': 'اطلاعات تماس را بنویسید',
        'contact.form.companyLabel': 'شرکت / سازمان',
        'contact.form.companyPlaceholder': 'نام مجموعه (اختیاری)',
        'contact.form.messageLabel': 'شرح نیاز یا سوال',
        'contact.form.messagePlaceholder': 'لطفاً نیاز خود را توضیح دهید...',
        'contact.form.submit': 'ارسال درخواست',
        'contact.info.title': 'راه‌های ارتباطی',
        'contact.info.address': 'زنجان، دانشگاه تحصیلات تکمیلی علوم پایه',
        'contact.info.phone': 'پس از ارسال فرم تماس می‌گیریم',
        'contact.info.direct': '۰۹۱۲۳۴۱۱۶۹۱ (پشتیبانی مستقیم)',
        'contact.info.email': 'info@avadan-co.ir',
        'contact.form.emailSubject': 'درخواست مشاوره جدید از وب‌سایت آوادان',
        'contact.form.emailBody': 'نام: {name}\nایمیل/تلفن: {contact}\nسازمان: {company}\nپیام:\n{message}',
        'contact.form.successMessage': '✅ درخواست شما با موفقیت ثبت شد، {name}!\n\nایمیل شامل جزئیات به asadipour.e@gmail.com ارسال شد.',
        'contact.form.defaultName': 'کاربر گرامی',
        'chatbot.welcome': 'سلام! 👋\n\nبه پشتیبانی شرکت آوادان خوش آمدید. من اینجا هستم تا به سوالات شما درباره خدمات هوش مصنوعی، دوره‌های آموزشی و محصولات ما پاسخ دهم.\n\nچطور می‌توانم کمکتان کنم؟',
        'chatbot.quickReplies.services': 'خدمات آوادان',
        'chatbot.quickReplies.courses': 'دوره‌های آموزشی',
        'chatbot.quickReplies.pricing': 'برآورد هزینه',
        'chatbot.quickReplies.contact': 'راه‌های تماس',
        'chatbot.responses.greeting': 'سلام! خوش آمدید. چطور می‌توانم کمکتان کنم؟',
        'chatbot.responses.services': 'شرکت آوادان خدمات زیر را ارائه می‌دهد:\n\n🤖 مدل دستیار هوش مصنوعی\n📚 دوره‌های آموزشی تخصصی\n🔬 سنسور اپتیکی هوشمند\n🏭 دستگاه تست مقاومت مواد\n💻 نرم‌افزار استخراج فاز لیزری\n\nبرای اطلاعات بیشتر می‌توانید بخش خدمات را ببینید یا فرم تماس را پر کنید.',
        'chatbot.responses.courses': 'ما دوره‌های تخصصی در زمینه‌های زیر برگزار می‌کنیم:\n\n• یادگیری عمیق و شبکه‌های عصبی\n• کنترل هوشمند فرآیندهای صنعتی\n• کاربردهای عملی هوش مصنوعی در صنعت\n\nبرای ثبت‌نام کافی است فرم تماس را ارسال کنید.',
        'chatbot.responses.pricing': 'قیمت خدمات بر اساس نیاز دقیق هر پروژه تعیین می‌شود. برای دریافت پیش‌فاکتور:\n\n1️⃣ فرم تماس سایت را تکمیل کنید\n2️⃣ یا ایمیل info@avadan-co.ir را ارسال کنید\n\nکارشناسان ما به‌سرعت با شما تماس می‌گیرند.',
        'chatbot.responses.contact': 'راه‌های ارتباط با ما:\n\n📧 ایمیل: info@avadan-co.ir\n📍 آدرس: زنجان، دانشگاه تحصیلات تکمیلی علوم پایه\n📱 پشتیبانی: ۰۹۱۲۳۴۱۱۶۹۱\n📝 فرم تماس: بخش تماس در همین صفحه',
        'chatbot.responses.about': 'شرکت علم و صنعت معدن آوادان پیشرو در خدمات هوش مصنوعی صنعتی است.\n\n✅ ۲۵ سال سابقه در صنایع معدنی و شیمیایی\n✅ ۲۰ سال تجربه نرم‌افزارهای تخصصی\n✅ ۷ سال تحقیق و توسعه در یادگیری عمیق\n\nتیم ما متشکل از نخبگان دانشگاهی کشور است.',
        'chatbot.responses.ai': 'مدل دستیار هوش مصنوعی ما:\n\n🤖 پارامترهای بهینه خط تولید را پیشنهاد می‌دهد\n📊 بر اساس داده‌های تاریخی و یادگیری عمیق کار می‌کند\n📱 روی موبایل، وب یا اتاق کنترل قابل دسترس است\n\nدمو: avadan-co.ir/qminer3/',
        'chatbot.responses.default': 'از پیام شما سپاسگزاریم. برای دریافت جزئیات درباره خدمات، دوره‌ها یا قیمت‌ها، فرم تماس را تکمیل کنید یا به info@avadan-co.ir ایمیل بزنید. تیم ما آماده پاسخگویی است. 😊',
        'footer.rights': '&copy; 1404 شرکت علم و صنعت معدن آوادان. کلیه حقوق محفوظ است.',
        'chatbot.toggleLabel': 'باز کردن چت',
        'chatbot.toggleSr': 'نمایش گفت‌وگو با تیم پشتیبانی',
        'chatbot.logoAlt': 'لوگوی آوادان',
        'chatbot.title': 'پشتیبانی آوادان',
        'chatbot.status': 'آنلاین',
        'chatbot.closeLabel': 'بستن چت',
        'chatbot.inputPlaceholder': 'پیام خود را بنویسید...',
        'chatbot.inputLabel': 'ورودی پیام',
        'chatbot.sendLabel': 'ارسال پیام'
      },
      en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.about': 'About',
        'nav.insights': 'Our Process',
        'nav.activities': 'Activities',
        'nav.faq': 'FAQ',
        'nav.contact': 'Contact',
        'hero.titleLine1': 'Industrial AI Application',
        'hero.titleLine2': 'Smart copilot for process & mining engineers',
        'hero.description': 'An AI assistant delivered via mobile app or secure web panel that ingests live production parameters and instantly recommends optimized set-points for quality, energy and throughput.',
        'hero.primaryCta': 'View the QMINER AI demo',
        'hero.secondaryCta': 'Request a consultation',
        'metrics.experience.value': '25+',
        'metrics.experience.label': 'Years',
        'metrics.experience.desc': 'Years of experience across mining, chemical and energy plants',
        'metrics.projects.value': '40+',
        'metrics.projects.label': 'Projects',
        'metrics.projects.desc': 'Completed analytics and AI implementation projects',
        'metrics.satisfaction.value': '98%',
        'metrics.satisfaction.label': 'Satisfaction',
        'metrics.satisfaction.desc': 'Client satisfaction with optimization results',
        'metrics.industries.value': '6',
        'metrics.industries.label': 'Industries',
        'metrics.industries.desc': 'Mining, steel, chemical, oil & gas, cement and education',
        'benefits.title': 'Smart assistant and <span class="ai-gradient">transformative</span> benefits',
        'benefits.card1.title': 'Daily logs & laboratory data',
        'benefits.card1.desc': 'Quality-control records and operator notes (temperature, pressure, density, volume and comments) are the “ore” whose refined output is actionable information.',
        'benefits.card2.title': 'Deep-learning powered insights',
        'benefits.card2.desc': 'Modern deep learning uncovers hidden, non-linear relations between process variables—surfacing patterns that are impossible to spot manually.',
        'about.title': '<span class="ai-gradient">AVADAN</span> — pioneers in industrial AI',
        'about.description': 'We are among the first national teams mastering state-of-the-art machine learning to serve mission-critical industrial operations:',
        'about.list1': 'Intelligent and executable control of mining, chemical and industrial processes',
        'about.list2': 'Optimized production management leveraging historical datasets',
        'about.list3': 'Training, deployment and AI services for enterprises and educational institutes',
        'services.title': 'Products & <span class="ai-gradient">Services</span>',
        'services.subtitle': 'Tailor-made intelligent solutions for every production line',
        'services.card1.title': 'Industrial AI training programs',
        'services.card1.desc': 'Specialized courses on deep learning, neural networks and real-world deployments',
        'services.card2.title': 'Custom AI copilot model',
        'services.card2.desc': 'Bespoke models trained on laboratory and QC archives for each process',
        'services.card3.title': 'Intelligent optical sensor',
        'services.card3.desc': 'AI-based optical sensor capable of micron-level displacement tracking',
        'services.card4.title': 'Material strength tester',
        'services.card4.desc': 'Smart instrumentation for concrete and steel strength testing labs',
        'services.card5.title': 'Laser phase extraction software',
        'services.card5.desc': 'Software package to derive phase data from laser interference patterns',
        'insights.tagline': 'Insight Pipeline',
        'insights.title': 'How we turn raw data into decisive intelligence',
        'insights.card1.title': 'Data discovery & unification',
        'insights.card1.desc': 'Connect to sensors, SCADA and operator notes; cleanse and label everything inside a secure data lake.',
        'insights.card1.point1': '• Secure data lake',
        'insights.card1.point2': '• Data health dashboard',
        'insights.card2.title': 'Modeling & simulation',
        'insights.card2.desc': 'Design deep-learning models, run scenario simulations and tune hybrid logic per production line.',
        'insights.card2.point1': '• Private AutoML',
        'insights.card2.point2': '• Behind-the-line testing',
        'insights.card3.title': 'Deployment & lifecycle care',
        'insights.card3.desc': 'Roll out the AI copilot on mobile, web or control rooms with 24/7 monitoring and scheduled model refresh.',
        'insights.card3.point1': '• Live KPI Studio',
        'insights.card3.point2': '• Periodic model updates',
        'activities.title': 'Activities & <span class="ai-gradient">expert team</span>',
        'activities.listTitle': 'Selected company activities',
        'activities.item1': 'Delivering AI and deep-learning training programs',
        'activities.item2': 'Designing bespoke AI copilots for every production process',
        'activities.item3': 'Engineering micron-precision optical sensors',
        'activities.item4': 'Building smart material strength testing devices',
        'activities.item5': 'Developing deep-learning software for laser phase extraction',
        'team.title': 'AVADAN expert team',
        'team.description': 'Our AI unit brings together PhD graduates and candidates from <span class="font-semibold">IASBS Zanjan</span> and <span class="font-semibold">Tarbiat Modares University</span>.',
        'team.point1': '✓ 25 years in lead-zinc and petrochemical projects',
        'team.point2': '✓ 20 years of engineering software development & teaching',
        'team.point3': '✓ 7 years of AI and deep-learning R&D',
        'team.quote': '<i class="fas fa-lightbulb text-yellow-500 ml-2"></i> Capturing production “tribal knowledge” for the next generation via deep learning',
        'cta.title': 'Industrial intelligence is no longer a luxury.',
        'cta.lead': 'Unified AI—analytics, smart assistants and resource optimization—delivers measurable, transformative value.',
        'cta.sublead': 'Your journey to smart industry begins with a focused pilot. Start it today.',
        'cta.button': 'Start collaborating',
        'faq.tagline': 'FAQ',
        'faq.title': 'Frequently asked questions',
        'faq.subtitle': 'We keep the process transparent so you can decide with confidence.',
        'faq.q1.question': 'How long does it take to launch a project?',
        'faq.q1.answer': 'Within 2–4 weeks after receiving your data we deliver an exploratory report and rollout roadmap. The MVP phase typically takes 6–8 weeks.',
        'faq.q2.question': 'Can we start without full historical data?',
        'faq.q2.answer': 'Yes. We deploy optical sensors, operator logging tools and smart data capture layers to build a reliable dataset before training.',
        'faq.q3.question': 'How do you guarantee data security?',
        'faq.q3.answer': 'Data stays on dedicated in-country servers or your infrastructure, encrypted in transit and at rest, backed by NDA agreements.',
        'contact.title': 'Consultation & partnership form',
        'contact.subtitle': 'Share your details and we will reach out shortly.',
        'contact.form.nameLabel': 'Full name',
        'contact.form.namePlaceholder': 'Enter your full name',
        'contact.form.emailLabel': 'Email or phone',
        'contact.form.emailPlaceholder': 'Add your preferred contact info',
        'contact.form.companyLabel': 'Company / organization',
        'contact.form.companyPlaceholder': 'Company name (optional)',
        'contact.form.messageLabel': 'Project need or question',
        'contact.form.messagePlaceholder': 'Describe your challenge or expectations…',
        'contact.form.submit': 'Send request',
        'contact.info.title': 'Contact channels',
        'contact.info.address': 'Zanjan, IASBS campus',
        'contact.info.phone': 'We call you after receiving the form',
        'contact.info.direct': '+98 912 341 1691 (direct support)',
        'contact.info.email': 'info@avadan-co.ir',
        'contact.form.emailSubject': 'New consulting inquiry from AVADAN website',
        'contact.form.emailBody': 'Name: {name}\nEmail/Phone: {contact}\nCompany: {company}\nMessage:\n{message}',
        'contact.form.successMessage': '✅ Thank you {name}! An email has been prepared for asadipour.e@gmail.com.',
        'contact.form.defaultName': 'valued partner',
        'chatbot.welcome': 'Hi! 👋\n\nWelcome to AVADAN support. I can help you with our AI services, training tracks and smart products.\n\nHow may I assist you today?',
        'chatbot.quickReplies.services': 'Our services',
        'chatbot.quickReplies.courses': 'Training tracks',
        'chatbot.quickReplies.pricing': 'Pricing',
        'chatbot.quickReplies.contact': 'Contact info',
        'chatbot.responses.greeting': 'Hello! Great to have you here. How can I help?',
        'chatbot.responses.services': 'AVADAN provides:\n\n🤖 Custom AI copilot model\n📚 Industrial AI training programs\n🔬 Intelligent optical sensor\n🏭 Material strength tester\n💻 Laser phase extraction software\n\nCheck the Services section or send the contact form for more details.',
        'chatbot.responses.courses': 'We run specialized programs covering:\n\n• Deep learning & neural networks\n• Smart control of industrial processes\n• Practical AI deployment in production lines\n\nSend the contact form to receive the syllabus and schedule.',
        'chatbot.responses.pricing': 'Pricing is tailored to each project. To receive a detailed quotation:\n\n1️⃣ Submit the contact form\n2️⃣ Or email info@avadan-co.ir\n\nOur consultants will follow up shortly.',
        'chatbot.responses.contact': 'Ways to reach us:\n\n📧 Email: info@avadan-co.ir\n📍 Address: IASBS campus, Zanjan, Iran\n📱 Direct support: +98 912 341 1691\n📝 Contact form: available at the bottom of this page',
        'chatbot.responses.about': 'AVADAN is a pioneer in industrial AI services.\n\n✅ 25+ years across mining & chemical plants\n✅ 20+ years of engineering software delivery\n✅ 7+ years of deep-learning R&D\n\nOur team unites PhD talent from leading universities.',
        'chatbot.responses.ai': 'Our AI assistant model:\n\n🤖 Suggests optimal process parameters in real time\n📊 Learns from your historical laboratory and QC data\n📱 Runs on mobile, web or directly in the control room\n\nDemo: avadan-co.ir/qminer3/',
        'chatbot.responses.default': 'Thanks for reaching out! For precise details on services, training or pricing, please submit the contact form or email info@avadan-co.ir. Our team will reply quickly. 😊',
        'footer.rights': '&copy; 2025 AVADAN Industrial AI. All rights reserved.',
        'chatbot.toggleLabel': 'Open chat',
        'chatbot.toggleSr': 'Open live chat with support',
        'chatbot.logoAlt': 'AVADAN logo',
        'chatbot.title': 'AVADAN Support',
        'chatbot.status': 'Online',
        'chatbot.closeLabel': 'Close chat',
        'chatbot.inputPlaceholder': 'Write your message…',
        'chatbot.inputLabel': 'Chat message input',
        'chatbot.sendLabel': 'Send message'
      },
      tr: {
        'nav.home': 'Ana sayfa',
        'nav.services': 'Hizmetler',
        'nav.about': 'Hakkımızda',
        'nav.insights': 'Süreç',
        'nav.activities': 'Faaliyetler',
        'nav.faq': 'SSS',
        'nav.contact': 'İletişim',
        'hero.titleLine1': 'Endüstriyel Yapay Zekâ Uygulaması',
        'hero.titleLine2': 'Maden ve proses mühendisleri için akıllı asistan',
        'hero.description': 'Canlı üretim parametrelerini alan mobil veya web tabanlı yapay zekâ yardımcısı; kalite, enerji ve verimlilik için en iyi set değerlerini anlık önerir.',
        'hero.primaryCta': 'QMINER AI demosunu incele',
        'hero.secondaryCta': 'Danışmanlık iste',
        'metrics.experience.value': '25+',
        'metrics.experience.label': 'Yıl',
        'metrics.experience.desc': 'Madencilik, kimya ve enerji tesislerinde deneyim',
        'metrics.projects.value': '40+',
        'metrics.projects.label': 'Proje',
        'metrics.projects.desc': 'Tamamlanan veri analitiği ve yapay zekâ projeleri',
        'metrics.satisfaction.value': '%98',
        'metrics.satisfaction.label': 'Memnuniyet',
        'metrics.satisfaction.desc': 'Optimizasyon sonuçlarından memnuniyet',
        'metrics.industries.value': '6',
        'metrics.industries.label': 'Sektör',
        'metrics.industries.desc': 'Madencilik, çelik, kimya, petrol-gaz, çimento ve eğitim',
        'benefits.title': 'Akıllı asistan ve <span class="ai-gradient">dönüştürücü</span> faydalar',
        'benefits.card1.title': 'Günlük kayıtlar ve laboratuvar verisi',
        'benefits.card1.desc': 'Kalite kayıtları ve operatör notları (sıcaklık, basınç, yoğunluk vb.) değerli ham madendir; rafine çıktısı ise bilgidir.',
        'benefits.card2.title': 'Derin öğrenme ile bilgi çıkarımı',
        'benefits.card2.desc': 'Modern derin öğrenme, süreç değişkenleri arasındaki gizli ilişkileri bulur ve insan gözünün kaçırdığı kalıpları ortaya çıkarır.',
        'about.title': '<span class="ai-gradient">AVADAN</span> — endüstriyel yapay zekâ öncüsü',
        'about.description': 'Ülkemizde en güncel makine öğrenmesi algoritmalarını endüstriye uygulayan ilk ekiplerden biriyiz:',
        'about.list1': 'Madencilik, kimya ve endüstriyel süreçlerin akıllı kontrolü',
        'about.list2': 'Geçmiş verilerle üretim hatlarının optimize edilmesi',
        'about.list3': 'Kurumsal ve eğitim kurumlarına yapay zekâ eğitimi ve hizmeti',
        'services.title': 'Ürün ve <span class="ai-gradient">Hizmetler</span>',
        'services.subtitle': 'Her üretim hattı için kişiselleştirilmiş akıllı çözümler',
        'services.card1.title': 'Yapay zekâ eğitim programları',
        'services.card1.desc': 'Derin öğrenme, sinir ağları ve endüstriyel uygulamalar için uzman eğitimler',
        'services.card2.title': 'Özel AI asistan modeli',
        'services.card2.desc': 'Her süreç için laboratuvar ve KG arşivleriyle eğitilen modeller',
        'services.card3.title': 'Akıllı optik sensör',
        'services.card3.desc': 'Mikron düzeyinde hareket ölçen yapay zekâ tabanlı sensör',
        'services.card4.title': 'Malzeme dayanım test cihazı',
        'services.card4.desc': 'Beton ve çelik laboratuvarları için akıllı test sistemi',
        'services.card5.title': 'Lazer faz çıkarım yazılımı',
        'services.card5.desc': 'Lazer girişim desenlerinden faz bilgisi çıkaran paket',
        'insights.tagline': 'Insight Pipeline',
        'insights.title': 'Ham veriyi akıllı kararlara dönüştürme yolumuz',
        'insights.card1.title': 'Veri keşfi ve bütünleştirme',
        'insights.card1.desc': 'Sensörler, SCADA ve operatör notlarına bağlanır; veriyi güvenli gölde temizleyip etiketleriz.',
        'insights.card1.point1': '• Güvenli veri gölü',
        'insights.card1.point2': '• Veri sağlığı paneli',
        'insights.card2.title': 'Modelleme ve simülasyon',
        'insights.card2.desc': 'Derin öğrenme modelleri tasarlar, senaryo simülasyonları ve hibrit ayarlamalar yaparız.',
        'insights.card2.point1': '• Özel AutoML',
        'insights.card2.point2': '• Hat arkasında test',
        'insights.card3.title': 'Kurulum ve yaşam döngüsü',
        'insights.card3.desc': 'Mobil, web veya kontrol odasında yapay zekâ asistanı; 7/24 izleme ve düzenli model güncellemesi.',
        'insights.card3.point1': '• Canlı KPI Studio',
        'insights.card3.point2': '• Periyodik model güncellemesi',
        'activities.title': 'Faaliyetler ve <span class="ai-gradient">uzman ekip</span>',
        'activities.listTitle': 'Şirket faaliyetlerinden seçmeler',
        'activities.item1': 'Yapay zekâ ve derin öğrenme eğitimleri',
        'activities.item2': 'Her üretim sürecine özel AI asistani tasarımı',
        'activities.item3': 'Mikron hassasiyetli optik sensör tasarımı',
        'activities.item4': 'Akıllı malzeme dayanım cihazları geliştirme',
        'activities.item5': 'Lazer faz çıkarımı için derin öğrenme yazılımı',
        'team.title': 'AVADAN uzman ekibi',
        'team.description': 'Ekibimiz <span class="font-semibold">IASBS Zencan</span> ve <span class="font-semibold">Tarbiat Modares Üniversitesi</span> doktora mezun ve öğrencilerinden oluşur.',
        'team.point1': '✓ Kurşun-çinko ve petrokimya projelerinde 25 yıl',
        'team.point2': '✓ Mühendislik yazılımları geliştirme ve eğitiminde 20 yıl',
        'team.point3': '✓ Yapay zekâ Ar-Ge’sinde 7 yıl',
        'team.quote': '<i class="fas fa-lightbulb text-yellow-500 ml-2"></i> Üretim “ustalık sırlarını” derin öğrenme ile yeni nesle aktarıyoruz',
        'cta.title': 'Endüstriyel zekâ artık lüks değil.',
        'cta.lead': 'Veri analizi, akıllı asistan ve kaynak optimizasyonunu bir araya getirerek somut fayda sağlıyoruz.',
        'cta.sublead': 'Akıllı sanayi yolculuğu odaklı bir pilotla başlar; bugün başlayın.',
        'cta.button': 'Birlikte başlayalım',
        'faq.tagline': 'SSS',
        'faq.title': 'Sıkça sorulan sorular',
        'faq.subtitle': 'Tüm süreci şeffaf paylaşıyoruz, karar vermek kolaylaşsın.',
        'faq.q1.question': 'Bir projenin başlaması ne kadar sürer?',
        'faq.q1.answer': 'Verilerinizi aldıktan 2–4 hafta içinde keşif raporu ve yol haritası sunarız. MVP fazı genelde 6–8 hafta sürer.',
        'faq.q2.question': 'Yeterli veri olmadan başlayabilir miyiz?',
        'faq.q2.answer': 'Evet. Optik sensörler, operatör not araçları ve akıllı veri katmanı kurarak güvenilir veriyi oluşturur, sonra modeli eğitiriz.',
        'faq.q3.question': 'Veri güvenliği nasıl sağlanıyor?',
        'faq.q3.answer': 'Veriler ülke içindeki sunucularda veya sizin altyapınızda, taşınırken ve depoda şifrelenmiş halde tutulur; gizlilik sözleşmeleri imzalanır.',
        'contact.title': 'Danışmanlık ve işbirliği formu',
        'contact.subtitle': 'Bilgilerinizi paylaşın, kısa sürede dönüş yapalım.',
        'contact.form.nameLabel': 'Ad Soyad',
        'contact.form.namePlaceholder': 'Adınızı ve soyadınızı yazın',
        'contact.form.emailLabel': 'E-posta veya telefon',
        'contact.form.emailPlaceholder': 'Tercih ettiğiniz iletişim bilgisini girin',
        'contact.form.companyLabel': 'Şirket / kurum',
        'contact.form.companyPlaceholder': 'Kurum adı (opsiyonel)',
        'contact.form.messageLabel': 'İhtiyaç veya soru',
        'contact.form.messagePlaceholder': 'Beklentilerinizi kısaca anlatın…',
        'contact.form.submit': 'Gönder',
        'contact.info.title': 'İletişim kanalları',
        'contact.info.address': 'Zencan, IASBS kampüsü',
        'contact.info.phone': 'Formu aldıktan sonra sizi arıyoruz',
        'contact.info.direct': '+98 912 341 1691 (doğrudan destek)',
        'contact.info.email': 'info@avadan-co.ir',
        'contact.form.emailSubject': 'AVADAN sitesinden yeni danışmanlık isteği',
        'contact.form.emailBody': 'Ad: {name}\nE-posta/Tel: {contact}\nKurum: {company}\nMesaj:\n{message}',
        'contact.form.successMessage': '✅ Teşekkürler {name}! asadipour.e@gmail.com adresine e-posta hazırlandı.',
        'contact.form.defaultName': 'değerli iş ortağımız',
        'chatbot.welcome': 'Merhaba! 👋\n\nAVADAN destek hattına hoş geldiniz. Yapay zekâ hizmetlerimiz, eğitimlerimiz ve ürünlerimiz hakkında yardımcı olabilirim.\n\nSize nasıl destek olabilirim?',
        'chatbot.quickReplies.services': 'Hizmetler',
        'chatbot.quickReplies.courses': 'Eğitimler',
        'chatbot.quickReplies.pricing': 'Fiyatlandırma',
        'chatbot.quickReplies.contact': 'İletişim bilgisi',
        'chatbot.responses.greeting': 'Merhaba! Hoş geldiniz, nasıl yardımcı olabilirim?',
        'chatbot.responses.services': 'AVADAN şu çözümleri sunar:\n\n🤖 Özel AI asistan modeli\n📚 Endüstriyel yapay zekâ eğitimleri\n🔬 Akıllı optik sensör\n🏭 Malzeme dayanım test cihazı\n💻 Lazer faz çıkarım yazılımı\n\nDetaylar için Hizmetler bölümüne bakabilir veya formu doldurabilirsiniz.',
        'chatbot.responses.courses': 'Eğitim başlıklarımız:\n\n• Derin öğrenme ve sinir ağları\n• Endüstriyel süreçlerin akıllı kontrolü\n• Üretim hatlarında yapay zekâ uygulamaları\n\nProgram takvimini almak için iletişim formunu gönderin.',
        'chatbot.responses.pricing': 'Ücretlendirme proje ihtiyaçlarına göre yapılır. Teklif almak için:\n\n1️⃣ İletişim formunu doldurun\n2️⃣ Veya info@avadan-co.ir adresine yazın\n\nDanışmanlarımız kısa sürede dönüş yapacaktır.',
        'chatbot.responses.contact': 'Bize ulaşmanın yolları:\n\n📧 E-posta: info@avadan-co.ir\n📍 Adres: IASBS kampüsü, Zencan\n📱 Doğrudan destek: +98 912 341 1691\n📝 İletişim formu: sayfanın alt bölümünde',
        'chatbot.responses.about': 'AVADAN, endüstriyel yapay zekâ hizmetlerinde öncü bir kuruluştur.\n\n✅ Madencilik ve kimya projelerinde 25+ yıl\n✅ Mühendislik yazılımlarında 20+ yıl\n✅ Derin öğrenme Ar-Ge’sinde 7+ yıl\n\nEkibimiz seçkin üniversite mezunlarından oluşur.',
        'chatbot.responses.ai': 'Yapay zekâ asistan modelimiz:\n\n🤖 Üretim parametreleri için en iyi değerleri önerir\n📊 Tarihsel veri ve derin öğrenmeden beslenir\n📱 Mobil, web veya kontrol odasında çalışır\n\nDemo: avadan-co.ir/qminer3/',
        'chatbot.responses.default': 'Mesajınız için teşekkürler. Hizmetlerimiz, eğitimlerimiz veya fiyatlandırma hakkında ayrıntılı bilgi almak isterseniz iletişim formunu doldurun ya da info@avadan-co.ir adresine yazın. Ekibimiz kısa sürede dönecektir. 😊',
        'footer.rights': '&copy; 2025 AVADAN Endüstriyel Yapay Zekâ. Tüm hakları saklıdır.',
        'chatbot.toggleLabel': 'Sohbeti aç',
        'chatbot.toggleSr': 'Destek sohbetini aç',
        'chatbot.logoAlt': 'AVADAN logosu',
        'chatbot.title': 'AVADAN Destek',
        'chatbot.status': 'Çevrimiçi',
        'chatbot.closeLabel': 'Sohbeti kapat',
        'chatbot.inputPlaceholder': 'Mesajınızı yazın…',
        'chatbot.inputLabel': 'Sohbet mesajı girişi',
        'chatbot.sendLabel': 'Gönder'
      }
    };

    window.translations = translations;

    const getTranslation = (lang, key) => translations[lang]?.[key] ?? translations.fa[key] ?? '';
    window.getTranslation = getTranslation;

    const formatString = (template, variables = {}) =>
      template.replace(/\{(\w+)\}/g, (_, key) => (variables[key] ?? ''));
    window.formatString = formatString;

    let currentLanguage = localStorage.getItem('siteLang') || 'fa';
    window.currentLanguage = currentLanguage;

    const applyTranslations = (lang) => {
      currentLanguage = translations[lang] ? lang : 'fa';
      window.currentLanguage = currentLanguage;
      localStorage.setItem('siteLang', currentLanguage);
      const dir = directionMap[currentLanguage] || 'rtl';
      document.documentElement.lang = currentLanguage;
      document.documentElement.dir = dir;
      document.body.classList.toggle('rtl', dir === 'rtl');

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const value = getTranslation(currentLanguage, key);
        if (value) el.innerHTML = value;
      });

      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        const value = getTranslation(currentLanguage, key);
        if (value) el.setAttribute('placeholder', value);
      });

      document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
        const key = el.dataset.i18nAriaLabel;
        const value = getTranslation(currentLanguage, key);
        if (value) el.setAttribute('aria-label', value);
      });

      document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.dataset.i18nAlt;
        const value = getTranslation(currentLanguage, key);
        if (value) el.setAttribute('alt', value);
      });

      document.querySelectorAll('[data-lang-switch]').forEach(btn => {
        const isActive = btn.dataset.langSwitch === currentLanguage;
        btn.classList.toggle('bg-cyan-500', isActive);
        btn.classList.toggle('text-white', isActive);
        btn.classList.toggle('shadow-lg', isActive);
        btn.classList.toggle('bg-cyan-500/10', !isActive);
        btn.classList.toggle('text-white/80', !isActive);
        btn.classList.toggle('shadow-inner', !isActive);
      });

      const mobileCycleBtn = document.getElementById('mobile-lang-cycle');
      if (mobileCycleBtn) {
        mobileCycleBtn.textContent = currentLanguage.toUpperCase();
      }

      document.dispatchEvent(new CustomEvent('languagechange', {
        detail: { lang: currentLanguage }
      }));
    };
    window.applyTranslations = applyTranslations;

    document.addEventListener('DOMContentLoaded', () => {
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      const hamburger = mobileMenuButton?.querySelector('.hamburger');
      const mobileLinks = mobileMenu?.querySelectorAll('a') || [];

      const setMenuState = (shouldOpen) => {
        if (!mobileMenu || !mobileMenuButton) return;
        mobileMenu.classList.toggle('hidden', !shouldOpen);
        hamburger?.classList.toggle('active', shouldOpen);
        mobileMenuButton.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
        mobileMenu.setAttribute('aria-hidden', shouldOpen ? 'false' : 'true');
      };

      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
          const shouldOpen = mobileMenu.classList.contains('hidden');
          setMenuState(shouldOpen);
        });

        mobileLinks.forEach(link => {
          link.addEventListener('click', () => setMenuState(false));
        });

        window.addEventListener('resize', () => {
          if (window.innerWidth >= 768) {
            setMenuState(false);
          }
        });

        setMenuState(false);
      }

      document.querySelectorAll('[data-lang-switch]').forEach(btn => {
        btn.addEventListener('click', () => applyTranslations(btn.dataset.langSwitch));
      });

      const mobileLangCycle = document.getElementById('mobile-lang-cycle');
      if (mobileLangCycle) {
        mobileLangCycle.addEventListener('click', () => {
          const index = languageOrder.indexOf(currentLanguage);
          const nextLang = languageOrder[(index + 1) % languageOrder.length];
          applyTranslations(nextLang);
        });
      }

      applyTranslations(currentLanguage);

      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const name = document.getElementById('name').value.trim();
          const emailOrPhone = document.getElementById('email').value.trim();
          const company = document.getElementById('company').value.trim();
          const message = document.getElementById('message').value.trim();

          const subject = encodeURIComponent(getTranslation(currentLanguage, 'contact.form.emailSubject'));
          const bodyTemplate = getTranslation(currentLanguage, 'contact.form.emailBody');
          const body = encodeURIComponent(formatString(bodyTemplate, {
            name: name || '---',
            contact: emailOrPhone || '---',
            company: company || '---',
            message: message || '---'
          }));

          window.location.href = `mailto:asadipour.e@gmail.com?subject=${subject}&body=${body}`;

          const successTemplate = getTranslation(currentLanguage, 'contact.form.successMessage');
          const fallbackName = getTranslation(currentLanguage, 'contact.form.defaultName');
          alert(formatString(successTemplate, { name: name || fallbackName }));
          this.reset();
        });
      }
    });