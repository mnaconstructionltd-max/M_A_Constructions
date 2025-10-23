import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contacttrade from "@/components/contactTrade";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useParams, Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft, Phone, MapPin, Quote } from "lucide-react";
import { drywallData } from "@/data/drywall";
import { motion, AnimatePresence } from "framer-motion";

const divisionDataMap: Record<string, any> = {
  drywall: drywallData,
};

const pageVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, scale: 0.98, transition: { duration: 0.4, ease: "easeIn" } },
};

const fadeUpVariant = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CSITradeDetail = () => {
  const { divisionId } = useParams();
  const data = divisionDataMap[divisionId || ""];

  return (
    <AnimatePresence mode="wait">
      {!data ? (
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
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5, ease: "easeOut" } }}
              className="text-2xl font-bold mb-4"
            >
              Trade Division Not Found
            </motion.h1>
            <Link to="/csi-trades">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block"
              >
                <Button>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to CSI Trades
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="trade-detail"
          initial="initial"
          animate="animate"
          exit="exit"
          className="min-h-screen bg-white flex flex-col"
        >
          <Navbar />
          <main className="flex-grow">
            {/* Hero Section */}
            <motion.section
              className="bg-gradient-to-br from-primary via-primary to-[hsl(210,100%,35%)] text-primary-foreground py-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
            >
              <div className="container mx-auto px-4 mt-16">
                <Link
                  to="/csi-trades"
                  className="inline-flex items-center text-primary-foreground/90 hover:text-primary-foreground mb-6"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All CSI Trades
                </Link>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.6, ease: "easeOut" } }}
                  className="text-4xl font-bold tracking-tight sm:text-5xl mb-4"
                >
                  {data.hero.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6, ease: "easeOut" } }}
                  className="text-xl text-primary-foreground/90 mb-6 max-w-3xl"
                >
                  {data.hero.subtitle}
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.35, duration: 0.6, ease: "easeOut" } }}
                >
                  <Button size="lg" className="bg-used_dark hover:bg-used_dark/80 shadow-lg transform-gpu hover:scale-105 transition-transform duration-300">
                    {data.hero.ctaText}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 shadow-md"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    {data.hero.phone}
                  </Button>
                </motion.div>
              </div>
            </motion.section>

            {/* Overview Section */}
            <motion.section
              className="py-6 mt-4 container mx-auto px-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <div className="max-w">
                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {data.overview}
                </p>
              </div>
            </motion.section>

            {/* Estimation Stages */}
            <section className="py-12 bg-primary-light/20">
              <div className="container mx-auto px-4 max-w-7xl">
                <motion.h2
                  className="text-4xl font-extrabold text-primary-dark mb-12 text-center drop-shadow"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }}
                  viewport={{ once: true }}
                >
                  Estimation Stages
                </motion.h2>
                <div className="grid gap-10 md:grid-cols-2">
                  {data.stages.map((stage: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                    >
                      <Card className="bg-white border border-primary-light shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <CardContent className="pt-8 px-8">
                          <h3 className="text-2xl font-semibold mb-4 text-primary-dark">{stage.name}</h3>
                          <p className="text-gray-700 leading-relaxed">{stage.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Services */}
            <section className="py-12 bg-white">
              <div className="container mx-auto px-4 max-w-7xl">
                <motion.h2
                  className="text-4xl font-extrabold text-primary-dark mb-12 text-center drop-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                  viewport={{ once: true }}
                >
                  Our Services
                </motion.h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-center">
                  <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-4"
                  >
                    {data.services.map((service: string, index: number) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4 p-6 rounded-xl bg-primary-light/30 shadow-md hover:shadow-lg transition-shadow duration-300"
                        variants={{
                          initial: { opacity: 0, x: -25 },
                          animate: { opacity: 1, x: 0, transition: { delay: index * 0.15, duration: 0.4 } },
                        }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-used" />
                        <span className="text-lg font-semibold text-primary-dark">{service}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                  >
                    <img
                      src={data.services_image}
                      alt="Service Placeholder"
                      className="max-w-full h-auto rounded-lg shadow-md transform-gpu hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Materials We Estimate */}
            <section className="py-12 bg-primary-light/10">
              <div className="container mx-auto px-4 max-w-7xl">
                <motion.h2
                  className="text-4xl font-extrabold text-primary-dark mb-12 text-left drop-shadow"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                  viewport={{ once: true }}
                >
                  Materials We Estimate
                </motion.h2>
                <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4">
                  {data.materials.map((material: string, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default select-none"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.4 } }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-used" />
                      <span className="text-base text-primary-dark font-medium">{material}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Our Approach */}
            <section className="py-12 bg-white">
              <div className="container mx-auto px-4 max-w-7xl">
                <motion.h2
                  className="text-4xl font-extrabold text-primary-dark mb-12 text-center drop-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                  viewport={{ once: true }}
                >
                  Our Approach
                </motion.h2>
                <div className="space-y-8">
                  {data.approach.map((step: string, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-6 bg-primary-light/20 rounded-xl p-6 shadow-inner"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0, transition: { delay: index * 0.15, duration: 0.4 } }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold select-none">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Deliverables Section */}
            <section className="py-12 bg-accent-love/30">
              <div className="container mx-auto px-4 max-w-7xl">
                <motion.h2
                  className="text-4xl font-bold mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                  viewport={{ once: true }}
                >
                  What You'll Receive
                </motion.h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {data.deliverables.map((deliverable: string, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 p-4 rounded-lg bg-background cursor-default select-none"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.4 } }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-used flex-shrink-0 mt-1" />
                      <span className="font-medium">{deliverable}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Software Section */}
            <section className="py-12">
              <div className="container mx-auto px-4 max-w-7xl">
                <motion.h2
                  className="text-4xl font-bold mb-8"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }}
                  viewport={{ once: true }}
                >
                  Software & Tools We Use
                </motion.h2>
                <motion.div
                  className="flex flex-wrap gap-4 justify-center"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {data.software.map((tool: string, index: number) => (
                    <motion.div
                      key={index}
                      className="px-4 py-3 rounded-full bg-accent-love/30 font-medium cursor-default select-none"
                      variants={{
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.4 } },
                      }}
                    >
                      {tool}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Portfolio */}
            <section className="py-12 bg-primary-light/10">
              <div className="container mx-auto px-4 max-w-7xl">
                <motion.h2
                  className="text-4xl font-extrabold text-primary-dark mb-12 text-center drop-shadow"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                  viewport={{ once: true }}
                >
                  Our Portfolio
                </motion.h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {data.portfolio.map((project: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1, transition: { delay: index * 0.1, duration: 0.5 } }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="pt-8 px-8">
                          <h3 className="text-xl font-semibold mb-3 text-primary-dark">{project.name}</h3>
                          <div className="flex items-center space-x-2 text-gray-500 mb-4">
                            <MapPin className="w-5 h-5" />
                            <p className="text-sm">{project.address}</p>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">{project.scope}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Process Steps Section */}
            <section className="py-12">
              <div className="container mx-auto px-4 max-w-7xl">
                <motion.h2
                  className="text-4xl font-bold mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                  viewport={{ once: true }}
                >
                  How It Works
                </motion.h2>
                <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                  {data.processSteps.map((step: string, index: number) => (
                    <motion.div
                      key={index}
                      className="text-left"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.15, duration: 0.4 } }}
                      viewport={{ once: true }}
                    >
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold select-none">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 bg-accent-love/30">
              <div className="container mx-auto px-4 max-w-7xl">
                <motion.h2
                  className="text-4xl font-bold mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                  viewport={{ once: true }}
                >
                  Frequently Asked Questions
                </motion.h2>
                <div className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible>
                    {data.faq.map((item: any, index: number) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12">
              <div className="container mx-auto px-4 max-w-7xl">
                <motion.h2
                  className="text-4xl font-bold mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                  viewport={{ once: true }}
                >
                  Client Testimonials
                </motion.h2>
                <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                  {data.testimonials.map((testimonial: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.15, duration: 0.5 } }}
                      viewport={{ once: true }}
                    >
                      <Card>
                        <CardContent className="pt-6">
                          <Quote className="w-8 h-8 text-used/30 mb-3" />
                          <p className="text-muted-foreground mb-4 italic">{testimonial.review}</p>
                          <p className="font-semibold">— {testimonial.name}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </main>
          <Contacttrade />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CSITradeDetail;
