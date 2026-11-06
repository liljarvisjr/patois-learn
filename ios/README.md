# Patwa Wave — iPhone Patois typing shortcuts

This is **not** a custom third-party keyboard.

It is Apple’s own **Text Replacement** list (the same feature as typing `omw` → “On my way!”).  
You download a configuration file, import it, and then shortcuts like `/hello` become `Wah gwaan` in Messages, Notes, Safari — every app.  
No special keyboard to install. No extra app permissions. No network from the shortcuts themselves.

## Files

- `Text Substitutions.plist` — Apple import file (phrase + shortcut)
- `patwa-wave-text-replacements.txt` — same list, easy to read

Shortcuts all start with `/` so normal English words are not replaced.

## Best install path (official)

Apple does **not** provide a one-tap “open plist on iPhone → Import” for Text Replacement.  
The supported way is:

1. On a **Mac** signed into the **same Apple Account** as your iPhone, open  
   **System Settings → Keyboard → Text Replacements**.
2. Drag `Text Substitutions.plist` into that window, then click **Done**.
3. Wait for **iCloud** to sync (iCloud Drive on, same Apple Account).
4. On iPhone check: **Settings → General → Keyboard → Text Replacement**.

Apple’s guide: [Back up and share text replacements on Mac](https://support.apple.com/guide/mac-help/mchl2a7bd795/mac)  
iPhone feature guide: [Text replacements on iPhone](https://support.apple.com/guide/iphone/iph6d01d862/ios)

## iPhone-only (no Mac)

1. Download the `.txt` list and keep it in Files.
2. Open **Settings → General → Keyboard → Text Replacement → +**.
3. Copy a **Phrase** and its **Shortcut** from the list (start with `/`).
4. Add the ones you use most. You do not need all of them.

## How to type

In any app, type `/how` then space → `Wah yuh a seh?`  
Examples: `/hello` → Wah gwaan · `/ikr` → Mi know · `/thanks` → Tanks

## Remove later

Settings → General → Keyboard → Text Replacement → swipe delete,  
or Mac Text Replacements → delete rows,  
or Reset Keyboard Dictionary (removes *all* custom shortcuts).
