import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Pill } from '@/components/ui/Pill'
import eventsData from '@/data/events.json'

export const metadata = {
  title: "Events",
  description: "Upcoming and past speaking engagements, workshops, and industry events featuring Kagimu Billz.",
}

export default function Events() {
  const upcomingEvents = eventsData.filter(event => event.type === 'upcoming')
  const pastEvents = eventsData.filter(event => event.type === 'past')

  return (
    <Section size="lg">
      <Container>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="headline">Events</h1>
            <p className="subhead max-w-3xl mx-auto">
              Speaking engagements, workshops, and industry events where 
              Kagimu Billz shares insights on construction, real estate, and business development.
            </p>
            <div className="hairline w-24 mx-auto" />
          </div>

          {/* Upcoming Events */}
          {upcomingEvents.length > 0 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-display font-semibold text-brand-fg text-center">
                Upcoming Events
              </h2>
              
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <Card key={index}>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                          <div className="flex items-start gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-display font-bold text-brand-gold">
                                {new Date(event.date).getDate()}
                              </div>
                              <div className="text-sm text-brand-mute">
                                {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                              </div>
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-brand-fg mb-2">
                                {event.title}
                              </h3>
                              <p className="text-brand-mute text-sm mb-3">
                                {event.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <Pill variant="gold" size="sm">
                                  {event.role}
                                </Pill>
                                <Pill variant="outline" size="sm">
                                  {event.location}
                                </Pill>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="md:col-span-1 flex items-center justify-end">
                          <a
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Past Events */}
          <div className="space-y-8">
            <h2 className="text-2xl font-display font-semibold text-brand-fg text-center">
              Past Events
            </h2>
            
            <div className="space-y-6">
              {pastEvents.map((event, index) => (
                <Card key={index}>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <div className="flex items-start gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-display font-bold text-brand-gold">
                              {new Date(event.date).getDate()}
                            </div>
                            <div className="text-sm text-brand-mute">
                              {new Date(event.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-brand-fg mb-2">
                              {event.title}
                            </h3>
                            <p className="text-brand-mute text-sm mb-3">
                              {event.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Pill variant="default" size="sm">
                                {event.role}
                              </Pill>
                              <Pill variant="outline" size="sm">
                                {event.location}
                              </Pill>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-1 flex items-center justify-end">
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center py-12 border-t border-brand-gold/20">
            <h2 className="text-2xl font-display font-semibold text-brand-fg mb-4">
              Interested in Booking?
            </h2>
            <p className="text-brand-mute mb-6 max-w-2xl mx-auto">
              Available for speaking engagements, workshops, and industry events. 
              Let's discuss how we can add value to your event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Book Speaking Engagement
              </a>
              <a href="/services" className="btn-ghost">
                View Services
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
