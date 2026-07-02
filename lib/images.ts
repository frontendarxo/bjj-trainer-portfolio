export const imagePaths = {
  hero: "/images/imam-hero.jpg",
  podium01: "/images/imam-podium-01.jpg",
  podium02: "/images/imam-podium-02.jpg",
  podium03: "/images/imam-podium-03.jpg",
  portrait: "/images/imam-portrait.jpg",
  training: "/images/imam-portrait.jpg"
} as const;

export const galleryImages = [
  {
    src: imagePaths.podium01,
    alt: "Imam Getsiev on the podium at Khaled bin Mohamed bin Zayed Jiu-Jitsu Championship",
    label: "Khaled bin Mohamed bin Zayed Jiu-Jitsu Championship"
  },
  {
    src: imagePaths.podium02,
    alt: "Imam Getsiev winning gold at the Khaled bin Mohamed bin Zayed Jiu-Jitsu Championship",
    label: "Round 3 podium"
  },
  {
    src: imagePaths.podium03,
    alt: "Imam Getsiev on the podium at AJP Tour Grappling Grand Prix Abu Dhabi",
    label: "AJP Grappling Grand Prix Abu Dhabi"
  },
  {
    src: imagePaths.portrait,
    alt: "Portrait of Imam Getsiev in training environment",
    label: "Training profile"
  }
] as const;
