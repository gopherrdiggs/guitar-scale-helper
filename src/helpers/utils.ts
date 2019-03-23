export function isSharpOrFlat(noteName: string) {
  return noteName.indexOf('#') > -1 || noteName.indexOf('b') > -1;
}

// Find a related note name. 
// Ex.: given noteName of "F#," then return "Gb."
export function findRelatedNote(noteName: string) {
  switch (noteName) {
    case 'Ab': return 'G#';
    case 'A#': return 'Bb';
    case 'Bb': return 'A#';
    case 'B' : return 'Cb';
    case 'B#': return 'C';
    case 'Cb': return 'B';
    case 'C' : return 'B#';
    case 'C#': return 'Db';
    case 'Db': return 'C#';
    case 'D#': return 'Eb';
    case 'Eb': return 'D#';
    case 'E#': return 'F';
    case 'F' : return 'E#';
    case 'F#': return 'Gb';
    case 'Gb': return 'F#';
    case 'G#': return 'Ab';
  }
}