import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  projectType: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    projectType: '',
    message: ''
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => 
      apiRequest('POST', '/api/contact', data),
    onSuccess: () => {
      toast({
        title: t.contact.success.title,
        description: t.contact.success.description,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        projectType: '',
        message: ''
      });
    },
    onError: (error) => {
      toast({
        title: t.contact.error.title,
        description: t.contact.error.description,
        variant: "destructive",
      });
      console.error('Contact form error:', error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: t.contact.error.validation,
        description: t.contact.error.validation,
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
    { day: t.contact.hours.weekdays, hours: "09:00 - 17:00" },
    { day: t.contact.hours.saturday, hours: "10:00 - 14:00" },
    { day: t.contact.hours.sunday, hours: t.contact.hours.closed, closed: true }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4" data-testid="contact-title">{t.contact.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="contact-subtitle">
            {t.contact.subtitle}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-navy mb-6" data-testid="contact-form-title">{t.contact.form.title}</h3>
            <form className="space-y-6" onSubmit={handleSubmit} data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t.contact.form.name} {t.contact.form.required}</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300" 
                    placeholder={t.contact.form.namePlaceholder}
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t.contact.form.email} {t.contact.form.required}</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300" 
                    placeholder={t.contact.form.emailPlaceholder}
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">{(t.contact.form as any).subject} {t.contact.form.required}</label>
                <input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300" 
                  placeholder={(t.contact.form as any).subjectPlaceholder}
                  required
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">{t.contact.form.phone}</label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300" 
                  placeholder={t.contact.form.phonePlaceholder}
                  data-testid="input-phone"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">{t.contact.form.projectType}</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300"
                  data-testid="select-project-type"
                >
                  <option value="">{t.contact.form.projectTypePlaceholder}</option>
                  <option value="web-design">{t.contact.form.projectTypes.webDesign}</option>
                  <option value="graphic-design">{t.contact.form.projectTypes.graphicDesign}</option>
                  <option value="video-production">{t.contact.form.projectTypes.videoProduction}</option>
                  <option value="digital-marketing">{t.contact.form.projectTypes.digitalMarketing}</option>
                  <option value="photography">{t.contact.form.projectTypes.photography}</option>
                  <option value="consulting">{t.contact.form.projectTypes.consulting}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">{t.contact.form.message} {t.contact.form.required}</label>
                <textarea 
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300 resize-none" 
                  placeholder={t.contact.form.messagePlaceholder}
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
                    {t.contact.form.sending}
                  </span>
                ) : (
                  t.contact.form.submit
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
