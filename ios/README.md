# Patwa Wave — iPhone Patois helpers (honest)

## Can Apple install a custom Patois keyboard from a file?

**No — not on a normal personal iPhone.**

### What Apple documents support

1. **Configuration profiles (`.mobileconfig`)**  
   Official [Configuration Profile Reference](https://developer.apple.com/business/documentation/Configuration-Profile-Reference.pdf) lists payloads such as Wi‑Fi, VPN, Email, Restrictions, **Web Clip**, certificates, etc.  
   There is **no** payload that installs Text Replacement phrases or a custom system keyboard layout with alternate characters.

2. **Keyboard management (MDM)**  
   Apple’s [Keyboard declarative configuration](https://support.apple.com/guide/deployment/keyboard-declarative-configuration-depe51e8b3cc/web) (iOS 26.4+, **supervised**, Automated Device Enrollment) can only **allow or turn off** text replacement and similar settings. It does **not** push a phrase list. Personal unsupervised iPhones cannot use this for a “Patois keyboard pack.”

3. **Text Replacement on iPhone**  
   Add one-by-one in **Settings → General → Keyboard → Text Replacement** ([Apple iPhone guide](https://support.apple.com/guide/iphone/iph6d01d862/ios)), or import a `.plist` on a **Mac** and sync with iCloud ([Apple Mac guide](https://support.apple.com/guide/mac-help/mchl2a7bd795/mac)). Apple staff have stated direct iPhone plist import is not available ([Apple Community](https://discussions.apple.com/thread/254040319)).

4. **Custom keyboards**  
   A real alternate-character keyboard requires an App Store **Custom Keyboard** extension (separate app). A website or `.mobileconfig` cannot become the system keyboard.

### What we ship instead (real, useful, iPhone-friendly)

| File | What it actually does |
| --- | --- |
| `board.html` | Offline-friendly **writing board**: tap Patois chips → Copy → paste anywhere. **Not** a system keyboard. |
| `Patwa-Wave-Board.mobileconfig` | Official **Web Clip** profile: installs a **Home Screen icon** that opens the writing board. Removable. Does **not** change the keyboard. |
| `Text Substitutions.plist` | Apple Text Replacement file for **Mac import → iCloud → iPhone**. |
| `patwa-wave-text-replacements.txt` | Same shortcuts as a readable list for manual iPhone entry. |

### Easy iPhone path (no Mac)

1. Open **https://patois-learn.pages.dev/ios/board.html** (Share → Add to Home Screen), **or** open **Patwa-Wave-Board.mobileconfig**, then **Settings → Profile Downloaded → Install** (adds the Home Screen icon only).
2. Tap phrases → **Copy** → paste into Messages.

### System-wide shortcuts (needs Mac or manual)

Use `Text Substitutions.plist` on a Mac (same Apple Account), or add favorites from the `.txt` list on the iPhone by hand.
