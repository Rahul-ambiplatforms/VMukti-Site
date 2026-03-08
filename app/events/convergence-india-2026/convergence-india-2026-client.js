'use client';

import ConvergenceIndia2026 from '../../../pages-src/Events/ConvergenceIndia2026';
import { EventSchema, BreadcrumbSchema } from '../../../components/SchemaMarkup';

export default function ConvergenceClient() {
  return (
    <>
      <EventSchema
        name="VMukti at Convergence India 2026"
        description="Visit VMukti Solutions at Convergence India 2026 to experience next-generation AI-powered video surveillance, Cloud VMS, Enterprise Management System, and ICCC solutions for smart cities and enterprises."
        startDate="2026-01-14T10:00:00+05:30"
        endDate="2026-01-16T18:00:00+05:30"
        locationName="Pragati Maidan"
        streetAddress="Pragati Maidan"
        addressLocality="New Delhi"
        addressRegion="Delhi"
        addressCountry="IN"
        url="https://www.vmukti.com/events/convergence-india-2026"
        organizer="India Trade Promotion Organisation (ITPO)"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.vmukti.com' },
          { name: 'Events', url: 'https://www.vmukti.com/events' },
          { name: 'Convergence India 2026', url: 'https://www.vmukti.com/events/convergence-india-2026' },
        ]}
      />
      <ConvergenceIndia2026 />
    </>
  );
}
