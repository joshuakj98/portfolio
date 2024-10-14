export const projects = [
  {
    title: "Wearable Drone Controller",
    description: `
      Designed and implemented a prototype for a wearable drone controller using a gyroscope and joystick setup. Extensively tested in Microsoft AirSim and physical trials for usability and comfort.
    `,
    tags: ["C++", "Arduino", "Python"],
    image: '/images/drone_controller.png',  // Correct relative path
    visit: "https://github.com/yourusername/wearable-drone-controller",  // Placeholder for GitHub link
  },
  {
    title: "SenseRover - Autonomous Rover with SLAM",
    description: `
      Developed an autonomous rover using SLAM to explore unknown environments. Implemented Apriltag detection and collaborated with the SLAM team to integrate landmark recognition for navigation.
    `,
    tags: ["Python", "MATLAB", "C++"],
    image: '/images/slam.png',
    visit: "https://github.com/yourusername/senserover",  // Placeholder for GitHub link
  },
  {
    title: "LLMs in QA - Fine-Tuning Models",
    description: `
      Evaluated and fine-tuned BERT and Flan-T5 models on SQuAD and CoQA datasets for question-answering tasks, exploring strategies for spatial and analytical reasoning improvements.
    `,
    tags: ["Python", "HuggingFace"],
    image: '/images/llm.png',
    visit: "https://github.com/yourusername/llms-qa",  // Placeholder for GitHub link
  },
  {
    title: "Dynamic-Mini-VIT",
    description: `
      Applied dynamic layering techniques to the mini-VIT Transformer for object classification. Analyzed and compared model performance against baseline Mini-VIT.
    `,
    tags: ["Python", "PyTorch", "SLURM"],
    image: '/images/deeplearning.jpg',
    visit: "https://github.com/yourusername/dynamic-mini-vit",  // Placeholder for GitHub link
  },
  {
    title: "Virtual Try-On",
    description: `
      Developed a framework for generating photo-realistic try-on images, handling occluded poses and complex garment warping using ClothFlow and PF-AFN models.
    `,
    tags: ["OpenCV", "PyTorch"],
    image: '/images/VTON.png',
    visit: "https://github.com/yourusername/virtual-try-on",  // Placeholder for GitHub link
  },
  {
    title: "Autonomous Seafloor Mapping - CPP Algorithm",
    description: `
      Designed and tested a novel Coverage Path Planning (CPP) algorithm for mapping underwater areas using SONAR data.
    `,
    tags: ["Python", "ROS"],
    image: '/images/seafloor_mapping.png',
    visit: "https://github.com/yourusername/seafloor-mapping",  // Placeholder for GitHub link
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];