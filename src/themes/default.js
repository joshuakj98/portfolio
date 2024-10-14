export default {
  // Updated fonts
  fonts: {
    title: "'Roboto', sans-serif",
    main: "'Roboto', sans-serif"
  },
  
  // Colors for layout
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",  // Original primary color (light grey)
    background1: "#0F1624",  // Original dark blue background color
    accent1: "hsl(34.9,98.6%,72.9%)",  // Original accent color (soft orange)
    button: "hsl(205.1,100%,36.1%)",  // Original button color (blue)
    background2: "hsl(232.7,27.3%,23.7%)",  // Original secondary background
    shadowColor: "rgba(0, 0, 0, 0.2)"
  },
  
  // Shadows for depth
  shadows: {
    button: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    card: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)"
  },
  
  // Border radius
  borderRadius: {
    button: "8px",
    card: "12px"
  },

  // Gradients
  gradients: {
    button: "linear-gradient(90deg, #FF5858, #FB5878)",  // Gradient for buttons
    background: "linear-gradient(135deg, #0D4F4F,  #0F1624 )"  // Updated background gradient
  },

  // Spacing
  spacing: {
    sectionPadding: "60px",
    cardPadding: "20px"
  },

  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  }
}