export const releases = [
  {
    slug: "munetios-mail-web-release",
    title: "Munetios Mail on the Web",
    date: "2026-11-26",
    category: "release",
    icon: "mail",
    summary: "Send and receive email, organize your inbox, and customize your mailbox in Munetios Mail.",
    body: `<p>Munetios Mail now has a full web mailbox. Sign in with your Munetios Account to read and send email, search your messages, and organize them with folders and labels.</p>
      <p>The web app uses Munetios UI v4. You can change the look of your mailbox in the customization studio, and use the HTML studio when you need more control over an email's layout.</p>
      <p><a href="https://mail.munetios.com/">Open Munetios Mail</a></p>`,
    tags: ["Munetios Mail","Email","Munetios UI v4"],
  },
  {
    slug: "munetios-maps-returns",
    title: "Munetios Maps Is Back",
    date: "2026-11-26",
    category: "release",
    icon: "map",
    summary: "The redesigned Maps is back, with live traffic, satellite imagery, and an encrypted Home address.",
    body: `<p>Munetios Maps is back on its dedicated website. Explore in satellite view and turn on the traffic layer to check current conditions along your route.</p>
      <p>Set your Home address from the Home panel or directly on the map. Once it's saved, choose <strong>Home</strong> to get directions from your current location. When you sync your Home address, it is protected with end-to-end encryption.</p>
      <p>Maps now offers 17 language and regional options, with language names displayed in their native spelling.</p>
      <p><a href="https://maps.munetios.com/">Open Munetios Maps</a></p>`,
    tags: ["Munetios Maps","Directions","Localization"],
  },
  {
    slug: "workspaces-notes-tasks-and-more",
    title: "Separate Workspaces Across Munetios Apps",
    date: "2026-11-26",
    category: "release",
    icon: "workspaces",
    summary: "Switch workspaces from the account menu, and open SupaNotes and Tasks on their own websites.",
    body: `<p>Calendar, Photos, Tasks, SupaNotes, Maps, and Meals now keep data separate by workspace. Your existing Personal data stays in Personal. Other workspaces get their own local data and end-to-end encrypted sync.</p>
      <p>Choose a workspace from the account menu to switch in the app you're using. Other open tabs follow the switch.</p>
      <p>SupaNotes and Tasks now have dedicated websites with shared Munetios sign-in.</p>
      <p><a href="https://notes.munetios.com/">Open Munetios SupaNotes</a> &middot; <a href="https://tasks.munetios.com/">Open Munetios Tasks</a></p>`,
    tags: ["Workspaces","Sync","SupaNotes","Tasks"],
  },
  {
    slug: "calendar-meals-and-event-editor",
    title: "Meal Planning and More Flexible Events in Calendar",
    date: "2026-11-26",
    category: "release",
    icon: "calendar_month",
    summary: "Use the redesigned Meals planner, start your week on any day, and schedule events to the minute.",
    body: `<p>The redesigned Munetios Meals is now available inside Calendar. Open Meals from its new address to plan your meals alongside your schedule.</p>
      <p>Calendar also has a cleaner event editor. You can enter an event time to the minute and choose any day as the start of your week.</p>
      <p><a href="https://calendar.munetios.com/calendar/meals/">Open Munetios Meals</a> &middot; <a href="https://calendar.munetios.com/">Open Munetios Calendar</a></p>`,
    tags: ["Calendar","Meals","Scheduling"],
  },
  {
    slug: "omniwrite-v2-photos-and-picture-in-picture",
    title: "What's New in Munetios OmniWrite v2",
    date: "2026-11-24",
    category: "release",
    icon: "edit_document",
    summary: "Insert images from Munetios Photos, watch videos in picture-in-picture, and find release notes in Help.",
    body: `<p>OmniWrite v2 lets you insert images from your Munetios Photos library directly into your work. Open the image picker to choose a photo you've already saved.</p>
      <p>Videos now support native picture-in-picture in compatible browsers, so you can keep watching in a small floating window while you work. OmniWrite Help has also been updated with guidance and release notes for versions 2.0.0 and 2.0.1.</p>
      <p><a href="https://write.munetios.com/">Open Munetios OmniWrite</a></p>`,
    tags: ["OmniWrite","Munetios Photos","Picture-in-picture"],
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
