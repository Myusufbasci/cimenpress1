import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      title: "Masif Ahşap",
      desc: "Suntalam veya MDF değil; birinci sınıf, fırınlanmış gerçek masif ağaç kullanıyoruz.",
    },
    {
      title: "El Oyması Detaylar",
      desc: "CNC makinelerinin yapamayacağı, ruhu olan ince el işçiliği motifler.",
    },
    {
      title: "Doğal Yağlar",
      desc: "Ahşabın nefes almasını sağlayan, insan sağlığına zararsız doğal koruyucu yağlar ve cilalar.",
    },
    {
      title: "Ömürlük Kullanım",
      desc: "Nesilden nesile aktarılabilecek sağlamlıkta, zamanla güzelleşen mobilyalar.",
    }
  ];

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <h3 className="text-xl font-serif text-foreground mb-4 relative inline-block">
                {feature.title}
                <span className="absolute -bottom-2 left-0 w-1/2 h-[1px] bg-primary" />
              </h3>
              <p className="text-foreground/70 mt-4 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
