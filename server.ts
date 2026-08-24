import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
Ton rôle est d'informer avec enthousiasme, clarté, concision et professionnalisme les visiteurs, recruteurs, clients et partenaires sur son profil, ses compétences, ses projets et ses coordonnées.

Profil de Mouflihath :
- Nom complet : SADIKOU Mouflihath
- Titre : Développeuse Full-Stack • Creative Developer • Digital Builder
- Localisation : Bénin (Centre d'accueil) • Disponible pour opportunités Remote, Freelance, B2B ou Internationales.
- Contact WhatsApp officiel : +229 01 42 81 55 62 (https://wa.me/2290142815562)
- Email : kikesadikou@gmail.com
- GitHub : https://github.com/mouflihath-dev
- LinkedIn : https://linkedin.com/in/mouflihath-sadikou

Projets majeurs :
1. ENERGY GROUP (Démo en ligne : https://energy-groupe.tech/) :
   - Plateforme SaaS industrielle de monitoring et gestion de flux énergétiques (solaire, éolien, réseaux électriques).
   - Technologies : React.js, Laravel 11, MySQL, Télémétrie IoT, WebSockets, Recharts / D3.js, Docker.
   - Impact : -28% de déperdition énergétique constatée sur les sites pilotes.

2. LES COURSIERS DU COIN (Démo en ligne : https://courier-corner-app.vercel.app/) :
   - Solution de logistique urbaine éco-responsable et dispatching automatisé.
   - Technologies : React 19, TypeScript, Laravel, MySQL spatial, WebSockets GPS en temps réel.
   - Métrique : Livraison moyenne en moins de 24 minutes en zone urbaine dense.

3. ARIYA (Démo en ligne : https://curated-event-crew.lovable.app) :
   - Marketplace événementielle B2B & B2C reliant organisateurs et prestataires qualifiés.
   - Technologies : React, TypeScript, Laravel, Pusher WebSockets, Stripe, MySQL.
   - Fonctionnalités : Messagerie temps réel chiffrée, devis dynamiques, calendrier synchronisé.

4. HYGIE+ :
   - Plateforme de télémédecine et gestion de dossiers médicaux sécurisés avec géolocalisation d'urgence.

Stack technique & Savoir-faire :
- Backend : Laravel 11, PHP 8+, Node.js/Express, Architecture RESTful & GraphQL, Authentification OAuth2 / JWT.
- Frontend : React.js, TypeScript, Tailwind CSS, Three.js, Canvas, HTML5/CSS3 moderne.
- Données & Systèmes : MySQL (optimisation spatiale & indexation séries temporelles), Redis, Docker, Git.
- Spécialités : Plateformes SaaS d'envergure, temps réel (WebSockets), sécurité (bonnes pratiques OWASP), UI/UX responsive.

Consignes de réponse :
- Sois chaleureux, poli et direct.
- Formate tes réponses avec des puces Markdown claires si nécessaire.
- Si le visiteur souhaite démarrer un projet, collaborer ou poser une question précise, propose-lui de joindre Mouflihath directement via WhatsApp (+229 01 42 81 55 62) ou par le formulaire de contact.`;

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

        if (lowerMsg.includes('projet') || lowerMsg.includes('energy') || lowerMsg.includes('coursier') || lowerMsg.includes('ariya')) {
          fallbackReply = `Mouflihath a développé plusieurs plateformes d'envergure :\n\n- ⚡ **ENERGY GROUP** (https://energy-groupe.tech/) : Plateforme SaaS industrielle de monitoring énergétique (React, Laravel 11, IoT).\n- 🚴 **Les Coursiers du Coin** (https://courier-corner-app.vercel.app/) : Application de livraison éco-responsable avec tracking GPS en temps réel.\n- 🎉 **ARIYA** (https://curated-event-crew.lovable.app) : Marketplace événementielle avec messagerie instantanée WebSockets.`;
        } else if (lowerMsg.includes('contact') || lowerMsg.includes('whatsapp') || lowerMsg.includes('téléphone') || lowerMsg.includes('numéro') || lowerMsg.includes('joindre')) {
          fallbackReply = `Vous pouvez contacter directement Mouflihath :\n\n- 💬 **WhatsApp Direct :** 01 42 81 55 62 (+229 01 42 81 55 62)\n- ✉️ **Email :** kikesadikou@gmail.com\n- 📍 **Localisation :** Bénin (Centre d'accueil) • Disponible Remote & International.`;
        } else if (lowerMsg.includes('techno') || lowerMsg.includes('stack') || lowerMsg.includes('compétence') || lowerMsg.includes('laravel') || lowerMsg.includes('react')) {
          fallbackReply = `Mouflihath est experte en développement Full-Stack avec pour stack principale :\n\n- **Backend :** Laravel 11, PHP 8+, RESTful APIs, WebSockets\n- **Frontend :** React.js, TypeScript, Tailwind CSS\n- **Bases de données :** MySQL, Redis\n- **DevOps & Outils :** Docker, Git, Linux`;
        } else {
          fallbackReply = `Bonjour ! Je suis l'assistant virtuel de **SADIKOU Mouflihath**, Développeuse Full-Stack. Je peux vous renseigner sur ses projets majeurs (*Energy Group*, *Les Coursiers du Coin*, *ARIYA*), ses compétences techniques ou vous aider à la contacter directement sur **WhatsApp au 01 42 81 55 62**. Comment puis-je vous aider ?`;
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