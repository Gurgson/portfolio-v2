export function ThemeScript() {
  const themeScript = `
    (function() {
      try {
        // 1. Sprawdź URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const urlMode = urlParams.get('mode');
        
        if (urlMode === 'light' || urlMode === 'dark') {
          document.documentElement.setAttribute('data-theme', urlMode);
          localStorage.setItem('theme', urlMode);
          return;
        }

        // 2. Sprawdź localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          document.documentElement.setAttribute('data-theme', savedTheme);
          return;
        }

        // 3. Sprawdź system preferences
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const systemTheme = prefersDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', systemTheme);
        localStorage.setItem('theme', systemTheme);
      } catch (e) {
        // Fallback do dark theme
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    })();
  `

  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      suppressHydrationWarning
    />
  )
}