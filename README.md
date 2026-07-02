# Yako by the Sea 🐚⭐

A painted-storybook keyboard game for young kids. Yako and his puppy live in a
seaside village; children find letters and numbers, spell words, build numbers,
learn phonics, count sea creatures, and do their first addition and subtraction —
all with a warm narrator voice that cheers them on in **English, French, or Spanish**,
spoken by their choice of **Mom, Dad, Grandpa, or Grandma**.

## Play it

No build step — it's plain HTML/CSS/JS. Serve the folder statically:

```bash
node tools/serve.js        # http://localhost:8765
```

(Any static file server works; a server is required for the voice clips and
videos — opening the file directly with `file://` won't play them.)

On a phone on the same Wi-Fi, open `http://<your-computer-ip>:8765` and use
"Add to Home Screen" for a full-screen app feel.

## The 12 games

Letters · Numbers · Letters & Numbers · Shapes · Colors · Animals ·
Spelling · Free Play · Counting · Letter Sounds · How Many? · Add & Subtract

Levels are 5 stars each; words and numbers grow longer every 3 levels; idle
kids get gentle escalating hints (key cluster → exact key).

## Structure

```
keyboard-fun.html      the game (markup, styles, game logic)
js/i18n.js             language engine — interpolates data/strings.*
js/audio.js            SFX + narrator (recorded clips w/ speech-synth fallback)
data/strings.{en,fr,es}.js   every phrase/word list — single source of truth
voice/clips/<lang>/<persona>/*.mp3   540 recorded narration clips
tools/check-voices.mjs verify the clip library matches the strings data
tools/serve.js         tiny static server (HTTP Range support for video)
ui/, *.png, *.mp4      painted art, animated backgrounds, sprite sheets
```

Voice clips were generated with Higgsfield (ElevenLabs voices: Isabella, Mark,
Brooks, Mabel). After changing any strings, run:

```bash
node tools/check-voices.mjs          # reports missing clips + the exact text each must say
node tools/check-voices.mjs --texts  # dump the full narration script per language
```
