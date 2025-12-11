import xiva from "../../assets/images.jpg"
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <div className="footer-logo">
                        <img src={xiva} alt="Xiva muzeyi logotipi" />
                    </div>
                    <h3>Manzil</h3>
                    <p>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        Xorazm viloyati, Xiva, Boltaev ko'chasi, 41-uy
                    </p>
                    <button className="map-button">Xaritada ko'rish</button>
                </div>

                <div className="footer-section">
                    <h3>Foydali havolalar</h3>
                    <ul>
                        <li>Bosh sahifa</li>
                        <li>Biz haqimizda</li>
                        <li>Yangiliklar</li>
                        <li>Muzey kolleksiyasi</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Bo'limlar</h3>
                    <ul>
                        <li>Galereya</li>
                        <li>Aloqa</li>
                        <li>Khiva 360</li>
                        <li>Virtual qo'llanma</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Biz bilan bog'laning</h3>
                    <ul className="social-links">
                        <li>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                            </svg>
                            Facebook
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z" />
                            </svg>
                            Instagram
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z" />
                            </svg>
                            Telegram
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M19.607 6.995c-.076-.298-.292-.523-.539-.592C18.63 6.28 16.501 6 12.001 6s-6.628.28-7.069.403c-.244.068-.46.293-.537.592c-.109.424-.394 2.2-.394 5.005s.285 4.58.394 5.006c.076.297.292.522.538.59C5.373 17.72 7.5 18 12 18s6.629-.28 7.069-.403c.244-.068.46-.293.537-.592c.11-.424.394-2.205.394-5.005s-.285-4.58-.394-5.005m1.937-.497C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.897 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.108 4 12.001 4 12.001 4s5.896 0 7.605.476c.944.266 1.687 1.04 1.938 2.022M10.001 15.5v-7l6 3.5z" /></svg>
                            Youtube
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Xiva Muzey. Barcha huquqlar himoyalangan Developed by     <a href="https://www.limon.uz/" target="_blank">Limon.uz</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;