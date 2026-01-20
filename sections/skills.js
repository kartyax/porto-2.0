document.getElementById('skills-container').innerHTML = `
    <!-- SKILLS SECTION -->
    <section class="skills-section" id="skills">
        <div class="skills-container">
            <h2 class="section-title-main">CHARACTER STATS</h2>
            <p class="section-subtitle">Level Up Your Skills</p>

            <div class="skills-content">
                <!-- Left Panel - Frontend Skills -->
                <div class="skill-category">
                    <div class="category-header">
                        <span class="category-icon">⚔️</span>
                        <h3 class="category-title">FRONTEND</h3>
                    </div>
                    <div class="skill-list">
                        <div class="skill-item" data-level="70">
                            <div class="skill-info">
                                <span class="skill-name">HTML</span>
                                <span class="skill-level">LV 70</span>
                            </div>
                            <div class="skill-bar-container">
                                <div class="skill-bar" style="width: 70%;">
                                    <div class="skill-bar-fill"></div>
                                </div>
                            </div>
                        </div>

                        <div class="skill-item" data-level="40">
                            <div class="skill-info">
                                <span class="skill-name">CSS</span>
                                <span class="skill-level">LV 40</span>
                            </div>
                            <div class="skill-bar-container">
                                <div class="skill-bar" style="width: 40%;">
                                    <div class="skill-bar-fill"></div>
                                </div>
                            </div>
                        </div>

                        <div class="skill-item" data-level="87">
                            <div class="skill-info">
                                <span class="skill-name">JavaScript</span>
                                <span class="skill-level">LV 87</span>
                            </div>
                            <div class="skill-bar-container">
                                <div class="skill-bar" style="width: 87%;">
                                    <div class="skill-bar-fill"></div>
                                </div>
                            </div>
                        </div>

                        <div class="skill-item" data-level="65">
                            <div class="skill-info">
                                <span class="skill-name">React</span>
                                <span class="skill-level">LV 65</span>
                            </div>
                            <div class="skill-bar-container">
                                <div class="skill-bar" style="width: 65%;">
                                    <div class="skill-bar-fill"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Panel - Backend Skills -->
                <div class="skill-category">
                    <div class="category-header">
                        <span class="category-icon">🛡️</span>
                        <h3 class="category-title">BACKEND</h3>
                    </div>
                    <div class="skill-list">
                        <div class="skill-item" data-level="95">
                            <div class="skill-info">
                                <span class="skill-name">PHP</span>
                                <span class="skill-level">LV 95</span>
                            </div>
                            <div class="skill-bar-container">
                                <div class="skill-bar" style="width: 95%;">
                                    <div class="skill-bar-fill"></div>
                                </div>
                            </div>
                        </div>

                        <div class="skill-item" data-level="90">
                            <div class="skill-info">
                                <span class="skill-name">Node.js</span>
                                <span class="skill-level">LV 90</span>
                            </div>
                            <div class="skill-bar-container">
                                <div class="skill-bar" style="width: 90%;">
                                    <div class="skill-bar-fill"></div>
                                </div>
                            </div>
                        </div>

                        <div class="skill-item" data-level="95">
                            <div class="skill-info">
                                <span class="skill-name">MySQL</span>
                                <span class="skill-level">LV 95</span>
                            </div>
                            <div class="skill-bar-container">
                                <div class="skill-bar" style="width: 95%;">
                                    <div class="skill-bar-fill"></div>
                                </div>
                            </div>
                        </div>

                        <div class="skill-item" data-level="92">
                            <div class="skill-info">
                                <span class="skill-name">API Security</span>
                                <span class="skill-level">LV 92</span>
                            </div>
                            <div class="skill-bar-container">
                                <div class="skill-bar" style="width: 92%;">
                                    <div class="skill-bar-fill"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Right Panel - Tools (Now 3rd Column) -->
                <div class="skill-category">
                    <div class="tools-grid">
                        <div class="tools-track">
                            <!-- Original Set -->
                            <div class="tool-icon-wrapper" title="Git">
                                <img src="assets/icon/git-removebg-preview.png" alt="Git" class="tool-icon">
                            </div>
                            <div class="tool-icon-wrapper" title="GitHub">
                                <img src="assets/icon/github-removebg-preview.png" alt="GitHub" class="tool-icon">
                            </div>
                            <div class="tool-icon-wrapper" title="Figma">
                                <img src="assets/icon/figma-removebg-preview.png" alt="Figma" class="tool-icon">
                            </div>
                            <div class="tool-icon-wrapper" title="VS Code">
                                <img src="assets/icon/vscode-removebg-preview.png" alt="VS Code" class="tool-icon">
                            </div>

                            <!-- Duplicate Set for Seamless Loop -->
                            <div class="tool-icon-wrapper" title="Git">
                                <img src="assets/icon/git-removebg-preview.png" alt="Git" class="tool-icon">
                            </div>
                            <div class="tool-icon-wrapper" title="GitHub">
                                <img src="assets/icon/github-removebg-preview.png" alt="GitHub" class="tool-icon">
                            </div>
                            <div class="tool-icon-wrapper" title="Figma">
                                <img src="assets/icon/figma-removebg-preview.png" alt="Figma" class="tool-icon">
                            </div>
                            <div class="tool-icon-wrapper" title="VS Code">
                                <img src="assets/icon/vscode-removebg-preview.png" alt="VS Code" class="tool-icon">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
