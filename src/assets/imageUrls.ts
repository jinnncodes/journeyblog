export type Event = { 
  name: string; 
  images: string[]; 
};

export const events: Event[] = [
  {
    name: "anotherqtrly",
    images: [
          "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/6_xxf9iq.webp",
          "https://res.cloudinary.com/debusvnxa/image/upload/v1758245278/5_kc3s3o.webp",
          "https://res.cloudinary.com/debusvnxa/image/upload/v1758245278/2_nlt3k5.webp",
          "https://res.cloudinary.com/debusvnxa/image/upload/v1758245278/4_kujrzb.webp",
          "https://res.cloudinary.com/debusvnxa/image/upload/v1758245278/3_kbrdyp.webp",
          "https://res.cloudinary.com/debusvnxa/image/upload/v1758245277/1_e6pyiw.webp"
        ],
  },
  {
    name: "seda",
    images: [
      "https://drive.google.com/uc?export=view&id=FILE_ID_1",
      "https://drive.google.com/uc?export=view&id=FILE_ID_2",
      // add all seda images here
    ],
  },
];
