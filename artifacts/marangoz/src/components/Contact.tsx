import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                İletişim
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-[1.2] mb-8">
              Projenizi <br className="hidden md:block"/>
              <span className="italic">Hayata Geçirelim</span>
            </h2>

            <p className="text-lg text-foreground/70 mb-12 max-w-md">
              Eviniz veya ofisiniz için hayal ettiğiniz ahşap tasarımları konuşmak üzere atölyemize kahve içmeye bekleriz.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 uppercase tracking-wider text-sm">Bizi Arayın / WhatsApp</h4>
                  <p className="text-foreground/70 font-serif text-xl">+90 (555) 123 45 67</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 uppercase tracking-wider text-sm">E-Posta</h4>
                  <p className="text-foreground/70">bilgi@ahsapusta.com.tr</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 uppercase tracking-wider text-sm">Atölye Adresi</h4>
                  <p className="text-foreground/70 leading-relaxed max-w-[250px]">
                    Ağaç İşleri Sanayi Sitesi, 14. Sokak No:42 <br/>
                    Ostim / Ankara
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border p-8 md:p-12 shadow-sm"
          >
            <h3 className="text-2xl font-serif mb-8 text-foreground">Bize Ulaşın</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2 tracking-wide">Adınız Soyadınız</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="Ahmet Yılmaz"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2 tracking-wide">Telefon Numaranız</label>
                <input 
                  type="tel" 
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="05XX XXX XX XX"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2 tracking-wide">Projeniz Hakkında (İsteğe bağlı)</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
                  placeholder="Mutfak dolabı, iç mekan kapıları..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 text-sm font-semibold tracking-widest uppercase hover:bg-primary/90 transition-colors flex items-center justify-center gap-3 mt-4 group"
              >
                Gönder
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-foreground/50 text-center mt-4">
                Formu doldurduğunuzda en kısa sürede size dönüş yapacağız.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
