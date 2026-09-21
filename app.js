document.addEventListener('DOMContentLoaded', () => {
    // --- Icons Database ---
    const ICONS_DATA = [
        // Category: AI Models & Edge Deployment (4 Icons)
        {
            id: 'hundreds-of-pretrained-models',
            title: 'Hundreds of Pretrained Models / 数百个预置模型',
            description: 'Select a compatible model from the model zoo, deploy it, and preview results.',
            category: 'ai-computing',
            filename: 'hundreds-of-pretrained-models.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M12 3L4 7.5v9L12 21l8-4.5v-9L12 3z" />
                <path class="svg-primary" d="M12 3v18M20 7.5L12 12M4 7.5L12 12" />
                <path class="svg-primary" d="M4 12l8 4.5 8-4.5" />
                <path class="svg-accent" d="M10.5 9.5l4.5 2.5-4.5 2.5v-5z" />
                <path class="svg-accent" d="M18.5 3.5l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
            `
        },
        {
            id: 'train-onsite-in-3-minutes',
            title: 'Train On-site in 3 Minutes / 3分钟现场训练',
            description: 'Train a custom AI model on field data in 3 minutes - no code required.',
            category: 'ai-computing',
            filename: 'train-onsite-in-3-minutes.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <circle class="svg-primary" cx="12" cy="13" r="8" />
                <path class="svg-primary" d="M12 2v3M10 2h4M17.66 6.34l1.42-1.42" />
                <path class="svg-accent" d="M12 9v4l2.5 2.5" />
                <path class="svg-accent" d="M6 10a7 7 0 0 1 11.5-2.5" />
                <path class="svg-accent" d="M17 5v3h-3" />
                <path class="svg-accent" d="M4.5 13l2.5-4.5h3L8.5 13" />
            `
        },
        {
            id: 'works-across-compute-levels',
            title: 'Works Across Compute Levels / 适配不同算力硬件',
            description: 'Match hardware to your compute needs (MCU, Edge AI, NPU) and deploy flexibly.',
            category: 'ai-computing',
            filename: 'works-across-compute-levels.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="3" y="14" width="5" height="5" rx="1" />
                <rect class="svg-primary" x="9" y="10" width="6" height="9" rx="1" />
                <rect class="svg-primary" x="16" y="5" width="5" height="14" rx="1" />
                <path class="svg-accent" d="M5.5 14V9.5A1.5 1.5 0 0 1 7 8h5" />
                <path class="svg-accent" d="M12 10V6.5A1.5 1.5 0 0 1 13.5 5H16" />
                <circle class="svg-accent" cx="5.5" cy="16.5" r="0.8" />
                <circle class="svg-accent" cx="12" cy="14.5" r="0.8" />
                <circle class="svg-accent" cx="18.5" cy="12" r="0.8" />
            `
        },
        {
            id: 'deploy-to-edge-run-locally',
            title: 'Deploy to Devices & Edge / 端侧部署，本地运行',
            description: 'Deploy models to terminal devices or edge hardware and run inference locally offline.',
            category: 'ai-computing',
            filename: 'deploy-to-edge-run-locally.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="3.5" y="5" width="17" height="12" rx="2" />
                <path class="svg-primary" d="M7 17v3M17 17v3M5 20h14" />
                <circle class="svg-accent" cx="12" cy="11" r="3.5" />
                <path class="svg-accent" d="M10.5 11l1 1 2-2" />
                <path class="svg-accent" d="M8 8h.01M16 8h.01" />
            `
        },
        // Category: SenseCraft HMI UI System Icons (7 Icons)
        {
            id: 'hmi-data-node',
            title: 'Data 数据节点 / HMI Data Node',
            description: 'SenseCraft HMI data node crosshair, telemetry binding & data pin.',
            category: 'hmi-ui',
            filename: 'hmi-data-node.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <circle class="svg-primary" cx="12" cy="12" r="2.5" />
                <path class="svg-primary" d="M12 4v4.5M12 15.5V20M4 12h4.5M15.5 12H20" />
                <circle class="svg-accent" cx="12" cy="4" r="1" />
                <circle class="svg-accent" cx="12" cy="20" r="1" />
                <circle class="svg-accent" cx="4" cy="12" r="1" />
                <circle class="svg-accent" cx="20" cy="12" r="1" />
            `
        },
        {
            id: 'hmi-basic-shape',
            title: 'Basic 基础图形 / HMI Basic Shapes',
            description: 'SenseCraft HMI basic geometry shapes and vector graphic tools.',
            category: 'hmi-ui',
            filename: 'hmi-basic-shape.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <circle class="svg-primary" cx="12" cy="12" r="7.5" />
                <rect class="svg-accent" x="8" y="8" width="8" height="8" rx="1.5" />
            `
        },
        {
            id: 'hmi-component-grid',
            title: 'Component 组件库 / HMI Component Grid',
            description: 'SenseCraft HMI four-quadrant component library & app grid.',
            category: 'hmi-ui',
            filename: 'hmi-component-grid.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="4" y="4" width="6.5" height="6.5" rx="1.5" />
                <rect class="svg-primary" x="13.5" y="4" width="6.5" height="6.5" rx="1.5" />
                <rect class="svg-primary" x="4" y="13.5" width="6.5" height="6.5" rx="1.5" />
                <rect class="svg-accent" x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" />
            `
        },
        {
            id: 'hmi-my-widgets',
            title: 'My Widgets 我的微件 / HMI My Widgets',
            description: 'SenseCraft HMI favorite widgets & saved custom UI components.',
            category: 'hmi-ui',
            filename: 'hmi-my-widgets.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M12 20.5l-1.45-1.32C5.4 14.36 2 11.28 2 7.5 2 4.42 4.42 2 7.5 2c1.74 0 3.41.81 4.5 2.09C13.09 2.81 14.76 2 16.5 2 19.58 2 22 4.42 22 7.5c0 3.78-3.4 6.86-8.55 11.68L12 20.5z" />
                <path class="svg-accent" d="M12 6.5v4M10 8.5h4" />
            `
        },
        {
            id: 'hmi-device-monitor',
            title: 'Device 设备终端 / HMI Device Monitor',
            description: 'SenseCraft HMI smart device, display terminal & hardware status.',
            category: 'hmi-ui',
            filename: 'hmi-device-monitor.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="3.5" y="4" width="17" height="11" rx="2" />
                <path class="svg-primary" d="M9 15v3.5M15 15v3.5M6 18.5h12" />
                <rect class="svg-accent" x="9" y="7.5" width="6" height="4" rx="1" />
            `
        },
        {
            id: 'hmi-tools-wrench',
            title: 'Tools 工具箱 / HMI Tools',
            description: 'SenseCraft HMI system tools, settings & calibration utilities.',
            category: 'hmi-ui',
            filename: 'hmi-tools-wrench.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M14.7 3.3a4 4 0 0 0-5.4 5.4L3 15a2.12 2.12 0 0 0 3 3l6.3-6.3a4 4 0 0 0 5.4-5.4l-3 3-3-3 3-3z" />
                <circle class="svg-accent" cx="16.5" cy="7.5" r="1" />
            `
        },
        {
            id: 'hmi-ai-gen',
            title: 'AI Gen AI生成 / HMI AI Generation',
            description: 'SenseCraft HMI AI generator, magic wand & smart design tools.',
            category: 'hmi-ui',
            filename: 'hmi-ai-gen.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3z" />
                <path class="svg-accent" d="M5 4l1 2.5L8.5 7.5 6 8.5 5 11l-1-2.5L1.5 7.5 4 6.5 5 4z" />
            `
        },
        // Category: SenseCraft HMI Data Sources (16 Icons)
        {
            id: 'hmi-device-sensors',
            title: 'Device Sensors 设备传感器 / HMI Device Sensors',
            description: 'SenseCraft HMI device sensors & hardware telemetry data source.',
            category: 'hmi-data',
            filename: 'hmi-device-sensors.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="4" y="4" width="16" height="16" rx="2" />
                <rect class="svg-accent" x="8" y="8" width="8" height="8" />
                <line class="svg-primary" x1="1" y1="9" x2="4" y2="9" />
                <line class="svg-primary" x1="1" y1="15" x2="4" y2="15" />
                <line class="svg-primary" x1="20" y1="9" x2="23" y2="9" />
                <line class="svg-primary" x1="20" y1="15" x2="23" y2="15" />
                <line class="svg-primary" x1="9" y1="1" x2="9" y2="4" />
                <line class="svg-primary" x1="15" y1="1" x2="15" y2="4" />
                <line class="svg-primary" x1="9" y1="20" x2="9" y2="23" />
                <line class="svg-primary" x1="15" y1="20" x2="15" y2="23" />
            `
        },
        {
            id: 'hmi-sensecap',
            title: 'SenseCAP 传感器节点 / SenseCAP Data',
            description: 'SenseCAP IoT sensor node, cloud telemetry & device data node.',
            category: 'hmi-data',
            filename: 'hmi-sensecap.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M5 12.55a11 11 0 0 1 14.08 0" />
                <path class="svg-primary" d="M1.42 9a16 16 0 0 1 21.16 0" />
                <path class="svg-accent" d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <line class="svg-accent" x1="12" y1="20" x2="12.01" y2="20" />
            `
        },
        {
            id: 'hmi-weather',
            title: 'Weather 天气预报 / Weather Forecast',
            description: 'SenseCraft HMI weather forecast & meteorological data feed.',
            category: 'hmi-data',
            filename: 'hmi-weather.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
            `
        },
        {
            id: 'hmi-stock',
            title: 'Stock 股市行情 / Financial Stock Market',
            description: 'SenseCraft HMI stock market, ticker & financial trend chart data.',
            category: 'hmi-data',
            filename: 'hmi-stock.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <polyline class="svg-primary" points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline class="svg-accent" points="17 6 23 6 23 12" />
            `
        },
        {
            id: 'hmi-coinmarketcap',
            title: 'CoinMarketCap 加密货币 / Crypto Currency',
            description: 'SenseCraft HMI CoinMarketCap crypto price & market index feed.',
            category: 'hmi-data',
            filename: 'hmi-coinmarketcap.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <circle class="svg-primary" cx="12" cy="12" r="10" />
                <path class="svg-accent" d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                <line class="svg-accent" x1="12" y1="6" x2="12" y2="8" />
                <line class="svg-accent" x1="12" y1="16" x2="12" y2="18" />
            `
        },
        {
            id: 'hmi-github',
            title: 'GitHub 开源社区 / GitHub Integration',
            description: 'SenseCraft HMI GitHub repository, workflow & developer commits.',
            category: 'hmi-data',
            filename: 'hmi-github.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            `
        },
        {
            id: 'hmi-youtube',
            title: 'YouTube 视频与流媒体 / YouTube Data',
            description: 'SenseCraft HMI YouTube video stream, subscriber & view analytics.',
            category: 'hmi-data',
            filename: 'hmi-youtube.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon class="svg-accent" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            `
        },
        {
            id: 'hmi-zenquotes',
            title: 'ZenQuotes 每日名言 / ZenQuotes Daily Quote',
            description: 'SenseCraft HMI ZenQuotes daily motivational quotes & API widget.',
            category: 'hmi-data',
            filename: 'hmi-zenquotes.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 4-3 6-4 6zm11 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 4-3 6-4 6z" />
            `
        },
        {
            id: 'hmi-todoist',
            title: 'Todoist 待办清单 / Todoist Task Manager',
            description: 'SenseCraft HMI Todoist tasks, schedule & project checklist integration.',
            category: 'hmi-data',
            filename: 'hmi-todoist.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <polyline class="svg-accent" points="9 11 12 14 22 4" />
                <path class="svg-primary" d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            `
        },
        {
            id: 'hmi-google-calendar',
            title: 'Google Calendar 谷歌日历 / Google Calendar',
            description: 'SenseCraft HMI Google Calendar event sync & agenda widget.',
            category: 'hmi-data',
            filename: 'hmi-google-calendar.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line class="svg-accent" x1="16" y1="2" x2="16" y2="6" />
                <line class="svg-accent" x1="8" y1="2" x2="8" y2="6" />
                <line class="svg-primary" x1="3" y1="10" x2="21" y2="10" />
            `
        },
        {
            id: 'hmi-rss-feed',
            title: 'RSS Feed 内容订阅 / RSS News Feed',
            description: 'SenseCraft HMI RSS news subscription, blog update & feed reader.',
            category: 'hmi-data',
            filename: 'hmi-rss-feed.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M4 11a9 9 0 0 1 9 9" />
                <path class="svg-primary" d="M4 4a16 16 0 0 1 16 16" />
                <circle class="svg-accent" cx="5" cy="19" r="1" />
            `
        },
        {
            id: 'hmi-html',
            title: 'HTML 网页解析 / HTML Web Fetcher',
            description: 'SenseCraft HMI HTML web scraping, API endpoint & URL data source.',
            category: 'hmi-data',
            filename: 'hmi-html.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <polyline class="svg-primary" points="16 18 22 12 16 6" />
                <polyline class="svg-accent" points="8 6 2 12 8 18" />
            `
        },
        {
            id: 'hmi-hackernews',
            title: 'HackerNews 极客资讯 / HackerNews Feed',
            description: 'SenseCraft HMI HackerNews tech stories, hot threads & ranking feed.',
            category: 'hmi-data',
            filename: 'hmi-hackernews.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="2" y="2" width="20" height="20" rx="4" />
                <path class="svg-accent" d="M7 6l5 7v5h2v-5l5-7h-2.5L13 11.5 9.5 6H7z" />
            `
        },
        {
            id: 'hmi-reddit',
            title: 'Reddit 社区讨论 / Reddit Data Source',
            description: 'SenseCraft HMI Reddit posts, karma counter & community subreddits.',
            category: 'hmi-data',
            filename: 'hmi-reddit.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <circle class="svg-primary" cx="12" cy="12" r="9" />
                <circle class="svg-primary" cx="12" cy="12" r="3" />
                <circle class="svg-accent" cx="8" cy="10" r="1" />
                <circle class="svg-accent" cx="16" cy="10" r="1" />
                <path class="svg-accent" d="M9 15c1 1 5 1 6 0" />
            `
        },
        {
            id: 'hmi-external-data-source',
            title: 'External Data Source 外部数据源 / External API',
            description: 'SenseCraft HMI custom external API, webhook & JSON data endpoint.',
            category: 'hmi-data',
            filename: 'hmi-external-data-source.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <ellipse class="svg-primary" cx="12" cy="5" rx="9" ry="3" />
                <path class="svg-primary" d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path class="svg-primary" d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            `
        },
        {
            id: 'hmi-push-to-sensecraft',
            title: 'Push to SenseCraft 云端推送 / Push to SenseCraft',
            description: 'SenseCraft HMI cloud push notification, telemetry upload & sync.',
            category: 'hmi-data',
            filename: 'hmi-push-to-sensecraft.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-accent" d="M16 16l-4-4-4 4" />
                <path class="svg-accent" d="M12 12v9" />
                <path class="svg-primary" d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
            `
        },
        // Category: Manufacturing & Services (5 Icons)
        {
            id: 'design-for-manufacturing',
            title: 'DFM 面向制造的设计 / Design for Manufacturing',
            description: 'Optimizing hardware design for seamless DFM mass production.',
            category: 'services',
            filename: 'design-for-manufacturing.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M5 3h10l4 4v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
                <path class="svg-primary" d="M15 3v4h4" />
                <path class="svg-primary" d="M7 9h4l2 2v4" />
                <circle class="svg-primary" cx="7" cy="9" r="0.8" />
                <circle class="svg-primary" cx="13" cy="15" r="0.8" />
                <circle class="svg-accent" cx="14" cy="14" r="2.5" />
                <path class="svg-accent" d="M14 10.5v1M14 16.5v1M10.5 14h1M16.5 14h1" />
            `
        },
        {
            id: 'prototype-to-production-support',
            title: '原型到量产支持 / Prototype-to-Production Support',
            description: 'Seamless end-to-end support from NPI prototyping to full volume production.',
            category: 'services',
            filename: 'prototype-to-production-support.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M3.5 8.5L8 6l4.5 2.5V14L8 16.5L3.5 14V8.5z" />
                <path class="svg-primary" d="M8 6v8M3.5 8.5L8 11M12.5 8.5L8 11" />
                <path class="svg-accent" d="M13 11h3" />
                <path class="svg-accent" d="M14.5 9.5L16.5 11l-2 1.5" />
                <rect class="svg-accent" x="17.5" y="6" width="3.5" height="10" rx="1" />
                <line class="svg-accent" x1="17.5" y1="9.5" x2="21" y2="9.5" />
                <line class="svg-accent" x1="17.5" y1="13" x2="21" y2="13" />
            `
        },
        {
            id: 'testing-quality-assurance',
            title: '测试与品控 / Testing & Quality Assurance',
            description: 'Rigorous quality control, functional verification & QA test automation.',
            category: 'services',
            filename: 'testing-quality-assurance.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M12 3a9 9 0 0 0 8 5c0 6.5-4 11-8 13C8 19 4 14.5 4 8a9 9 0 0 0 8-5z" />
                <path class="svg-primary" d="M7 11.5h2l1.5-2.5 2 5 1.5-2.5h2" />
                <path class="svg-accent" d="M9.5 15.5l2 2 4-4" />
            `
        },
        {
            id: 'scale-with-flexibility',
            title: '灵活扩产 / Scale with Flexibility',
            description: 'Flexible order volumes and agile production scaling.',
            category: 'services',
            filename: 'scale-with-flexibility.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="4" y="12" width="7" height="7" rx="1.5" />
                <rect class="svg-primary" x="13" y="12" width="7" height="7" rx="1.5" />
                <rect class="svg-primary" x="4" y="3" width="7" height="7" rx="1.5" />
                <path class="svg-accent" d="M14 5h5v5" />
                <path class="svg-accent" d="M13 10l6-6" />
                <path class="svg-accent" d="M11 15.5h2" />
                <path class="svg-accent" d="M7.5 10v2" />
            `
        },
        {
            id: 'supply-chain-global-delivery',
            title: '供应链与全球交付 / Supply Chain & Global Delivery',
            description: 'Global logistics, warehousing, component sourcing & door-to-door delivery.',
            category: 'services',
            filename: 'supply-chain-global-delivery.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <circle class="svg-primary" cx="10" cy="10" r="7" />
                <path class="svg-primary" d="M3 10h14" />
                <path class="svg-primary" d="M10 3a9 9 0 0 1 0 14M10 3a9 9 0 0 0 0 14" />
                <path class="svg-accent" d="M14 13.5L18.5 11.5L22 13.5V18.5L18.5 20.5L14 18.5V13.5Z" />
                <path class="svg-accent" d="M14 13.5v5M18.5 11.5v9M22 13.5l-3.5 2" />
                <path class="svg-accent" d="M14 13.5l4.5 2" />
            `
        },
        // Category: Engineering Challenges (4 Icons from image)
        {
            id: 'design-vs-production-ready',
            title: 'Design ≠ Production-ready / 设计≠可量产',
            description: 'Looks good on paper, but hard to manufacture.',
            category: 'engineering-challenges',
            filename: 'design-vs-production-ready.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
                <path class="svg-primary" d="M14 3v5h5" />
                <path class="svg-primary" d="M8 9h4M8 12h2" />
                <line class="svg-accent" x1="13.5" y1="13.5" x2="18.5" y2="13.5" />
                <line class="svg-accent" x1="13.5" y1="16.5" x2="18.5" y2="16.5" />
                <line class="svg-accent" x1="17.5" y1="12" x2="14.5" y2="18" />
            `
        },
        {
            id: 'samples-vs-stable-quality',
            title: 'Samples ≠ Stable Quality / 样品≠稳定品质',
            description: 'Works for a few, but not at scale.',
            category: 'engineering-challenges',
            filename: 'samples-vs-stable-quality.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="3.5" y="7" width="9" height="11" rx="1.5" />
                <path class="svg-primary" d="M3.5 11h9M6 14.5h4" />
                <path class="svg-primary" d="M6 4.5v2.5M10 4.5v2.5" />
                <path class="svg-accent" d="M17 7.5c2.5 0 4.5 1.5 4.5 4.5 0 3.5-4.5 6.5-4.5 6.5S12.5 15.5 12.5 12c0-3 2-4.5 4.5-4.5z" />
                <line class="svg-accent" x1="15" y1="10.5" x2="19" y2="10.5" />
                <line class="svg-accent" x1="15" y1="13" x2="19" y2="13" />
                <line class="svg-accent" x1="18" y1="9" x2="16" y2="14.5" />
            `
        },
        {
            id: 'lab-vs-real-world-reliability',
            title: 'Lab ≠ Real-world / 实验室≠实际可靠性',
            description: 'Needs to withstand harsh environments.',
            category: 'engineering-challenges',
            filename: 'lab-vs-real-world-reliability.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="3" y="4" width="9.5" height="8" rx="1.5" />
                <path class="svg-primary" d="M6.5 12v3.5M4 15.5h5" />
                <path class="svg-primary" d="M4.5 8h1.5l1.2-2 1.2 3.5 1.2-1.5h1.4" />
                <line class="svg-accent" x1="11.5" y1="8" x2="14.5" y2="8" />
                <line class="svg-accent" x1="11.5" y1="10" x2="14.5" y2="10" />
                <line class="svg-accent" x1="14" y1="7" x2="12" y2="11" />
                <path class="svg-accent" d="M18.5 4c2.5 0 4 1.2 4 3.5 0 3.8-4 6.5-4 6.5s-4-2.7-4-6.5c0-2.3 1.5-3.5 4-3.5z" />
                <path class="svg-accent" d="M18.5 6.2l-1.2 2.2h1.8l-.8 2.2" />
                <path class="svg-accent" d="M5 19.5l1.5-2M9 19.5l1.5-2M13 19.5l1.5-2M17 19.5l1.5-2" />
            `
        },
        {
            id: 'scaling-vs-simple',
            title: 'Scaling ≠ Simple / 规模化≠简单',
            description: 'Manufacturing, supply chain and delivery are complex.',
            category: 'engineering-challenges',
            filename: 'scaling-vs-simple.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="3" y="4" width="6" height="6" rx="1" />
                <path class="svg-primary" d="M5 4v-1.5M7 4v-1.5" />
                <rect class="svg-primary" x="15" y="4" width="6" height="6" rx="1" />
                <circle class="svg-primary" cx="16.5" cy="10" r="0.8" />
                <circle class="svg-primary" cx="19.5" cy="10" r="0.8" />
                <path class="svg-primary" d="M6 10v4.5a1.5 1.5 0 0 0 1.5 1.5H10" />
                <path class="svg-primary" d="M18 10v4.5a1.5 1.5 0 0 1-1.5 1.5H14" />
                <circle class="svg-primary" cx="12" cy="16" r="2" />
                <path class="svg-primary" d="M12 18v3" />
                <line class="svg-accent" x1="10" y1="8" x2="14" y2="8" />
                <line class="svg-accent" x1="10" y1="10.5" x2="14" y2="10.5" />
                <line class="svg-accent" x1="13" y1="6.5" x2="11" y2="12" />
            `
        },
        // Category: Hardware Lifecycle (6 Process Icons from image)
        {
            id: 'define-product-requirements',
            title: 'Define / 需求定义',
            description: 'Product requirements & system specification definition.',
            category: 'lifecycle',
            filename: 'define-product-requirements.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="5" y="4" width="14" height="17" rx="2" />
                <path class="svg-primary" d="M9 4V2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V4" />
                <path class="svg-accent" d="M8 9.5l1.5 1.5 3-3" />
                <line class="svg-primary" x1="14" y1="9.5" x2="16.5" y2="9.5" />
                <path class="svg-accent" d="M8 14.5l1.5 1.5 3-3" />
                <line class="svg-primary" x1="14" y1="14.5" x2="16.5" y2="14.5" />
                <line class="svg-primary" x1="8" y1="18.5" x2="14" y2="18.5" />
            `
        },
        {
            id: 'design-hardware-engineering',
            title: 'Design / 硬件设计',
            description: 'Hardware & system engineering design.',
            category: 'lifecycle',
            filename: 'design-hardware-engineering.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M4 19.5h16L4 3.5v16z" />
                <path class="svg-primary" d="M7.5 16h5L7.5 11v5z" />
                <path class="svg-accent" d="M14 6l4.5 4.5" />
                <path class="svg-accent" d="M11.5 18.5l9-9" />
                <circle class="svg-accent" cx="20.5" cy="9.5" r="0.8" />
            `
        },
        {
            id: 'validate-prototype-refine',
            title: 'Validate / 原型验证',
            description: 'Prototype building, testing & iterative refinement.',
            category: 'lifecycle',
            filename: 'validate-prototype-refine.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="4" y="6" width="16" height="12" rx="2" />
                <path class="svg-primary" d="M7 3v3M17 3v3M7 18v3M17 18v3" />
                <path class="svg-accent" d="M8.5 12l2.5 2.5 5-5" />
                <path class="svg-accent" d="M18.5 9.5a5 5 0 0 1 0 5" />
            `
        },
        {
            id: 'manufacture-pcba-assembly',
            title: 'Manufacture / 制造生产',
            description: 'PCB, PCBA & mass assembly manufacturing.',
            category: 'lifecycle',
            filename: 'manufacture-pcba-assembly.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="3" y="13" width="18" height="7" rx="1.5" />
                <path class="svg-primary" d="M6 13v-2M10 13v-2M14 13v-2M18 13v-2" />
                <circle class="svg-primary" cx="6" cy="16.5" r="0.8" />
                <circle class="svg-primary" cx="18" cy="16.5" r="0.8" />
                <path class="svg-accent" d="M12 2v5" />
                <path class="svg-accent" d="M9 7h6v2H9z" />
                <rect class="svg-accent" x="10" y="9" width="4" height="4" rx="0.5" />
            `
        },
        {
            id: 'test-quality-production',
            title: 'Test / 品质测试',
            description: 'Quality assurance & production testing.',
            category: 'lifecycle',
            filename: 'test-quality-production.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="3" y="4" width="18" height="16" rx="2" />
                <rect class="svg-primary" x="5" y="6" width="14" height="9" rx="1" />
                <path class="svg-accent" d="M6.5 10.5h2.5l1.5-3 2 6 1.5-3h2.5" />
                <circle class="svg-primary" cx="7" cy="17.5" r="0.8" />
                <circle class="svg-primary" cx="10" cy="17.5" r="0.8" />
                <path class="svg-accent" d="M14 17.5l1.5 1.5 3-3" />
            `
        },
        {
            id: 'scale-volume-production',
            title: 'Scale / 规模量产',
            description: 'Pilot to volume production scaling.',
            category: 'lifecycle',
            filename: 'scale-volume-production.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M4 19h16" />
                <rect class="svg-primary" x="4" y="13" width="4" height="6" rx="1" />
                <rect class="svg-primary" x="10" y="9" width="4" height="10" rx="1" />
                <rect class="svg-primary" x="16" y="5" width="4" height="14" rx="1" />
                <path class="svg-accent" d="M4 9l5-4 5 2 6-4" />
                <path class="svg-accent" d="M17 3h3v3" />
            `
        },
        {
            id: 'npu-6tops-edge-ai',
            title: '6 TOPS NPU 算力 / 6 TOPS NPU for Edge AI',
            description: 'Octa-Core performance and 6 TOPS NPU accelerator for edge AI workload.',
            category: 'recomputer-lab',
            filename: '6-tops-npu-edge-ai.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="5" y="5" width="14" height="14" rx="2" />
                <path class="svg-primary" d="M8 2v3M12 2v3M16 2v3M8 19v3M12 19v3M16 19v3M2 8h3M2 12h3M2 16h3M19 8h3M19 12h3M19 16h3" />
                <rect class="svg-primary" x="7.5" y="7.5" width="3" height="3" rx="0.5" />
                <rect class="svg-primary" x="13.5" y="7.5" width="3" height="3" rx="0.5" />
                <rect class="svg-primary" x="7.5" y="13.5" width="3" height="3" rx="0.5" />
                <rect class="svg-primary" x="13.5" y="13.5" width="3" height="3" rx="0.5" />
                <circle class="svg-accent" cx="12" cy="12" r="2" />
                <path class="svg-accent" d="M12 9.5v1M12 13.5v1M9.5 12h1M13.5 12h1" />
            `
        },
        {
            id: 'recomputer-ai-lab',
            title: 'AI Lab 快速原型 / Rapid Prototyping',
            description: 'reComputer AI Lab for rapid hardware and software prototyping.',
            category: 'recomputer-lab',
            filename: 'recomputer-ai-lab.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="4" y="5" width="16" height="14" rx="2" />
                <path class="svg-primary" d="M8 2v3M12 2v3M16 2v3M8 19v3M12 19v3M16 19v3M2 12h2M20 12h2" />
                <rect class="svg-accent" x="8" y="9" width="8" height="6" rx="1" />
                <path class="svg-accent" d="M12 10.5l-1 1.5h2l-1 1.5" />
                <circle class="svg-accent" cx="6" cy="12" r="0.8" />
                <circle class="svg-accent" cx="18" cy="12" r="0.8" />
            `
        },
        {
            id: 'rich-io-expansion-ports',
            title: '丰富 I/O 扩展 / Rich I/O Expansion',
            description: 'HDMI, CSI/DSI, USB, GPIO & more interface expansion.',
            category: 'recomputer-lab',
            filename: 'rich-io-expansion.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="3" y="14" width="18" height="6" rx="1.5" />
                <path class="svg-primary" d="M5 14v-4h4l1 1.5v2.5H5" />
                <rect class="svg-primary" x="11" y="9" width="4" height="5" rx="0.8" />
                <line class="svg-primary" x1="11" y1="11.5" x2="15" y2="11.5" />
                <path class="svg-primary" d="M17 14v-5M19 14v-5M17 9h2" />
                <circle class="svg-accent" cx="7" cy="6" r="2" />
                <circle class="svg-accent" cx="7" cy="6" r="0.7" />
                <path class="svg-accent" d="M10 6h3" />
                <path class="svg-accent" d="M4 17h16" />
            `
        },
        {
            id: 'm2-expansion-nvme',
            title: 'M.2 扩展槽 / M.2 Expansion Slot',
            description: 'NVMe & AI Accelerator Ready high-speed M.2 socket expansion.',
            category: 'recomputer-lab',
            filename: 'm2-expansion-nvme.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M7 20V5a1 1 0 0 1 1-1h3a1 1 0 0 0 2 0h3a1 1 0 0 1 1 1v15" />
                <rect class="svg-primary" x="5" y="18" width="14" height="3" rx="0.5" />
                <path class="svg-primary" d="M9 18v2M12 18v2M15 18v2" />
                <rect class="svg-primary" x="9" y="7" width="6" height="4" rx="0.8" />
                <path class="svg-accent" d="M12.5 12l-2 3h3l-1.5 3" />
                <circle class="svg-accent" cx="12" cy="4" r="0.8" />
            `
        },
        {
            id: 'native-armbian-os',
            title: '原生 Armbian OS / Native Armbian OS',
            description: 'Compatible with Ubuntu, Android, Debian, Balena OS.',
            category: 'recomputer-lab',
            filename: 'native-armbian-os.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="4" y="4" width="16" height="13" rx="2" />
                <line class="svg-primary" x1="4" y1="8" x2="20" y2="8" />
                <circle class="svg-primary" cx="6.5" cy="6" r="0.6" />
                <circle class="svg-primary" cx="9" cy="6" r="0.6" />
                <path class="svg-primary" d="M7 11l2 1.5L7 14" />
                <line class="svg-primary" x1="11.5" y1="14" x2="14" y2="14" />
                <path class="svg-accent" d="M4 19c3 0 5-1.5 8-1.5s5 1.5 8 1.5" />
                <path class="svg-accent" d="M17.5 12c.8-1.8 2.5-3 2.5-3s-1.2 2.7-3 3.5" />
                <circle class="svg-accent" cx="17.5" cy="14" r="1.5" />
            `
        },
        {
            id: 'production-ready-industrial',
            title: '工业级量产 / Production Ready',
            description: 'Linux, Android & Industrial options ready for mass production.',
            category: 'recomputer-lab',
            filename: 'production-ready-industrial.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M12 3L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-3z" />
                <path class="svg-primary" d="M12 7a5 5 0 0 0-5 5c0 1.8.9 3.3 2.3 4.2" />
                <path class="svg-accent" d="M9 12l2.5 2.5L16.5 9" />
                <circle class="svg-accent" cx="12" cy="12" r="2.5" />
            `
        },
        {
            id: 'tops-20-ai-acceleration',
            title: '20 TOPS AI 算力 / 20 TOPS AI Acceleration',
            description: 'RK1820 AI Accelerator module for high-performance AI inference.',
            category: 'recomputer-lab',
            filename: '20-tops-ai-acceleration.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M4 17V9l2.5-3h11L20 9v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
                <path class="svg-primary" d="M7 6v3M9.5 6v3M14.5 6v3M17 6v3" />
                <path class="svg-primary" d="M7 18v3M10 18v3M14 18v3M17 18v3" />
                <circle class="svg-accent" cx="12" cy="13.5" r="3.2" />
                <circle class="svg-accent" cx="12" cy="13.5" r="1" />
                <path class="svg-accent" d="M12 11.2l-0.8 2.3h1.6L12 15.8" />
            `
        },
        {
            id: 'multi-model-ai-inference',
            title: '多模态 AI 并发 / Multi-Model AI',
            description: 'Concurrent CV, LLM & VLM Inference.',
            category: 'recomputer-lab',
            filename: 'multi-model-ai.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M4 8c2.5-2.5 5.5-3.5 8-3.5s5.5 1 8 3.5c-2.5 2.5-5.5 3.5-8 3.5S6.5 10.5 4 8z" />
                <circle class="svg-primary" cx="12" cy="8" r="2" />
                <rect class="svg-primary" x="4" y="14" width="7" height="6" rx="1.5" />
                <line class="svg-primary" x1="6.5" y1="16.5" x2="8.5" y2="16.5" />
                <line class="svg-primary" x1="6.5" y1="18.5" x2="9.5" y2="18.5" />
                <rect class="svg-primary" x="13" y="14" width="7" height="6" rx="1.5" />
                <path class="svg-primary" d="M15 18.5l1.5-2 1.5 2" />
                <path class="svg-accent" d="M12 10v4M7.5 14v-2.5h9V14" />
                <circle class="svg-accent" cx="12" cy="11.5" r="1.2" />
            `
        },
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
        {
            id: 'prototype-design-build',
            title: '原型打样 / Prototype',
            description: 'Rapid hardware prototyping and sample build.',
            category: 'distribution',
            filename: 'prototype-design-build.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" />
                <path class="svg-primary" d="M12 3V12M20 7.5L12 12M4 7.5L12 12" />
                <path class="svg-accent" d="M12 7.5l4 2.25M12 12l4 2.25M12 16.5l4-2.25" />
                <circle class="svg-accent" cx="12" cy="12" r="1.5" />
            `
        },
        {
            id: 'manufacture-assembly-line',
            title: '批量制造 / Manufacture',
            description: 'Agile SMT assembly and mass production.',
            category: 'distribution',
            filename: 'manufacture-assembly-line.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M4 20V10l4 2.5V10l4 2.5V7l8 4.5V20H4z" />
                <path class="svg-primary" d="M4 20h16" />
                <rect class="svg-primary" x="7" y="15" width="2.5" height="3" rx="0.5" />
                <rect class="svg-primary" x="11.5" y="15" width="2.5" height="3" rx="0.5" />
                <rect class="svg-primary" x="16" y="15" width="2.5" height="3" rx="0.5" />
                <circle class="svg-accent" cx="18" cy="5.5" r="1.2" />
                <path class="svg-accent" d="M16 8c.6-.8 1.6-1 2.5-.4" />
            `
        },
        {
            id: 'warehouse-storage-hub',
            title: '仓储管理 / Warehouse',
            description: 'Smart inventory storage and fulfillment warehouse.',
            category: 'distribution',
            filename: 'warehouse-storage-hub.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M3 10L12 4l9 6v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10z" />
                <path class="svg-primary" d="M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7" />
                <path class="svg-accent" d="M12 7.5L15.5 9.5V12.5L12 14.5L8.5 12.5V9.5L12 7.5Z" />
                <path class="svg-accent" d="M12 7.5v7M15.5 9.5L12 11.2M8.5 9.5L12 11.2" />
            `
        },
        {
            id: 'dropshipping-direct-fulfillment',
            title: '代发货 / Dropshipping',
            description: 'Direct-to-customer global shipping and logistics fulfillment.',
            category: 'distribution',
            filename: 'dropshipping-direct-fulfillment.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M12 4.5L19.5 8.5V15.5L12 19.5L4.5 15.5V8.5L12 4.5Z" />
                <path class="svg-primary" d="M12 4.5v15M19.5 8.5L12 12M4.5 8.5L12 12" />
                <path class="svg-accent" d="M2 7h4M2 11h2.5M2 15h3.5" />
                <path class="svg-accent" d="M15.5 16.5l3.5 2 2.5-3" />
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
        {
            id: 'priority',
            title: '优先级 / Priority',
            description: 'High-priority task flag and star highlight indicator.',
            category: 'software',
            filename: 'priority.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M5 21V3h11.5l-2.5 4.5L16.5 12H5" />
                <path class="svg-accent" d="M17.5 14.5l.6 1.4 1.5.2-1.1 1.1.3 1.5-1.3-.7-1.3.7.3-1.5-1.1-1.1 1.5-.2z" />
                <path class="svg-primary" d="M9 7.5h3.5" />
            `
        },
        {
            id: 'inbox',
            title: '收件箱 / Inbox',
            description: 'Incoming message tray and download direction arrow.',
            category: 'software',
            filename: 'inbox.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M4 13h4.5l1.5 2.5h4l1.5-2.5H20v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5z" />
                <path class="svg-primary" d="M4 13V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" />
                <path class="svg-accent" d="M12 4v8" />
                <path class="svg-accent" d="M8.5 9L12 12.5 15.5 9" />
            `
        },
        {
            id: 'multi-source-data-access',
            title: '多源数据接入 / Multi-Source Data Access',
            description: 'Multi-source data access and protocol ingestion integration.',
            category: 'software',
            filename: 'multi-source-data-access.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="9" y="9" width="6" height="6" rx="1.5" />
                <path class="svg-primary" d="M12 3.5v3.5M3.5 12h3.5M12 20.5v-3.5M20.5 12h-3.5" />
                <circle class="svg-primary" cx="12" cy="3.5" r="1" />
                <circle class="svg-primary" cx="3.5" cy="12" r="1" />
                <circle class="svg-primary" cx="12" cy="20.5" r="1" />
                <circle class="svg-primary" cx="20.5" cy="12" r="1" />
                <path class="svg-accent" d="M10.5 5.5L12 7l1.5-1.5" />
                <path class="svg-accent" d="M5.5 10.5L7 12l-1.5 1.5" />
                <path class="svg-accent" d="M10.5 18.5L12 17l1.5 1.5" />
                <path class="svg-accent" d="M18.5 10.5L17 12l1.5 1.5" />
                <circle class="svg-accent" cx="12" cy="12" r="1.2" />
            `
        },
        {
            id: 'network-data-upload',
            title: '网络数据上传 / Network Data Upload',
            description: 'Cloud telemetry transmission and network data upload.',
            category: 'software',
            filename: 'network-data-upload.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M6 16.5h12a3.5 3.5 0 0 0 0-7h-.7A5 5 0 0 0 7.5 6.5a4 4 0 0 0-3.9 4.3A3.5 3.5 0 0 0 6 16.5z" />
                <path class="svg-accent" d="M12 18V10" />
                <path class="svg-accent" d="M8.5 12.5L12 9l3.5 3.5" />
            `
        },
        {
            id: 'realtime-status-monitoring',
            title: '实时状态监控 / Real-time Status Monitoring',
            description: 'Real-time equipment status monitoring and live health telemetry.',
            category: 'software',
            filename: 'realtime-status-monitoring.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="3.5" y="4.5" width="17" height="12" rx="2" />
                <path class="svg-primary" d="M9 16.5L8 19.5h8l-1-3.0" />
                <line class="svg-primary" x1="7" y1="19.5" x2="17" y2="19.5" />
                <path class="svg-accent" d="M5.5 10.5h3l1.5-3.5 2 7 2-4.5 1.5 1h3" />
                <circle class="svg-accent" cx="17.5" cy="7.5" r="0.8" />
            `
        },
        {
            id: 'positioning-dashboard',
            title: '定位与看板 / Positioning & Dashboard',
            description: 'GIS device positioning and analytics management dashboard.',
            category: 'software',
            filename: 'positioning-dashboard.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="3.5" y="4" width="17" height="16" rx="2" />
                <line class="svg-primary" x1="3.5" y1="9" x2="20.5" y2="9" />
                <line class="svg-primary" x1="11" y1="9" x2="11" y2="20" />
                <path class="svg-primary" d="M6 17v-4M8.5 17v-6" />
                <path class="svg-accent" d="M15.75 11a2.25 2.25 0 0 0-2.25 2.25c0 1.6 2.25 4.25 2.25 4.25s2.25-2.65 2.25-4.25A2.25 2.25 0 0 0 15.75 11z" />
                <circle class="svg-accent" cx="15.75" cy="13.25" r="0.75" />
                <circle class="svg-accent" cx="6" cy="6.5" r="0.8" />
                <circle class="svg-accent" cx="8.5" cy="6.5" r="0.8" />
                <line class="svg-primary" x1="13" y1="6.5" x2="18" y2="6.5" />
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
                <circle class="svg-accent" cx="12" cy="8" r="1.5" />
            `
        },
        {
            id: 'solution-architect-builders',
            title: '方案架构师与集成商 / Solution Architect Builders',
            description: 'System architects & integrators',
            category: 'custom',
            filename: 'solution-architect-builders.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="9" y="3.5" width="6" height="4.5" rx="1" />
                <rect class="svg-primary" x="3.5" y="15" width="6" height="4.5" rx="1" />
                <rect class="svg-primary" x="14.5" y="15" width="6" height="4.5" rx="1" />
                <path class="svg-primary" d="M12 8v3M6.5 11h11M6.5 11v4M17.5 11v4" />
                <circle class="svg-accent" cx="12" cy="11" r="1.5" />
                <path class="svg-accent" d="M10 5.75h4M4.5 17.25h4M15.5 17.25h4" />
            `
        },
        {
            id: 'embedded-software-hardware-engineers',
            title: '嵌入式软硬件工程师 / Embedded Software & Hardware Engineers',
            description: 'Developers & engineers',
            category: 'custom',
            filename: 'embedded-software-hardware-engineers.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="5" y="5" width="14" height="14" rx="2" />
                <path class="svg-primary" d="M8 2.5v2.5M12 2.5v2.5M16 2.5v2.5M8 19v2.5M12 19v2.5M16 19v2.5M2.5 8h2.5M2.5 12h2.5M2.5 16h2.5M19 8h2.5M19 12h2.5M19 16h2.5" />
                <path class="svg-accent" d="M9 10l-2 2 2 2" />
                <path class="svg-accent" d="M15 10l2 2-2 2" />
                <line class="svg-accent" x1="13" y1="9.5" x2="11" y2="14.5" />
            `
        },
        {
            id: 'iot-solution-providers',
            title: 'IoT 方案商与产品公司 / IoT Solution Providers',
            description: 'Product companies & innovators',
            category: 'custom',
            filename: 'iot-solution-providers.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="6.5" y="11.5" width="11" height="8.5" rx="1.5" />
                <line class="svg-primary" x1="12" y1="11.5" x2="12" y2="9.5" />
                <path class="svg-accent" d="M8.5 7.5a5 5 0 0 1 7 0" />
                <path class="svg-accent" d="M6.5 5.5a8 8 0 0 1 11 0" />
                <circle class="svg-accent" cx="9.5" cy="15.5" r="1" />
                <path class="svg-primary" d="M12.5 15.5h3" />
                <path class="svg-primary" d="M2.5 16h4M17.5 16h4" />
                <circle class="svg-primary" cx="2.5" cy="16" r="0.8" />
                <circle class="svg-primary" cx="21.5" cy="16" r="0.8" />
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
        },
        {
            id: 'data-logger',
            title: '数据采集器 / Data Logger',
            description: 'Data logging device with storage and sensor telemetry.',
            category: 'environment-sensors',
            filename: 'data-logger.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <rect class="svg-primary" x="4" y="4" width="16" height="16" rx="2.5" />
                <line class="svg-primary" x1="4" y1="9" x2="20" y2="9" />
                <path class="svg-accent" d="M7 15l2.5-3.5 3 4 2.5-3 2 2.5" />
                <circle class="svg-accent" cx="7" cy="6.5" r="1" />
                <circle class="svg-accent" cx="11" cy="6.5" r="1" />
                <path class="svg-primary" d="M15 6.5h2" />
            `
        },
        {
            id: 'all-in-one-weather-station',
            title: '一体化气象站 / All-in-One Weather Station',
            description: 'Compact multi-parameter weather station with integrated sensors.',
            category: 'environment-sensors',
            filename: 'all-in-one-weather-station.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <line class="svg-primary" x1="12" y1="3" x2="12" y2="21" />
                <path class="svg-primary" d="M7 11h10M7.5 14h9M8 17h8" />
                <path class="svg-primary" d="M9 8.5h6v9.5H9z" />
                <path class="svg-accent" d="M6 5.5h12" />
                <circle class="svg-accent" cx="6" cy="5.5" r="1.5" />
                <circle class="svg-accent" cx="18" cy="5.5" r="1.5" />
                <path class="svg-accent" d="M12 3l-2.5 2.5H14.5z" />
            `
        },
        {
            id: 'industrial-sensors',
            title: '工业级传感器 / Industrial Sensors',
            description: 'Ruggedized industrial probe sensor for harsh environments.',
            category: 'environment-sensors',
            filename: 'industrial-sensors.svg',
            svgMarkup: `
                <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
                <path class="svg-primary" d="M10 3h4M12 3v3" />
                <rect class="svg-primary" x="8" y="6" width="8" height="11" rx="1.5" />
                <path class="svg-primary" d="M8 10h8M8 13h8" />
                <path class="svg-primary" d="M10 17v4M14 17v4" />
                <path class="svg-accent" d="M5.5 19.5a5 5 0 0 1 0-5" />
                <path class="svg-accent" d="M18.5 19.5a5 5 0 0 0 0-5" />
                <circle class="svg-accent" cx="12" cy="8" r="1" />
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
        const categories = ['all', 'hmi-ui', 'hmi-data', 'services', 'engineering-challenges', 'lifecycle', 'recomputer-lab', 'distribution', 'software', 'custom', 'hardware-features', 'ai-computing', 'environment-sensors'];
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
