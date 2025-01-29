export default function toggleTheme() : void {
    const root = document.documentElement;
    
    const primary = getComputedStyle(root).getPropertyValue("--primary").trim();
    const secondary = getComputedStyle(root).getPropertyValue("--secondary").trim();
  
    root.style.setProperty("--primary", secondary);
    root.style.setProperty("--secondary", primary);
};
  