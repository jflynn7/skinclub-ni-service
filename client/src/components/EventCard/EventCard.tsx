import React from "react";
import { Card, Text, Image } from "@mantine/core";

export type EventCardProps = {
  eventType: string;
  eventName: string;
  eventDate: Date;
  eventTime: any;
  eventImage?: string;
};

export default function EventCard(props: EventCardProps) {
  return (
    <Card shadow="sm">
      <Card.Section>
        <Image
          src="https://www.sknclinics.co.uk/wp-content/uploads/2022/03/shutterstock_1828009574-Ellie-Taylor-scaled.jpg"
          h={160}
          alt="No way!"
        />
      </Card.Section>
      <Text fw={500} size="lg" mt="md">
        Your Next {props.eventType}
      </Text>
      <Text fw={200} size="md">
        {props.eventName}
      </Text>
      <Text fw={100} size="md">
        {props.eventDate.toLocaleDateString()} @ {props.eventTime}
      </Text>
    </Card>
  );
}
