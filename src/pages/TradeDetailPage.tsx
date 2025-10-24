import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contacttrade from "@/components/contactTrade";
import { Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useParams, Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { carpentryData } from "@/data/carpentry";
import { concreteData } from "@/data/concrete";
import { doorsWindowsData } from "@/data/doors-windows";
import { drywallData } from "@/data/drywall";
import { ductData } from "@/data/duct";
import { electricalData } from "@/data/electrical";
import { firestoppingData } from "@/data/firestopping";
import { flooringData } from "@/data/flooring";
import { framingData } from "@/data/framing";
import { gutterData } from "@/data/gutter";
import { hvacData } from "@/data/hvac";
import { insulationData } from "@/data/insulation";
import { landscapingData } from "@/data/landscaping";
import { masonryData } from "@/data/masonry";
import { mechanicalData } from "@/data/mechanical";
import { paintingData } from "@/data/painting";
import { pipingData } from "@/data/piping";
import { plumbingData } from "@/data/plumbing";
import { roofingData } from "@/data/roofing";
import { structuralSteelData } from "@/data/structural-steel";
import { waterproofingData } from "@/data/waterproofing";
import BackToTop from "@/components/BackToTop";

const divisionDataMap: Record<string, any> = {
  carpentry: carpentryData,
  concrete: concreteData,
  doorsWindows: doorsWindowsData,
  drywall: drywallData,
  duct: ductData,
  electrical: electricalData,
  firestopping: firestoppingData,
  flooring: flooringData,
  framing: framingData,
  gutter: gutterData,
  hvac: hvacData,
  insulation: insulationData,
  landscaping: landscapingData,
  masonry: masonryData,
  mechanical: mechanicalData,
  painting: paintingData,
  piping: pipingData,
  plumbing: plumbingData,
  roofing: roofingData,
  structuralSteel: structuralSteelData,
  waterproofing: waterproofingData,
};

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
      delay: custom * 0.08,
    },
  }),
};

const sectionContainerAnim: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
  },
  exit: {
    opacity: 0,
    y: 12,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
};

const sectionTitleAnim = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
};

const mainPageVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

