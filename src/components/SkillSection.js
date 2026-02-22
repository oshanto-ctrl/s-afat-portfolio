const SkillSection = {
    name: 'SkillSection',
    template: `
        <section class="ss-section fade-in">
        <!-- Section Title -->
                <h2 class="text-3xl lg:text-4xl text-center mb-16 fade-in-up">
                    <span class="font-light">My</span> <span class="font-bold">Skills</span>
                </h2>
            <div class="ss-grid">
                
                <div
                    v-for="skill in skills"
                    :key="skill.id"
                    class="ss-card"
                    :class="{ 'ss-card--inverted': skill.inverted }"
                >
                    <div class="ss-card__icon-wrap">
                        <img
                            :src="skill.icon"
                            :alt="skill.name"
                            class="ss-card__icon"
                            @error="onImgError($event, skill)"
                        />
                    </div>
                    <span class="ss-card__label">{{ skill.name }}</span>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            skills: [
                // Updated paths to include 'src/' prefix for correct relative path from index.html
                { id: 1,  name: 'figma', icon: 'src/assets/images/skills/figma.svg',        inverted: true  },
                { id: 2,  name: 'adobexd', icon: 'src/assets/images/skills/adobe-xd.svg',        inverted: false },
                { id: 3,  name: 'dribbble',     icon: 'src/assets/images/skills/dribbble.svg',       inverted: false },
                { id: 4,  name: 'framer',  icon: 'src/assets/images/skills/framer.svg',      inverted: false },
                { id: 5,  name: 'illustrator',    icon: 'src/assets/images/skills/illustrator.svg',    inverted: false },
                { id: 6,  name: 'photoshop',  icon: 'src/assets/images/skills/photoshop.svg', inverted: false },
                { id: 7,  name: 'protopie',        icon: 'src/assets/images/skills/protopie.svg',       inverted: false },
                { id: 8,  name: 'sketch',  icon: 'src/assets/images/skills/sketch.svg',  inverted: false },
                { id: 9,  name: 'Framer',    icon: 'src/assets/images/skills/framer.svg',   inverted: false },
                { id: 10, name: 'Dribble',   icon: 'src/assets/images/skills/dribbble.svg',  inverted: false },
            ],
        };
    },
    methods: {
        onImgError(event, skill) {
            // Generate an SVG placeholder with the skill's initials when icon path is missing
            const initials = skill.name.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase();
            const bg = skill.inverted ? '%23000000' : '%23ffffff';
            const fg = skill.inverted ? '%23ffffff' : '%23000000';
            event.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='${bg}'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-weight='700' font-size='22' fill='${fg}'%3E${initials}%3C/text%3E%3C/svg%3E`;
        },
    },
    mounted() {
        // Inject component styles once into <head> to keep template clean
        if (document.getElementById('ss-styles')) return;
        const style = document.createElement('style');
        style.id = 'ss-styles';
        style.textContent = `
            .ss-section {
            background: rgb(255, 255, 255);
            padding: 60px 30px;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            }

            /* ── Grid ─────────────────────────────────────────── */
            .ss-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 40px;
            max-width: 900px;
            margin: 0 auto;
            }

            /* Tablet  641px – 1024px */
            @media (max-width: 1024px) and (min-width: 641px) {
            .ss-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            }
            }

            /* Mobile  ≤ 640px */
            @media (max-width: 640px) {
            .ss-section {
            padding: 40px 12px;
            }
            .ss-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            }
            }

            /* ── Card ─────────────────────────────────────────── */
            .ss-card {
            background: #ffffff;
            border: 2px solid #1a1a1a;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 24px 12px 18px;
            gap: 12px;
            aspect-ratio: 1 / 1;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            cursor: default;
            user-select: none;
            }

            .ss-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 16px 40px rgba(255, 255, 255, 0.07);
            }

            /* Inverted card – black bg, white border */
            .ss-card--inverted {
            background: #000000;
            border-color: #ffffff;
            }

            /* ── Icon ─────────────────────────────────────────── */
            .ss-card__icon-wrap {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            }

            .ss-card__icon {
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: brightness(0);
            pointer-events: none;
            }

            /* Flip to white on inverted cards */
            .ss-card--inverted .ss-card__icon {
            filter: brightness(0) invert(1);
            }

            /* ── Label ────────────────────────────────────────── */
            .ss-card__label {
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.06em;
            color: #000000;
            text-align: center;
            line-height: 1.2;
            }

            .ss-card--inverted .ss-card__label {
            color: #ffffff;
            }

            /* ── Tablet overrides ─────────────────────────────── */
            @media (max-width: 1024px) and (min-width: 641px) {
            .ss-card {
            padding: 20px 10px 16px;
            gap: 12px;
            }
            .ss-card__icon-wrap {
            width: 36px;
            height: 36px;
            }
            .ss-card__label {
            font-size: 14px;
            }
            }

            /* ── Mobile overrides ─────────────────────────────── */
            @media (max-width: 640px) {
            .ss-card {
            padding: 18px 8px 14px;
            gap: 12px;
            }
            .ss-card__icon-wrap {
            width: 42px;
            height: 42px;
            }
            .ss-card__label {
            font-size: 18px;
            }
            }
        `;
        document.head.appendChild(style);
    },
};

window.SkillSection = SkillSection; // Make globally available for registration in main.js