import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Quarkend",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Company",
  avatar: "/images/quarkendLogo.jpg",
  email: "quarkend0@gmail.com",
  location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Turkish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Quarkend0",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/quarkend0/",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} - Home`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Kodu değil, geleceği yazarız.</>,
  featured: {
    display: false,
    title: <>Recent project: <strong className="ml-4"></strong></>,
    href: "/",
  },
  subline: (
    <>
      Biz Web geliştirme üzerine odaklı, Quarkend adında bir yazılım şirketiyiz. 
      <br /> Yenilikçi web çözümleriyle dijital dünyada fark yaratıyoruz. Her projede kalite ve inovasyonu birleştirerek, markanızın dijitalde parlamasını sağlıyoruz.  
    </>
  ),
};

const about = {
  path: "/about",
  label: "Hakkında",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Sunum",
    description: (
      <>
        Lise sıralarında başlayan bir girişimcilik ruhuyla kurulan Quarkend, bugün web geliştirme alanında sağlam adımlar atmaktadır. Gelecekte mobil uygulama çözümleri ve yapay zeka teknolojileriyle hizmet yelpazemizi genişleterek, dijital dönüşümde öncü olmayı hedeflemekteyiz. Her projede kalite ve inovasyonu benimseyerek, paydaşlarımıza değer katmayı sürdüreceğiz.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "İş Deneyimleri",
    experiences: [
      {
        company: "Web Geliştirme",
        timeframe: "Günümüz",
        role: "Geliştirme",
        achievements: [
          <>
            Dijital varlığınızı güçlendirmek için, işletmenizin ihtiyaçlarına özel, modern ve etkileşimli web geliştirme çözümleri sunuyoruz
          </>,
          <>
            İşletmenizin dijital hedeflerine ulaşması için kapsamlı web geliştirme ve gelecekteki mobil uygulama ve yapay zeka çözümlerimizle yanınızdayız.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      // {
      //   company: "Creativ3",
      //   timeframe: "2018 - 2022",
      //   role: "Lead Designer",
      //   achievements: [
      //     <>
      //       Developed a design system that unified the brand across multiple platforms, improving
      //       design consistency by 40%.
      //     </>,
      //     <>
      //       Led a cross-functional team to launch a new product line, contributing to a 15% increase
      //       in overall company revenue.
      //     </>,
      //   ],
      //   images: [],
      // },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Kullanılan Teknolojiler",
    skills: [
      {
        title: "Node.js / Express.js",
        description: <>Backend tarafında kullanmış olduğumuz teknolojilerimiz</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js / Next UI",
        description: <>Frontend tarafında kullanmış olduğumuz teknolojimiz</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Laravel",
        description: <>Backend tarafında kullanmış olduğumuz teknolojilerimiz</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "İletişim",
  title: "Bizimle iletişim kurmak İsterseniz...",
  description: `...`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Projeler",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const contact = {
  path: "/contact",
  label: "İletişim",
  title: "Bize Erişmek İsterseniz...",
  description: `...`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};



const gallery = {
  path: "/gallery",
  label: "aasdasdsa",
  title: `${person.name} - Projeler`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, contact };
