// Define particle class
class Particle {
    constructor(x, y, vx, vy, radius) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.radius = radius;
    }
  
    move() {
      // Update position based on velocity
      this.x += this.vx;
      this.y += this.vy;
  
      // Check for collision with the walls
      if (this.x <= this.radius || this.x >= width - this.radius) {
        this.vx *= -1;
      }
      if (this.y <= this.radius || this.y >= height - this.radius) {
        this.vy *= -1;
      }
    }
  
    display() {
      // Draw particle
      ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    }
  }
  
  let particles = [];
  
  function setup() {
    createCanvas(800, 600);
    // Create particles
    for (let i = 0; i < 100; i++) {
      let radius = 10;
      let x = random(radius, width - radius);
      let y = random(radius, height - radius);
      let vx = random(-2, 2);
      let vy = random(-2, 2);
      particles.push(new Particle(x, y, vx, vy, radius));
    }
  }
  
  function draw() {
    background(255);
    // Update and display particles
    for (let particle of particles) {
      particle.move();
      particle.display();
    }
  }
  