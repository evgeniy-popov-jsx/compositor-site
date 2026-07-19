export interface TextSection {
  type: 'text' | 'photo' | 'quote' | 'highlight';
  content?: string;
  src?: string;
  photoAlign?: 'left' | 'right';
}

export interface data {
  id: number;
  slug: string;
  date: string;
  title: string;
  src: string;
  description?: string;
  sections?: TextSection[];
}

export const data: data[] = [
  {
    id: 1,
    slug: 'spaces-surrounding-music',
    title: 'spaces surrounding music, spaces seeping into music',
    date: '(2021)',
    src: 'https://drive.google.com/file/d/1NBVC1omxlcMFnpv2sxjn7YR-LDaWipSD/view?usp=drive_link',
    description: `
    the focus of this text lies on exploration of spaces in music, where the term is understood in an extended sense, as something that surrounds. this definition allows to take in observation both material and virtual dimensions of spaces and, most importantly, to trace how a variety of their hybrids influence, substitute, or flow into one another in compositional practice. topics of notation, memory, systems and methods of composing, atmosphere and authorship come into play with an emphases on multiple capabilities of surroundings to infiltrate phenomena, existing on their territories, and to trespass their sovereignty.
    all conditionalities of music's social existence are understood as spaces for it to dwell in, not only providing its habitat, but also imprinting its materia, shaping its body. our investigations are tempting to question and to criticise the normative, sterile non-space, where music is commonly thought to be placed in, while providing reflective tools for alternative possibilities. starting with a question 'what is the ground on which notes co-exist?', a journey of a piece from an idea to its material realisation is analysed, and all medial 'obstacles', through which an act of embodiment has to go, are brought into focus.
    `,
  },
  {
    id: 2,
    slug: 'tap-my-head',
    title: 'tap my head and make my brain, stick that needle in my vein',
    date: '(2024–2025)',
    src: 'https://drive.google.com/file/d/1NBVC1omxlcMFnpv2sxjn7YR-LDaWipSD/view?usp=drive_link',
    sections: [
      {
        type: 'photo',
        src: '/text2Photo1.png',
      },
      {
        type: 'text',
        content: `The work revolves around the ambiguous role of obsolete technological devices which are pertinent to everyday life. Mobile phones, vinyl records, a DJ setup, and turntables, all of them are recording, reproducing, and transforming the human voice.`,
      },
      {
        type: 'text',
        content: `While being initially invented to connect individuals scattered across physically unreachable localities, or musical tracks whose heyday was divided by subcultural generations, in the scenario of my work they all end up interacting only with themselves, because of a paradoxical users' side-effect: ||conjunction of two distinct entities leads to sublation into the Other-structurally alien to the original—and, eventually, to loss of identity.||`,
      },
      {
        type: 'text',
        content: `The mediation is usually taken for granted as a convenient means to a specific end: remote connection.`,
      },
      {
        type: 'quote',
        content: `But what if a channel of communication surpasses its function of utility and alters the terms of interaction irrevocably, obliterating the initial intentions of agents relying on it?`,
      },
      {
        type: 'text',
        content: `The described principle is embodied in three structural levels of my work:`,
      },
      {
        type: 'text',
        content: `||flawed telegraphy||—that is, a pre-constructed situation where separate voices coexist, but are nevertheless subordinated to strict rules;`,
      },
      {
        type: 'text',
        content: `||a phon call||—that conflates the voices in a shared channel, where the rules of the contact are loose, the voices are subsumed and depleted of their distinct features;`,
      },
      {
        type: 'text',
        content: `||humbables||—that merge two vinyl records into a single track while decontextualising both of the sources.`,
      },
      {
        type: 'text',
        content: `On the surface, all three layers appear to foster connection by unifying two into one. In practice, however, they undermine the very possibility—the foundations—of a dialogue, melting differences into sameness and producing what I call a non-place: a zone of mediation that subjugates those entering it, stripping them of agency and identity.`,
      },
      {
        type: 'text',
        content: `Drawing on the structural logic described above, the piece is realised as a durational performance for two musicians, mobile phones, vinyl records and a DJ set. The voices are pre-recorded in the course of daily routine on the mobile phones, pressed onto vinyl records and later played back on the turntables—leaving the compositional between performers largely unspecified and displaced. All the recordings are otherwise pressed onto two vinyl records—one for each performer.`,
      },
      {
        type: 'photo',
        src: '/text2Photo2.png',
      },
      {
        type: 'quote',
        content: `During the performance, vinyl records are used as musical instruments in their own right: using DJ techniques, such as varying playback speed and reversing the rotation, musicians transform their own pre-captured voices in real time.`,
      },
      {
        type: 'text',
        content: `The speed and the pitch of a vinyl record are intertwined. Thus, any adjustment in playback tempo inevitably affects the melodic structure, forming an ever-evolving polyphony.`,
      },
      {
        type: 'photo',
        src: '/text2Photo3.png',
        photoAlign: 'right',
      },
      {
        type: 'text',
        content: `In the second half of the composition, the performers begin to sing along to their own pre-recorded voices. The signal is further processed by a contact microphone attached directly to the needle to pick up not only the archived past, but also the here-and-now of the concert. Technology ceases to be a passive carrier of human intentions and, instead, becomes an active participant, triggering a radical redistribution of agency across source, playback, channel and presence—and ultimately, questioning which of these entities holds sovereignty over the performance.`,
      },
      {
        type: 'text',
        content: `In the final stage, musicians exit the space of performance, leaving mechanical devices to (re-)produce sounds autonomously.`,
      },
    ],
  },
];
