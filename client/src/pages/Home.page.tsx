import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import EventCard from "@/components/EventCard/EventCard";
import PageLayout from "@/pages/PageLayout/PageLayout";
import { Grid } from "@mantine/core";
import ChatCard from "@/components/ChatCard/ChatCard";

export function HomePage() {
  return (
    <PageLayout>
      <ColorSchemeToggle />
      <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          <EventCard
            eventType="Appointment"
            eventDate={new Date()}
            eventTime="12:00"
            eventName="Micro-Needling with Deborah"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          {
            // Something
          }
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          <ChatCard />
        </Grid.Col>
      </Grid>
    </PageLayout>
  );
}
