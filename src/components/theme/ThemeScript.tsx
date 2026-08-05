import { THEME_STORAGE_KEY } from "./constants";

/**
 * Sets data-theme on <html> before first paint so the stored theme
 * never flashes. Must stay in <head>, ahead of any rendered markup.
 */
export default function ThemeScript() {
  const script = `try{var t=localStorage.getItem(${JSON.stringify(
    THEME_STORAGE_KEY
  )});document.documentElement.setAttribute("data-theme",t==="dark"?"dark":"light")}catch(e){document.documentElement.setAttribute("data-theme","light")}`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
