const baseURL = 'danielsnodgrass.com'

// Enable localization
const i18n = false;

// Manage localized content in the messages folder
const i18nOptions = {
    locales: ['en'],            // A list of all locales that are supported, e.g. ['en','id']
    defaultLocale: 'en'         // Locale used by default and as a fallback
}

const routes = {
    '/':        true,
    '/about':   true,
    '/work':    true,
    '/blog':    false,
    '/gallery': false,
}

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
    '/work/automate-design-handovers-with-a-figma-to-code-pipeline': true
}

const effects = {
    mask: 'cursor',             // none | cursor | topLeft | topRight | bottomLeft | bottomRight
    gradient: {
        display: true,
        opacity: 0.4            // 0 - 1
    },
    dots: {
        display: true,
        opacity: 0.4,           // 0 - 1
        size: '24'              // 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 634
    },
    lines: {
        display: false,
    },
}

const style = {
    theme:       'dark',
    neutral:     'gray',
    brand:       'aqua',
    accent:      'yellow',
    solid:       'contrast',
    solidStyle:  'flat',
    border:      'playful',
    surface:     'translucent',
    transition:  'all'
}

const display = {
    location: true,
    time:     true
}

const mailchimp = {
    action: 'https://url/subscribe/post?parameters',
    effects: {
        mask: 'topRight',           // none | cursor | topLeft | topRight | bottomLeft | bottomRight
        gradient: {
            display: true,
            opacity: 0.6            // 0 - 1
        },
        dots: {
            display: false,
        },
        lines: {
            display: false,
        },
    }
}

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL, i18n, i18nOptions };