// Global variables for the pendulum
let origin; // The pivot point
let len;    // Length of the pendulum's arm
let angle;  // The current angle of the pendulum
let aVel;   // Angular velocity
let aAcc;   // Angular acceleration

// A constant for gravity
const gravity = 0.4;

function setup() {
  createCanvas(600, 400);
  
  // Set the pendulum's origin point at the top-center
  origin = createVector(width / 2, 0);
  
  // Initialize the pendulum's properties
  len = 180;        // Set the length of the arm
  angle = PI / 4;   // Set the initial angle (45 degrees)
  aVel = 0.0;       // Initial angular velocity is zero
  aAcc = 0.0;       // Initial angular acceleration is zero
}

function draw() {
  background(240); // A light gray background

  // --- PHYSICS CALCULATION ---
  // The formula for angular acceleration is: g * sin(θ) / L
  // We add a negative sign because gravity pulls it back toward the center.
  aAcc = (-1 * gravity / len) * sin(angle);
  
  // Update velocity and angle
  aVel += aAcc;   // Add acceleration to velocity
  angle += aVel;  // Add velocity to the angle
  
  // Apply some damping to simulate friction/air resistance
  // This makes the swing gradually smaller, which is more realistic.
  aVel *= 0.999;
  
  // --- DRAWING THE PENDULUM ---
  // Calculate the position of the pendulum's bob (the swinging ball)
  // This converts from polar coordinates (length, angle) to Cartesian (x, y)
  let bobX = len * sin(angle) + origin.x;
  let bobY = len * cos(angle) + origin.y;
  
  // Draw the arm of the pendulum
  stroke(0); // Black color
  strokeWeight(2);
  line(origin.x, origin.y, bobX, bobY);
  
  // Draw the pendulum's bob
  fill(50); // Dark gray color
  ellipse(bobX, bobY, 40, 40);
  
  // Draw the pivot point
  fill(0);
  ellipse(origin.x, origin.y, 10, 10);
}