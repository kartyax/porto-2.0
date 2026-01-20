# Portfolio - Pixel Art Theme

A retro pixel art themed portfolio website showcasing my projects, skills, and background. Built with pure HTML, CSS, and JavaScript with a nostalgic arcade game aesthetic.

![Portfolio Preview](assets/preview.png)

## ✨ Features

### 🎨 Design
- **Pixel Art Aesthetic**: Monochrome dark theme with retro gaming vibes
- **Responsive Design**: Works seamlessly across all devices
- **Smooth Animations**: Custom animations and transitions throughout
- **Interactive Elements**: Hover effects, click feedback, and dynamic content

### 📱 Sections

#### 1. **Hero Section**
- Video background with overlay
- Glitch text animation
- Typewriter effect for main title
- CTA buttons with ripple effects

#### 2. **About Section**
- Visual novel-style dialog system
- Character sprites with transitions
- Dynamic background changes
- Keyboard navigation support (Arrow keys, Enter, Space)
- Typewriter text effect with retro sound

#### 3. **Projects Section**
- **Level Selector**: Arcade-style level selection (Easy, Normal, Hard)
- **Carousel View**: 
  - Smooth card transitions
  - Navigation arrows (keyboard & click)
  - Dot indicators
  - Project counter
  - Responsive across different zoom levels
- **Project Cards**: 
  - Lock/unlock status badges
  - Sheen hover effects
  - Tech stack tags

#### 4. **Skills Section**
- Categorized skill display
- Progress bars with animations
- Pixel-style badges

#### 5. **Contact Section**
- Terminal-style contact form
- Interactive input fields
- Success message modal
- Social media links

### 🎮 Interactive Features

- **Smooth Scrolling**: Custom easing animation for navigation
- **Navbar**: Auto-hide on scroll with active link highlighting
- **Pixel Particles**: Animated background particles
- **Button Ripples**: Interactive click feedback
- **Dialog System**: Full keyboard and mouse navigation
- **Carousel Controls**: Mouse, keyboard, and touch support

## 🗂️ Project Structure

```
Porto.2.0/
├── index.html              # Main HTML file
├── README.md               # This file
├── assets/                 # Images, videos, sprites
│   ├── pixel-removebg-preview.png
│   ├── pixel2-removebg-preview.png
│   ├── pixel3-removebg-preview.png
│   ├── pixel4-removebg-preview.png
│   ├── pixel5-removebg-preview.png
│   ├── hacker.png
│   ├── hackerroom.png
│   ├── gudangserver.png
│   ├── udinus.png
│   └── video.webm
├── css/                    # Modular CSS files
│   ├── base.css           # Variables, reset, global styles
│   ├── utilities.css      # Utility classes
│   ├── navbar.css         # Navigation bar styles
│   ├── hero.css           # Hero section styles
│   ├── about.css          # About section styles
│   ├── projects.css       # Projects section layout
│   ├── level-selector.css # Level selector cards
│   ├── carousel.css       # Carousel component
│   ├── skills.css         # Skills section styles
│   └── contact.css        # Contact section styles
├── js/                     # JavaScript files
│   └── script.js          # Main application logic
└── sections/               # Dynamic content injection
    ├── about.js           # About section content
    ├── projects.js        # Projects section content
    ├── skills.js          # Skills section content
    └── contact.js         # Contact section content
```

## 🚀 Setup & Usage

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kartyax/Porto.2.0.git
   cd Porto.2.0
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # On Windows:
   start index.html
   
   # On macOS:
   open index.html
   
   # On Linux:
   xdg-open index.html
   ```

   Or use a local server (recommended):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx http-server
   
   # PHP
   php -S localhost:8000
   ```

3. **Access the site**
   - Direct file: `file:///path/to/Porto.2.0/index.html`
   - Local server: `http://localhost:8000`

## 🎯 Customization

### Update Content

#### About Section
Edit `sections/about.js` - Modify the `dialogData` array:
```javascript
const dialogData = [
    {
        character: "Your Name",
        text: "Your story here...",
        sprite: "assets/your-sprite.png",
        bgImage: "assets/your-background.png" // Optional
    },
    // Add more dialog entries...
];
```

#### Projects
Edit `sections/projects.js` - Update project cards in each level:
```html
<div class="project-card">
    <div class="project-image">
        <span class="image-placeholder">🚀</span>
        <div class="project-badge">NEW</div>
    </div>
    <div class="project-content">
        <h3 class="project-title">YOUR PROJECT</h3>
        <p class="project-desc">Description...</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
        </div>
        <div class="project-actions">
            <a href="#" class="pixel-btn sm">VIEW</a>
        </div>
    </div>
</div>
```

#### Skills
Edit `sections/skills.js` - Modify skill categories and items.

#### Contact
Edit `sections/contact.js` - Update contact information and social links.

### Styling

All colors and variables are defined in `css/base.css`:
```css
:root {
    --primary-color: #a0a0a0;
    --secondary-color: #4a4a4a;
    --dark-bg: #2c2c2c;
    --darker-bg: #1a1a1a;
    /* Customize as needed */
}
```

## 🎨 Design Philosophy

- **Modular Architecture**: Separated CSS and JS files for easy maintenance
- **Mobile-First**: Responsive design tested on various screen sizes
- **Performance**: Optimized animations and lazy-loaded content
- **Accessibility**: Keyboard navigation and semantic HTML
- **Nostalgia**: Retro gaming aesthetic with modern web standards

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Animations, Custom Properties
- **Vanilla JavaScript**: No frameworks or libraries
- **Web APIs**: 
  - IntersectionObserver (video playback control)
  - Web Audio API (typewriter sound effects)
  - RequestAnimationFrame (smooth scrolling)

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

### Performance Optimizations
- CSS animations over JavaScript
- Efficient DOM manipulation
- Minimal reflows/repaints
- Optimized image formats (WebP for video)

## 📝 Key Code Highlights

### Carousel System
The project carousel features:
- Dynamic width calculation based on viewport
- Smooth transitions with cubic-bezier easing
- Active card highlighting with scale animation
- Responsive navigation arrows
- Dot indicators with click navigation
- Keyboard support (arrow keys)

### Dialog System
Visual novel-style dialog with:
- Character sprite transitions
- Background image changes with glitch effect
- Typewriter text animation
- Retro audio synthesis for typing sounds
- Full keyboard and mouse control

### Smart Scrolling
Custom smooth scroll implementation with:
- Cubic easing function
- Navbar offset compensation
- Section highlighting on scroll
- Hash navigation support

## 🐛 Known Issues

- Safari may require user interaction to play background video
- Some older browsers may not support CSS Grid fully
- Audio API requires user interaction to start (browser security)

## 🚧 Future Enhancements

- [ ] Add actual project data
- [ ] Implement backend for contact form
- [ ] Add project detail modal
- [ ] Dark/Light theme toggle
- [ ] Multilingual support (ID/EN)
- [ ] Blog section
- [ ] Loading screen animation
- [ ] Achievement system

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Kevin Artya Christian**
- University: Universitas Dian Nuswantoro (UDINUS)
- Focus: Backend Development & Cybersecurity
- [GitHub](https://github.com/YOUR_USERNAME)
- [LinkedIn](https://linkedin.com/in/YOUR_PROFILE)

## 🙏 Acknowledgments

- Inspiration from retro arcade games
- Press Start 2P font by CodeMan38
- Community feedback and testing

---

⭐ If you like this project, please give it a star!

Made with 💙 and lots of ☕
