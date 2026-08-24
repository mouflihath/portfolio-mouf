import React, { useState } from 'react';
import { Send, Mail, Github, Linkedin, MessageSquare, CheckCircle2, Copy, Check, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formTilt, setFormTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setFormTilt({ x: x * 6, y: -y * 6 });
  };

  const handleMouseLeave = () => {
    setFormTilt({ x: 0, y: 0 });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setIsSubmitting(true);
    soundFX.playClick();

    // Prepare formatted WhatsApp message
    const formattedText = `*Nouveau message depuis le portfolio*\n\n` +
      `👤 *Nom :* ${formData.name}\n` +
      `📧 *Email :* ${formData.email || 'Non renseigné'}\n` +
      `📌 *Sujet :* ${formData.subject || 'Prise de contact'}\n\n` +
      `💬 *Message :*\n${formData.message}`;

    const encodedMsg = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/2290142815562?text=${encodedMsg}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      soundFX.playChime();

      // Confetti with military green shades
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#4B5320', '#5E7044', '#3A4B28', '#A3B899'],
      });

      // Open WhatsApp directly
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopiedEmail(true);
    soundFX.playClick();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background Military Green Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#4B5320]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EBDC] border border-[#A3B899] backdrop-blur-md mb-3">
            <MessageSquare className="w-4 h-4 text-[#4B5320]" />
            <span className="text-xs font-mono font-bold text-[#2E3A20] tracking-wider uppercase">
              CONTACT & WHATSAPP DIRECT
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Prêt(e) à concrétiser un <span className="text-[#4B5320]">nouveau projet</span> ?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            Vous avez une idée d'application web, une plateforme SaaS ou une opportunité professionnelle ? Remplissez le formulaire pour m'écrire directement sur WhatsApp.
          </p>
          <div className="w-24 h-1 bg-[#4B5320] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-white border-2 border-[#A3B899]/60 shadow-xl">
              <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2 flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#4B5320]" />
                Discutons de votre projet
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                Je réponds rapidement par email ou directement via mon WhatsApp officiel. Échangeons en toute simplicité.
              </p>

              {/* Copyable Email Box */}
              <div className="p-4 rounded-2xl bg-[#F4F7F2] border border-[#A3B899]/60 mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-[#E2EBDC] text-[#4B5320]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-mono text-slate-500">Email Direct</p>
                    <a
                      href={`mailto:${DEVELOPER_INFO.email}`}
                      className="text-xs sm:text-sm font-mono text-[#2E3A20] font-bold hover:text-[#4B5320] truncate block"
                    >
                      {DEVELOPER_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white hover:bg-[#E2EBDC] text-[#4B5320] border border-[#A3B899] transition-all cursor-pointer shrink-0 shadow-sm"
                  title="Copier l'adresse email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-700 font-bold" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Card */}
              <div className="mb-6 space-y-2.5">
                <h4 className="text-xs font-mono font-bold text-[#2E3A20] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#4B5320]" />
                  Numéro WhatsApp Officiel
                </h4>

                <a
                  href={DEVELOPER_INFO.whatsappLinks[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="p-4 rounded-2xl bg-[#F4F7F2] hover:bg-[#E2EBDC] border-2 border-[#A3B899]/60 hover:border-[#4B5320] transition-all flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E2EBDC] flex items-center justify-center text-[#4B5320]">
                      <MessageCircle className="w-5 h-5 text-[#4B5320]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block font-semibold">WhatsApp Direct</span>
                      <span className="font-mono font-bold text-sm text-[#2E3A20]">
                        {DEVELOPER_INFO.whatsapp[0]}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 rounded-xl bg-[#4B5320] text-white text-xs font-mono font-bold group-hover:scale-105 transition-transform flex items-center gap-1">
                    Discuter 💬
                  </span>
                </a>
              </div>

              {/* Social Channels */}
              <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-3">
                Réseaux Professionnels
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={DEVELOPER_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="p-3 rounded-2xl bg-[#F4F7F2] hover:bg-[#E2EBDC] border border-[#A3B899]/60 hover:border-[#4B5320] transition-all flex items-center gap-3 text-slate-700 hover:text-black group shadow-sm"
                >
                  <Github className="w-5 h-5 text-[#4B5320] group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="font-heading font-bold text-xs text-slate-900 block">GitHub</span>
                    <span className="text-[10px] font-mono text-slate-500">@mouflihath-dev</span>
                  </div>
                </a>

                <a
                  href={DEVELOPER_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="p-3 rounded-2xl bg-[#F4F7F2] hover:bg-[#E2EBDC] border border-[#A3B899]/60 hover:border-[#4B5320] transition-all flex items-center gap-3 text-slate-700 hover:text-black group shadow-sm"
                >
                  <Linkedin className="w-5 h-5 text-[#4B5320] group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="font-heading font-bold text-xs text-slate-900 block">LinkedIn</span>
                    <span className="text-[10px] font-mono text-slate-500">Mouflihath SADIKOU</span>
                  </div>
                </a>
              </div>

              {/* Security Promise */}
              <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-2.5 text-xs font-mono text-slate-600">
                <ShieldCheck className="w-4 h-4 text-[#4B5320] shrink-0" />
                <span>Confidentialité et réponse sous 24h</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Tilt Contact Form */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-7 relative transition-transform duration-200 ease-out will-change-transform"
            style={{
              transform: `perspective(1000px) rotateY(${formTilt.x}deg) rotateX(${formTilt.y}deg)`,
            }}
          >
            <div className="relative rounded-3xl bg-white border-2 border-[#A3B899]/60 p-7 sm:p-9 shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#E2EBDC] border-2 border-[#4B5320] flex items-center justify-center text-[#4B5320] mb-6 shadow-xl shadow-[#4B5320]/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 mb-2">
                    Redirection vers WhatsApp en cours...
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mb-8 font-normal">
                    Merci {formData.name} ! Votre message a été prérempli et ouvert dans WhatsApp. Si la fenêtre ne s'est pas ouverte automatiquement, cliquez sur le bouton ci-dessous :
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/2290142815562?text=${encodeURIComponent(`*Message de ${formData.name}*\n${formData.message}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-[#4B5320] hover:bg-[#3A4B28] text-white font-heading font-semibold text-xs tracking-wider cursor-pointer transition-all shadow-md flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Ouvrir WhatsApp
                    </a>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-6 py-3 rounded-xl bg-[#F4F7F2] hover:bg-[#E2EBDC] text-[#2E3A20] border border-[#A3B899] font-heading font-semibold text-xs tracking-wider cursor-pointer transition-all shadow-sm"
                    >
                      Rédiger un autre message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Sarah"
                        className="w-full px-4 py-3 rounded-xl bg-[#F4F7F2] border border-[#A3B899]/60 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#4B5320] focus:ring-2 focus:ring-[#4B5320]/20 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-2">
                        Email professionnel (optionnel)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@entreprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F4F7F2] border border-[#A3B899]/60 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#4B5320] focus:ring-2 focus:ring-[#4B5320]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-2">
                      Sujet du projet
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Ex: Conception d'application web, mission Full-Stack"
                      className="w-full px-4 py-3 rounded-xl bg-[#F4F7F2] border border-[#A3B899]/60 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#4B5320] focus:ring-2 focus:ring-[#4B5320]/20 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-2">
                      Message & Description *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez votre besoin, calendrier ou vos objectifs..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F4F7F2] border border-[#A3B899]/60 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#4B5320] focus:ring-2 focus:ring-[#4B5320]/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl font-heading font-bold text-sm tracking-wider text-white bg-[#4B5320] hover:bg-[#3A4B28] shadow-lg shadow-[#4B5320]/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Ouverture de WhatsApp...
                      </span>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4" />
                        Envoyer sur WhatsApp
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

