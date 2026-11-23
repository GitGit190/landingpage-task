import { HeaderNavigation } from './components/HeaderNavigation'
import { Pricing } from './components/Pricing/Pricing'
import { TestimonialsCarousel } from './components/TestimonialsCarousel'
import logo from './assets/logo.svg'
import { images } from './assets'
import stroke from './assets/stroke.svg'
import strokeBlue from './assets/stroke-blue.svg'
import type { Billing } from './type/billing'
import type { Review } from './type/review'

const sponsors = ['apple', 'microsoft', 'slack', 'google']

const plans: Billing[] = [
  {
    type: 'free',
    price: 0,
    description: 'For getting started with notes and tasks.',
    benefits: ['Create notes', 'Organize tasks', 'Use one workspace'],
  },
  {
    type: 'personal',
    price: 11.99,
    description: 'For individuals managing multiple projects.',
    benefits: ['Unlimited workspaces', 'Sync across devices', 'Version history'],
  },
  {
    type: 'organization',
    price: 49.99,
    description: 'For teams working together.',
    benefits: ['Shared workspaces', 'Manage member permissions', 'Priority support'],
  },
]

const reviews: Review[] = [
  {
    id: 'oberon-shaw',
    quote: 'Taskkey is designed as a collaboration tool for businesses that is a full project management solution.',
    name: 'Oberon Shaw, MCH',
    role: 'Head of Talent Acquisition, North America',
  },
  {
    id: 'maya-patel',
    quote: 'Our team uses Taskkey to keep project notes next to the work. It is much easier to hand a task off when the context is already there.',
    name: 'Maya Patel',
    role: 'Design Operations Lead',
  },
  {
    id: 'jordan-lee',
    quote: 'Weekly planning used to take a meeting and three different docs. Now the whole team can see what is due and who owns it.',
    name: 'Jordan Lee',
    role: 'Product Manager',
  },
  {
    id: 'elena-morales',
    quote: 'We keep our client feedback and follow-up tasks in one workspace, so it is easy to see what changed between reviews.',
    name: 'Elena Morales',
    role: 'Studio Director',
  },
  {
    id: 'noah-bennett',
    quote: 'I can catch up on a project from my phone, then pick up the same notes on my laptop. That saves me time when I am between meetings.',
    name: 'Noah Bennett',
    role: 'Operations Coordinator',
  },
]

function ActionLink({ children, href = '#pricing', compact = false }: { children: string; href?: string; compact?: boolean }) {
  return <a className={compact ? 'action action-compact' : 'action'} href={href}>{children}<span aria-hidden="true" className="w-3.5 text-sm">→</span></a>
}

