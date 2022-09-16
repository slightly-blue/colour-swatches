
import {atom} from "recoil";

export const swatchesState = atom({
  key: 'Swatches',
  default: [
    {
      id: 0, // or location?
      color: '#e3e3e3',
      texture: null,
      specularity: null,
      emission: null,
    }
  ],
});
