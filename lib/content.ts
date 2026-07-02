export type Locale = "en" | "ru";

export type CounterStat = {
  value: number;
  suffix?: string;
  label: string;
};

export type AchievementItem = {
  title: string;
  detail: string;
};

export const locales: Locale[] = ["en", "ru"];

export const tickerText =
  "WORLD CHAMPION · ASIAN CHAMPION · PURPLE BELT · GRAPPLING COACH · WRESTLING COACH · INTERNATIONAL COMPETITOR";

export const copy = {
  en: {
    nav: {
      profile: "Profile",
      achievements: "Achievements",
      coaching: "Coaching",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Professional Grappling & Wrestling Coach",
      titleTop: "IMAM",
      titleBottom: "GETSIEV",
      status: "Purple Belt · World Champion · Asian Champion",
      discipline: "GRAPPLING / WRESTLING / BJJ",
      location: "Based in Sharjah, UAE",
      primaryCta: "View Coaching Profile",
      secondaryCta: "Contact Imam"
    },
    profile: {
      label: "Profile",
      title: "Built through discipline.",
      body:
        "Imam Getsiev is a professional grappling, wrestling and Brazilian Jiu-Jitsu athlete and coach based in Sharjah, UAE. His combat sports path began with freestyle wrestling in the Chechen Republic at age 17. After moving to the UAE in 2021, he developed in BJJ and grappling, returning to full international competition in 2023 while building his coaching career.",
      facts: [
        { value: "Sharjah", label: "Based in UAE" },
        { value: "3", label: "Years of coaching experience" },
        { value: "4", label: "Languages" },
        { value: "85 KG", label: "Competition division" }
      ]
    },
    stats: {
      label: "Numbers",
      title: "A competitive profile measured in medals, discipline and coaching range.",
      items: [
        { value: 17, label: "Official Medals" },
        { value: 14, label: "Gold Medals" },
        { value: 3, label: "Bronze Medals" },
        { value: 3, label: "Years Coaching Experience" },
        { value: 4, label: "Languages" },
        { value: 85, suffix: " KG", label: "Main Weight Division" }
      ] satisfies CounterStat[]
    },
    journey: {
      label: "Journey",
      title: "From wrestling roots to the international mat.",
      clubsTitle: "Training and club environments",
      clubs: [
        "Sharjah Sports Club",
        "Shabab Al Ahli Club",
        "Buka Gym",
        "Sharjah Self Defense Sports Club"
      ],
      items: [
        {
          year: "Age 17",
          title: "Freestyle wrestling foundation",
          text: "Started freestyle wrestling in the Chechen Republic and built the base for pressure, balance and mat control."
        },
        {
          year: "2021",
          title: "UAE chapter begins",
          text: "Moved to the UAE and began focused training in Brazilian Jiu-Jitsu and grappling."
        },
        {
          year: "2023",
          title: "Competitive return",
          text: "Returned to full competitive training with a sharper international schedule."
        },
        {
          year: "2023-present",
          title: "International stage and coaching",
          text: "Competes internationally while developing athletes through structured coaching work."
        },
        {
          year: "2026",
          title: "Purple Belt in Brazilian Jiu-Jitsu",
          text: "Earned Purple Belt status in BJJ, marking technical growth and continued progression."
        }
      ]
    },
    achievements: {
      label: "Achievements",
      title: "Proven on the world stage.",
      lead:
        "The record is built across world, Asian and UAE championship environments, with Imam continuing to compete while coaching athletes.",
      world: "World Champion",
      asian: "Asian Champion",
      belt: "Super Fight Champion Belt Holder",
      goldTitle: "Gold medals and titles",
      bronzeTitle: "Bronze medals",
      gold: [
        "ACBJJ World Championship",
        "AJP World Championship",
        "AJP Asian Championship",
        "AJP Grand Prix Abu Dhabi",
        "AJP Grappling Championship",
        "AJP East Coast Championship",
        "AJP Abu Dhabi Championship",
        "UAEJJF Sheikh Zayed Championship - Two-Time Champion",
        "Fujairah Grappling Championship",
        "Winner of Two Professional Super Fights",
        "Super Fight Championship Belt Holder",
        "Winner of multiple international tournaments"
      ].map((title) => ({
        title,
        detail: "Gold-level result from Imam Getsiev's official athletic profile."
      })) satisfies AchievementItem[],
      bronze: [
        {
          title: "AGP Grappling World Championship - 2025",
          detail: "Bronze medal result on the world grappling stage."
        },
        {
          title: "AJP Asian Championship - 2023",
          detail: "Bronze medal result in Asian championship competition."
        },
        {
          title: "AJP Grappling Championship - 2023",
          detail: "Bronze medal result in AJP grappling competition."
        }
      ] satisfies AchievementItem[]
    },
    belt: {
      label: "Brazilian Jiu-Jitsu",
      title: "PURPLE BELT",
      subtitle: "Brazilian Jiu-Jitsu · Awarded January 18, 2026",
      awardedBy: "Awarded by",
      professors: ["Professor Inacio - Black Belt", "Coach Diyar - Black Belt"]
    },
    coaching: {
      label: "Coaching",
      title: "Coaching athletes beyond technique.",
      body:
        "Imam spent three years coaching at Al Qasimia University in Sharjah, leading group and private sessions, preparing athletes for competition and working with students from many nationalities. His sessions are built around discipline, respect, technical growth and mental confidence.",
      directions: [
        "Grappling",
        "No-Gi Grappling",
        "Wrestling",
        "Wrestling Fundamentals",
        "Beginner Classes",
        "Adult Classes",
        "Private Lessons",
        "Competition Preparation"
      ],
      principles: [
        "Discipline",
        "Respect",
        "Individual Approach",
        "Technical Growth",
        "Competition Mindset"
      ]
    },
    international: {
      label: "International profile",
      title: "Built for international academies.",
      body:
        "Imam has coached athletes from CIS countries, Arab countries, Africa, Asia and other regions. His multilingual communication allows him to work confidently in international sports environments.",
      languages: ["Russian", "Arabic", "English", "Chechen - Native"],
      educationTitle: "Education",
      education: "Bachelor's Degree in Sharia",
      university: "Al Qasimia University · Sharjah, UAE"
    },
    philosophy: {
      quote: "A coach must be an example before he becomes a teacher.",
      body:
        "A real coach keeps developing, lives with discipline and character, and helps each athlete gain more than technique: confidence, respect and a competitive mindset."
    },
    opportunity: {
      label: "Opportunities",
      title: "Ready to build champions with the right academy.",
      body:
        "Imam is currently open to long-term coaching opportunities in the UAE and abroad. He is ready to lead group sessions, provide private coaching, prepare athletes for competitions, develop new programs and represent an academy at international championships.",
      list: [
        "Group Training",
        "Private Coaching",
        "Competition Preparation",
        "New Program Development",
        "International Representation",
        "Long-Term Club Partnership"
      ],
      contact: "Contact Imam",
      instagram: "Instagram Profile"
    },
    contact: {
      title: "Imam Getsiev",
      subtitle: "Professional Grappling & Wrestling Coach",
      location: "Sharjah, United Arab Emirates",
      phoneLabel: "Phone",
      phone: "+971 50 876 13 19",
      instagramLabel: "Instagram",
      instagram: "@_imam_74",
      cta: "Start a conversation",
      desktopHint: "Contact details are ready for desktop outreach."
    },
    footer: {
      line: "© 2026 Imam Getsiev. Professional Grappling & Wrestling Coach.",
      availability: "Sharjah, UAE · Available for international opportunities"
    }
  },
  ru: {
    nav: {
      profile: "Профиль",
      achievements: "Достижения",
      coaching: "Тренировки",
      contact: "Контакты"
    },
    hero: {
      eyebrow: "Профессиональный тренер по Grappling и Wrestling",
      titleTop: "IMAM",
      titleBottom: "GETSIEV",
      status: "Purple Belt · Чемпион мира · Чемпион Азии",
      discipline: "GRAPPLING / WRESTLING / BJJ",
      location: "Sharjah, UAE",
      primaryCta: "Профиль тренера",
      secondaryCta: "Связаться"
    },
    profile: {
      label: "Профиль",
      title: "Built through discipline.",
      body:
        "Имам Гециев - профессиональный спортсмен и тренер по Grappling, Wrestling и Brazilian Jiu-Jitsu, живущий в Sharjah, UAE. Его путь в единоборствах начался с вольной борьбы в Чеченской Республике в 17 лет. После переезда в ОАЭ в 2021 году он развивался в BJJ и Grappling, а с 2023 года регулярно выступает на международных соревнованиях и совмещает карьеру спортсмена с тренерской работой.",
      facts: [
        { value: "Sharjah", label: "База в UAE" },
        { value: "3", label: "Года тренерского опыта" },
        { value: "4", label: "Языка" },
        { value: "85 KG", label: "Весовая категория" }
      ]
    },
    stats: {
      label: "Цифры",
      title: "Спортивный профиль, подтвержденный медалями, дисциплиной и тренерской практикой.",
      items: [
        { value: 17, label: "Официальных медалей" },
        { value: 14, label: "Золотых медалей" },
        { value: 3, label: "Бронзовых медали" },
        { value: 3, label: "Года тренерского опыта" },
        { value: 4, label: "Языка" },
        { value: 85, suffix: " KG", label: "Основная весовая" }
      ] satisfies CounterStat[]
    },
    journey: {
      label: "Путь",
      title: "От борцовской базы к международному ковру.",
      clubsTitle: "Клубы и тренировочная среда",
      clubs: [
        "Sharjah Sports Club",
        "Shabab Al Ahli Club",
        "Buka Gym",
        "Sharjah Self Defense Sports Club"
      ],
      items: [
        {
          year: "17 лет",
          title: "База вольной борьбы",
          text: "Начал заниматься вольной борьбой в Чеченской Республике и заложил основу давления, баланса и контроля."
        },
        {
          year: "2021",
          title: "Переезд в UAE",
          text: "Переехал в ОАЭ и начал развиваться в Brazilian Jiu-Jitsu и grappling."
        },
        {
          year: "2023",
          title: "Возвращение к соревнованиям",
          text: "Вернулся к полноценной соревновательной подготовке и международному графику."
        },
        {
          year: "2023-present",
          title: "Международный уровень и тренерская работа",
          text: "Выступает на международных турнирах и параллельно развивает спортсменов как тренер."
        },
        {
          year: "2026",
          title: "Purple Belt in Brazilian Jiu-Jitsu",
          text: "Получил пурпурный пояс по BJJ как подтверждение технического роста."
        }
      ]
    },
    achievements: {
      label: "Достижения",
      title: "Доказано на мировой арене.",
      lead:
        "Результаты Имама собраны на мировых, азиатских и эмиратских чемпионатах, при этом он продолжает выступать и тренировать спортсменов.",
      world: "Чемпион мира",
      asian: "Чемпион Азии",
      belt: "Обладатель пояса Super Fight Champion",
      goldTitle: "Золотые медали и титулы",
      bronzeTitle: "Бронзовые медали",
      gold: [
        "ACBJJ World Championship",
        "AJP World Championship",
        "AJP Asian Championship",
        "AJP Grand Prix Abu Dhabi",
        "AJP Grappling Championship",
        "AJP East Coast Championship",
        "AJP Abu Dhabi Championship",
        "UAEJJF Sheikh Zayed Championship - Two-Time Champion",
        "Fujairah Grappling Championship",
        "Winner of Two Professional Super Fights",
        "Super Fight Championship Belt Holder",
        "Winner of multiple international tournaments"
      ].map((title) => ({
        title,
        detail: "Золотой результат из официального спортивного профиля Имама Гециева."
      })) satisfies AchievementItem[],
      bronze: [
        {
          title: "AGP Grappling World Championship - 2025",
          detail: "Бронзовая медаль на мировом уровне по grappling."
        },
        {
          title: "AJP Asian Championship - 2023",
          detail: "Бронзовая медаль на чемпионате Азии."
        },
        {
          title: "AJP Grappling Championship - 2023",
          detail: "Бронзовая медаль на турнире AJP по grappling."
        }
      ] satisfies AchievementItem[]
    },
    belt: {
      label: "Brazilian Jiu-Jitsu",
      title: "PURPLE BELT",
      subtitle: "Brazilian Jiu-Jitsu · присвоен 18 января 2026",
      awardedBy: "Присвоили",
      professors: ["Professor Inacio - Black Belt", "Coach Diyar - Black Belt"]
    },
    coaching: {
      label: "Тренерская работа",
      title: "Тренировать спортсмена шире, чем техника.",
      body:
        "Имам три года работал тренером в Al Qasimia University в Шардже: проводил групповые и индивидуальные тренировки, готовил спортсменов к соревнованиям и работал со студентами разных национальностей. Его подход строится вокруг дисциплины, уважения, технического роста и психологической уверенности.",
      directions: [
        "Grappling",
        "No-Gi Grappling",
        "Wrestling",
        "Wrestling Fundamentals",
        "Beginner Classes",
        "Adult Classes",
        "Private Lessons",
        "Competition Preparation"
      ],
      principles: [
        "Discipline",
        "Respect",
        "Individual Approach",
        "Technical Growth",
        "Competition Mindset"
      ]
    },
    international: {
      label: "Международный профиль",
      title: "Готов для международных академий.",
      body:
        "Имам тренировал спортсменов из стран СНГ, арабских стран, Африки, Азии и других регионов. Многоязычная коммуникация помогает ему уверенно работать в международной спортивной среде.",
      languages: ["Russian", "Arabic", "English", "Chechen - Native"],
      educationTitle: "Образование",
      education: "Bachelor's Degree in Sharia",
      university: "Al Qasimia University · Sharjah, UAE"
    },
    philosophy: {
      quote: "A coach must be an example before he becomes a teacher.",
      body:
        "Настоящий тренер продолжает развиваться сам, остается примером дисциплины и характера и помогает ученику обрести не только технику, но и уверенность, уважение и спортивное мышление."
    },
    opportunity: {
      label: "Возможности",
      title: "Ready to build champions with the right academy.",
      body:
        "Имам открыт к долгосрочным тренерским возможностям в ОАЭ и за рубежом. Он готов вести групповые тренировки, частные занятия, готовить спортсменов к соревнованиям, развивать новые программы и представлять академию на международных чемпионатах.",
      list: [
        "Group Training",
        "Private Coaching",
        "Competition Preparation",
        "New Program Development",
        "International Representation",
        "Long-Term Club Partnership"
      ],
      contact: "Связаться",
      instagram: "Instagram"
    },
    contact: {
      title: "Imam Getsiev",
      subtitle: "Professional Grappling & Wrestling Coach",
      location: "Sharjah, United Arab Emirates",
      phoneLabel: "Телефон",
      phone: "+971 50 876 13 19",
      instagramLabel: "Instagram",
      instagram: "@_imam_74",
      cta: "Начать разговор",
      desktopHint: "Контакты открыты для связи с desktop."
    },
    footer: {
      line: "© 2026 Imam Getsiev. Professional Grappling & Wrestling Coach.",
      availability: "Sharjah, UAE · Available for international opportunities"
    }
  }
} as const;
