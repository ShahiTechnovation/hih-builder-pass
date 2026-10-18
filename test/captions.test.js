import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateXLength,
  validateXCaption,
  generateXCaption,
  generateLinkedInCaption
} from '../src/captions.js';

test('X Caption — Strict <= 280 character limit', () => {
  const caption = generateXCaption();
  const validation = validateXCaption(caption);

  assert.equal(validation.isValid, true);
  assert.ok(validation.length <= 280, `Expected <= 280, got ${validation.length}`);
  assert.ok(validation.length > 150, `Expected reasonable length, got ${validation.length}`);
});

test('X Caption — Contains exact default text and structure', () => {
  const caption = generateXCaption();

  const expected = `Base camp: unlocked. 🏔️

I'm part of Hack in Hills '26!
Big ideas. Wild builds. Himalayan vibes.
Built for the climb. ⛰️

Powered by @Tiny_Fish
Organised by @theBuilder_base, @Web3indiaHQ & @nexido_official

#HIH26`;

  assert.equal(caption, expected);
});

test('X Caption — Contains exact required handles and hashtags', () => {
  const caption = generateXCaption();

  assert.ok(caption.includes('@Tiny_Fish'), 'Missing @Tiny_Fish handle');
  assert.ok(caption.includes('@theBuilder_base'), 'Missing @theBuilder_base handle');
  assert.ok(caption.includes('@Web3indiaHQ'), 'Missing @Web3indiaHQ handle');
  assert.ok(caption.includes('@nexido_official'), 'Missing @nexido_official handle');
  assert.ok(caption.includes('#HIH26'), 'Missing #HIH26 hashtag');
  assert.ok(caption.includes('Built for the climb. ⛰️'), 'Missing tagline');
});

test('X Caption — Zero qualification or selection claims', () => {
  const caption = generateXCaption();

  assert.doesNotMatch(caption, /top 500/i);
  assert.doesNotMatch(caption, /round 1/i);
  assert.doesNotMatch(caption, /round 2/i);
  assert.doesNotMatch(caption, /qualified/i);
  assert.doesNotMatch(caption, /selected/i);
  assert.doesNotMatch(caption, /finalist/i);
  assert.doesNotMatch(caption, /summit pass/i);
  assert.doesNotMatch(caption, /shortlist/i);
});

test('LinkedIn Caption — Contains exact default text and structure', () => {
  const caption = generateLinkedInCaption();

  const expected = `Base camp: unlocked. 🏔️

I'm officially part of Hack in Hills '26!
10,000+ registrations. Thousands of ambitious builders. One incredible journey.

Being part of this initiative means joining a community of developers, innovators, and creators who believe in building beyond boundaries.

From crazy ideas to real projects, the journey is all about learning, experimenting, and building something meaningful.

Proud to be part of the HIH '26 builder community. 🚀
The mountains are calling. The ideas are climbing. ⛰️

Built for the climb.

Powered by @TinyFish. Organised by @Builderbase, @Web3India and @Nexido.

#HackInHills #HIH26 #BuildInPublic`;

  assert.equal(caption, expected);
});

test('LinkedIn Caption — Contains exact attribution and hashtags', () => {
  const caption = generateLinkedInCaption();

  assert.ok(
    caption.includes('Powered by @TinyFish. Organised by @Builderbase, @Web3India and @Nexido.'),
    'Missing exact LinkedIn attribution string'
  );
  assert.ok(caption.includes('#HackInHills'));
  assert.ok(caption.includes('#HIH26'));
  assert.ok(caption.includes('#BuildInPublic'));
  assert.ok(caption.includes("I'm officially part of Hack in Hills '26!"));
  assert.ok(caption.includes('Built for the climb.'));
});

test('LinkedIn Caption — Does not reuse X handles, markdown syntax, or selection claims', () => {
  const caption = generateLinkedInCaption();

  assert.ok(!caption.includes('@Tiny_Fish'), 'Should not contain X handle @Tiny_Fish');
  assert.ok(!caption.includes('@theBuilder_base'), 'Should not contain X handle @theBuilder_base');
  assert.ok(!caption.includes('@Web3indiaHQ'), 'Should not contain X handle @Web3indiaHQ');
  assert.ok(!caption.includes('@nexido_official'), 'Should not contain X handle @nexido_official');

  // No markdown formatting
  assert.ok(!caption.includes('**'), 'Should not contain Markdown bold syntax');
  assert.ok(!caption.includes('##'), 'Should not contain Markdown headers');

  // No selection claims
  assert.doesNotMatch(caption, /top 500/i);
  assert.doesNotMatch(caption, /round 1/i);
  assert.doesNotMatch(caption, /round 2/i);
  assert.doesNotMatch(caption, /qualified/i);
  assert.doesNotMatch(caption, /finalist/i);
  assert.doesNotMatch(caption, /summit pass/i);
});

test('validateXCaption — Detects valid and invalid lengths accurately', () => {
  const shortText = 'Hack in Hills ’26 Builder!';
  assert.equal(validateXCaption(shortText).isValid, true);

  const tooLong = 'a'.repeat(281);
  assert.equal(validateXCaption(tooLong).isValid, false);
});
