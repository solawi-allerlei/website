<template>
<svg width="220" height="220" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">

  <!-- Erster Bogen: ROT -->
  <path
    d="M 100,40
       a 60,60 0 1,1 0,120"
    stroke="red"
    stroke-width="4"
    fill="none"
  />

  <!-- Zweiter Bogen: BLAU -->
  <path
    d="M 100,160
       a 60,60 0 1,1 0,-120"
    stroke="blue"
    stroke-width="4"
    fill="none"
  />

  <!-- Mittelpunkt zur Orientierung -->
  <circle cx="100" cy="100" r="2" fill="black" />
</svg>

<svg width="220" height="220" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Kreis -->
  <circle cx="100" cy="100" r="80" fill="none" stroke="lightgray" stroke-width="2" />

  <!-- Nord-Bogen -->
  <path id="arc-north" d="M 60,60 A 80,80 0 0,1 140,60" fill="none" stroke="red" />
  <text font-size="14" fill="black">
    <textPath href="#arc-north" startOffset="50%" text-anchor="middle">Norden</textPath>
  </text>

  <!-- Ost-Bogen -->
  <path id="arc-east" d="M 140,60 A 80,80 0 0,1 140,140" fill="none" stroke="blue" />
  <text font-size="14" fill="black">
    <textPath href="#arc-east" startOffset="50%" text-anchor="middle">Osten</textPath>
  </text>

  <!-- Süd-Bogen -->
  <path id="arc-south" d="M 140,140 A 80,80 0 0,1 60,140" fill="none" stroke="green" />
  <text font-size="14" fill="black">
    <textPath href="#arc-south" startOffset="50%" text-anchor="middle">Süden</textPath>
  </text>

  <!-- West-Bogen -->
  <path id="arc-west" d="M 60,140 A 80,80 0 0,1 60,60" fill="none" stroke="orange" />
  <text font-size="14" fill="black">
    <textPath href="#arc-west" startOffset="50%" text-anchor="middle">Westen</textPath>
  </text>
</svg>


<svg width="220" height="220" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Kreis -->
  <circle cx="100" cy="100" r="80" fill="none" stroke="lightgray" stroke-width="2" />

  <!-- Nord-Bogen -->
  <path id="arc-north" d="M 60,60 A 80,80 0 0,1 140,60" fill="none" stroke="red" />
  <text font-size="14" fill="black">
    <textPath href="#arc-north" startOffset="50%" text-anchor="middle">Norden</textPath>
  </text>

  <!-- Süd-Bogen -->
  <path id="arc-south" d="M 140,140 A 80,80 0 0,1 60,140" fill="none" stroke="green" />
  <text font-size="14" fill="black">
    <textPath href="#arc-south" startOffset="50%" text-anchor="middle">Süden</textPath>
  </text>
</svg>

<div style="position: relative; width: 260px; height: 260px; display: inline-block;">
  <!-- SVG Kreis -->
  <svg width="260" height="260" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="60" fill="#e6f2fa" />
  </svg>

  <!-- Text oben drüber -->
  <div style="
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    font-weight: bold;
    color: black;
  ">
    Gemüse
  </div>
</div>

<svg width="220" height="220" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- sichtbarer Kreis -->
  <circle cx="100" cy="100" r="60" fill="#e6f2fa" />

  <path
    id="circlePath"
    d="M 100,160
       a 60,60 0 1,1 0,-120
       a 60,60 0 1,1 0,120"
    fill="none"
    stroke="none"
  />

  <!-- Text entlang des Kreises -->
  <text font-size="18" font-weight="600" fill="black" text-anchor="middle">
    <textPath href="#circlePath" startOffset="50%">
      Gemüse
    </textPath>
  </text>
</svg>

</template>