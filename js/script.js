class NeuralLogo {
    constructor() {
        this.logo = document.getElementById('neuralLogo');
        this.themeCards = document.querySelectorAll('.theme-card');
        this.init();
    }

    init() {
        this.initThemeSwitcher();
        this.initNeuralInteractions();
        this.startDataFlowAnimation();
    }

    initThemeSwitcher() {
        this.themeCards.forEach(card => {
            card.addEventListener('click', () => {
                const theme = card.dataset.theme;
                
                // Убираем активный класс
                this.themeCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                
                // Применяем тему
                this.applyTheme(theme);
            });
        });
    }

    applyTheme(theme) {
        const root = document.documentElement;
        
        const themes = {
            quantum: {
                primary: '#0066FF',
                secondary: '#00D4FF',
                accent: '#FF00D6',
                glow: 'rgba(0, 102, 255, 0.6)'
            },
            matrix: {
                primary: '#00FF47',
                secondary: '#00FF99',
                accent: '#FF00D6',
                glow: 'rgba(0, 255, 71, 0.6)'
            },
            synth: {
                primary: '#FF6B00',
                secondary: '#FF00D6',
                accent: '#00D4FF',
                glow: 'rgba(255, 107, 0, 0.6)'
            },
            cyber: {
                primary: '#8B00FF',
                secondary: '#00FFFF',
                accent: '#FF00D6',
                glow: 'rgba(139, 0, 255, 0.6)'
            }
        };

        const colors = themes[theme] || themes.quantum;
        
        Object.entries(colors).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
        });
    }

    initNeuralInteractions() {
        const neurons = document.querySelectorAll('.neuron');
        
        neurons.forEach(neuron => {
            neuron.addEventListener('mouseenter', () => {
                this.activateNeuron(neuron);
            });
            
            neuron.addEventListener('mouseleave', () => {
                this.deactivateNeuron(neuron);
            });
        });
    }

    activateNeuron(neuron) {
        // Подсвечиваем соединения, ведущие к этому нейрону
        const connections = document.querySelectorAll('.connection');
        connections.forEach(conn => {
            conn.style.background = `linear-gradient(90deg, transparent, var(--accent), transparent)`;
            conn.style.opacity = '1';
        });
    }

    deactivateNeuron(neuron) {
        const connections = document.querySelectorAll('.connection');
        connections.forEach(conn => {
            conn.style.background = `linear-gradient(90deg, transparent, var(--primary), transparent)`;
            conn.style.opacity = '0.6';
        });
    }

    startDataFlowAnimation() {
        // Случайная активация нейронов для демонстрации "работы сети"
        setInterval(() => {
            const randomNeuron = document.querySelectorAll('.neuron')[
                Math.floor(Math.random() * 4)
            ];
            this.pulseNeuron(randomNeuron);
        }, 2000);
    }

    pulseNeuron(neuron) {
        neuron.style.transform = 'scale(1.3)';
        neuron.style.boxShadow = `0 0 40px var(--accent)`;
        
        setTimeout(() => {
            neuron.style.transform = 'scale(1)';
            neuron.style.boxShadow = `0 0 30px var(--neural-glow)`;
        }, 500);
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    new NeuralLogo();
});