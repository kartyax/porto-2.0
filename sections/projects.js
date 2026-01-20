document.getElementById('projects-container').innerHTML = `
    <!-- PROJECTS SECTION -->
    <section class="projects-section" id="projects">
        <div class="projects-container">
            <h2 class="section-title-main">MY PROJECTS</h2>
            <p class="section-subtitle" id="projectSubtitle">Select Your Level</p>

            <!-- Level Selector (Initial View) -->
            <div class="level-selector" id="levelSelector">
                <div class="level-card" data-level="1">
                    <div class="level-icon">I</div>
                    <h3 class="level-title">LEVEL EZ</h3>
                    <p class="level-desc">Beginner Projects</p>
                    <div class="level-badge">4 Projects</div>
                </div>

                <div class="level-card" data-level="2">
                    <div class="level-icon">II</div>
                    <h3 class="level-title">LEVEL NORMAL</h3>
                    <p class="level-desc">Intermediate Projects</p>
                    <div class="level-badge">4 Projects</div>
                </div>

                <div class="level-card" data-level="3">
                    <div class="level-icon">III</div>
                    <h3 class="level-title">LEVEL HARD</h3>
                    <p class="level-desc">Iki Angel poll suu</p>
                    <div class="level-badge">4 Projects</div>
                </div>
            </div>

            <!-- Projects Grid (Hidden by default) -->
            <div class="projects-grid" id="projectsGrid" style="display: none;">
                <!-- Back Button -->
                <button class="back-to-levels pixel-btn secondary" id="backToLevels">
                    ◄ Back to Levels
                </button>

                <!-- Level 1 Projects -->
                <div class="level-projects" data-level="1" style="display: none;">
                    <div class="project-card">
                        <div class="project-image">
                            <div class="image-placeholder">🎮</div>
                            <div class="project-badge">STAGE 1-1</div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">Portfolio Website</h3>
                            <p class="project-desc">Pixel art themed portfolio dengan animasi retro dan interactive
                                elements.</p>
                            <div class="project-tech">
                                <span class="tech-tag">HTML</span>
                                <span class="tech-tag">CSS</span>
                                <span class="tech-tag">JS</span>
                            </div>
                            <div class="project-actions">
                                <button class="pixel-btn-small primary">PLAY</button>
                                <button class="pixel-btn-small secondary">CODE</button>
                            </div>
                        </div>
                    </div>

                    <div class="project-card">
                        <div class="project-image">
                            <div class="image-placeholder">📝</div>
                            <div class="project-badge">STAGE 1-2</div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">Todo App</h3>
                            <p class="project-desc">Simple task manager dengan local storage dan clean UI design.</p>
                            <div class="project-tech">
                                <span class="tech-tag">HTML</span>
                                <span class="tech-tag">CSS</span>
                                <span class="tech-tag">JS</span>
                            </div>
                            <div class="project-actions">
                                <button class="pixel-btn-small primary">PLAY</button>
                                <button class="pixel-btn-small secondary">CODE</button>
                            </div>
                        </div>
                    </div>

                    <div class="project-card">
                        <div class="project-image">
                            <div class="image-placeholder">🎨</div>
                            <div class="project-badge">STAGE 1-3</div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">Color Palette Generator</h3>
                            <p class="project-desc">Tool untuk generate color scheme untuk design projects.</p>
                            <div class="project-tech">
                                <span class="tech-tag">HTML</span>
                                <span class="tech-tag">CSS</span>
                                <span class="tech-tag">JS</span>
                            </div>
                            <div class="project-actions">
                                <button class="pixel-btn-small primary">PLAY</button>
                                <button class="pixel-btn-small secondary">CODE</button>
                            </div>
                        </div>
                    </div>

                    <div class="project-card">
                        <div class="project-image">
                            <div class="image-placeholder">🌤️</div>
                            <div class="project-badge">STAGE 1-4</div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">Weather App</h3>
                            <p class="project-desc">Real-time weather application dengan API integration.</p>
                            <div class="project-tech">
                                <span class="tech-tag">HTML</span>
                                <span class="tech-tag">CSS</span>
                                <span class="tech-tag">API</span>
                            </div>
                            <div class="project-actions">
                                <button class="pixel-btn-small primary">PLAY</button>
                                <button class="pixel-btn-small secondary">CODE</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Level 2 Projects -->
                <div class="level-projects" data-level="2" style="display: none;">
                    <div class="project-card">
                        <div class="project-image">
                            <div class="image-placeholder">🛒</div>
                            <div class="project-badge">STAGE 2-1</div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">E-Commerce App</h3>
                            <p class="project-desc">Modern shopping application dengan payment gateway integration.</p>
                            <div class="project-tech">
                                <span class="tech-tag">React</span>
                                <span class="tech-tag">Node</span>
                                <span class="tech-tag">MySQL</span>
                            </div>
                            <div class="project-actions">
                                <button class="pixel-btn-small primary">PLAY</button>
                                <button class="pixel-btn-small secondary">CODE</button>
                            </div>
                        </div>
                    </div>

                    <div class="project-card">
                        <div class="project-image">
                            <div class="image-placeholder">💬</div>
                            <div class="project-badge">STAGE 2-2</div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">Chat Application</h3>
                            <p class="project-desc">Real-time messaging app dengan WebSocket technology.</p>
                            <div class="project-tech">
                                <span class="tech-tag">React</span>
                                <span class="tech-tag">Socket.io</span>
                                <span class="tech-tag">Node</span>
                            </div>
                            <div class="project-actions">
                                <button class="pixel-btn-small primary">PLAY</button>
                                <button class="pixel-btn-small secondary">CODE</button>
                            </div>
                        </div>
                    </div>

                    <div class="project-card">
                        <div class="project-image">
                            <div class="image-placeholder">📱</div>
                            <div class="project-badge">STAGE 2-3</div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">Task Manager Pro</h3>
                            <p class="project-desc">Productivity app untuk mengelola tugas dan project dengan kanban
                                board.</p>
                            <div class="project-tech">
                                <span class="tech-tag">Vue</span>
                                <span class="tech-tag">Firebase</span>
                                <span class="tech-tag">PWA</span>
                            </div>
                            <div class="project-actions">
                                <button class="pixel-btn-small primary">PLAY</button>
                                <button class="pixel-btn-small secondary">CODE</button>
                            </div>
                        </div>
                    </div>

                    <div class="project-card">
                        <div class="project-image">
                            <div class="image-placeholder">📊</div>
                            <div class="project-badge">STAGE 2-4</div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">Analytics Dashboard</h3>
                            <p class="project-desc">Data visualization dashboard dengan interactive charts.</p>
                            <div class="project-tech">
                                <span class="tech-tag">React</span>
                                <span class="tech-tag">D3.js</span>
                                <span class="tech-tag">API</span>
                            </div>
                            <div class="project-actions">
                                <button class="pixel-btn-small primary">PLAY</button>
                                <button class="pixel-btn-small secondary">CODE</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Level 3 Projects -->
                <div class="level-projects" data-level="3" style="display: none;">
                    <div class="project-card">
                        <div class="project-image">
                            <div class="image-placeholder">🎨</div>
                            <div class="project-badge">STAGE 3-1</div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">Design System</h3>
                            <p class="project-desc">Component library dan design tokens untuk consistency across
                                projects.</p>
                            <div class="project-tech">
                                <span class="tech-tag">Figma</span>
                                <span class="tech-tag">Storybook</span>
                                <span class="tech-tag">SCSS</span>
                            </div>
                            <div class="project-actions">
                                <button class="pixel-btn-small primary">PLAY</button>
                                <button class="pixel-btn-small secondary">CODE</button>
                            </div>
                        </div>
                    </div>

                    <div class="project-card">
                        <div class="project-image">
                            <div class="image-placeholder">🤖</div>
                            <div class="project-badge">STAGE 3-2</div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">AI Chatbot</h3>
                            <p class="project-desc">Intelligent chatbot dengan natural language processing.</p>
                            <div class="project-tech">
                                <span class="tech-tag">Python</span>
                                <span class="tech-tag">TensorFlow</span>
                                <span class="tech-tag">Flask</span>
                            </div>
                            <div class="project-actions">
                                <button class="pixel-btn-small primary">PLAY</button>
                                <button class="pixel-btn-small secondary">CODE</button>
                            </div>
                        </div>
                    </div>

                    <div class="project-card">
                        <div class="project-image">
                            <div class="image-placeholder">🔐</div>
                            <div class="project-badge">STAGE 3-3</div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">Auth System</h3>
                            <p class="project-desc">Secure authentication system dengan JWT dan OAuth integration.</p>
                            <div class="project-tech">
                                <span class="tech-tag">Node</span>
                                <span class="tech-tag">JWT</span>
                                <span class="tech-tag">Redis</span>
                            </div>
                            <div class="project-actions">
                                <button class="pixel-btn-small primary">PLAY</button>
                                <button class="pixel-btn-small secondary">CODE</button>
                            </div>
                        </div>
                    </div>

                    <div class="project-card">
                        <div class="project-image">
                            <div class="image-placeholder">☁️</div>
                            <div class="project-badge">STAGE 3-4</div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">Cloud Storage</h3>
                            <p class="project-desc">File storage system dengan AWS S3 integration dan CDN.</p>
                            <div class="project-tech">
                                <span class="tech-tag">AWS</span>
                                <span class="tech-tag">Node</span>
                                <span class="tech-tag">Docker</span>
                            </div>
                            <div class="project-actions">
                                <button class="pixel-btn-small primary">PLAY</button>
                                <button class="pixel-btn-small secondary">CODE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
