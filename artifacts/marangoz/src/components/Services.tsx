import { motion } from "framer-motion";
import doorClassic from "@/assets/door-classic.png";
import doorModern from "@/assets/door-modern.png";
import wardrobe from "@/assets/wardrobe.png";

export function Services() {
  const services = [
    {
      id: "doors",
      title: "Klasik & Modern Kapılar",
      desc: "Evlerinize karakter katan, masif ceviz ve meşeden üretilmiş yüksek yalıtımlı, uzun ömürlü iç ve dış mekan kapıları. İster oymalı klasik, ister pürüzsüz modern tasarımlar.",
      image: doorClassic,
      imageAlt: "Classic Carved Wooden Door",
    },
    {
      id: "wardrobes",
      title: "Dolaplar & Gardıroplar",
      desc: "Mekanınızın ölçülerine tam uyum sağlayan, akıllı depolama çözümleri sunan gömme dolaplar ve bağımsız gardıroplar. Birinci sınıf menteşe ve kulp detaylarıyla.",
      image: wardrobe,
      imageAlt: "Handcrafted Luxury Wardrobe",
    },
    {
      id: "custom",
      title: "Özel Sipariş Mobilya",
      desc: "Sizin hayal ettiğiniz, bizim şekil verdiğimiz benzersiz tasarımlar. Mimari projelere özel üretimler, kitaplıklar ve özel ahşap kaplamalar.",
      image: doorModern,
      imageAlt: "Modern Minimalist Wooden Door",
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-primary" />
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">
              Koleksiyonumuz
            </span>
            <div className="h-[1px] w-8 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-[1.2] mb-6">
            Zanaatın Forma Kavuştuğu <br />
            <span className="italic">Ustalık Eserleri</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Her mekana özel tasarlanan, ahşabın sıcaklığını ve sağlamlığını yansıtan koleksiyonlarımız.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.id} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
              >
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 aspect-[4/5] lg:aspect-auto lg:h-[600px] overflow-hidden"
                >
                  <img 
                    src={service.image} 
                    alt={service.imageAlt} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2"
                >
                  <span className="text-6xl font-serif text-border/50 block mb-6 leading-none">
                    0{index + 1}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                    {service.title}
                  </h3>
                  <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <button 
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group flex items-center gap-4 text-sm font-semibold tracking-widest uppercase text-primary"
                  >
                    Detaylı Bilgi İste
                    <span className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all duration-300" />
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
