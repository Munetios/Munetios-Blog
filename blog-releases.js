export const releases = [
  {
    slug: "a-new-look-for-munetios-supanotes-and-tasks",
    title: "A New Look for Munetios SupaNotes and Tasks",
    date: "2026-11-25",
    category: "release",
    icon: "edit_note",
    summary: "The redesigned SupaNotes and Tasks bring notes, lists, and planning tools into the Munetios UI v4 look.",
    body: `<p>SupaNotes has a refreshed layout for browsing your notes, tags, and favorites. Use the note editor to write, add a voice note, or sketch an idea.</p>
      <p>Tasks has a matching design. Switch between your to-do list, the Board, and Calendar, or open Today to focus on what's due now.</p>
      <p><a href="https://notes.munetios.com/">Open Munetios SupaNotes</a> &middot; <a href="https://tasks.munetios.com/">Open Munetios Tasks</a></p>`,
    tags: ["SupaNotes","Tasks","Redesign"],
  },
  {
    slug: "a-new-look-for-munetios-maps-and-meals",
    title: "A New Look for Munetios Maps and Meals",
    date: "2026-11-26",
    category: "release",
    icon: "map",
    summary: "Explore the redesigned Maps and plan meals in a refreshed planner inside Calendar.",
    body: `<p>Munetios Maps has a redesigned layout for finding places, getting directions, and switching between map views. Use satellite imagery to explore an area or turn on the traffic layer to check conditions.</p>
      <p>Munetios Meals has refreshed Meals and Calendar views. Browse meals, bookmark ones you want to revisit, and use the calendar to plan ahead.</p>
      <p><a href="https://maps.munetios.com/">Open Munetios Maps</a> &middot; <a href="https://calendar.munetios.com/calendar/meals/">Open Munetios Meals</a></p>`,
    tags: ["Maps","Meals","Redesign"],
  },
  {
    slug: "introducing-munetios-mail",
    title: "Introducing Munetios Mail",
    date: "2026-11-26",
    category: "release",
    icon: "mail",
    summary: "Send and receive email from your browser with your Munetios Account.",
    body: `<p>Munetios Mail is a web mailbox for sending, receiving, and organizing email. Sign in with your Munetios Account to open your inbox, search messages, and organize them with folders and labels.</p>
      <p>Use the customization studio to change the look of your mailbox. The composer also includes an HTML studio for messages that need a custom layout.</p>
      <p><a href="https://mail.munetios.com/">Open Munetios Mail</a></p>`,
    tags: ["Munetios Mail","Email","Release"],
  },
  {
    slug: "munetios-weather-2-released",
    title: "Munetios Weather 2 released",
    date: "2026-11-24",
    category: "release",
    icon: "partly_cloudy_day",
    summary: "The redesigned Munetios Weather brings automatic My Location, forecast charts, and the option to see every location in your time zone.",
    body: `<p>Munetios Weather 2 is now available. The redesigned app brings hourly and 16-day forecasts, interactive charts, air quality, and animated skies together with sunrise, sunset, and moon information. In the United States and its territories, you can also see forecasts and alerts from the National Weather Service.</p>
      <p>Allow browser location access to automatically add <strong>My Location</strong>. Weather refreshes that entry when you open the app and keeps any city you’ve already selected active. You can also search for a city, enter coordinates, or pick a place on the map.</p>
      <p>Turn on <strong>Use my time zone</strong> in <strong>Settings</strong> to see forecasts, sunrise, and sunset for every saved location in your device’s time zone. Weather requests one day of earlier data and falls back to the latest available forecast in the same time zone if the earlier data can’t be loaded.</p>
      <p>The release restores the original Munetios Weather icon and corrects regional translations, including Spanish and Portuguese. The app now uses a Munetios-hosted weather API with a limit of 60 requests per IP address in a rolling five-minute window.</p>
      <p><a href="https://weather.munetios.com/">Open Munetios Weather</a></p>`,
    tags: ["Munetios Weather", "Forecasts", "Time zones", "Release"],
  },
  {
    slug: "deprecating-the-ganetios-branding",
    title: "Deprecating the Ganetios Branding",
    date: "2026-11-22",
    category: "announcement",
    icon: "change_circle",
    summary: "Search and Maps will use the Munetios name. When our browser arrives, it will be called Ganetios.",
    body: `<p>We’re retiring the Ganetios branding from Search and Maps. You’ll see these products under two familiar names: <a href="https://www.munetios.com/">Munetios Search</a> and <a href="https://maps.munetios.com/">Munetios Maps</a>.</p>
      <p>When our browser arrives, it will be called <strong>Ganetios</strong>. That is the browser’s full product name.</p>`,
    tags: ["Munetios", "Ganetios", "Branding", "Search", "Maps", "Browser"],
  },
  {
    slug: "two-factor-authentication-and-recovery-codes",
    title: "Two-Factor Authentication and Recovery Codes",
    date: "2026-11-22",
    category: "release",
    icon: "shield_lock",
    summary: "Protect your Munetios Account with an authenticator app and keep one-time recovery codes on hand.",
    body: `<p>Munetios Accounts now supports setting up two-factor authentication with a QR code or a manual setup key. Open the Security section in <a href="https://accounts.munetios.com/account/">your Munetios Account</a> to connect your authenticator app.</p>
      <p>Save your recovery codes in a secure place. Each code works once and can help you sign in if you lose access to your authenticator. If you generate new codes, the previous set expires.</p>`,
    tags: ["Munetios Accounts", "Security", "2FA"],
  },
  {
    slug: "omniwrite-sharing-and-live-cursors",
    title: "Clearer Sharing and Live Cursors in OmniWrite",
    date: "2026-11-22",
    category: "release",
    icon: "group",
    summary: "Choose what collaborators can do with a shared link and see who is working alongside you.",
    body: `<p>The Share controls in <a href="https://write.munetios.com/">Munetios OmniWrite</a> now give you a clearer way to set who can open a document or spreadsheet link and what role they’ll have. For link access, owners can choose Viewer, Suggester, or Editor. You can also choose whether anyone with the link or only friends can use it.</p>
      <p>Live cursors now show each collaborator once even when they have the same file open in more than one tab.</p>`,
    tags: ["OmniWrite", "Documents", "Spreadsheets", "Collaboration"],
  },
  {
    slug: "redesigned-munetios-photos-and-calendar",
    title: "A New Look for Munetios Photos and Calendar",
    date: "2026-11-21",
    category: "release",
    icon: "photo_library",
    summary: "The redesigned Photos and Calendar apps are now available on their dedicated websites.",
    body: `<p><a href="https://photos.munetios.com/">Munetios Photos</a> and <a href="https://calendar.munetios.com/">Munetios Calendar</a> have refreshed layouts using the shared Munetios UI v4 components. The redesign brings a consistent liquid-glass look to browsing your library and planning your schedule.</p>
      <p>Open either app from its dedicated website to see the updated experience.</p>`,
    tags: ["Photos", "Calendar", "Munetios UI v4", "Redesign"],
  },
];
