# Sunny More - Portfolio Website

A modern, responsive portfolio website showcasing Sunny More's skills as a UI/UX Designer, Graphic Designer, and Front-End Developer.

## Features

### 🎨 Design
- **Futuristic Theme:** Modern, clean design with a futuristic aesthetic
- **Color Scheme:** Blue (#0496ff) and Green (#2dc653) gradient theme
- **Responsive Layout:** Fully responsive design using Bootstrap 5
- **Smooth Animations:** CSS animations and scroll-triggered effects

### 🔧 Functionality
- **Typewriter Effect:** Animated profession titles in hero section
- **Smooth Scrolling:** Navigate between sections seamlessly
- **Animated Skills:** Progress bars with smooth fill animations
- **Portfolio Modals:** Click projects to view details in modal popups
- **Contact Form:** Functional contact form with validation
- **Social Links:** Hover effects on social media icons
- **Resume Download:** Download resume functionality

### 📱 Sections
1. **Hero Section** - Introduction with animated typewriter effect
2. **About Me** - Professional overview and statistics
3. **Skills** - Animated skill bars for design and development tools
4. **Experience** - Timeline view of professional experience
5. **Services** - Service offerings with detailed descriptions
6. **Portfolio** - Project showcase with modal details
7. **Contact** - Contact form and contact information

## Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Custom styling with CSS Grid/Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **Bootstrap 5** - Responsive framework
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Orbitron & Rajdhani)
- **AOS Library** - Scroll animations

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # Custom CSS styles
├── script.js           # JavaScript functionality
├── resume.md           # Resume content
└── README.md           # Project documentation
```

## Setup Instructions

1. **Clone or Download**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using VS Code Live Server extension
   Right-click index.html → "Open with Live Server"
   ```

3. **Customization**
   - Update personal information in `index.html`
   - Modify colors in CSS custom properties
   - Add your actual portfolio images
   - Update social media links in `script.js`
   - Replace resume content in `resume.md`

## Customization Guide

### Personal Information
Update the following sections in `index.html`:
- Hero section name and description
- About section content
- Skills percentages
- Experience details
- Contact information

### Colors
Modify the color scheme in `style.css`:
```css
:root {
    --primary-blue: #0496ff;
    --primary-green: #2dc653;
    /* Add more custom colors */
}
```

### Portfolio Projects
1. Replace placeholder project content
2. Add actual project images
3. Update project descriptions and technologies
4. Modify modal content for each project

### Social Media Links
Update URLs in `script.js`:
```javascript
const socialURLs = {
    'fa-linkedin-in': 'your-linkedin-url',
    'fa-behance': 'your-behance-url',
    'fa-github': 'your-github-url'
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- Optimized CSS with custom properties
- Debounced scroll events
- Efficient animations using CSS transforms
- Compressed external libraries via CDN
- Semantic HTML for better SEO

## Accessibility Features

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly

## Future Enhancements

- [ ] Add actual portfolio project images
- [ ] Implement backend for contact form
- [ ] Add blog section
- [ ] Include testimonials
- [ ] Add dark/light theme toggle
- [ ] Implement PWA features
- [ ] Add Google Analytics
- [ ] Optimize for Core Web Vitals

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or customization requests:
- **Email:** sunny.more@email.com
- **LinkedIn:** [linkedin.com/in/sunny-more](https://linkedin.com/in/sunny-more)
- **Portfolio:** [Your Website URL]

---

**Made with 💙 by Sunny More**
