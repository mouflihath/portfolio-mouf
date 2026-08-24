import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroScene3DProps {
  interactive?: boolean;
}

export const HeroScene3D: React.FC<HeroScene3DProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0.8, 6.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for the entire interactive composition
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Dynamic Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(3, 5, 4);
    scene.add(dirLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 6, 20);
    purpleLight.position.set(2.5, 3, 3);
    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 5, 20);
    cyanLight.position.set(-3, -1, 3);
    scene.add(cyanLight);

    const pinkLight = new THREE.PointLight(0xec4899, 4.5, 15);
    pinkLight.position.set(0, 3.5, -2);
    scene.add(pinkLight);

    // 1. Background Abstract Glowing Torus Knot
    const knotGeo = new THREE.TorusKnotGeometry(1.8, 0.25, 128, 32, 2, 3);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x4c1d95,
      emissive: 0x3b0764,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: true,
    });
    const torusKnot = new THREE.Mesh(knotGeo, knotMat);
    torusKnot.position.set(0, 0.2, -2.2);
    torusKnot.scale.set(0.9, 0.9, 0.9);
    mainGroup.add(torusKnot);

    // 2. Futuristic Cyber Rings
    const ring1Geo = new THREE.TorusGeometry(2.4, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.6 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.8, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.5 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    // 3. Central Stylized Developer Avatar & Holographic Pod
    const avatarGroup = new THREE.Group();
    avatarGroup.position.set(0, -0.3, 0.4);
    mainGroup.add(avatarGroup);

    // Floating Platform / Cyber Base
    const baseGeo = new THREE.CylinderGeometry(1.5, 1.8, 0.15, 32);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.3,
      emissive: 0x1e1b4b,
      emissiveIntensity: 0.5,
    });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.y = -1.5;
    avatarGroup.add(base);

    const baseRingGeo = new THREE.TorusGeometry(1.65, 0.03, 16, 64);
    const baseRingMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });
    const baseRing = new THREE.Mesh(baseRingGeo, baseRingMat);
    baseRing.rotation.x = Math.PI / 2;
    baseRing.position.y = -1.45;
    avatarGroup.add(baseRing);

    // Stylized Avatar Upper Body (Cyber Silhouette)
    const torsoGeo = new THREE.CylinderGeometry(0.32, 0.38, 0.85, 24);
    const suitMat = new THREE.MeshStandardMaterial({
      color: 0x1e1e38,
      roughness: 0.3,
      metalness: 0.8,
      emissive: 0x2e1065,
      emissiveIntensity: 0.3,
    });
    const torso = new THREE.Mesh(torsoGeo, suitMat);
    torso.position.set(0, -0.4, 0);
    avatarGroup.add(torso);

    // Head
    const headGeo = new THREE.SphereGeometry(0.32, 32, 32);
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0x8d5b4c, // Beautiful warm skin tone
      roughness: 0.5,
      metalness: 0.1,
    });
    const head = new THREE.Mesh(headGeo, skinMat);
    head.position.set(0, 0.35, 0);
    avatarGroup.add(head);

    // Stylized Hair (Curled top knot / chic braids hairstyle)
    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      roughness: 0.7,
      metalness: 0.2,
    });
    const hairTopGeo = new THREE.SphereGeometry(0.25, 24, 24);
    const hairTop = new THREE.Mesh(hairTopGeo, hairMat);
    hairTop.position.set(0, 0.75, -0.05);
    avatarGroup.add(hairTop);

    const hairBackGeo = new THREE.SphereGeometry(0.35, 24, 24);
    const hairBack = new THREE.Mesh(hairBackGeo, hairMat);
    hairBack.position.set(0, 0.36, -0.12);
    avatarGroup.add(hairBack);

    // Futuristic Cyber Visor / Smart Glass
    const visorGeo = new THREE.BoxGeometry(0.48, 0.12, 0.32);
    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.9,
      transparent: true,
      opacity: 0.85,
      roughness: 0.1,
      metalness: 0.9,
    });
    const visor = new THREE.Mesh(visorGeo, visorMat);
    visor.position.set(0, 0.38, 0.2);
    avatarGroup.add(visor);

    // Headset with glowing purple ears
    const headsetGeo = new THREE.TorusGeometry(0.35, 0.04, 16, 32, Math.PI);
    const headsetMat = new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0xa855f7, emissiveIntensity: 0.6 });
    const headset = new THREE.Mesh(headsetGeo, headsetMat);
    headset.rotation.z = -Math.PI / 2;
    headset.position.set(0, 0.42, 0);
    avatarGroup.add(headset);

    // 4. Laptop & Holographic Coding Workspace
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(0, -0.35, 0.75);
    avatarGroup.add(laptopGroup);

    // Laptop Base
    const lapBaseGeo = new THREE.BoxGeometry(0.85, 0.03, 0.6);
    const lapMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.9, roughness: 0.2 });
    const lapBase = new THREE.Mesh(lapBaseGeo, lapMat);
    laptopGroup.add(lapBase);

    // Laptop Screen
    const lapScreenGeo = new THREE.BoxGeometry(0.85, 0.55, 0.02);
    const lapScreen = new THREE.Mesh(lapScreenGeo, lapMat);
    lapScreen.position.set(0, 0.26, -0.28);
    lapScreen.rotation.x = -0.22;
    laptopGroup.add(lapScreen);

    // Screen Display with glowing code
    const displayGeo = new THREE.PlaneGeometry(0.78, 0.48);
    // Canvas texture for screen
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 512;
    screenCanvas.height = 320;
    const ctx = screenCanvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#0a0d1d';
      ctx.fillRect(0, 0, 512, 320);
      ctx.fillStyle = '#06b6d4';
      ctx.font = 'bold 22px monospace';
      ctx.fillText('> AMINA_DEV v4.2.0', 25, 45);
      ctx.fillStyle = '#a855f7';
      ctx.font = '16px monospace';
      ctx.fillText('const buildFuture = async () => {', 25, 85);
      ctx.fillStyle = '#ec4899';
      ctx.fillText('  await deploy("HYGIE+", "ARIYA");', 25, 115);
      ctx.fillStyle = '#10b981';
      ctx.fillText('  security.audit("OWASP_SAFE");', 25, 145);
      ctx.fillStyle = '#60a5fa';
      ctx.fillText('  return AI.supercharge();', 25, 175);
      ctx.fillStyle = '#a855f7';
      ctx.fillText('};', 25, 205);
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('// Status: Ready to code 🚀', 25, 255);
    }
    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    const displayMat = new THREE.MeshBasicMaterial({ map: screenTexture });
    const display = new THREE.Mesh(displayGeo, displayMat);
    display.position.set(0, 0.26, -0.265);
    display.rotation.x = -0.22;
    laptopGroup.add(display);

    // 5. Holographic Floating HUD Screens
    const hud1Geo = new THREE.PlaneGeometry(0.7, 0.45);
    const hud1Canvas = document.createElement('canvas');
    hud1Canvas.width = 256;
    hud1Canvas.height = 160;
    const ctx1 = hud1Canvas.getContext('2d');
    if (ctx1) {
      ctx1.fillStyle = 'rgba(10, 15, 35, 0.85)';
      ctx1.fillRect(0, 0, 256, 160);
      ctx1.strokeStyle = '#a855f7';
      ctx1.lineWidth = 4;
      ctx1.strokeRect(4, 4, 248, 152);
      ctx1.fillStyle = '#c084fc';
      ctx1.font = 'bold 16px monospace';
      ctx1.fillText('CYBER_SEC: ACTIVE', 20, 35);
      ctx1.fillStyle = '#34d399';
      ctx1.fillText('● 100% SECURE', 20, 65);
      ctx1.fillStyle = '#93c5fd';
      ctx1.fillText('LATENCY: 12ms', 20, 95);
      ctx1.fillText('THREATS: 0', 20, 125);
    }
    const hud1Texture = new THREE.CanvasTexture(hud1Canvas);
    const hud1Mat = new THREE.MeshBasicMaterial({ map: hud1Texture, transparent: true, opacity: 0.85, side: THREE.DoubleSide });
    const hud1 = new THREE.Mesh(hud1Geo, hud1Mat);
    hud1.position.set(1.2, 0.3, 0.6);
    hud1.rotation.y = -0.45;
    avatarGroup.add(hud1);

    const hud2Geo = new THREE.PlaneGeometry(0.65, 0.4);
    const hud2Canvas = document.createElement('canvas');
    hud2Canvas.width = 256;
    hud2Canvas.height = 160;
    const ctx2 = hud2Canvas.getContext('2d');
    if (ctx2) {
      ctx2.fillStyle = 'rgba(10, 15, 35, 0.85)';
      ctx2.fillRect(0, 0, 256, 160);
      ctx2.strokeStyle = '#06b6d4';
      ctx2.lineWidth = 4;
      ctx2.strokeRect(4, 4, 248, 152);
      ctx2.fillStyle = '#67e8f9';
      ctx2.font = 'bold 16px monospace';
      ctx2.fillText('STACK: FULL-STACK', 20, 35);
      ctx2.fillStyle = '#f472b6';
      ctx2.fillText('REACT • LARAVEL', 20, 65);
      ctx2.fillStyle = '#fbbf24';
      ctx2.fillText('AI • THREE.JS', 20, 95);
      ctx2.fillStyle = '#a7f3d0';
      ctx2.fillText('STATE: 60 FPS', 20, 125);
    }
    const hud2Texture = new THREE.CanvasTexture(hud2Canvas);
    const hud2Mat = new THREE.MeshBasicMaterial({ map: hud2Texture, transparent: true, opacity: 0.85, side: THREE.DoubleSide });
    const hud2 = new THREE.Mesh(hud2Geo, hud2Mat);
    hud2.position.set(-1.2, 0.25, 0.6);
    hud2.rotation.y = 0.45;
    avatarGroup.add(hud2);

    // 6. Floating Tech Polyhedra & Neon Particles
    const particlesCount = 80;
    const partGeo = new THREE.BufferGeometry();
    const partPositions = new Float32Array(particlesCount * 3);
    const partColors = new Float32Array(particlesCount * 3);

    const color1 = new THREE.Color(0xa855f7);
    const color2 = new THREE.Color(0x06b6d4);
    const color3 = new THREE.Color(0xec4899);

    for (let i = 0; i < particlesCount; i++) {
      partPositions[i * 3] = (Math.random() - 0.5) * 8;
      partPositions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      partPositions[i * 3 + 2] = (Math.random() - 0.5) * 6;

      const mixedColor = Math.random() > 0.6 ? color1 : Math.random() > 0.3 ? color2 : color3;
      partColors[i * 3] = mixedColor.r;
      partColors[i * 3 + 1] = mixedColor.g;
      partColors[i * 3 + 2] = mixedColor.b;
    }

    partGeo.setAttribute('position', new THREE.BufferAttribute(partPositions, 3));
    partGeo.setAttribute('color', new THREE.BufferAttribute(partColors, 3));

    const partMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });
    const particles = new THREE.Points(partGeo, partMat);
    scene.add(particles);

    // Floating Crystal Gems
    const gemGeo = new THREE.OctahedronGeometry(0.18, 0);
    const gemMat = new THREE.MeshStandardMaterial({
      color: 0xec4899,
      emissive: 0xec4899,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2,
    });
    const gem1 = new THREE.Mesh(gemGeo, gemMat);
    gem1.position.set(-1.8, 1.2, 0.5);
    mainGroup.add(gem1);

    const gem2Geo = new THREE.IcosahedronGeometry(0.15, 0);
    const gem2Mat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.6,
      metalness: 0.8,
      roughness: 0.2,
    });
    const gem2 = new THREE.Mesh(gem2Geo, gem2Mat);
    gem2.position.set(1.9, 1.4, -0.3);
    mainGroup.add(gem2);

    // Mouse & Scroll Parallax Tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.7;
      targetY = -y * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera / group parallax
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      mainGroup.rotation.y = currentX * 0.8;
      mainGroup.rotation.x = currentY * 0.5;

      // Gentle breathing / floating of the avatar
      avatarGroup.position.y = -0.3 + Math.sin(elapsedTime * 1.8) * 0.06;
      torusKnot.rotation.x = elapsedTime * 0.25;
      torusKnot.rotation.y = elapsedTime * 0.35;

      // Rotating cyber rings
      ring1.rotation.z = elapsedTime * 0.4;
      ring2.rotation.z = -elapsedTime * 0.3;

      // Floating HUD animations
      hud1.position.y = 0.3 + Math.sin(elapsedTime * 2 + 1) * 0.04;
      hud2.position.y = 0.25 + Math.sin(elapsedTime * 2 + 2) * 0.04;

      // Floating gems
      gem1.rotation.y = elapsedTime * 1.2;
      gem1.rotation.x = elapsedTime * 0.8;
      gem1.position.y = 1.2 + Math.sin(elapsedTime * 1.5) * 0.08;

      gem2.rotation.y = -elapsedTime * 1.4;
      gem2.rotation.z = elapsedTime * 0.9;
      gem2.position.y = 1.4 + Math.sin(elapsedTime * 1.7 + 1) * 0.08;

      // Particles slow drift
      particles.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handling with ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });

    resizeObserver.observe(container);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      knotGeo.dispose();
      knotMat.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      partGeo.dispose();
      partMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
    >
      <div className="absolute inset-0 bg-radial from-purple-500/10 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />
      <div className="absolute bottom-2 text-xs font-mono text-purple-300/60 bg-purple-950/40 px-3 py-1 rounded-full border border-purple-500/20 backdrop-blur-sm pointer-events-none">
        ✦ Déplacez la souris pour interagir en 3D
      </div>
    </div>
  );
};
