import React, { useState } from 'react';
import { Send, Mail, Github, Linkedin, MessageSquare, CheckCircle2, Copy, Check, ShieldCheck, Phone, MessageCircle, Terminal } from 'lucide-react';
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

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#10B981', '#059669', '#047857', '#34D399'],
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
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-3">
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-mono font-bold text-slate-800 tracking-wider uppercase">
              CONTACT &amp; ÉCHANGES
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Prêt(e) à concrétiser un <span className="text-emerald-600">nouveau projet</span> ?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            Vous avez une idée d'application web, une plateforme SaaS ou une opportunité professionnelle ? Remplissez le formulaire pour m'écrire directement sur WhatsApp.
          </p>
          <div className="w-20 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Links & Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-2 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                Discutons de votre projet
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                Je réponds rapidement par email ou directement via WhatsApp. Échangeons en toute simplicité.
              </p>

              {/* Copyable Email Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-slate-200/80 text-slate-700">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Email Direct</p>
                    <a
                      href={`mailto:${DEVELOPER_INFO.email}`}
                      className="text-xs sm:text-sm font-mono text-slate-900 font-bold hover:text-emerald-600 truncate block transition-colors"
                    >
                      {DEVELOPER_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-all cursor-pointer shrink-0 shadow-sm"
                  title="Copier l'adresse email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 font-bold" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Card */}
              <div className="mb-6 space-y-2.5">
                <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  Numéro WhatsApp Officiel
                </h4>

                <a
                  href={DEVELOPER_INFO.whatsappLinks[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-all flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-emerald-800 uppercase block font-semibold">WhatsApp Direct</span>
                      <span className="font-mono font-bold text-sm text-emerald-950">
                        {DEVELOPER_INFO.whatsapp[0]}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-bold group-hover:scale-105 transition-transform">
                    Discuter 💬
                  </span>
                </a>
              </div>

              {/* Social Channels */}
              <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">
                Réseaux Professionnels
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={DEVELOPER_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all flex items-center gap-3 text-slate-700 hover:text-black group shadow-sm"
                >
                  <Github className="w-5 h-5 text-slate-800 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="font-heading font-bold text-xs text-slate-900 block">GitHub</span>
                    <span className="text-[10px] font-mono text-slate-500">@mouflihath</span>
                  </div>
                </a>

                <a
                  href={DEVELOPER_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all flex items-center gap-3 text-slate-700 hover:text-blue-600 group shadow-sm"
                >
                  <Linkedin className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="font-heading font-bold text-xs text-slate-900 block">LinkedIn</span>
                    <span className="text-[10px] font-mono text-slate-500">Mouflihath SADIKOU</span>
                  </div>
                </a>
              </div>

              {/* Security Promise */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2.5 text-xs font-mono text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Confidentialité et réponse sous 24h</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-2">
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
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-semibold text-xs tracking-wider cursor-pointer transition-all shadow-sm flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Ouvrir WhatsApp
                    </a>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-semibold text-xs tracking-wider cursor-pointer transition-all"
                    >
                      Rédiger un autre message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Sarah"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                        Email professionnel (optionnel)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@entreprise.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                      Sujet du projet
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Ex: Développement d'application web, mission Full-Stack"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                      Message &amp; Description *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez votre besoin, calendrier ou vos objectifs techniques..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-heading font-bold text-sm tracking-wider text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Ouverture de WhatsApp...
                      </span>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <span>Envoyer directement via WhatsApp</span>
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
