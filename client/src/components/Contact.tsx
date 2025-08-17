import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => 
      apiRequest('POST', '/api/contact', data),
    onSuccess: () => {
      toast({
        title: "Poruka je poslana!",
        description: "Javićemo vam se u najkraćem mogućem roku.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
    },
    onError: (error) => {
      toast({
        title: "Greška pri slanju poruke",
        description: "Molimo pokušajte ponovo ili nas kontaktirajte direktno.",
        variant: "destructive",
      });
      console.error('Contact form error:', error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Molimo popunite sva obavezna polja",
        description: "Ime, email i poruka su obavezni.",
        variant: "destructive",
      });
      return;
    }
    
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const workingHours = [
    { day: "Ponedeljak - Petak", hours: "09:00 - 17:00" },
    { day: "Subota", hours: "10:00 - 14:00" },
    { day: "Nedelja", hours: "Zatvoreno", closed: true }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4" data-testid="contact-title">Kontaktirajte nas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="contact-subtitle">
            Spremni smo da vaše ideje pretvorimo u stvarnost. Pošaljite nam poruku!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-navy mb-6" data-testid="contact-form-title">Pošaljite poruku</h3>
            <form className="space-y-6" onSubmit={handleSubmit} data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Ime i prezime *</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300" 
                    placeholder="Vaše ime"
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email adresa *</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300" 
                    placeholder="vaš.email@example.com"
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Telefon</label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300" 
                  placeholder="+381 XX XXX XXXX"
                  data-testid="input-phone"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Tip projekta</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300"
                  data-testid="select-project-type"
                >
                  <option value="">Izaberite tip projekta</option>
                  <option value="web-design">Web Dizajn</option>
                  <option value="graphic-design">Grafički Dizajn</option>
                  <option value="video-production">Video Produkcija</option>
                  <option value="digital-marketing">Digitalni Marketing</option>
                  <option value="photography">Fotografija</option>
                  <option value="consulting">Konsalting</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Poruka *</label>
                <textarea 
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300 resize-none" 
                  placeholder="Opišite vaš projekat i potrebe..."
                  required
                  data-testid="textarea-message"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-electric-blue to-purple-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="submit-contact-form"
              >
                {contactMutation.isPending ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Šalje se...
                  </span>
                ) : (
                  "Pošaljite poruku"
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-navy mb-6" data-testid="contact-info-title">Kontakt informacije</h3>
              <div className="space-y-4">
                <div className="flex items-center" data-testid="contact-phone">
                  <div className="bg-electric-blue/10 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="text-electric-blue w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">Telefon</p>
                    <p className="text-gray-600">+381 XX XXX XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center" data-testid="contact-email">
                  <div className="bg-electric-blue/10 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="text-electric-blue w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">Email</p>
                    <p className="text-gray-600">info@agrmultimedia.eu</p>
                  </div>
                </div>
                
                <div className="flex items-center" data-testid="contact-location">
                  <div className="bg-electric-blue/10 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="text-electric-blue w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">Lokacija</p>
                    <p className="text-gray-600">Novi Sad, Srbija</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-navy mb-4" data-testid="social-media-title">Pratite nas</h4>
              <div className="flex space-x-4" data-testid="social-media-links">
                <a 
                  href="#" 
                  className="bg-electric-blue/10 w-12 h-12 rounded-xl flex items-center justify-center text-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300"
                  data-testid="social-facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-electric-blue/10 w-12 h-12 rounded-xl flex items-center justify-center text-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300"
                  data-testid="social-instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-electric-blue/10 w-12 h-12 rounded-xl flex items-center justify-center text-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300"
                  data-testid="social-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-electric-blue/10 w-12 h-12 rounded-xl flex items-center justify-center text-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300"
                  data-testid="social-twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-6" data-testid="working-hours">
              <h4 className="text-lg font-semibold text-navy mb-2 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Radimo
              </h4>
              <div className="space-y-2">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{schedule.day}</span>
                    <span className={schedule.closed ? "text-gray-500" : "text-navy font-medium"}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