const sectionRenderers: Record<string, (data: any) => JSX.Element | null> = {
  hero: (data) =>
    data.hero ? (
      <motion.section
        className="relative text-primary-foreground py-12 pb-16 bg-gradient-to-br from-primary via-primary to-[hsl(210,100%,35%)]"
        variants={sectionContainerAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 mt-16 max-w-7xl">
          {data.hero.title && (
            <>
              <Link to="/csi-trades" className="inline-flex items-center text-primary-foreground/90 hover:text-primary-foreground mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to All CSI Trades
              </Link>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
                variants={sectionTitleAnim}
                initial="hidden"
                animate="visible"
              >
                {data.hero.title}
              </motion.h1>
            </>
          )}
          {data.hero.subtitle && <motion.p
            className="text-lg sm:text-xl text-primary-foreground/90 mb-6 max-w-3xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >{data.hero.subtitle}</motion.p>}
          <div className="flex flex-col sm:flex-row gap-4">
            {data.hero.ctaText && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.13, duration: 0.35 }}
              >
                <a href="#contact">
                  <Button size="lg" className="w-full sm:w-auto transition-transform active:scale-95 bg-used_dark hover:bg-used_dark/80">
                    {data.hero.ctaText}
                </Button>
                </a>
              </motion.div>
            )}
            {data.hero.phone && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.36 }}
              >
                <a href={`tel:${data.hero.phone.replace(/[^+\d]/g, "")}`}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto transition-transform active:scale-95 bg-primary hover:bg-primary/70">
                    <Phone className="mr-2 h-5 w-5" /> {data.hero.phone}
            </Button>
                </a>
      </motion.div>
            )}
          </div>
        </div>
      </motion.section>
    ) : null,

  overview: (data) =>
    data.overview ? (
      <motion.section
        className="py-6 mt-4 container mx-auto px-4 max-w-4xl"
        variants={sectionContainerAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
      >
          {data.overview}
        </motion.p>
      </motion.section>
    ) : null,

  keyBenefits: (data) =>
    data.keyBenefits?.length > 0 ? (
      <motion.section
        className="py-10 md:py-12 bg-primary-light/10"
        variants={sectionContainerAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-8 text-center"
            variants={sectionTitleAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Key Benefits
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.keyBenefits.map((benefit: string, i: number) => (
              <motion.div
                custom={i}
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={i}
              >
                <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
                  <CheckCircle2 className="w-6 h-6 text-used mb-3" />
                  <p className="text-base md:text-lg">{benefit}</p>
                </Card>
      </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    ) : null,

  stages: (data) =>
    data.stages?.length > 0 ? (
      <motion.section
        className="py-10 md:py-12 bg-primary-light/20"
        variants={sectionContainerAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h2
            className="text-2xl md:text-4xl font-extrabold text-primary-dark mb-10 md:mb-12 text-center"
            variants={sectionTitleAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Estimation Stages
          </motion.h2>
          <div className="grid gap-7 md:gap-10 grid-cols-1 md:grid-cols-2">
            {data.stages.map((stage: any, i: number) => (
              <motion.div
                custom={i}
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={i}
              >
                <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl">
                  <CardContent className="pt-8 px-8">
                    {stage.name && <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">{stage.name}</h3>}
                    {stage.description && <p className="text-gray-700">{stage.description}</p>}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    ) : null,

  services: (data) =>
    data.services?.length > 0 ? (
      <motion.section
        className="py-10 md:py-12 bg-white"
        variants={sectionContainerAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
            variants={sectionTitleAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <motion.div className="space-y-4">
              {data.services.map((service: string, i: number) => (
                <motion.div
                  custom={i}
                  variants={fadeInVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  key={i}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-primary-light/30 shadow-md hover:shadow-lg transition-shadow"
                >
                  <CheckCircle2 className="w-6 h-6 text-used" />
                  <span className="text-base md:text-lg">{service}</span>
                </motion.div>
              ))}
            </motion.div>
            {data.services_image && (
              <motion.div
                className="flex justify-center w-full"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <img
                  src={data.services_image}
                  className="max-w-full w-full h-auto rounded-lg shadow-md object-cover object-center"
                  alt="Services"
                />
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>
    ) : null,

  materials: (data) =>
    data.materials?.length > 0 ? (
      <motion.section
        className="py-10 md:py-12 bg-primary-light/10"
        variants={sectionContainerAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-left"
            variants={sectionTitleAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Materials We Estimate
          </motion.h2>
          <div className="grid gap-4 md:gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {data.materials.map((material: string, i: number) => (
              <motion.div
                custom={i}
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={i}
                className="flex items-center space-x-3 p-3 md:p-4 rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-used" />
                <span className="text-base">{material}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    ) : null,

  approach: (data) =>
    data.approach?.length > 0 ? (
      <motion.section
        className="py-10 md:py-12 bg-white"
        variants={sectionContainerAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
            variants={sectionTitleAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Approach
          </motion.h2>
          <div className="space-y-6 md:space-y-8">
            {data.approach.map((step: string, i: number) => (
              <motion.div
                custom={i}
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={i}
                className="flex items-center space-x-4 md:space-x-6 bg-primary-light/20 rounded-xl p-4 md:p-6 shadow-inner"
              >
                <div className="flex-shrink-0 w-9 h-9 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg md:text-xl font-bold shadow-sm">
                  {i + 1}
                </div>
                <p className="text-base md:text-lg">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    ) : null,

  deliverables: (data) =>
    data.deliverables?.length > 0 ? (
      <motion.section
        className="py-10 md:py-12 bg-accent-love/30"
        variants={sectionContainerAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.23 }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-8"
            variants={sectionTitleAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            What You'll Receive
          </motion.h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.deliverables.map((item: string, i: number) => (
              <motion.div
                custom={i}
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={i}
                className="flex items-start space-x-3 p-3 md:p-4 rounded-lg bg-background"
              >
                <CheckCircle2 className="w-5 h-5 text-used mt-1" />
                <span className="text-base md:text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    ) : null,

  software: (data) =>
    data.software?.length > 0 ? (
      <motion.section
        className="py-10 md:py-12 bg-white"
        variants={sectionContainerAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-8 text-center"
            variants={sectionTitleAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Software & Tools
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {data.software.map((tool: string, i: number) => (
              <motion.div
                custom={i}
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={i}
                className="px-3 py-2 md:px-4 md:py-2 rounded-lg shadow-md bg-primary-light/30 text-base"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    ) : null,

  portfolio: (data) =>
    data.portfolio?.length > 0 ? (
      <motion.section
        className="py-10 md:py-12 bg-primary-light/10"
        variants={sectionContainerAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-8 text-center"
            variants={sectionTitleAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Portfolio / Projects
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.portfolio.map((p: any, i: number) => (
              <motion.div
                custom={i}
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={i}
              >
                <Card className="shadow-lg hover:shadow-2xl transition-shadow rounded-xl">
                  <CardContent>
                    {p.name && <h3 className="text-lg md:text-xl font-semibold mb-1">{p.name}{p.category || p.projectType ? <> (<span className="font-normal">{p.category || p.projectType}</span>)</> : null}</h3>}
                    {p.location && <p className="text-gray-700 text-sm mb-2">{p.location}</p>}
                    {p.scope && <p className="text-gray-600 mb-2">{p.scope}</p>}
                    {p.services && <p className="text-gray-600 italic">{p.services}</p>}
                    {p.result && <p className="text-gray-700 font-medium">{p.result}</p>}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    ) : null,

  whyChooseUs: (data) =>
    data.whyChooseUs?.length > 0 ? (
      <motion.section
        className="py-10 md:py-12 bg-white"
        variants={sectionContainerAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-8 text-center"
            variants={sectionTitleAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 list-disc list-inside">
            {data.whyChooseUs.map((reason: string, i: number) => (
              <motion.li
                custom={i}
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={i}
                className="text-base md:text-lg"
              >
                {reason}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>
    ) : null,

  serviceTypes: (data) =>
    data.serviceTypes?.length > 0 ? (
      <motion.section
        className="py-10 md:py-12 bg-primary-light/10"
        variants={sectionContainerAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-8 text-center"
            variants={sectionTitleAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Service Categories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {data.serviceTypes.map((type: string, i: number) => (
              <motion.div
                custom={i}
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={i}
              >
                <Card className="p-5 md:p-6 hover:shadow-xl transition-shadow bg-white rounded-xl">
                  <CardContent>
                    <h3 className="text-lg md:text-2xl font-semibold mb-2">{type}</h3>
                    <ul className="list-disc list-inside">
                      {data[type.toLowerCase()]?.propertyTypes?.map((pt: string, idx: number) => (
                        <li key={idx} className="text-base">{pt}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    ) : null,

  processSteps: (data) =>
    data.processSteps?.length > 0 ? (
      <motion.section
        className="py-10 md:py-12 bg-white"
        variants={sectionContainerAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-8 text-center"
            variants={sectionTitleAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Process Steps
          </motion.h2>
          <ol className="list-decimal list-inside space-y-3 md:space-y-4 text-base md:text-lg">
            {data.processSteps.map((step: string, i: number) => (
              <motion.li
                custom={i}
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={i}
              >{step}</motion.li>
            ))}
          </ol>
        </div>
      </motion.section>
    ) : null,

  faq: (data) =>
    data.faq?.length > 0 ? (
      <motion.section
        className="py-10 md:py-12 bg-primary-light/10"
        variants={sectionContainerAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-8 text-center"
            variants={sectionTitleAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <Accordion type="multiple">
            {data.faq.map((q: any, i: number) => (
              <motion.div
                custom={i}
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={i}
              >
                <AccordionItem value={`item-${i}`}>
                  <AccordionTrigger>{q.question}</AccordionTrigger>
                  <AccordionContent>{q.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </motion.section>
    ) : null,

  testimonials: (data) =>
    data.testimonials?.length > 0 ? (
      <motion.section
        className="py-10 md:py-12 bg-white"
        variants={sectionContainerAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-8 text-center"
            variants={sectionTitleAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Client Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.testimonials.map((t: any, i: number) => (
              <motion.div
                custom={i}
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={i}
              >
                <Card className="p-4 md:p-6 shadow-md hover:shadow-lg rounded-xl transition-shadow">
                  <CardContent>
                    <p className="text-base md:text-lg italic">&ldquo;{t.review}&rdquo;</p>
                    <p className="mt-4 font-semibold">— {t.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    ) : null,
};

const CSITradeDetail = () => {
  const { divisionId } = useParams();
  const data = divisionDataMap[divisionId || ""];

  if (!data) {
    return (
      <motion.div
        key="not-found"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        className="min-h-screen bg-background"
      >
        <div className="bg-white shadow-sm sticky top-0 z-50">
          <Navbar />
        </div>
        <div className="container mx-auto px-4 py-12 text-left">
          <motion.h1 className="text-2xl font-bold mb-4">Trade Division Not Found</motion.h1>
          <Link to="/csi-trades">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to CSI Trades
            </Button>
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="trade-detail"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={mainPageVariants}
        className="min-h-screen bg-white flex flex-col"
      >
        <Navbar />
        <main className="flex-grow">
          {Object.keys(sectionRenderers).map((key) => sectionRenderers[key](data))}
                              <BackToTop />
        </main>
        <Contacttrade />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default CSITradeDetail;
