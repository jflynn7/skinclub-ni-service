import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import { metaConfig } from "@/config/meta.config";
import { ContentProvider } from "./context/content.context";
import { Router } from "./Router";
import { theme } from "./theme/theme";
import SiteFooter from "@/components/SiteFooter/SiteFooter";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <ContentProvider>
        <SiteHeader metaConfig={metaConfig} />
        <Router />
        <SiteFooter metaConfig={metaConfig} />
      </ContentProvider>
    </MantineProvider>
  );
}
