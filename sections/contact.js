document.getElementById('contact-container').innerHTML = `
    <!-- CONTACT SECTION -->
    <section class="contact-section" id="contact">
        <div class="contact-container">
            <h2 class="section-title-main">CONTACT ME</h2>
            <p class="section-subtitle">Press START to Begin</p>

            <div class="contact-content">
                <!-- Contact Info - Left Side -->
                <div class="contact-info">
                    <div class="info-title">PLAYER INFO</div>
                    <div class="info-items">
                        <div class="info-item">
                            <img src="assets/icon/email-contact.png" class="info-icon-img" alt="Email">
                            <div class="info-text">
                                <p class="info-label">EMAIL</p>
                                <p class="info-value">kevin@example.com</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <img src="assets/icon/phone-contact.png" class="info-icon-img" alt="Phone">
                            <div class="info-text">
                                <p class="info-label">PHONE</p>
                                <p class="info-value">+62 812-3456-7890</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <img src="assets/icon/location-contact.png" class="info-icon-img" alt="Location">
                            <div class="info-text">
                                <p class="info-label">LOCATION</p>
                                <p class="info-value">Semarang, Indonesia</p>
                            </div>
                        </div>
                    </div>

                    <div class="social-links">
                        <a href="#" class="social-btn">
                            <img src="assets/icon/github-contact.png" class="social-icon-img" alt="GitHub"> GitHub
                        </a>
                        <a href="#" class="social-btn">
                            <img src="assets/icon/linkedin-contact.png" class="social-icon-img" alt="LinkedIn"> LinkedIn
                        </a>
                        <a href="#" class="social-btn">
                            <img src="assets/icon/instagram-contact.png" class="social-icon-img" alt="Instagram"> Instagram
                        </a>
                    </div>
                </div>

                <!-- Contact Form - Right Side -->
                <div class="contact-form">
                    <form id="contactForm">
                        <div class="form-group">
                            <label for="name" class="form-label">NAME</label>
                            <input type="text" id="name" class="form-input" placeholder="Enter your name..." required>
                        </div>

                        <div class="form-group">
                            <label for="email" class="form-label">EMAIL</label>
                            <input type="email" id="email" class="form-input" placeholder="Enter your email..."
                                required>
                        </div>

                        <div class="form-group">
                            <label for="message" class="form-label">MESSAGE</label>
                            <textarea id="message" class="form-input" rows="5" placeholder="Type your message..."
                                required></textarea>
                        </div>

                        <button type="submit" class="pixel-btn primary submit-btn">
                            <span class="btn-text">SEND MESSAGE</span>
                            <span class="btn-icon">►</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
`;
