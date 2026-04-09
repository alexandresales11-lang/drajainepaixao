import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Heart, 
  MapPin, 
  Instagram, 
  ArrowRight,
  X,
  ChevronRight,
  Sparkles,
  UserCheck,
  Calendar,
  Award,
  Smile
} from 'lucide-react';

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5574991891841&text=Ol%C3%A1%2C+vi+seu+site+e+gostaria+de+agendar+minha+primeira+consulta+gratuita.&type=phone_number&app_absent=0";
const INSTAGRAM_URL = "https://www.instagram.com/drajainepaixao/";

const galleryImages = [
  "https://i.imgur.com/IRntkd0.png",
  "https://i.imgur.com/oqSUyGS.png",
  "https://i.imgur.com/kbT1q59.png",
  "https://i.imgur.com/LhWVw1v.png",
  "https://i.imgur.com/WOqkrBe.png",
  "https://i.imgur.com/8MqHL9X.png"
];

const expertPhotos = [
  "https://i.imgur.com/uIot81P.png",
  "https://i.imgur.com/Tap0udC.png",
  "https://i.imgur.com/F9CHtjh.png"
];

const services = [
  {
    title: "Facetas em Resina",
    description: "Transformação completa do sorriso em poucas sessões, corrigindo cor e formato com naturalidade.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Lentes de Contato",
    description: "Lâminas ultrafinas que proporcionam um sorriso harmônico e duradouro com o mínimo desgaste.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Reabilitação Oral",
    description: "Tratamentos complexos para devolver a função mastigatória e a estética do seu sorriso.",
    icon: <UserCheck className="w-6 h-6" />
  },
  {
    title: "Estética Avançada",
    description: "Clareamento e procedimentos modernos para realçar a beleza natural dos seus dentes.",
    icon: <Star className="w-6 h-6" />
  }
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CTAButton = ({ className = "", children = "Agendar primeira consulta gratuita" }) => (
    <a 
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#a88a62] hover:bg-[#8c7152] text-white font-semibold rounded-full transition-all duration-300 shadow-lg active:scale-95 ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {children}
    </a>
  );

  return (
    <div className="min-h-screen font-sans bg-[#fbfaf7] text-[#32281e] selection:bg-[#eee9df]">
      {/* Floating WhatsApp for Mobile */}
      <AnimatePresence>
        {scrolled && (
          <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-8 h-8" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-2xl font-medium tracking-tight">
            Dra. Jaíne <span className="text-[#a88a62]">Paixão</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#sobre" className="hover:text-[#a88a62] transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-[#a88a62] transition-colors">Serviços</a>
            <a href="#galeria" className="hover:text-[#a88a62] transition-colors">Resultados</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#a88a62] transition-colors">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-2 px-6 py-2 border border-[#a88a62] text-[#a88a62] rounded-full hover:bg-[#a88a62] hover:text-white transition-all duration-300">
            Agendar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-stretch overflow-hidden bg-[#fbfaf7]">
        <div className="flex-1 flex flex-col justify-center px-6 py-12 md:py-20 md:px-16 lg:px-24 z-10 bg-white md:bg-transparent">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="inline-block px-3 py-1 bg-[#eee9df] text-[#8c7152] text-xs font-bold tracking-widest uppercase rounded-full mb-4 md:mb-6">
              Estética & Reabilitação Oral
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-4 md:mb-6 text-[#32281e]">
              Sou Jaíne Paixão, <br />
              <span className="font-medium italic">sua dentista em Jacobina.</span>
            </h1>
            <p className="text-base md:text-xl text-[#5f4d3b] mb-6 md:mb-10 leading-relaxed">
              Transformo sorrisos com a naturalidade das facetas e lentes em resina composta. Segurança e estética para você voltar a sorrir com confiança.
            </p>
            
            <div className="flex flex-col items-start gap-4">
              <CTAButton className="w-full md:w-auto" />
              <p className="text-xs text-[#a88a62] flex items-center gap-1 ml-2">
                <Sparkles className="w-3 h-3" /> Resposta rápida • Sem compromisso
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 bg-[#f7f4ef] flex items-center justify-center p-6 md:p-12 lg:p-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full h-full max-w-[280px] md:max-w-md lg:max-w-lg aspect-[3/4] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white"
          >
            <img 
              src={expertPhotos[0]} 
              alt="Dra. Jaíne Paixão" 
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-[#eee9df]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Pacientes Felizes", value: "1000+" },
              { label: "Anos de Experiência", value: "8+" },
              { label: "Procedimentos Realizados", value: "5000+" },
              { label: "Avaliação 5 Estrelas", value: "100%" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-3xl font-serif font-bold text-[#a88a62] mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-[#5f4d3b] uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 md:py-32 bg-[#fbfaf7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">Tratamentos Especializados</h2>
            <p className="text-[#5f4d3b] text-lg">Tecnologia e arte unidas para criar o sorriso que você sempre sonhou, com foco em naturalidade e saúde.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#f7f4ef] text-[#a88a62] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#a88a62] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-medium mb-4">{service.title}</h3>
                <p className="text-[#5f4d3b] text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img 
                  src={expertPhotos[1]} 
                  alt="Dra. Jaíne em atendimento" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#eee9df] rounded-full -z-10 blur-3xl opacity-50"></div>
            </div>
            
            <div className="flex-1">
              <span className="text-[#a88a62] font-bold tracking-widest uppercase text-xs mb-4 block">Excelência em Odontologia</span>
              <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">Cuidado humanizado e resultados extraordinários.</h2>
              <div className="space-y-6 text-[#5f4d3b] text-lg leading-relaxed">
                <p>Acredito que cada sorriso é único e merece uma abordagem personalizada. Minha missão é proporcionar não apenas dentes bonitos, mas confiança e bem-estar através de uma odontologia moderna e indolor.</p>
                <p>Com especialização em estética dental, utilizo as técnicas mais avançadas do mercado para garantir que sua transformação seja segura, duradoura e, acima de tudo, natural.</p>
              </div>
              
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Award className="w-5 h-5" />, text: "Especialista em Estética" },
                  { icon: <Heart className="w-5 h-5" />, text: "Atendimento Humanizado" },
                  { icon: <Smile className="w-5 h-5" />, text: "Foco em Naturalidade" },
                  { icon: <Calendar className="w-5 h-5" />, text: "Horários Flexíveis" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[#32281e]">
                    <div className="text-[#a88a62]">{item.icon}</div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 md:py-32 bg-[#f7f4ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl md:text-5xl mb-4">Galeria de Sorrisos</h2>
              <p className="text-[#5f4d3b] text-lg">Veja algumas das transformações reais realizadas em nosso consultório. A próxima pode ser a sua.</p>
            </div>
            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-[#a88a62] font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all"
            >
              Ver mais no Instagram <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="relative aspect-square rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Resultado ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl mb-4">O que dizem nossos pacientes</h2>
            <div className="flex justify-center gap-1 text-[#a88a62]">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mariana Silva",
                text: "A Dra. Jaíne é incrível! Fiz minhas facetas em resina e o resultado ficou super natural. Atendimento nota 1000.",
                role: "Paciente de Jacobina"
              },
              {
                name: "Ricardo Oliveira",
                text: "Excelente profissional. Me senti muito seguro durante todo o tratamento de reabilitação. Recomendo a todos.",
                role: "Paciente de Jacobina"
              },
              {
                name: "Ana Paula Costa",
                text: "O consultório é lindo e o atendimento é muito humanizado. Adorei o resultado do meu clareamento!",
                role: "Paciente de Jacobina"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#fbfaf7] p-8 rounded-3xl border border-[#eee9df]">
                <p className="text-[#5f4d3b] italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#eee9df] rounded-full flex items-center justify-center text-[#a88a62] font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-[#32281e]">{testimonial.name}</div>
                    <div className="text-xs text-[#a88a62] uppercase tracking-wider">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-32 bg-[#32281e] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#a88a62] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">Pronto para transformar o seu sorriso?</h2>
          <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto">Agende agora sua primeira consulta de avaliação e descubra como podemos realçar a sua beleza natural.</p>
          <CTAButton className="bg-white text-[#32281e] hover:bg-[#eee9df]" />
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-white/50">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Avaliação Gratuita</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Jacobina - BA</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Atendimento Personalizado</div>
          </div>
        </div>
      </section>

      {/* Map/Location */}
      <section className="py-20 bg-[#fbfaf7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl flex flex-col md:flex-row">
            <div className="flex-1 p-12 md:p-20">
              <h2 className="font-serif text-3xl mb-8">Onde estamos</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#a88a62] shrink-0" />
                  <div>
                    <div className="font-bold mb-1">Endereço</div>
                    <div className="text-[#5f4d3b]">Jacobina, Bahia - Centro Médico Especializado</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-[#a88a62] shrink-0" />
                  <div>
                    <div className="font-bold mb-1">Horário de Atendimento</div>
                    <div className="text-[#5f4d3b]">Segunda a Sexta: 08:00 - 18:00<br />Sábado: 08:00 - 12:00</div>
                  </div>
                </div>
                <div className="pt-4">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#a88a62] font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all"
                  >
                    Ver no Google Maps <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-[#eee9df] min-h-[300px] relative">
              {/* Placeholder for map */}
              <div className="absolute inset-0 flex items-center justify-center text-[#a88a62]/30">
                <MapPin className="w-24 h-24" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-[#eee9df]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="font-serif text-2xl font-medium">
              Dra. Jaíne <span className="text-[#a88a62]">Paixão</span>
            </div>
            <div className="flex gap-6">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#fbfaf7] rounded-full flex items-center justify-center text-[#a88a62] hover:bg-[#a88a62] hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#fbfaf7] rounded-full flex items-center justify-center text-[#a88a62] hover:bg-[#a88a62] hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <div className="text-xs text-[#5f4d3b] uppercase tracking-widest">
              © {new Date().getFullYear()} Dra. Jaíne Paixão • Todos os direitos reservados
            </div>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-[#a88a62] transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage} 
              alt="Visualização ampliada" 
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
