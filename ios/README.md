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


## Writing board vocabulary sources

The board loads `board-vocab.json` (2000+ entries). Sources:

1. **Patwa Wave lessons** (`data.js`) — curated learner entries used on the site.
2. **Open Grammar Project — A Learner’s Glossary of Jamaican** (CC-BY): https://opengrammar.github.io/jam/glossary/  
   Includes attested forms such as **kompyuuta** (computer), **intanet** (internet), **anlain** (online), **plie** (play), **skuul** (school), **baaskitbaal**, **futbaal**, **krikit**, etc.
3. **Optional AI guide** — Cloudflare Workers AI endpoint already used by Patwa Wave translate (not a perfect dictionary).

We do **not** invent spellings (e.g. we do not invent *geim* if it is not in the sourced glossary). If no Jamaican form is known, English is kept. Patois spelling is not fully standardized.

Education word lists (Polyglot Club and similar) were checked against the Open Grammar glossary rather than copied as unverified inventions: https://polyglotclub.com/wiki/Language/Jamaican-creole-english/Vocabulary/Education
