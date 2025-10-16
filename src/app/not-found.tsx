import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-fg flex items-center justify-center">
      <Container className="text-center">
        <div className="max-w-md mx-auto space-y-6">
          <h1 className="text-6xl font-display font-bold text-brand-gold">404</h1>
          <h2 className="text-2xl font-semibold text-brand-fg">Page Not Found</h2>
          <p className="text-brand-mute">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="pt-4">
            <Link href="/">
              <Button variant="primary">
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
