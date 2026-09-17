import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

  app.use(express.json());

  // Initialize Gemini AI client lazily
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI | null {
    if (!aiClient && process.env.GEMINI_API_KEY) {
      aiClient = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    }
    return aiClient;
  }

  // System instruction for Mouflihath's AI Assistant
  const SYSTEM_INSTRUCTION = `Tu es l'assistant IA officiel et interactif du portfolio de SADIKOU Mouflihath.
Ton rôle est d'informer avec précision, clarté, concision et professionnalisme les visiteurs, recruteurs et partenaires sur son profil, ses compétences réelles, ses projets et ses coordonnées.

Profil de Mouflihath :
- Nom complet : SADIKOU Mouflihath A. Mobereola
- Titre : Développeuse Full Stack Junior
- Formation & Diplôme : Diplômée en Monétique à l'Institut Supérieur Golden Academy (Akpakpa, Cotonou) • Baccalauréat D au Complexe Scolaire Saint Augustin (CSSA).
- Localisation : Cotonou, Bénin • Disponible pour opportunités en entreprise, Full-Stack, B2B ou Remote.
- Contact WhatsApp officiel unique : +229 01 42 81 55 62 (https://wa.me/2290142815562) — NOTE : l'ancien numéro 0147876093 a été supprimé.
- Email : kikesadikou@gmail.com
- GitHub : https://github.com/mouflihath-dev
- LinkedIn : https://linkedin.com/in/mouflihath-sadikou
- Langues : Français (Bien), Fon (Assez bien)

Compétences & Réalisations clés du CV :
1. Stage Professionnel : Stage Académique chez KingSoft Digital (18 mai – 18 juin 2026, Cotonou, Bénin) — Initiation au développement web professionnel avec Laravel et découverte du cycle de développement en entreprise.
2. Frontend : React.js, JavaScript, Tailwind CSS, Alpine.js, HTML5, CSS3.
3. Backend : PHP, Laravel, Blade, Base de données MySQL.
4. Modélisation & Outils : Modélisation UML (StarUML), Maquettage d'interface (Figma), Git / GitHub (clés SSH), VS Code, suite bureautique (Word, Excel, PowerPoint).
5. Monétique & Systèmes de Paiement : Norme internationale ISO 8583 (transactions bancaires), passerelle FedaPay, notions de Java Card et simulateur Cisco Packet Tracer.

Projets majeurs :
1. ENERGYGROUPE (Démo en ligne : https://energy-groupe.tech/) :
   - Site vitrine responsive pour une entreprise de travaux d'électricité et plomberie.
   - Technologies : HTML, CSS, JavaScript, React.js.
2. LES COURSIERS DU COIN (Démo en ligne : https://courier-corner-app.vercel.app/) :
   - Application web de mise en relation livreurs / clients (Cotonou & Calavi).
   - Technologies : HTML, CSS, JavaScript, React.js.
3. HYGIE+ :
   - Plateforme de comparaison de prix entre pharmacies (Mémoire académique en équipe avec Lauriane FAGBEMI).
   - Modélisation UML (StarUML), maquettage Figma, développement React.js + Laravel/Blade, base de données MySQL.
4. ARIYA (Démo en ligne : https://curated-event-crew.lovable.app) :
   - Plateforme événementielle de mise en relation d'organisateurs et prestataires.

Consignes de réponse :
- Sois chaleureux, courtois, direct et objectif.
- Fais bien la distinction entre ses compétences de production réellement pratiquées (Laravel, React, PHP, MySQL, UML, FedaPay, ISO 8583) et ses notions en veille.
- Si le visiteur souhaite collaborer ou poser une question précise, propose-lui de joindre Mouflihath sur WhatsApp (+229 01 42 81 55 62) ou par email.`;

  // API Route: Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // API Route: Chat with Gemini
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, conversationHistory } = req.body;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Le message est requis.' });
      }

      const ai = getGeminiClient();

      if (ai) {
        // Format history for context if provided
        let promptContent = message;
        if (Array.isArray(conversationHistory) && conversationHistory.length > 0) {
          const recentHistory = conversationHistory
            .slice(-6)
            .map((msg: { sender: string; text: string }) => `${msg.sender === 'user' ? 'Visiteur' : 'Assistant'}: ${msg.text}`)
            .join('\n');
          promptContent = `Historique récent de la conversation :\n${recentHistory}\n\nNouveau message du visiteur : ${message}`;
        }

        const response = await ai.models.generateContent({
          model: 'gemini-3.7-flash',
          contents: promptContent,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
        });

        const reply = response.text || "Je suis à votre disposition pour vous renseigner sur les compétences et réalisations de Mouflihath.";
        return res.json({ reply });
      } else {
        // High quality smart fallback responses if GEMINI_API_KEY is not configured yet
        const lowerMsg = message.toLowerCase();
        let fallbackReply = '';

        if (lowerMsg.includes('projet') || lowerMsg.includes('energy') || lowerMsg.includes('coursier') || lowerMsg.includes('ariya') || lowerMsg.includes('hygie')) {
          fallbackReply = `Mouflihath a développé et conçu plusieurs projets majeurs :\n\n- ⚡ **ENERGY GROUP** (https://energy-groupe.tech/) : Plateforme SaaS industrielle de monitoring et gestion de flux énergétiques (React, Laravel 11, MySQL).\n- 🚴 **Les Coursiers du Coin** (https://courier-corner-app.vercel.app/) : Application de logistique urbaine et dispatching rapide.\n- 🎉 **ARIYA** (https://curated-event-crew.lovable.app) : Marketplace événementielle reliant organisateurs et prestataires.\n- 🏥 **HYGIE+** : Solution santé/pharmacie intégrant la passerelle de paiement **FedaPay** et modélisée en **UML** (ArgoUML).`;
        } else if (lowerMsg.includes('contact') || lowerMsg.includes('whatsapp') || lowerMsg.includes('téléphone') || lowerMsg.includes('numéro') || lowerMsg.includes('joindre')) {
          fallbackReply = `Vous pouvez contacter directement Mouflihath :\n\n- 💬 **WhatsApp Direct :** 01 42 81 55 62 (+229 01 42 81 55 62)\n- ✉️ **Email :** kikesadikou@gmail.com\n- 📍 **Localisation :** Bénin (Centre d'accueil) • Disponible pour opportunités Remote, Freelance & Internationales.`;
        } else if (lowerMsg.includes('techno') || lowerMsg.includes('stack') || lowerMsg.includes('compétence') || lowerMsg.includes('laravel') || lowerMsg.includes('react') || lowerMsg.includes('monétique')) {
          fallbackReply = `Voici le profil technique extrait de son CV :\n\n- **Frontend :** HTML, CSS, JavaScript, React.js, Tailwind CSS, Alpine.js.\n- **Backend :** PHP, Laravel, Blade, Base de données MySQL.\n- **Modélisation & Autres :** Modélisation UML (StarUML), Maquettage (Figma), Git / GitHub.\n- **Logiciels maîtrisés :** StarUML, Figma, Visual Studio Code, Word, Excel, PowerPoint.\n- **Spécialisation Monétique :** Norme bancaire ISO 8583, passerelle FedaPay, notions Java Card.`;
        } else {
          fallbackReply = `Bonjour ! Je suis l'assistant virtuel de **SADIKOU Mouflihath A. Mobereola**, Développeuse Full Stack Junior et diplômée en Monétique. Je peux vous renseigner sur ses projets majeurs (*EnergyGroupe*, *Les Coursiers du Coin*, *HYGIE+*), son stage académique chez *KingSoft Digital*, ou vous aider à la joindre directement sur **WhatsApp au 01 42 81 55 62**. Comment puis-je vous aider ?`;
        }

        return res.json({ reply: fallbackReply });
      }
    } catch (error: any) {
      console.error('Error in /api/chat:', error);
      return res.status(500).json({
        reply: "Désolé, une petite erreur est survenue lors du traitement de votre demande. N'hésitez pas à joindre Mouflihath directement sur WhatsApp au 01 42 81 55 62 !",
        error: error?.message || 'Internal error',
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});