// About Me Section Component

const AboutSection = {
    name: 'AboutSection',
    
    template: `
        <section id="about" class="py-20 px-6 lg:px-12 bg-white">
            <div class="max-w-7xl mx-auto">
                <!-- Section Title -->
                <h2 class="text-3xl lg:text-4xl text-center mb-16 fade-in-up">
                    <span class="font-light">About</span> <span class="font-bold">Me</span>
                </h2>
                
                <div class="grid lg:grid-cols-2 gap-8 items-start">
                    <!-- Profile Image -->
                    <div class="fade-in-up flex justify-center lg:justify-start">
                        <div class="relative group w-80 lg:w-5/6">
                            <div class="w-full h-full rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                                <img 
                                    src="src/assets/images/about_me_logo.JPG" 
                                    alt="Mohammad Shafiqur Rahman" 
                                    class="w-full h-full object-cover"
                                >
                            </div>
                            <!-- Decorative element -->
                            <div class="absolute -bottom-4 -right-6 w-36 h-36 bg-black/10 rounded-xl -z-10 transform rotate-6 transition-transform duration-500 group-hover:rotate-12"></div>
                        </div>
                    </div>
                    
                    <!-- About Content -->
                    <div class="fade-in-up stagger-2">
                        <div class="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                I'm a <span class="font-semibold text-black">UI/UX Designer</span> passionate about creating 
                                meaningful digital experiences that bridge the gap between aesthetics and functionality.
                            </p>
                            
                            <p>
                                My background in Quality Assurance has given me a unique perspective on user-centric design, 
                                enabling me to anticipate user needs and identify potential interface challenges before they become issues.
                            </p>
                            
                            <p>
                                I specialize in <span class="font-medium text-black">user-centered design thinking</span>, 
                                creating intuitive interfaces that not only look beautiful but also solve real problems. 
                                My approach combines research, empathy, and iterative testing to deliver products that users love.
                            </p>
                            
                            <p>
                                For me, design is more than just making things look good—it's about creating solutions that 
                                make people's lives easier and more enjoyable.
                            </p>
                        </div>
                        
                        <!-- CTA Button -->
                        <div class="mt-8">
                            <a 
                                href="#contact" 
                                class="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105"
                            >
                                Let's Work Together
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    
    mounted() {
        this.animateOnScroll();
        window.addEventListener('scroll', this.animateOnScroll);
    },
    
    beforeUnmount() {
        window.removeEventListener('scroll', this.animateOnScroll);
    },
    
    methods: {
        animateOnScroll() {
            const elements = document.querySelectorAll('.fade-in-up');
            const windowHeight = window.innerHeight;
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        }
    }
};

window.AboutSection = AboutSection;