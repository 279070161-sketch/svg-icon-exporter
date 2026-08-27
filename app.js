document.addEventListener('DOMContentLoaded', () => {
    // --- Icons Database (14 Custom Linear Icons) ---
    const ICONS_DATA = [
        // Category 1: Distribution & Retail
        {
            id: 'global-fulfillment',
            title: '全球履行 / Global Fulfillment',
            description: 'US & EU warehousing for reliable supply and faster delivery.',
            category: 'distribution',
            filename: 'global-fulfillment.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M12 3L21 7.5L12 12L3 7.5Z" />
                <path class="svg-primary" d="M3 7.5V16.5L12 21V12" />
                <path class="svg-primary" d="M21 7.5V16.5L12 21" />
                <path class="svg-accent" d="M12 7.5v4.5" />
                <path class="svg-accent" d="M7.5 5.25l9 4.5" />
            `
        },
        {
            id: 'local-support',
            title: '本地支持 / Local Support',
            description: 'US-based sales and technical support teams.',
            category: 'distribution',
            filename: 'local-support.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M3 14c0-4.97 4.03-9 9-9s9 4.03 9 9" />
                <rect class="svg-primary" x="2" y="11" width="2" height="6" rx="1" />
                <rect class="svg-primary" x="20" y="11" width="2" height="6" rx="1" />
                <path class="svg-accent" d="M20 14c0 2.5-2 4-4.5 4h-1.5" />
                <circle class="svg-accent" cx="12" cy="18" r="1.5" />
                <path class="svg-primary" d="M9 13.5a3 3 0 0 0 6 0" />
            `
        },
        {
            id: 'market-reach',
            title: '成熟市场覆盖 / Proven Market Reach',
            description: 'Customers in 150+ countries through a global partner network.',
            category: 'distribution',
            filename: 'proven-market-reach.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <circle class="svg-primary" cx="12" cy="12" r="9" />
                <path class="svg-primary" d="M3 12h18" />
                <path class="svg-primary" d="M12 3a9 9 0 0 0 0 18" />
                <path class="svg-primary" d="M12 3a4 9 0 0 0 0 18A4 9 0 0 0 12 3" />
                <circle class="svg-accent" cx="7.5" cy="7.5" r="1.5" />
                <circle class="svg-accent" cx="16.5" cy="16.5" r="1.5" />
            `
        },
        {
            id: 'quality-value',
            title: '品质与价值 / Quality & Value',
            description: 'Competitive pricing backed by trusted engineering and manufacturing.',
            category: 'distribution',
            filename: 'quality-value.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path class="svg-accent" d="M8.5 11.5l2.5 2.5 5-5" />
            `
        },
        {
            id: 'retailer-ready',
            title: '面向零售商 / Retailer-Ready',
            description: 'Low minimum order 500 pcs, display materials, and staff training included.',
            category: 'distribution',
            filename: 'retailer-ready.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M3 9h18L20 5H4L3 9z" />
                <path class="svg-primary" d="M4 9v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                <path class="svg-accent" d="M9 22v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7" />
                <line class="svg-primary" x1="7" y1="9" x2="7" y2="5" />
                <line class="svg-primary" x1="12" y1="9" x2="12" y2="5" />
                <line class="svg-primary" x1="17" y1="9" x2="17" y2="5" />
            `
        },

        // Category 2: Software & App Integration
        {
            id: 'bring-app-off-grid',
            title: '应用离网运行 / Bring your app off-grid',
            description: 'Add live crew maps and off-grid messaging via our SDK/API.',
            category: 'software',
            filename: 'bring-app-off-grid.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="5" y="2" width="14" height="20" rx="3" />
                <path class="svg-primary" d="M11 19h2" />
                <path class="svg-primary" d="M7 15l2.5-3 2.5 2.5 3-4 2 2" />
                <path class="svg-accent" d="M12 6a2.5 2.5 0 0 1 1.7.7 M12 6a2.5 2.5 0 0 0-1.7.7 M12 4A5 5 0 0 1 15.5 5.5 M12 4a5 5 0 0 0-3.5 1.5" />
            `
        },
        {
            id: 'new-hardware-revenue',
            title: '全新硬件收益 / New hardware revenue',
            description: 'Co-branded bundles and affiliate models — no hardware to build.',
            category: 'software',
            filename: 'new-hardware-revenue.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <ellipse class="svg-primary" cx="8" cy="16" rx="5" ry="2.5" />
                <path class="svg-primary" d="M3 16v3.5c0 1.38 2.24 2.5 5 2.5s5-1.12 5-2.5V16" />
                <ellipse class="svg-primary" cx="8" cy="10" rx="5" ry="2.5" />
                <path class="svg-primary" d="M3 10v3.5c0 1.38 2.24 2.5 5 2.5s5-1.12 5-2.5V10" />
                <path class="svg-accent" d="M15 6h5v5" />
                <path class="svg-accent" d="M20 6l-6 6" />
                <circle class="svg-accent" cx="18.5" cy="13.5" r="2.5" />
            `
        },
        {
            id: 'you-own-experience',
            title: '自主体验掌控 / You own the experience',
            description: 'Custom app branding and integrated user flows.',
            category: 'software',
            filename: 'you-own-experience.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="5" y="2" width="14" height="20" rx="3" />
                <path class="svg-primary" d="M11 19h2" />
                <circle class="svg-accent" cx="12" cy="9" r="2.5" />
                <path class="svg-accent" d="M8 15c0-1.5 1.8-2.5 4-2.5s4 1 4 2.5" />
                <circle class="svg-primary" cx="16" cy="5" r="1" />
            `
        },
        {
            id: 'we-handle-hard-part',
            title: '我们包揽难关 / We handle the hard part',
            description: 'Hardware, certifications, and global supply chain.',
            category: 'software',
            filename: 'we-handle-hard-part.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <circle class="svg-primary" cx="9" cy="14" r="3.5" />
                <path class="svg-primary" d="M9 10v1M9 17v1M6 14H5M13 14h-1" />
                <circle class="svg-accent" cx="16" cy="8" r="2.5" />
                <path class="svg-accent" d="M16 5v1M16 10v1M13.5 8h1M18.5 8h-1" />
                <path class="svg-primary" d="M10.5 11.5l1 1" />
            `
        },

        // Category 3: Custom Solutions
        {
            id: 'custom-branding',
            title: '定制品牌形象 / Custom Branding',
            description: 'Private-label products, custom packaging, and brand identity.',
            category: 'custom',
            filename: 'custom-branding.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M12.5 2H6a2 2 0 0 0-2 2v6.5c0 .53.21 1.04.59 1.41l9 9a2 2 0 0 0 2.82 0l6.5-6.5a2 2 0 0 0 0-2.82l-9-9A2 2 0 0 0 12.5 2z" />
                <circle class="svg-primary" cx="7.5" cy="7.5" r="1" />
                <path class="svg-accent" d="M14.5 9.5l.8 2 2 .2-1.5 1.3.5 2-1.8-1.1-1.8 1.1.5-2L11.7 11.7l2-.2z" />
            `
        },
        {
            id: 'hardware-customization',
            title: '硬件深度定制 / Hardware Customization',
            description: 'Tailored features, sensors, modules, and connectivity.',
            category: 'custom',
            filename: 'hardware-customization.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="6" y="6" width="12" height="12" rx="2" />
                <rect class="svg-accent" x="9" y="9" width="6" height="6" rx="1" />
                <path class="svg-primary" d="M9 2v4M12 2v4M15 2v4M9 18v4M12 18v4M15 18v4M2 9h4M2 12h4M2 15h4M18 9h4M18 12h4M18 15h4" />
            `
        },
        {
            id: 'mobile-app-customization',
            title: '移动端App定制 / Mobile App Customization',
            description: 'Custom branding and user experience.',
            category: 'custom',
            filename: 'mobile-app-customization.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="5" y="2" width="14" height="20" rx="3" />
                <path class="svg-primary" d="M11 19h2" />
                <circle class="svg-accent" cx="8.5" cy="6.5" r="1.5" />
                <line class="svg-primary" x1="12" y1="6" x2="16" y2="6" />
                <rect class="svg-primary" x="7" y="10" width="10" height="5" rx="1" />
                <line class="svg-accent" x1="7" y1="12" x2="17" y2="12" />
            `
        },
        {
            id: 'certifications-compliance',
            title: '认证与全球合规 / Certifications & Compliance',
            description: 'Regional certifications for global deployment.',
            category: 'custom',
            filename: 'certifications-compliance.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                <path class="svg-primary" d="M7 7h10M7 11h6M7 15h5" />
                <circle class="svg-accent" cx="15.5" cy="14.5" r="2.5" />
                <path class="svg-accent" d="M14.5 17l-1.5 3 2.5-1 2.5 1-1.5-3" />
            `
        },
        {
            id: 'concept-to-market',
            title: '概念至市场落地 / From Concept to Market',
            description: '8-20 weeks after design freeze.',
            category: 'custom',
            filename: 'concept-to-market.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M12 2C12 2 8 5.5 8 12c0 2.2 1.8 4 4 4s4-1.8 4-4c0-6.5-4-10-4-10z" />
                <path class="svg-primary" d="M8 11c-1.5 1-2.5 3-2.5 3l2.5-.5M16 11c1.5 1 2.5 3 2.5 3l-2.5-.5" />
                <path class="svg-accent" d="M10 16c0 1 2 3 2 3s2-2 2-3" />
                <circle class="svg-primary" cx="12" cy="8" r="1.5" />
            `
        },
        {
            id: 'card-sized',
            title: '卡片级尺寸 / Card-sized',
            description: 'Fits a jersey pocket or pack strap.',
            category: 'hardware-features',
            filename: 'card-sized.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M5 11v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
                <rect class="svg-accent" x="7" y="4" width="10" height="11" rx="1.5" />
                <line class="svg-accent" x1="7" y1="7" x2="17" y2="7" />
                <rect class="svg-accent" x="9" y="10" width="2" height="1.5" rx="0.5" />
            `
        },
        {
            id: 'multi-day-battery',
            title: '多日续航 / Multi-day battery',
            description: 'One charge lasts the whole trip.',
            category: 'hardware-features',
            filename: 'multi-day-battery.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="4" y="7" width="13" height="10" rx="2" />
                <path class="svg-primary" d="M19 10v4" />
                <path class="svg-accent" d="M11 9l-3.5 3.5h4.5L10 16" />
                <path class="svg-primary" d="M17 4l.5.8.8-.5-.8-.5z" />
                <path class="svg-primary" d="M20 6l.3.5.5-.3-.5-.3z" />
            `
        },
        {
            id: 'no-subscription',
            title: '零订阅费 / No subscription',
            description: 'One purchase, no recurring costs.',
            category: 'hardware-features',
            filename: 'no-subscription.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="4" y="6" width="16" height="13" rx="2" />
                <line class="svg-primary" x1="4" y1="10" x2="20" y2="10" />
                <line class="svg-primary" x1="8" y1="4" x2="8" y2="7" />
                <line class="svg-primary" x1="16" y1="4" x2="16" y2="7" />
                <line class="svg-accent" x1="4" y1="4" x2="20" y2="20" />
            `
        },
        {
            id: 'waterproof-dustproof',
            title: '防尘防水 / Waterproof & Dustproof',
            description: 'IP66 protection for changing conditions.',
            category: 'hardware-features',
            filename: 'waterproof-dustproof.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M4 14a8 8 0 0 1 16 0c-1.5-1-3.5-1-5 0-1.5-1-3.5-1-5 0-1.5-1-3.5-1-6 0z" />
                <path class="svg-primary" d="M12 14v5a2 2 0 0 1-4 0" />
                <path class="svg-primary" d="M12 6V4" />
                <path class="svg-accent" d="M9 2.5l-1 2 M13 2l-1 2 M17 2.5l-1 2" />
            `
        },
        {
            id: 'tops-ai-computing',
            title: '241 TOPS 算力 / 241 TOPS AI Computing',
            description: 'NVIDIA® Jetson AGX Orin™ Powered.',
            category: 'ai-computing',
            filename: 'tops-ai-computing.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="5" y="5" width="14" height="14" rx="2" />
                <rect class="svg-accent" x="9" y="9" width="6" height="6" rx="1" />
                <circle class="svg-accent" cx="12" cy="12" r="1" />
                <path class="svg-primary" d="M9 2v3M12 2v3M15 2v3M9 19v3M12 19v3M15 19v3M2 9h3M2 12h3M2 15h3M19 9h3M19 12h3M19 15h3" />
                <path class="svg-accent" d="M12 9v6M9 12h6" />
            `
        },
        {
            id: 'memory-storage',
            title: '超高速内存与存储 / Memory & Storage',
            description: '64GB LPDDR5 + 64GB eMMC.',
            category: 'ai-computing',
            filename: 'memory-storage.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="3" y="5" width="18" height="6" rx="1" />
                <path class="svg-primary" d="M6 11v1M9 11v1M12 11v1M15 11v1M18 11v1" />
                <rect class="svg-accent" x="5" y="7" width="2" height="2" />
                <rect class="svg-accent" x="9" y="7" width="2" height="2" />
                <rect class="svg-accent" x="13" y="7" width="2" height="2" />
                <rect class="svg-accent" x="17" y="7" width="2" height="2" />
                <rect class="svg-primary" x="6" y="14" width="12" height="6" rx="1.5" />
                <path class="svg-accent" d="M10 17h4 M12 15v4" />
            `
        },
        {
            id: 'rich-io-expansion',
            title: '丰富接口扩展 / Rich I/O Expansion',
            description: 'PCIe x16 | 10GbE | MIPI CSI-2.',
            category: 'ai-computing',
            filename: 'rich-io-expansion.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="3" y="16" width="18" height="3" rx="0.5" />
                <line class="svg-primary" x1="12" y1="16" x2="12" y2="8" />
                <circle class="svg-accent" cx="12" cy="6" r="2" />
                <path class="svg-primary" d="M6 16V11h3" />
                <rect class="svg-accent" x="9" y="9" width="3" height="3" rx="0.5" />
                <path class="svg-primary" d="M18 16V11h-3" />
                <rect class="svg-accent" x="12" y="9" width="3" height="3" rx="0.5" />
            `
        },
        {
            id: 'jetpack-ready',
            title: '全套生态支持 / JetPack Ready',
            description: 'Full NVIDIA Software Ecosystem Support.',
            category: 'ai-computing',
            filename: 'jetpack-ready.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="5" y="6" width="4" height="12" rx="2" />
                <rect class="svg-primary" x="15" y="6" width="4" height="12" rx="2" />
                <path class="svg-primary" d="M9 9h6 M9 14h6" />
                <path class="svg-accent" d="M7 18v2.5 M7 18a1 1 0 0 1-2 0 M17 18v2.5 M17 18a1 1 0 0 1-2 0" />
                <path class="svg-accent" d="M12 5v9" />
                <circle class="svg-accent" cx="12" cy="14" r="1" />
            `
        },
        {
            id: 'scalable-deployment',
            title: '弹性伸缩部署 / Scalable Deployment',
            description: 'From Prototype to Production.',
            category: 'ai-computing',
            filename: 'scalable-deployment.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="3" y="10" width="4" height="4" rx="1" />
                <path class="svg-accent" d="M8 12h4" />
                <path class="svg-accent" d="M11 10l2 2-2 2" />
                <rect class="svg-primary" x="14" y="6" width="4" height="4" rx="1" />
                <rect class="svg-primary" x="17" y="12" width="4" height="4" rx="1" />
                <rect class="svg-primary" x="13" y="15" width="4" height="4" rx="1" />
                <path class="svg-accent" d="M16 10v5 M18 12h-2" />
            `
        },
        {
            id: 'developer-friendly',
            title: '开发者友好 / Developer Friendly',
            description: 'Free Jetson Beginner Classes.',
            category: 'ai-computing',
            filename: 'developer-friendly.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <!-- Graduation Cap -->
                <path class="svg-accent" d="M12 3l7 3-7 3-7-3 7-3z" />
                <path class="svg-accent" d="M8 7.5v2a4 4 0 0 0 8 0v-2" />
                <path class="svg-accent" d="M19 6v3" />
                <circle class="svg-accent" cx="19" cy="9.5" r="0.5" />
                <!-- Code Brackets -->
                <path class="svg-primary" d="M7 12l-3 3 3 3" />
                <path class="svg-primary" d="M17 12l3 3-3 3" />
                <line class="svg-primary" x1="13" y1="11" x2="11" y2="19" />
            `
        },

        // Category 6: Environment & Sensors
        {
            id: 'air-temperature',
            title: '空气温度 / Air Temperature',
            description: 'Ambient air temperature sensor measurement.',
            category: 'environment-sensors',
            filename: 'air-temperature.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M12 4a2.5 2.5 0 0 0-2.5 2.5v6.67a4 4 0 1 0 5 0V6.5A2.5 2.5 0 0 0 12 4z" />
                <path class="svg-accent" d="M12 16.5v-6" />
                <circle class="svg-accent" cx="12" cy="16.5" r="1.5" />
                <path class="svg-accent" d="M17 6.5h2M17 9.5h1.5" />
            `
        },
        {
            id: 'water-quality',
            title: '水质监测 / Water Quality',
            description: 'Water quality index and liquid purity analysis.',
            category: 'environment-sensors',
            filename: 'water-quality.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M12 3C8 8.5 5 12.5 5 15.5a7 7 0 0 0 14 0C19 12.5 16 8.5 12 3z" />
                <path class="svg-accent" d="M9.5 14.5l2 2 3.5-3.5" />
                <path class="svg-accent" d="M7 11.5c2 1 4 1 6 0" />
            `
        },
        {
            id: 'relative-humidity',
            title: '相对湿度 / Relative Humidity',
            description: 'Ambient air moisture and relative humidity level.',
            category: 'environment-sensors',
            filename: 'relative-humidity.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M12 3C8.5 7.8 6 11.2 6 14.5a6 6 0 0 0 12 0C18 11.2 15.5 7.8 12 3z" />
                <line class="svg-accent" x1="14" y1="12" x2="10" y2="17" />
                <circle class="svg-accent" cx="10" cy="13" r="0.8" />
                <circle class="svg-accent" cx="14" cy="16" r="0.8" />
            `
        },
        {
            id: 'barometric-pressure',
            title: '大气压强 / Barometric Pressure',
            description: 'Atmospheric and barometric pressure monitoring.',
            category: 'environment-sensors',
            filename: 'barometric-pressure.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M5 15a8 8 0 1 1 14 0" />
                <path class="svg-primary" d="M8 18h8" />
                <path class="svg-accent" d="M12 15l3-4" />
                <circle class="svg-accent" cx="12" cy="15" r="1.5" />
                <path class="svg-accent" d="M12 3v5" />
                <path class="svg-accent" d="M9.5 6.5L12 9l2.5-2.5" />
            `
        },
        {
            id: 'light-intensity',
            title: '光照强度 / Light Intensity',
            description: 'Solar radiation and ambient lux light intensity.',
            category: 'environment-sensors',
            filename: 'light-intensity.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <circle class="svg-primary" cx="12" cy="12" r="4.5" />
                <path class="svg-accent" d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21" />
                <path class="svg-accent" d="M5.64 5.64l1.77 1.77M16.59 16.59l1.77 1.77M5.64 18.36l1.77-1.77M16.59 7.41l1.77-1.77" />
            `
        },
        {
            id: 'rainfall',
            title: '降雨量 / Rainfall',
            description: 'Precipitation and cumulative rainfall gauge.',
            category: 'environment-sensors',
            filename: 'rainfall.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M6.5 13a4 4 0 0 1-.3-7.9 5.5 5.5 0 0 1 10.7 1.3 3.8 3.8 0 0 1 1.1 7.6" />
                <path class="svg-accent" d="M8 15.5l-1.5 3.5" />
                <path class="svg-accent" d="M12 15.5l-1.5 3.5" />
                <path class="svg-accent" d="M16 15.5l-1.5 3.5" />
            `
        },
        {
            id: 'wind-speed',
            title: '风速 / Wind Speed',
            description: 'Air velocity and anemometer speed detection.',
            category: 'environment-sensors',
            filename: 'wind-speed.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M3 8h11.5a2.5 2.5 0 1 0-2.5-2.5" />
                <path class="svg-primary" d="M3 12.5h15.5a2 2 0 1 0-2-2" />
                <path class="svg-accent" d="M3 17h8.5a2 2 0 1 1-2 2" />
                <path class="svg-accent" d="M16 17h3" />
            `
        },
        {
            id: 'wind-direction',
            title: '风向 / Wind Direction',
            description: 'Wind direction compass and weather vane angle.',
            category: 'environment-sensors',
            filename: 'wind-direction.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <circle class="svg-primary" cx="12" cy="12" r="8.5" />
                <path class="svg-primary" d="M12 3.5v1.5M12 19v1.5M3.5 12h1.5M19 12h1.5" />
                <path class="svg-accent" d="M12 6.5l3.5 8.5-3.5-1.5-3.5 1.5L12 6.5z" />
            `
        }
    ];

    // --- DOM Elements ---
    const primaryColorPicker = document.getElementById('primaryColorPicker');
    const accentColorPicker = document.getElementById('accentColorPicker');
    const borderColorPicker = document.getElementById('borderColorPicker');
    
    const strokeWidthSlider = document.getElementById('strokeWidthSlider');
    const strokeWidthValue = document.getElementById('strokeWidthValue');
    const exportSizeSlider = document.getElementById('exportSizeSlider');
    const exportSizeValue = document.getElementById('exportSizeValue');
    const showBorderCheckbox = { checked: false, addEventListener: () => {} };
    
    const resetBtn = document.getElementById('resetBtn');
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const searchInput = document.getElementById('searchInput');
    let activeCategory = 'all';
    
    const toast = document.getElementById('toast');
    const codeModal = document.getElementById('codeModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalIconTitle = document.getElementById('modalIconTitle');
    const modalIconPreview = document.getElementById('modalIconPreview');
    const svgCodeDisplay = document.getElementById('svgCodeDisplay');
    const copyModalBtn = document.getElementById('copyModalBtn');
    const downloadModalBtn = document.getElementById('downloadModalBtn');

    // Storage for active modal target
    let activeModalIconId = null;

    // Default Configuration values (aligned with #4e5868)
    const DEFAULTS = {
        primary: '#4E5868',
        accent: '#8FC31F',
        border: '#E4E7EC',
        strokeWidth: 1.5,
        exportSize: 24,
        showBorder: false
    };

    // Theme backgrounds recommendations
    const themeBackgrounds = {
        dark: '#0d1117',
        light: '#ffffff'
    };

    // --- Dynamic SVG String Generator (Strip Classes & Inline Style Attributes) ---
    function generateCleanedSVGString(iconId, primary, accent, border, strokeWidth, showBorder, size) {
        const icon = ICONS_DATA.find(i => i.id === iconId);
        if (!icon) return '';

        // Create container in-memory
        const div = document.createElement('div');
        div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}">${icon.svgMarkup}</svg>`;
        const svg = div.querySelector('svg');

        // Apply outer border circle rules
        const borderEl = svg.querySelector('.svg-border');
        if (borderEl) {
            if (!showBorder) {
                borderEl.remove();
            } else {
                borderEl.setAttribute('stroke', border);
                borderEl.setAttribute('stroke-width', '1.2');
                borderEl.setAttribute('fill', 'none');
            }
        }

        // Apply primary styles inline
        svg.querySelectorAll('.svg-primary, line.svg-primary, rect.svg-primary, circle.svg-primary, path.svg-primary').forEach(el => {
            el.setAttribute('stroke', primary);
            el.setAttribute('stroke-width', strokeWidth);
            el.setAttribute('stroke-linecap', 'round');
            el.setAttribute('stroke-linejoin', 'round');
            el.setAttribute('fill', 'none');
        });

        // Apply accent styles inline
        svg.querySelectorAll('.svg-accent, line.svg-accent, rect.svg-accent, circle.svg-accent, path.svg-accent').forEach(el => {
            el.setAttribute('stroke', accent);
            el.setAttribute('stroke-width', strokeWidth);
            el.setAttribute('stroke-linecap', 'round');
            el.setAttribute('stroke-linejoin', 'round');
            el.setAttribute('fill', 'none');
        });

        // Clean up classes
        svg.removeAttribute('class');
        svg.querySelectorAll('*').forEach(el => {
            el.removeAttribute('class');
        });

        // Serialize output
        const serializer = new XMLSerializer();
        let svgString = serializer.serializeToString(svg);
        svgString = svgString.replace(/></g, '>\n<');

        return svgString;
    }

    // --- Core Action: Apply configuration modifications to grids on the page ---
    function updateColorIndicators() {
        [primaryColorPicker, accentColorPicker, borderColorPicker].forEach(picker => {
            const indicator = picker.previousElementSibling;
            if (indicator && indicator.classList.contains('color-indicator')) {
                indicator.style.backgroundColor = picker.value;
            }
        });
    }

    // --- Core Action: Apply configuration modifications to grids on the page ---
    function updateSVGStyles() {
        updateColorIndicators();

        const primaryColor = primaryColorPicker.value;
        const accentColor = accentColorPicker.value;
        const borderColor = borderColorPicker.value;
        const strokeWidth = strokeWidthSlider.value;
        const showBorder = showBorderCheckbox.checked;
        const isDarkTheme = document.body.classList.contains('dark-theme');
        const bgColor = isDarkTheme ? themeBackgrounds.dark : themeBackgrounds.light;
        const size = exportSizeSlider.value;

        // Update card preview sizes dynamically
        document.querySelectorAll('.svg-container').forEach(container => {
            container.style.width = size + 'px';
            container.style.height = size + 'px';
        });

        document.querySelectorAll('.vector-svg').forEach(svg => {
            svg.setAttribute('width', size);
            svg.setAttribute('height', size);
            // Apply primary
            svg.querySelectorAll('.svg-primary').forEach(el => {
                el.setAttribute('stroke', primaryColor);
                el.setAttribute('fill', 'none');
                if (el.tagName.toLowerCase() !== 'text') {
                    el.setAttribute('stroke-width', strokeWidth);
                }
            });

            // Apply accent
            svg.querySelectorAll('.svg-accent').forEach(el => {
                el.setAttribute('stroke', accentColor);
                el.setAttribute('fill', 'none');
                if (el.tagName.toLowerCase() !== 'text') {
                    el.setAttribute('stroke-width', strokeWidth);
                }
            });

            // Apply border
            svg.querySelectorAll('.svg-border').forEach(el => {
                el.setAttribute('stroke', borderColor);
                el.style.display = showBorder ? 'block' : 'none';
            });

            // Background maskings
            svg.querySelectorAll('.bg-fill').forEach(el => {
                if (el.getAttribute('fill') !== 'none') {
                    el.setAttribute('fill', bgColor);
                }
            });
            svg.querySelectorAll('.svg-hole').forEach(el => {
                el.setAttribute('fill', bgColor);
                el.setAttribute('stroke', primaryColor);
                el.setAttribute('stroke-width', strokeWidth);
            });
        });

        // Update modal preview if open
        if (activeModalIconId) {
            updateModalPreview();
        }
    }

    // --- Render Cards Grid Dynamic ---
    function renderIcons() {
        const searchVal = searchInput.value.toLowerCase().trim();
        const grid = document.getElementById('iconsGrid');
        grid.innerHTML = '';

        let matchCount = 0;

        ICONS_DATA.forEach(icon => {
            // Search criteria
            const titleMatch = icon.title.toLowerCase().includes(searchVal);
            const descMatch = icon.description.toLowerCase().includes(searchVal);
            const catMatch = icon.category.toLowerCase().includes(searchVal);
            const searchMatches = !searchVal || titleMatch || descMatch || catMatch;

            // Category criteria
            const categoryMatches = activeCategory === 'all' || icon.category === activeCategory;

            if (searchMatches && categoryMatches) {
                matchCount++;
                const card = document.createElement('div');
                card.className = 'icon-card card-compact';
                card.id = `card-${icon.id}`;
                card.setAttribute('data-id', icon.id);
                card.setAttribute('data-tooltip', icon.id);
                card.innerHTML = `
                    <div class="svg-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="vector-svg" id="svg-${icon.id}">
                            ${icon.svgMarkup}
                        </svg>
                    </div>
                `;
                grid.appendChild(card);
            }
        });

        // Toggle No Results display
        const noResultsEl = document.getElementById('noResults');
        if (matchCount === 0) {
            noResultsEl.style.display = 'flex';
        } else {
            noResultsEl.style.display = 'none';
        }

        // Update category counts based on current search input
        updateCategoryCounts(searchVal);

        // Setup individual action listeners (open modal on card click)
        document.querySelectorAll('.icon-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-id');
                openCodeModal(id);
            });
        });

        // Apply updated configurations
        updateSVGStyles();
    }

    function updateCategoryCounts(searchVal) {
        const categories = ['all', 'distribution', 'software', 'custom', 'hardware-features', 'ai-computing', 'environment-sensors'];
        categories.forEach(cat => {
            const count = ICONS_DATA.filter(icon => {
                const titleMatch = icon.title.toLowerCase().includes(searchVal);
                const descMatch = icon.description.toLowerCase().includes(searchVal);
                const catMatch = icon.category.toLowerCase().includes(searchVal);
                const searchMatches = !searchVal || titleMatch || descMatch || catMatch;
                const categoryMatches = cat === 'all' || icon.category === cat;
                return searchMatches && categoryMatches;
            }).length;
            const badge = document.getElementById(`count-${cat}`);
            if (badge) {
                badge.textContent = count;
            }
        });
    }

    // Setup category filters click listeners
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.category-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            activeCategory = item.getAttribute('data-category');
            renderIcons();
        });
    });

    // --- Search Input Listener ---
    searchInput.addEventListener('input', renderIcons);

    // --- Sync Color inputs ---
    primaryColorPicker.addEventListener('input', updateSVGStyles);
    accentColorPicker.addEventListener('input', updateSVGStyles);
    borderColorPicker.addEventListener('input', updateSVGStyles);

    // --- Slider listeners ---
    strokeWidthSlider.addEventListener('input', () => {
        strokeWidthValue.textContent = parseFloat(strokeWidthSlider.value).toFixed(1) + ' px';
        updateSVGStyles();
    });

    exportSizeSlider.addEventListener('input', () => {
        exportSizeValue.textContent = exportSizeSlider.value + ' px';
        updateSVGStyles();
    });

    showBorderCheckbox.addEventListener('change', updateSVGStyles);

    // --- Modal Operations ---
    function openCodeModal(iconId) {
        activeModalIconId = iconId;
        const icon = ICONS_DATA.find(i => i.id === iconId);
        if (!icon) return;

        modalIconTitle.textContent = `${icon.title} - SVG 源代码`;
        updateModalPreview();

        codeModal.classList.add('show');
    }

    function updateModalPreview() {
        if (!activeModalIconId) return;
        const svgStr = generateCleanedSVGString(
            activeModalIconId, 
            primaryColorPicker.value, 
            accentColorPicker.value, 
            borderColorPicker.value, 
            strokeWidthSlider.value, 
            showBorderCheckbox.checked, 
            96 // Fixed display size in modal preview box
        );
        modalIconPreview.innerHTML = svgStr;
        
        // Show real source code with custom export size
        const sourceCodeStr = generateCleanedSVGString(
            activeModalIconId, 
            primaryColorPicker.value, 
            accentColorPicker.value, 
            borderColorPicker.value, 
            strokeWidthSlider.value, 
            showBorderCheckbox.checked, 
            exportSizeSlider.value
        );
        svgCodeDisplay.textContent = sourceCodeStr;
    }

    function closeModal() {
        codeModal.classList.remove('show');
        activeModalIconId = null;
    }

    closeModalBtn.addEventListener('click', closeModal);
    codeModal.addEventListener('click', (e) => {
        if (e.target === codeModal) closeModal();
    });

    copyModalBtn.addEventListener('click', () => {
        if (activeModalIconId) {
            const svgStr = generateCleanedSVGString(
                activeModalIconId, 
                primaryColorPicker.value, 
                accentColorPicker.value, 
                borderColorPicker.value, 
                strokeWidthSlider.value, 
                showBorderCheckbox.checked, 
                exportSizeSlider.value
            );
            copyToClipboard(svgStr);
        }
    });

    downloadModalBtn.addEventListener('click', () => {
        if (activeModalIconId) {
            const icon = ICONS_DATA.find(i => i.id === activeModalIconId);
            const svgStr = generateCleanedSVGString(
                activeModalIconId, 
                primaryColorPicker.value, 
                accentColorPicker.value, 
                borderColorPicker.value, 
                strokeWidthSlider.value, 
                showBorderCheckbox.checked, 
                exportSizeSlider.value
            );
            triggerDownload(svgStr, icon.filename);
        }
    });

    // --- Copy and Download Helpers ---
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => showToast('SVG 源代码已复制！'))
            .catch(() => showToast('复制失败，请重试。'));
    }

    function triggerDownload(text, filename) {
        const blob = new Blob([text], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        showToast(`已成功下载 ${filename}`);
    }

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2200);
    }

    // ZIP Bundle Export handler removed

    // --- Theme Toggle Switch ---
    themeToggleBtn.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme', !isLight);
        
        themeToggleBtn.querySelector('.theme-label-text').textContent = isLight ? '浅色模式' : '深色模式';
        
        // Apply color recommendation updates
        if (isLight) {
            primaryColorPicker.value = '#4E5868';
            borderColorPicker.value = '#E4E7EC';
        } else {
            primaryColorPicker.value = '#F0F6FC';
            borderColorPicker.value = '#30363D';
        }

        updateSVGStyles();
    });

    // --- Reset to Default values ---
    resetBtn.addEventListener('click', () => {
        primaryColorPicker.value = DEFAULTS.primary;
        accentColorPicker.value = DEFAULTS.accent;
        borderColorPicker.value = DEFAULTS.border;

        strokeWidthSlider.value = DEFAULTS.strokeWidth;
        strokeWidthValue.textContent = DEFAULTS.strokeWidth.toFixed(1) + ' px';

        exportSizeSlider.value = DEFAULTS.exportSize;
        exportSizeValue.textContent = DEFAULTS.exportSize + ' px';

        showBorderCheckbox.checked = DEFAULTS.showBorder;

        // Reset theme to light defaults
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        themeToggleBtn.querySelector('.theme-label-text').textContent = '浅色模式';

        updateSVGStyles();
        showToast('已重置为默认值 (#4E5868 / 24px / 1.5px)');
    });

    // --- Initialize ---
    renderIcons();
});