function App() {
  return (
    <div className="mx-auto overflow-x-hidden">
      <header id="top" className="flex min-h-14 items-center justify-between gap-4 bg-navy px-4 text-white md:px-5 lg:min-h-18 lg:px-8 2xl:px-[220px]">
        <a href="#top" className="shrink-0">
          <img src={images.logo} alt="Whitepace" className="h-[clamp(1.5rem,calc(1.4rem_+_1vw),5rem)] w-auto" />
        </a>
        <HeaderNavigation />
      </header>
      <main>
        {/* HERO */}
        <section className="relative section-pad text-and-image-container bg-navy text-center text-white overflow-y-hidden">

          <img src={images.heroPattern} alt='' className='absolute left-0 rotate-60 md:rotate-0 scale-420 md:scale-200 lg:scale-120 z-0' />

          {/* Texts */}
          <div className="flex flex-col gap-15 gap-15 z-1 md:pt-20 items-center lg:items-start ">
            <div className="heading-to-subtext-spacing  text-center lg:text-start">
              <h1 className="heading">Get More Done with whitepace</h1>
              <p>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
            </div>
            <ActionLink>Try TasKey Free</ActionLink>
          </div>

          <img
            src={images.hero}
            aria-hidden="true"
            className="w-full max-w-[clamp(286px,min(133.14px_+_47.768vw,275px_+_29.297vw),650px)] z-1"
            data-artwork="hero"
          />
        </section>

        {/* FEATURES */}
        <section id="products" className="section-pad flex flex-col gap-25 text-center relative items-center">

          <img src={images.loops} loading='lazy' className='absolute w-1/2 md:w-1/5 -left-15 top-8 -z-1'/>

          <div className="text-and-image-container z-1">
            <div className='flex flex-col gap-15 items-center lg:items-start lg:text-start'>
              <div className="heading-to-subtext-spacing ">
                <h2 className="heading">Project <br className='hidden max-md:block lg:block'/> Management
                  <img src={stroke} alt=''loading='lazy' className='absolute max-md:inset-x-0 max-md:mx-auto scale-x-150 -bottom-2 -z-10 md:scale-x-250 md:scale-125 md:right-20 lg:scale-175 lg:right-5 xl:scale-200 xl:scale-x-350 xl:right-25 2xl:right-35 xl:-bottom-8 -bottom-4'/>
                </h2>
                <p>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
              </div>
              <ActionLink>Get Started</ActionLink>  
            </div>
            <img src={images.feature} loading='lazy' aria-hidden="true" className={`mx-auto max-w-[286px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[700px] 2xl:max-w-[750px]`} />
          </div>

          <div className='text-and-image-container lg:flex-row-reverse'>
            <div className="text-container">
              <div className="heading-to-subtext-spacing">
                <h2 className="heading whitespace-nowrap">Work together
                  <img src={stroke} alt='' loading='lazy' className='absolute right-3 -bottom-2 -z-10 md:right-10 md:scale-140 lg:scale-x-200 lg-scale-150 lg:right-12 xl:scale-x-200 xl:right-12 2xl:scale-x-230 2xl:scale-175'/>
                </h2>
                <p>With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
              </div>
              <ActionLink>Try it now</ActionLink>
            </div>
            
            <img src={images.planetary} loading='lazy' className='md:w-1/2'/>
          </div>
        </section>

        {/* EXTENSION */}
        <section className="section-pad text-and-image-container lg:items-center bg-navy text-center text-white">
          <div  className='text-container'>
            <div className="heading-to-subtext-spacing relative">
              <h2 className="heading md:whitespace-nowrap">Use as Extension
                <img src={stroke} loading='lazy' alt='' className='absolute right-0 scale-x-90 md:scale-125 md:scale-x-150 lg:scale-x-220 lg:right-18 2xl:scale-x-260 2xl:right-20 -bottom-2 -z-10'/>
              </h2>
              <p>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
            </div>
            <ActionLink>Let’s Go</ActionLink>
          </div>
          <img src={images.extension} loading='lazy' aria-hidden="true" className="mx-auto w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[650px] -mb-15" data-artwork="extension" />
        </section>

        {/* CUSTOMISE */}
        <section className="section-pad text-and-image-container text-center">
          <img src={images.customize} loading='lazy' aria-hidden="true" className="mx-auto h-full max-h-[clamp(250px,calc(30vw-50px),500px)] lg:mx-[100px] xl:mx-[175px] 2xl:mx-[125px]" data-artwork="customization" />
          <div className='text-container'>
            <div className="heading-to-subtext-spacing">
              <h2 className="heading lg:whitespace-nowrap">Customise it <br className='block md:hidden'/> to <br className='hidden lg:block'/> your needs
                <img src={stroke} alt='' loading='lazy' className='absolute -right-5 -bottom-2 scale-x-80 md:right-0 md:scale-100 md:scale-x-150 lg:scale-200 lg:scale-x-300 lg:left-35 lg:-bottom-5 -z-10'/>
              </h2>
              <p className="font-montserrat leading-[23px] tracking-normal">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
            </div>
            <ActionLink compact>Let’s Go</ActionLink>
          </div>
        </section>

        {/* PLAN */}
        <section id="pricing" className='w-full section-pad gap-20 flex flex-col items-center'>
            <div className="heading-to-subtext-spacing flex flex-col items-center text-center">
              <h2 className="heading">Choose Your <br className='hidden max-md:block'/> Plan
                <img src={stroke} alt='' loading='lazy' className='absolute max-md:inset-x-0 max-md:mx-auto scale-x-90 -bottom-3 md:right-6 md:scale-150 md:scale-x-195 lg:scale-200 lg:scale-x-250 lg:-bottom-5 -z-10'/>
              </h2>
              <p className="font-montserrat leading-[23px] max-w-[979px] text-center tracking-normal">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
            </div>
            <Pricing billings={plans}/>
        </section>

        {/* WORK */}
        <section id="solutions" className="section-pad relative xl:items-center flex flex-col gap-15 bg-navy text-white">
          <img alt='' src={images.loops2} loading='lazy' className='hidden xl:block md:-left-40 md:block lg:hidden absolute -left-50 2xl:-left-10 -top-40 opacity-25'/>
          <div className="md:w-[600px] lg:w-[650px] xl:w-full heading-to-subtext-spacing flex flex-col xl:items-center items-start">
            <h2 className="heading">Your work,<br className='only-lg'/> everywhere <br className='hidden lg:hidden md:block'/> you <br className='block md:hidden'/> are
              <img alt='' src={strokeBlue} loading='lazy'  className='absolute -bottom-2 max-lg:-left-10 lg:-right-10 max-md:inset-x-0 md:scale-x-80 xl:-right-5 -z-10'/>
            </h2>
            <p className='lg:text-center'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
          </div>
          <ActionLink>Try Taskey</ActionLink>
        </section>

        {/* DATA */}
        <section className="section-pad text-and-image-container lg:flex-row-reverse">
          <img src={images.yourData} loading='lazy' aria-hidden="true"  className="mx-auto mb-5 lg:w-[calc(50%-25px)]"  data-artwork="data-security"/>
          <div className='text-container'>
            <div className="heading-to-subtext-spacing">
              <h2 className="heading whitespace-nowrap">100% your data
                <img src={stroke} alt='' loading='lazy' className='absolute -bottom-3 right-0 scale-x-125 md:right-5 md:scale-180 md:scale-x-220 lg:right-20 2xl:scale-200 2xl:scale-x-250 2xl:right-20 -z-10'/>
              </h2>
              <p>The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
            </div>
            <ActionLink href="#resources">Read more</ActionLink>
          </div>
        </section>

        {/* SPONSOR */}
        <section className="section-pad flex flex-col items-center gap-25">
          <h2 className="heading">Our sponsors
            <img src={stroke} alt='' loading='lazy' className='absolute -bottom-4 right-0  scale-x-125 md:scale-175 md:right-8 lg:right-12 lg:scale-200 xl:scale-150 xl:scale-x-250 xl:right-15 -z-10'/>
          </h2>

          <div className="flex flex-col lg:flex-row lg:justify-between w-full items-center gap-25">
            {sponsors.map((name) => (
              <a href={`https://www.${name}.com/`}>
                <img key={name} loading='lazy' src={images[`${name}Sponsor`]} alt={name} className='sponsor-image' />
              </a>
            ))}
          </div>
        </section>

        {/* FAVORITE APP */}
        <section id="resources" className="section-pad text-and-image-container relative overflow-hidden bg-navy text-center text-white">
          <img src={images.favoriteApp} alt='' loading='lazy' className='mx-auto w-3/4 lg:w-1/2'/>
          <img src={images.favoriteAppPattern} loading='lazy' className='absolute md:left-0 max-md:top-100 max-md:rotate-50 w-full z-0' />
          <div className='text-container'>
            <div className=" heading-to-subtext-spacing">
              <h2 className="heading">Work with Your Favorite Apps Using whitepace</h2>
              <p>Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
            </div>
            <ActionLink href="#try-whitepace">Read more</ActionLink>
          </div>
        </section>

        {/* REVIEW */}
        <section id="client-stories" className="flex flex-col gap-15 px-4 py-25 text-center items-center">
          <h2 className="heading">What our client says
            <img src={stroke} alt='' loading='lazy' className='absolute -bottom-4 right-0  scale-x-125 md:scale-175 md:right-8 lg:right-12 lg:scale-200 xl:scale-150 xl:scale-x-250 xl:right-15 -z-10'/>
          </h2>
          <TestimonialsCarousel reviews={reviews} />
        </section>

        {/* PLATFORM */}
        <section id="try-whitepace" className="flex flex-col gap-10 lg:items-center lg:text-center bg-navy section-pad pt-[100px] text-white">
          <h2 className="heading -mb-4">Try Whitepace <br className='hidden lg:block'/> today</h2>
          <p>Get started for free.<br />Add your whole team as your needs grow.</p>
          <ActionLink compact>Try Taskey free</ActionLink>
          <p>On a big team? Contact sales</p>
          <div className='flex gap-6 lg:scale-150 transition-[scale] duration-200'>
            <img src={images.appleLogo} loading='lazy'/>
            <img src={images.windowsLogo} loading='lazy'/>
            <img src={images.androidLogo} loading='lazy'/>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="flex flex-col gap-20 items-center md:items-start md:text-start bg-navy section-pad text-center text-white">
        <div className='flex flex-col lg:flex-row gap-20 items-center md:items-start lg:justify-between xl:gap-30'>
          <div className="heading-to-subtext-spacing">
            <a href="#top" className="inline-flex items-center gap-2.5 text-[28px] leading-[34px] font-bold">
              <img src={logo} loading='lazy' alt="Whitepace" className="h-8 md:h-15" />
            </a>
            <p className="text-[#f7f7ee]">whitepace was created for the new ways we live and work.<br />We make beautyfully designed around the world</p>
          </div>

          <div className="footer-links">
            <h2>Product</h2>
            <a href="#products" className="text-gold hover:underline block">Overview</a>
            <a href="#pricing" className="hover:underline block">Pricing</a>
            <a href="#client-stories" className="hover:underline ">Customer stories</a>
          </div>

          <div className="footer-links">
            <h2>Resources</h2>
            <span>Blog</span><span>Guides &amp; tutorials</span><span>Help center</span>
          </div>

          <div className="footer-links">
            <h2>Company</h2>
            <span>About us</span><span>Careers</span><span>Media kit</span>
          </div>

          <div className="max-w-[201px] space-y-[23px]">
            <h2 className="text-[28px] leading-9 font-bold md:text-center lg:text-start">Try It Today</h2>
            <p>Get started for free.<br />Add your whole team as your needs grow.</p>
            <ActionLink>Start today</ActionLink>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="flex w-full flex-col items-center gap-5 text-base leading-5 tracking-[-0.32px] md:items-start lg:flex-row lg:items-center lg:justify-between lg:border-t lg:border-[#2e4e73] lg:pt-5">
          <div className="flex w-full flex-col gap-5 border-b border-[#2e4e73] pb-5 md:flex-row md:justify-between lg:w-auto lg:border-b-0 lg:pb-0">

            <div className='flex items-center justify-center gap-1'>
              <svg width="19" height="19" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              <p>English</p>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </div>

            <p>Terms &amp; privacy</p><p>Security</p><p>Status</p><p>©2021 Whitepace LLC.</p>
          </div>
          <div className="flex shrink-0 flex-row items-center gap-8" data-artwork="social-logos">
            <img src={images.facebookIcon} loading='lazy' alt="Facebook" />
            <img src={images.twitterIcon} loading='lazy' alt="Twitter" />
            <img src={images.linkedinIcon} loading='lazy' alt="LinkedIn" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
