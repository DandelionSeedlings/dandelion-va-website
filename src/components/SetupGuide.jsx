// Standard setup guide for every Dandelion Creations app. Screenshots show AceIQ as the example.
const steps = [
  { t: 'Make your own copy of the sheet', b: 'Open the sheet link from your order email. Click File, then Make a copy. Give it a name you will recognise, then click Make a copy again. Use your own copy from now on. The original is only the template.', img: 's1_make_copy' },
  { t: 'Open Apps Script', b: 'In your new copy, click Extensions, then Apps Script. A new tab opens. That is the engine room of your app, and you do not need to type anything in it.', img: 's2_apps_script' },
  { t: 'Click Deploy', b: 'In the top right corner of the new tab, click the blue Deploy button.', img: 's3_deploy_button' },
  { t: 'Choose New deployment', b: 'In the little menu that opens, click New deployment. If it asks you to select a type, pick Web app.', img: 's4_new_deployment' },
  { t: 'Fill in the settings', b: 'Type any description you like, for example the name of your app. Then check that Execute as is set to Me and Who has access is set to Anyone. Click Deploy.', img: 's5_settings', tip: 'Choosing Anyone does not make your data public. Nobody can open your app without your private link.' },
  { t: 'Authorise access', b: 'Google now asks you to allow the app to work in your account. Click Authorise access and choose your Google account.', img: 's6_authorise' },
  { t: 'Google shows a warning. This is normal', b: 'You will see a page that says Google hasn’t verified this app. Google shows this for every app that is not a public store app. The app is your own copy, running only inside your own Google account. Click Advanced.', img: 's7_unverified1' },
  { t: 'Continue to your app', b: 'At the bottom of the page click Go to (your app name) (unsafe). The wording sounds scary, but it only means Google has not reviewed the code. It is your copy and only you can see your data.', img: 's8_unverified2' },
  { t: 'Sign in and continue', b: 'If Google asks you to sign in, click Continue.', img: 's9_signin' },
  { t: 'Allow access', b: 'Tick Select all if it is not ticked, scroll to the bottom of the page and click Continue or Allow. The app needs these permissions to read and write in your own spreadsheet.', img: 's10_access' },
  { t: 'Copy your web app address', b: 'You will see Deployment successfully updated. Under Web app click Copy next to the long address that starts with https://script.google.com. Then click Done.', img: 's11_deployed' },
  { t: 'Go back to your spreadsheet and open the app menu', b: 'Go back to the spreadsheet tab. In the menu bar you will now see a menu with the name of your app. If it is not there yet, refresh the page and wait a few seconds. Open it and click Get My Private Link.', img: 's12_menu' },
  { t: 'Paste the address and save it', b: 'Paste the address you copied into the first box and click Save address. Your private link then appears. Click the gold button to open your app.', img: 's13_link_dialog', tip: 'Keep your private link private. Anyone who has it can open your app. If it ever gets shared by mistake, use Reset Private Link in the same menu to switch the old one off.' },
  { t: 'Activate your app', b: 'Paste the activation key from your order email and click Activate. You can also start the free demo to try it first. Then bookmark the page. On your phone, open the link and choose Add to Home screen, and it will sit with your other apps.', img: 's14_activate' },
]

const trouble = [
  ['The menu is not showing in my spreadsheet', 'Refresh the browser page and wait about ten seconds. Make sure you are in your own copy, not the original template.'],
  ['My link says I need access or shows a Google error', 'Go back to Deploy, then Manage deployments, and check that Who has access is set to Anyone and Execute as is set to Me.'],
  ['I changed something and the app did not update', 'In Apps Script click Deploy, then Manage deployments, then the pencil icon. Under Version choose New version and click Deploy. The link stays the same.'],
  ['I lost my private link', 'In the spreadsheet open the app menu and click Get My Private Link again.'],
]

export default function SetupGuide() {
  return (
    <main className="bg-[#F5F1E8] text-[#0a1628]">
      <section className="bg-[#0a1628] text-white pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-5">
          <p className="text-gold text-xs font-bold tracking-[0.14em] uppercase mb-3">Setup guide</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">How to set up your app, step by step</h1>
          <p className="text-lg text-slate-300 mb-6">About 10 minutes. No technical knowledge needed. You only do this once.</p>
          <a href="/downloads/Dandelion-App-Setup-Guide.pdf" className="inline-block bg-gold text-[#0a1628] font-bold rounded-lg px-5 py-3 hover:brightness-110" download>Download the PDF guide</a>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-5 py-12">
        <div className="bg-white rounded-xl p-5 mb-10 border border-[#E4DECF]">
          <h2 className="font-bold text-lg mb-2">Before you start</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your order email with the sheet link and your activation key</li>
            <li>A free Google account (a Gmail address works) that you are signed in to</li>
            <li>A computer is easiest for the setup. After that your app works on your phone too</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">The screenshots show AceIQ as the example. Yours will show the name of the app you bought.</p>
        </div>

        <ol className="space-y-12 list-none p-0">
          {steps.map((s, i) => (
            <li key={s.img}>
              <h2 className="flex items-center gap-3 text-xl font-bold mb-2">
                <span className="flex-none w-8 h-8 rounded-full bg-gold text-[#0a1628] inline-flex items-center justify-center text-base">{i + 1}</span>
                {s.t}
              </h2>
              <p className="mb-3 leading-relaxed">{s.b}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/setup-guide/${s.img}.webp`} alt={`Step ${i + 1}: ${s.t}`} loading="lazy" className="rounded-lg border border-[#E4DECF] bg-white max-w-full h-auto" />
              {s.tip && <p className="mt-3 bg-amber-100 text-amber-900 rounded-lg px-4 py-2 text-sm">{s.tip}</p>}
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-bold mt-16 mb-4">If something looks different</h2>
        <div className="space-y-4">
          {trouble.map(([q, a]) => (
            <div key={q}><p className="font-bold">{q}</p><p>{a}</p></div>
          ))}
        </div>

        <div className="mt-12 border-t-2 border-gold pt-6">
          <p className="font-bold">Stuck? We are happy to help.</p>
          <p>WhatsApp <a className="underline" href="https://wa.me/27728393087">+27 72 839 3087</a>. We reply within 24 hours.</p>
          <p className="text-sm text-slate-600 mt-2">AI features can make mistakes, so always read what they give you before you use it.</p>
        </div>
      </div>
    </main>
  )
}
