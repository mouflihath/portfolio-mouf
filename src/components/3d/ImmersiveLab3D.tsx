import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Terminal, Code, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { soundFX } from '../../utils/audio';

type ScreenMode = 'terminal' | 'code' | 'security' | 'matrix';

export const ImmersiveLab3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [screenMode, setScreenMode] = useState<ScreenMode>('code');
  const screenTextureRef = useRef<THREE.CanvasTexture | null>(null);
  const screenCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Redraw laptop screen canvas when mode changes
  useEffect(() => {
    const canvas = screenCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#050814';
    ctx.fillRect(0, 0, 512, 320);

    // Grid backdrop
    ctx.strokeStyle = 'rgba(168, 85, 247, 0.15)';
    ctx.lineWidth = 1;
    for (let x = 0; x < 512; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 320);
      ctx.stroke();
    }
    for (let y = 0; y < 320; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();
    }

    if (screenMode === 'code') {
      ctx.fillStyle = '#06b6d4';
      ctx.font = 'bold 18px monospace';
      ctx.fillText('// MouflihathDigitalCore.tsx', 20, 35);
      
      ctx.fillStyle = '#c084fc';
      ctx.font = '14px monospace';
      ctx.fillText('import { EnergyGroup, EcoLogistics, HygieAI } from "@sadikou/core";', 20, 70);
      ctx.fillStyle = '#f472b6';
      ctx.fillText('export async function launchDigitalExperience() {', 20, 100);
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('  const energyEngine = await deploy("ENERGY GROUP", { iot: true });', 20, 130);
      ctx.fillStyle = '#34d399';
      ctx.fillText('  const logisticsApp = await deploy("LES COURSIERS DU COIN");', 20, 160);
      ctx.fillStyle = '#fcd34d';
      ctx.fillText('  const eHealthApp = await deploy("HYGIE+", { speed: "99.9%" });', 20, 190);
      ctx.fillStyle = '#a855f7';
      ctx.fillText('  return { status: "ONLINE", dev: "Mouflihath SADIKOU", security: "100%" };', 20, 220);
      ctx.fillStyle = '#f472b6';
      ctx.fillText('}', 20, 250);
      ctx.fillStyle = '#10b981';
      ctx.fillText('✓ Compilation réussie [0 errors, 0 warnings]', 20, 290);
    } else if (screenMode === 'terminal') {
      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 16px monospace';
      ctx.fillText('mouflihath@sadikou-realm:~$ status --all', 20, 35);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '13px monospace';
      ctx.fillText('[SYSTEM] Memory: 64GB DDR5 | GPU: Three.js WebGL Core', 20, 65);
      ctx.fillText('[NETWORK] Latency: 12ms | TLS 1.3 Strict Enforced', 20, 90);
      ctx.fillText('[STACK] Laravel 11.x + React 19.x + MySQL + IoT + WebSockets', 20, 115);
      ctx.fillStyle = '#10b981';
      ctx.fillText('[ENERGY GROUP] SaaS IoT Telemetry: Active (240 nodes)', 20, 140);
      ctx.fillStyle = '#f59e0b';
      ctx.fillText('[COURSIERS DU COIN] GPS Dispatch: 98% deliveries on-time', 20, 165);
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('[HYGIE+] HealthTech API: Listening on port 443 (Healthy)', 20, 190);
      ctx.fillStyle = '#ec4899';
      ctx.fillText('[CYBER-SHIELD] Zero vulnerabilities detected.', 20, 215);
      ctx.fillStyle = '#a855f7';
      ctx.fillText('mouflihath@sadikou-realm:~$ _ [Cursor active]', 20, 250);
    } else if (screenMode === 'security') {
      ctx.fillStyle = '#06b6d4';
      ctx.font = 'bold 20px monospace';
      ctx.fillText('🛡️ CYBER-SHIELD FIREWALL MATRIX', 20, 40);
      ctx.fillStyle = '#34d399';
      ctx.font = '15px monospace';
      ctx.fillText('● HSTS: PRELOAD_ACTIVE', 20, 80);
      ctx.fillText('● CSP: STRICT-DYNAMIC ENFORCED', 20, 110);
      ctx.fillText('● X-Frame-Options: SAMEORIGIN', 20, 140);
      ctx.fillText('● SQL Injection Filter: 100% BLOCKED', 20, 170);
      ctx.fillText('● XSS Sanitizer: ACTIVE', 20, 200);
      ctx.fillStyle = '#f43f5e';
      ctx.fillText('● Infiltration Attempts: 0 Detected', 20, 235);
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('STATUS: SHIELD FULLY CHARGED', 20, 280);
    } else {
      // Matrix rain mode
      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 16px monospace';
      ctx.fillText('01010011 01000001 01000100 01001001 01001011', 20, 40);
      ctx.fillText('MOUFLIHATH_SADIKOU // FULL-STACK DEV', 20, 75);
      ctx.fillStyle = '#a855f7';
      ctx.fillText('{ "name": "Mouflihath SADIKOU", "status": "Ready to build" }', 20, 115);
      ctx.fillStyle = '#10b981';
      ctx.fillText('>>> ENERGY GROUP SAAS INITIALIZED', 20, 155);
      ctx.fillStyle = '#f59e0b';
      ctx.fillText('>>> LES COURSIERS DU COIN DISPATCH 60 FPS', 20, 195);
      ctx.fillStyle = '#34d399';
      ctx.fillText('>>> PASSION: 100% | INNOVATION: UNLIMITED', 20, 235);
      ctx.fillText('01100011 01110010 01100101 01100001 01110100', 20, 275);
    }

    if (screenTextureRef.current) {
      screenTextureRef.current.needsUpdate = true;
    }
  }, [screenMode]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 550;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050814, 0.05);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 5.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    const labGroup = new THREE.Group();
    scene.add(labGroup);

    // Dynamic Lights
    const ambientLight = new THREE.AmbientLight(0x1e1b4b, 2.5);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 5, 20);
    purpleLight.position.set(3, 4, 3);
    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 4.5, 20);
    cyanLight.position.set(-3, -2, 3);
    scene.add(cyanLight);

    const pinkLight = new THREE.PointLight(0xec4899, 3.5, 15);
    pinkLight.position.set(0, 3, -3);
    scene.add(pinkLight);

    // 1. Central 3D Laptop Construction
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(0, -0.2, 0);
    labGroup.add(laptopGroup);

    // Lower Chassis
    const baseGeo = new THREE.BoxGeometry(2.4, 0.08, 1.6);
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x1e1b4b,
      emissiveIntensity: 0.2,
    });
    const laptopBase = new THREE.Mesh(baseGeo, chassisMat);
    laptopGroup.add(laptopBase);

    // Keyboard Bed & Trackpad
    const trackpadGeo = new THREE.BoxGeometry(0.8, 0.01, 0.5);
    const trackpadMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.4 });
    const trackpad = new THREE.Mesh(trackpadGeo, trackpadMat);
    trackpad.position.set(0, 0.045, 0.4);
    laptopGroup.add(trackpad);

    // Glowing Keyboard illumination
    const kbGeo = new THREE.BoxGeometry(2.0, 0.01, 0.8);
    const kbMat = new THREE.MeshStandardMaterial({
      color: 0x2e1065,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.6,
      roughness: 0.3,
    });
    const keyboard = new THREE.Mesh(kbGeo, kbMat);
    keyboard.position.set(0, 0.045, -0.25);
    laptopGroup.add(keyboard);

    // Laptop Lid (Open at 105 degrees)
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 0.04, -0.8);
    lidGroup.rotation.x = -0.25; // angled back
    laptopGroup.add(lidGroup);

    const lidGeo = new THREE.BoxGeometry(2.4, 1.5, 0.06);
    const lid = new THREE.Mesh(lidGeo, chassisMat);
    lid.position.set(0, 0.75, 0);
    lidGroup.add(lid);

    // Screen Bezel + Screen Canvas
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 320;
    screenCanvasRef.current = canvas;

    const screenTexture = new THREE.CanvasTexture(canvas);
    screenTextureRef.current = screenTexture;

    const screenGeo = new THREE.PlaneGeometry(2.2, 1.35);
    const screenMat = new THREE.MeshBasicMaterial({ map: screenTexture });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0.75, 0.035);
    lidGroup.add(screenMesh);

    // 2. Floating Cyber Cubes & Tech Artifacts around the laptop
    const floatingObjects: { mesh: THREE.Mesh; speedX: number; speedY: number; floatOffset: number }[] = [];

    // Glowing Holographic Cubes
    for (let i = 0; i < 14; i++) {
      const size = 0.15 + Math.random() * 0.25;
      const cubeGeo = new THREE.BoxGeometry(size, size, size);
      const isPurple = Math.random() > 0.5;
      const cubeMat = new THREE.MeshStandardMaterial({
        color: isPurple ? 0xa855f7 : 0x06b6d4,
        emissive: isPurple ? 0x9333ea : 0x0891b2,
        emissiveIntensity: 0.6,
        roughness: 0.2,
        metalness: 0.8,
        transparent: true,
        opacity: 0.85,
      });

      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      const angle = (i / 14) * Math.PI * 2;
      const dist = 2.2 + Math.random() * 1.5;
      cube.position.set(
        Math.cos(angle) * dist,
        (Math.random() - 0.5) * 2.5 + 0.5,
        Math.sin(angle) * dist
      );

      labGroup.add(cube);
      floatingObjects.push({
        mesh: cube,
        speedX: (Math.random() - 0.5) * 0.02,
        speedY: (Math.random() - 0.5) * 0.02,
        floatOffset: Math.random() * Math.PI * 2,
      });
    }

    // 3. Holographic Grid Platform underneath
    const gridHelper = new THREE.GridHelper(10, 20, 0xa855f7, 0x1e1b4b);
    gridHelper.position.y = -1.2;
    labGroup.add(gridHelper);

    // 4. Floating Concentric Hologram Rings
    const ring1Geo = new THREE.TorusGeometry(3.2, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xec4899, transparent: true, opacity: 0.4 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 2;
    ring1.position.y = -0.5;
    labGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(3.6, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.35 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 2.2;
    ring2.position.y = -0.6;
    labGroup.add(ring2);

    // 5. Starfield & Light Stream Particles
    const pCount = 200;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 14;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x67e8f9,
      transparent: true,
      opacity: 0.6,
    });
    const pMesh = new THREE.Points(pGeo, pMat);
    labGroup.add(pMesh);

    // Mouse Tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.8;
      targetY = -y * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      labGroup.rotation.y = currentX * 0.9;
      labGroup.rotation.x = currentY * 0.4;

      // Laptop subtle breathing
      laptopGroup.position.y = -0.2 + Math.sin(elapsedTime * 1.5) * 0.04;

      // Floating cubes
      floatingObjects.forEach(({ mesh, speedX, speedY, floatOffset }) => {
        mesh.rotation.x += speedX;
        mesh.rotation.y += speedY;
        mesh.position.y += Math.sin(elapsedTime * 2 + floatOffset) * 0.003;
      });

      // Rings spin
      ring1.rotation.z = elapsedTime * 0.2;
      ring2.rotation.z = -elapsedTime * 0.15;

      // Particles rotation
      pMesh.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

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
    };
  }, []);

  return (
    <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] rounded-3xl overflow-hidden bg-slate-900 border-2 border-slate-300 shadow-2xl">
      {/* Background Neon Gradients */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-600/30 rounded-full blur-3xl pointer-events-none" />

      {/* 3D Canvas */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing select-none" />

      {/* Interactive Controls Overlay */}
      <div className="absolute top-4 left-4 right-4 sm:right-auto flex flex-wrap items-center gap-2 z-10">
        <span className="text-xs font-mono font-bold text-slate-800 bg-white/90 px-3 py-1.5 rounded-xl border border-slate-200 backdrop-blur-md flex items-center gap-2 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          Écran 3D Interactif :
        </span>

        <div className="flex items-center gap-1.5 bg-white/90 p-1 rounded-xl border border-slate-200 backdrop-blur-md shadow-sm">
          <button
            onClick={() => {
              setScreenMode('code');
              soundFX.playClick();
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
              screenMode === 'code'
                ? 'bg-purple-600 text-white shadow-md font-bold'
                : 'text-slate-600 hover:text-black hover:bg-slate-100'
            }`}
          >
            <Code className="w-3 h-3" />
            Code
          </button>

          <button
            onClick={() => {
              setScreenMode('terminal');
              soundFX.playClick();
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
              screenMode === 'terminal'
                ? 'bg-purple-600 text-white shadow-md font-bold'
                : 'text-slate-600 hover:text-black hover:bg-slate-100'
            }`}
          >
            <Terminal className="w-3 h-3" />
            Terminal
          </button>

          <button
            onClick={() => {
              setScreenMode('security');
              soundFX.playClick();
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
              screenMode === 'security'
                ? 'bg-cyan-600 text-white shadow-md font-bold'
                : 'text-slate-600 hover:text-black hover:bg-slate-100'
            }`}
          >
            <ShieldCheck className="w-3 h-3" />
            Sécurité
          </button>

          <button
            onClick={() => {
              setScreenMode('matrix');
              soundFX.playClick();
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
              screenMode === 'matrix'
                ? 'bg-emerald-600 text-white shadow-md font-bold'
                : 'text-slate-600 hover:text-black hover:bg-slate-100'
            }`}
          >
            <RefreshCw className="w-3 h-3" />
            Matrix
          </button>
        </div>
      </div>

      {/* Floating Badge in Bottom Right */}
      <div className="absolute bottom-4 right-4 pointer-events-none hidden sm:block">
        <div className="px-3.5 py-1.5 rounded-xl bg-black/70 border border-slate-700 backdrop-blur-md text-xs font-mono font-medium text-purple-300">
          ● WebGL 3D Immersion Engine v4.0
        </div>
      </div>
    </div>
  );
};
