import { AboutSection } from "../components/AboutSection";
import { ButtonStyles } from "../components/ButtonStyles";
import { ColorPalette } from "../components/ColorPalette";
import { CssExportSection } from "../components/CssExportSection";
import { IntegrationGuide } from "../components/IntegrationGuide";
import { ThemeToggleBar } from "../components/ThemeToggleBar";
import { ComponentShowcase } from "../components/ThemedCard";
import { ThemedFooter } from "../components/ThemedFooter";
import { ThemedHero } from "../components/ThemedHero";
import { ThemedNav } from "../components/ThemedNav";
import { TypographyScale } from "../components/TypographyScale";
import { useTheme } from "../context/ThemeContext";

export function ShowcasePage() {
  const { theme } = useTheme();

  return (
    <div style={{ color: theme.textPrimary }}>
      <ThemeToggleBar />
      <ThemedHero />
      <ColorPalette />
      <ThemedNav />
      <ComponentShowcase />
      <ButtonStyles />
      <TypographyScale />
      <AboutSection />
      <IntegrationGuide />
      <CssExportSection />
      <ThemedFooter />
    </div>
  );
}
