import PageWrapper from '@/app/page-wrapper';
import Link from 'next/link';

export default function ThankYouForVotingPage() {
  return (
    <PageWrapper center>
      <div className='max-w-md p-6 bg-card rounded-lg shadow-lg'>
        <div className='space-y-4 text-center'>
          <h1 className='text-3xl font-bold text-card-foreground'>Thank You for Voting</h1>
          <p className='text-muted-foreground'>
            We appreciate your participation in our survey. Your input will be automatically updated
            in the presentation shortly.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
