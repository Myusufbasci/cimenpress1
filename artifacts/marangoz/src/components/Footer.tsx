export function Footer() {
  return (
    <footer className="bg-sidebar border-t border-border/60 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-3xl font-serif text-foreground mb-6">Ahşap Usta.</h2>
            <p className="text-foreground/70 leading-relaxed max-w-sm mb-8">
              Özel ölçü masif ahşap kapı ve dolap sistemlerinde dört nesillik ustalık. Evlerinize doğanın dokunuşunu ve sıcaklığını taşıyoruz.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">Hızlı Menü</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-foreground/70 hover:text-primary transition-colors">Hakkımızda</a></li>
              <li><a href="#services" className="text-foreground/70 hover:text-primary transition-colors">Koleksiyon</a></li>
              <li><a href="#process" className="text-foreground/70 hover:text-primary transition-colors">Üretim Süreci</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">Sosyal Medya</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Pinterest</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Facebook</a></li>
            </ul>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 text-sm text-foreground/50">
          <p>&copy; {new Date().getFullYear()} Ahşap Usta. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground">Gizlilik Politikası</a>
            <a href="#" className="hover:text-foreground">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
