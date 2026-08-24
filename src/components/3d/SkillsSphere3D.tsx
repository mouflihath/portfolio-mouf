import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SKILLS_DATA } from '../../data/portfolioData';
import { SkillItem } from '../../types';
import { soundFX } from '../../utils/audio';

interface SkillsSphere3DProps {
  onSelectSkill: (skill: SkillItem) => void;
  selectedSkillId: string | null;
}

export const SkillsSphere3D: React.FC<SkillsSphere3DProps> = ({ onSelectSkill, selectedSkillId }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Main rotating group
    const sphereGroup = new THREE.Group();
    scene.add(sphereGroup);

    // Central Glowing Cyber Core
    const coreGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      emissive: 0x9333ea,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: false,
    });
    const coreSphere = new THREE.Mesh(coreGeo, coreMat);
    sphereGroup.add(coreSphere);

    // Outer Wireframe Cage
    const cageGeo = new THREE.IcosahedronGeometry(1.4, 2);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x9333ea,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const cage = new THREE.Mesh(cageGeo, cageMat);
    sphereGroup.add(cage);

    // Orbiting Rings
    const ringGeo = new THREE.TorusGeometry(2.8, 0.015, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x0284c7, transparent: true, opacity: 0.4 });
    const ringA = new THREE.Mesh(ringGeo, ringMat);
    ringA.rotation.x = Math.PI / 4;
    sphereGroup.add(ringA);

    const ringB = new THREE.Mesh(ringGeo, ringMat);
    ringB.rotation.y = Math.PI / 3;
    sphereGroup.add(ringB);

    // Tech Nodes on Fibonacci Sphere Distribution
    const nodes: { mesh: THREE.Mesh; skill: SkillItem; basePos: THREE.Vector3 }[] = [];
    const radius = 2.6;
    const count = SKILLS_DATA.length;

    SKILLS_DATA.forEach((skill, i) => {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      const basePos = new THREE.Vector3(x, y, z);

      // Create glowing sprite/badge texture for the tech
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 100;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Rounded card background in crisp white
        ctx.fillStyle = 'rgba(255, 255, 255, 0.98)';
        ctx.strokeStyle = skill.color;
        ctx.lineWidth = 5;
        
        ctx.beginPath();
        ctx.roundRect(6, 6, 244, 88, 20);
        ctx.fill();
        ctx.stroke();

        // Glowing colorful dot
        ctx.fillStyle = skill.color;
        ctx.beginPath();
        ctx.arc(36, 50, 11, 0, Math.PI * 2);
        ctx.fill();

        // Skill Name Text in crisp black
        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 26px sans-serif';
        ctx.fillText(skill.name, 58, 48);

        // Level text in colored bold
        ctx.fillStyle = skill.color;
        ctx.font = 'bold 18px monospace';
        ctx.fillText(`${skill.level}%`, 58, 74);
      }

      const texture = new THREE.CanvasTexture(canvas);
      const nodeGeo = new THREE.PlaneGeometry(0.9, 0.36);
      const nodeMat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(basePos);
      nodeMesh.userData = { skill };

      // Line connecting to center
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(skill.color),
        transparent: true,
        opacity: 0.25,
      });
      const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), basePos]);
      const line = new THREE.Line(lineGeo, lineMat);
      sphereGroup.add(line);

      sphereGroup.add(nodeMesh);
      nodes.push({ mesh: nodeMesh, skill, basePos });
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 4, 15);
    purpleLight.position.set(3, 3, 4);
    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 4, 15);
    cyanLight.position.set(-3, -3, 4);
    scene.add(cyanLight);

    // Raycasting for mouse interactions
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-100, -100);

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0.002, y: 0.003 };

    const handlePointerDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        sphereGroup.rotation.y += deltaX * 0.008;
        sphereGroup.rotation.x += deltaY * 0.008;

        rotationVelocity = { x: deltaY * 0.0005, y: deltaX * 0.0005 };
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const handleClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodes.map(n => n.mesh));
      if (intersects.length > 0) {
        const skill = intersects[0].object.userData.skill as SkillItem;
        if (skill) {
          soundFX.playClick();
          onSelectSkill(skill);
        }
      }
    };

    container.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);
    container.addEventListener('click', handleClick);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous gentle rotation if not actively dragging
      if (!isDragging) {
        sphereGroup.rotation.y += rotationVelocity.y;
        sphereGroup.rotation.x += rotationVelocity.x;
        // Friction to return to steady pace
        rotationVelocity.y = THREE.MathUtils.lerp(rotationVelocity.y, 0.003, 0.02);
        rotationVelocity.x = THREE.MathUtils.lerp(rotationVelocity.x, 0.001, 0.02);
      }

      // Core pulsating effect
      coreSphere.scale.setScalar(1 + Math.sin(elapsedTime * 3) * 0.05);
      cage.rotation.y = elapsedTime * 0.15;
      cage.rotation.z = elapsedTime * 0.1;

      // Always make billboards face the camera
      nodes.forEach(({ mesh, skill }) => {
        mesh.quaternion.copy(camera.quaternion);

        // Highlight selected or hovered node
        if (selectedSkillId === skill.id) {
          mesh.scale.setScalar(1.25);
        } else {
          mesh.scale.setScalar(1.0);
        }
      });

      // Hover Raycasting
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodes.map(n => n.mesh));
      if (intersects.length > 0) {
        const found = intersects[0].object.userData.skill as SkillItem;
        if (found !== hoveredSkill) {
          setHoveredSkill(found);
          soundFX.playHover();
        }
        container.style.cursor = 'pointer';
      } else {
        if (hoveredSkill) setHoveredSkill(null);
        container.style.cursor = isDragging ? 'grabbing' : 'grab';
      }

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
      container.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      container.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onSelectSkill, selectedSkillId]);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[560px] flex items-center justify-center select-none">
      <div ref={containerRef} className="w-full h-full" />
      
      {/* Interactive Tooltip HUD Overlay */}
      {hoveredSkill && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none z-20">
          <div className="px-4 py-2 rounded-xl bg-slate-900/90 border border-purple-500/40 backdrop-blur-md shadow-2xl flex items-center gap-3 animate-fade-in">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: hoveredSkill.color }} />
            <div>
              <p className="text-sm font-bold text-white flex items-center gap-2">
                {hoveredSkill.name}
                <span className="text-xs font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                  {hoveredSkill.level}%
                </span>
              </p>
              <p className="text-xs text-slate-400 font-mono">Cliquez pour inspecter</p>
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="text-xs font-mono text-cyan-300/70 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20 backdrop-blur-sm">
          ✦ Faites glisser pour pivoter la sphère • Cliquez sur une compétence
        </span>
      </div>
    </div>
  );
};
