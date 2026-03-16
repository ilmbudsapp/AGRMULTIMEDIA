import { useState } from "react";
import { Mail, MapPin, Facebook, Instagram, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface ContactFormData {
  name: string;
  email: string;
  serviceNeeded: string;
  budgetRange: string;
  message: string;
}

export default function ContactPage() {
  const { toast } = useToast();
  const { tSpec } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    serviceNeeded: "",
    budgetRange: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) =>
      apiRequest("POST", "/api/contact", {
        name: data.name,
        email: data.email,
        subject: data.serviceNeeded || "Contact",
        projectType: data.serviceNeeded,
        message: data.message,
      }),
    onSuccess: () => {
      setSubmitted(true);
      setFormData({ name: "", email: "", serviceNeeded: "", budgetRange: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      console.error(error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const opts = tSpec.contactPage.serviceOptions;
  const serviceOptions = [
    { value: "web", label: opts.web },
    { value: "graphic", label: opts.graphic },
    { value: "video", label: opts.video },
    { value: "ai", label: opts.ai },
    { value: "other", label: opts.other },
  ];

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#0a0a0f]">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-400 mb-12">{tSpec.contactPage.intro}</p>

          {submitted ? (
            <div className="rounded-2xl bg-white/10 border border-white/20 p-8 text-center">
              <p className="text-xl text-white font-semibold">{tSpec.contactPage.successMessage}</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-12">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-white/90 font-medium mb-2">{tSpec.contactPage.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder={tSpec.contactPage.name}
                  />
                </div>
                <div>
                  <label className="block text-white/90 font-medium mb-2">{tSpec.contactPage.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder={tSpec.contactPage.email}
                  />
                </div>
                <div>
                  <label className="block text-white/90 font-medium mb-2">{tSpec.contactPage.serviceNeeded}</label>
                  <select
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    <option value="">—</option>
                    {serviceOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/90 font-medium mb-2">{tSpec.contactPage.budgetRange}</label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    <option value="">—</option>
                    {tSpec.contactPage.budgetOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/90 font-medium mb-2">{tSpec.contactPage.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                    placeholder={tSpec.contactPage.message}
                  />
                </div>
                <button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-white text-[#0a0a0f] py-4 rounded-2xl font-bold hover:bg-white/90 transition-all disabled:opacity-50"
                >
                  {contactMutation.isPending ? "..." : tSpec.contactPage.submit}
                </button>
              </form>
              <div className="space-y-6">
                <div>
                  <p className="text-white/60 text-sm font-medium mb-2">{tSpec.contactPage.locationLabel}</p>
                  <p className="text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-white/60" />
                    {tSpec.contactPage.locationValue}
                  </p>
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium mb-2">Phone</p>
                  <a href="tel:+4915567204598" className="text-white flex items-center gap-2 hover:underline">
                    <Phone className="w-5 h-5 text-white/60" />
                    +49 1556 7204598
                  </a>
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium mb-2">Email</p>
                  <a href="mailto:agron6922@gmail.com" className="text-white flex items-center gap-2 hover:underline">
                    <Mail className="w-5 h-5 text-white/60" />
                    agron6922@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium mb-3">{tSpec.contactPage.socialTitle}</p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/halidosmani74"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/agrondesign/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
