
const projectsContent = `
<!-- PROJECTS SECTION -->
<section class="projects-section" id="projects">
    <div class="projects-container">
        <h2 class="section-title-main">MY PROJECTS</h2>
        <p class="section-subtitle" id="projectSubtitle">Select Your Level</p>

        <!-- Level Selector (Initial View) -->
        <div class="level-selector scroll-reveal" id="levelSelector">
            <div class="level-card" data-level="1">
                <div class="level-icon">I</div>
                <h3 class="level-title">LEVEL EZ</h3>
                <p class="level-desc">Beginner Projects</p>
                <div class="level-badge">Coming Soon</div>
            </div>

            <div class="level-card" data-level="2">
                <div class="level-icon">II</div>
                <h3 class="level-title">LEVEL NORMAL</h3>
                <p class="level-desc">Intermediate Projects</p>
                <div class="level-badge">Coming Soon</div>
            </div>

            <div class="level-card" data-level="3">
                <div class="level-icon">III</div>
                <h3 class="level-title">LEVEL HARD</h3>
                <p class="level-desc">Iki Angel poll suu</p>
                <div class="level-badge">Coming Soon</div>
            </div>
        </div>

        <!-- Projects Grid (Hidden by default) -->
        <div class="projects-grid" id="projectsGrid" style="display: none;">
            <div class="projects-header">
                <!-- Back Button -->
                <button class="pixel-btn" id="backToLevels">
                    ◄ Back to Levels
                </button>
                <h3 class="project-subtitle" id="projectSubtitle">Level Projects</h3>
            </div>

            <!-- Level 1 Projects -->
            <div class="level-projects" data-level="1" style="display: none;">
                <div class="project-card">
                    <div class="project-image">
                        <span class="image-placeholder">🔒</span>
                        <div class="project-badge">SOON</div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">WILL UPDATE SOON</h3>
                        <p class="project-desc">This project is coming soon. Stay tuned for updates!</p>
                        <div class="project-tech">
                            <span class="tech-tag">SOON</span>
                        </div>
                        <div class="project-actions">
                            <button class="pixel-btn sm" disabled>WAIT</button>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <span class="image-placeholder">🔒</span>
                        <div class="project-badge">SOON</div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">WILL UPDATE SOON</h3>
                        <p class="project-desc">This project is coming soon. Stay tuned for updates!</p>
                        <div class="project-tech">
                            <span class="tech-tag">SOON</span>
                        </div>
                        <div class="project-actions">
                            <button class="pixel-btn sm" disabled>WAIT</button>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <span class="image-placeholder">🔒</span>
                        <div class="project-badge">SOON</div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">WILL UPDATE SOON</h3>
                        <p class="project-desc">This project is coming soon. Stay tuned for updates!</p>
                        <div class="project-tech">
                            <span class="tech-tag">SOON</span>
                        </div>
                        <div class="project-actions">
                            <button class="pixel-btn sm" disabled>WAIT</button>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <span class="image-placeholder">🔒</span>
                        <div class="project-badge">SOON</div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">WILL UPDATE SOON</h3>
                        <p class="project-desc">This project is coming soon. Stay tuned for updates!</p>
                        <div class="project-tech">
                            <span class="tech-tag">SOON</span>
                        </div>
                        <div class="project-actions">
                            <button class="pixel-btn sm" disabled>WAIT</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Level 2 Projects -->
            <div class="level-projects" data-level="2" style="display: none;">
                <div class="project-card">
                    <div class="project-image">
                        <span class="image-placeholder">🔒</span>
                        <div class="project-badge">SOON</div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">WILL UPDATE SOON</h3>
                        <p class="project-desc">This project is coming soon. Stay tuned for updates!</p>
                        <div class="project-tech">
                            <span class="tech-tag">SOON</span>
                        </div>
                        <div class="project-actions">
                            <button class="pixel-btn sm" disabled>WAIT</button>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <span class="image-placeholder">🔒</span>
                        <div class="project-badge">SOON</div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">WILL UPDATE SOON</h3>
                        <p class="project-desc">This project is coming soon. Stay tuned for updates!</p>
                        <div class="project-tech">
                            <span class="tech-tag">SOON</span>
                        </div>
                        <div class="project-actions">
                            <button class="pixel-btn sm" disabled>WAIT</button>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <span class="image-placeholder">🔒</span>
                        <div class="project-badge">SOON</div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">WILL UPDATE SOON</h3>
                        <p class="project-desc">This project is coming soon. Stay tuned for updates!</p>
                        <div class="project-tech">
                            <span class="tech-tag">SOON</span>
                        </div>
                        <div class="project-actions">
                            <button class="pixel-btn sm" disabled>WAIT</button>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <span class="image-placeholder">🔒</span>
                        <div class="project-badge">SOON</div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">WILL UPDATE SOON</h3>
                        <p class="project-desc">This project is coming soon. Stay tuned for updates!</p>
                        <div class="project-tech">
                            <span class="tech-tag">SOON</span>
                        </div>
                        <div class="project-actions">
                            <button class="pixel-btn sm" disabled>WAIT</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Level 3 Projects -->
            <div class="level-projects" data-level="3" style="display: none;">
                <div class="project-card">
                    <div class="project-image">
                        <span class="image-placeholder">🔒</span>
                        <div class="project-badge">SOON</div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">WILL UPDATE SOON</h3>
                        <p class="project-desc">This project is coming soon. Stay tuned for updates!</p>
                        <div class="project-tech">
                            <span class="tech-tag">SOON</span>
                        </div>
                        <div class="project-actions">
                            <button class="pixel-btn sm" disabled>WAIT</button>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <span class="image-placeholder">🔒</span>
                        <div class="project-badge">SOON</div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">WILL UPDATE SOON</h3>
                        <p class="project-desc">This project is coming soon. Stay tuned for updates!</p>
                        <div class="project-tech">
                            <span class="tech-tag">SOON</span>
                        </div>
                        <div class="project-actions">
                            <button class="pixel-btn sm" disabled>WAIT</button>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <span class="image-placeholder">🔒</span>
                        <div class="project-badge">SOON</div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">WILL UPDATE SOON</h3>
                        <p class="project-desc">This project is coming soon. Stay tuned for updates!</p>
                        <div class="project-tech">
                            <span class="tech-tag">SOON</span>
                        </div>
                        <div class="project-actions">
                            <button class="pixel-btn sm" disabled>WAIT</button>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <span class="image-placeholder">🔒</span>
                        <div class="project-badge">SOON</div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">WILL UPDATE SOON</h3>
                        <p class="project-desc">This project is coming soon. Stay tuned for updates!</p>
                        <div class="project-tech">
                            <span class="tech-tag">SOON</span>
                        </div>
                        <div class="project-actions">
                            <button class="pixel-btn sm" disabled>WAIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

document.getElementById('projects-container').innerHTML = projectsContent;