export const data: data[] = [
  {
    id: 1,
    slug: 'spaces-surrounding-music',
    title: 'spaces surrounding music, spaces seeping into music',
    src: 'https://drive.google.com/file/d/1NBVC1omxlcMFnpv2sxjn7YR-LDaWipSD/view?usp=drive_link',
    description: `
    the focus of this text lies on exploration of spaces in music, where the term is understood in an extended sense, as something that surrounds. this definition allows to take in observation both material and virtual dimensions of spaces and, most importantly, to trace how a variety of their hybrids influence, substitute, or flow into one another in compositional practice. topics of notation, memory, systems and methods of composing, atmosphere and authorship come into play with an emphases on multiple capabilities of surrounding to infiltrate phenomena, existing on its territory, and to trespass their sovereignty.

    all conditionalities of music’s social existence are understood as spaces for it to dwell in, not only providing its habitat, but also imprinting its materia, shaping its body. our investigations are tempting to question and to criticise the normative, sterile non-space, where music is commonly thought to be placed in, while providing reflective tools for alternative possibilities. starting with a question ‘what is the ground on which notes co-exist?’, a journey of a piece from an idea to its material realisation is analysed, and all medial ‘obstacles’, through which an act of embodiment has to go, are brought into focus.
    `,
  }
];

export interface data {
  id: number,
  slug: string,
  title: string,
  src: string,
  description: string,
};
