import React, { useEffect, useRef } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = ['#003cc1', '#001e5e', '#01319d', '#002880'];

    class Particle {
      constructor(x, y, effect) {
        this.originX = x;
        this.originY = y;
        this.effect = effect;
        this.x = Math.floor(x);
        this.y = Math.floor(y);
        this.ctx = this.effect.ctx;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.ease = 0.2;
        this.friction = 0.95;
        this.dx = 0;
        this.dy = 0;
        this.distance = 0;
        this.force = 0;
        this.angle = 0;
        this.size = Math.floor(Math.random() * 5) + 2; // Size of the particles
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.draw();
      }

      draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(45 * Math.PI / 180);
        this.ctx.fillStyle = this.color; // Color of the particles
        this.ctx.shadowColor = this.color;
        this.ctx.shadowBlur = 4;
        this.ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        this.ctx.restore();
      }

      update() {
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = -this.effect.mouse.radius / this.distance * 8;

        if (this.distance < this.effect.mouse.radius) {
          this.angle = Math.atan2(this.dy, this.dx);
          this.vx += this.force * Math.cos(this.angle);
          this.vy += this.force * Math.sin(this.angle);
        }

        this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;

        // Add random floating movement
        this.x += Math.sin((Math.random() - 0.5) * 0.2);
        this.y += Math.cos((Math.random() - 0.5) * 0.2);

        this.draw();
      }
    }

    class Effect {
      constructor(width, height, context) {
        this.width = width;
        this.height = height;
        this.ctx = context;
        this.particlesArray = [];
        this.gap = 50; // Increased gap to reduce the number of particles
        this.mouse = {
          radius: 3000,
          x: 0,
          y: 0
        };
        window.addEventListener('mousemove', (e) => {
          this.mouse.x = e.clientX * window.devicePixelRatio;
          this.mouse.y = e.pageY * window.devicePixelRatio;
        });

        this.init();
      }

      init() {
        for (let x = 0; x < this.width; x += this.gap) {
          for (let y = 0; y < this.height; y += this.gap) {
            this.particlesArray.push(new Particle(x, y, this));
          }
        }
      }

      update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (let i = 0; i < this.particlesArray.length; i++) {
          this.particlesArray[i].update();
        }
      }
    }

    const effect = new Effect(canvas.width, canvas.height, ctx);

    function animate() {
      effect.update();
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>;
};

export default ParticleCanvas;
