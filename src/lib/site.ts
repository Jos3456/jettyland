export const company = {
  name: "Jettyland Investments",
  legalName: "Jettyland Investments Limited",
  tagline: "Your Partner in Real Estate",
  address: "NSSF Building 10th Floor, Mombasa.",
  email: "info@jettylandinvestments.com",
  emailAlt: "jettylandinvestmentslimited@gmail.com",
  phoneDisplay: "+254 703 378747",
  phoneHref: "+254703378747",
  phones: [
    { display: "+254 703 378747", href: "+254703378747" },
    { display: "+254 712 673087", href: "+254712673087" },
    { display: "+254 107 038 577", href: "+254107038577" },
  ],
  footerPhones: "+254703378747 | +254107038577",
  copyright: "© 2025 Jettyland Investments Limited. All Rights Reserved",
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "What We Do",
    href: "/services",
    children: [
      { label: "Letting Services", href: "/letting-services" },
      { label: "Consultancy & Valuation", href: "/consultancy-valuation" },
      { label: "Property Management", href: "/property-management" },
      { label: "Property Sales", href: "/property-sales" },
      { label: "Rent Collection", href: "/rent-collection" },
    ],
  },
  { label: "Our Clients", href: "/our-clients" },
  { label: "Career Opportunities", href: "/career-opportunities" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Gallery", href: "/our-photo-gallery" },
  { label: "Service", href: "/service-4" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export const whyChoose = [
  {
    title: "Experience You Can Rely On:",
    text: "Our team brings a wealth of knowledge and hands-on experience in property management, sales, and consultancy.",
  },
  {
    title: "Tailored Solutions:",
    text: "We understand that every client and property is unique, and we craft strategies to deliver the best outcomes.",
  },
  {
    title: "End-to-End Service:",
    text: "From finding the perfect tenant to managing every detail of your property sale, we handle it all professionally and efficiently.",
  },
  {
    title: "Clear Communication:",
    text: "We keep you updated and informed at every stage, so you stay in control of your investment.",
  },
];

export const coreValues = [
  {
    title: "Integrity",
    text: "We uphold the highest ethical standards in all our dealings, ensuring honesty and transparency in every transaction.",
  },
  {
    title: "Innovation",
    text: "We embrace new technologies and creative solutions to enhance our services and stay ahead in the evolving real estate market.",
  },
  {
    title: "Collaboration",
    text: "We value teamwork and strong relationships, both within our company and with our clients and partners.",
  },
];

export const galleryImages = [
  { src: "/images/hero-3.png", alt: "Nyali coastline aerial, Mombasa" },
  { src: "/images/hero-1.jpg", alt: "Beachfront home along the Kenyan coast" },
  { src: "/images/hero-2.jpg", alt: "Palm-lined coastal property" },
  { src: "/images/about.jpg", alt: "Jettyland Investments advisor" },
  { src: "/images/why-bg.jpg", alt: "Professional property consultation" },
  { src: "/images/team-1.jpg", alt: "Property viewing with clients" },
  { src: "/images/team-2.jpg", alt: "Signing a tenancy agreement" },
  { src: "/images/team-3.jpg", alt: "Keys handover to a new tenant" },
  { src: "/images/blog-1.jpg", alt: "Modern apartment exterior" },
  { src: "/images/blog-2.jpg", alt: "Landlord meeting" },
  { src: "/images/blog-3.jpg", alt: "Property valuation inspection" },
  { src: "/images/gallery-1.jpg", alt: "Residential tower" },
];
