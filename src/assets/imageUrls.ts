export type Media = {
  type: "image" | "video";
  src: string;
};

export type Event = {
  name: string;
  media: Media[];
};

export const events: Event[] = [
  {
    name: "anotherqtrly",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/6_xxf9iq.webp",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/debusvnxa/image/upload/v1758245278/5_kc3s3o.webp",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/debusvnxa/image/upload/v1758245278/2_nlt3k5.webp",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/debusvnxa/image/upload/v1758245278/4_kujrzb.webp",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/debusvnxa/image/upload/v1758245278/3_kbrdyp.webp",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/debusvnxa/image/upload/v1758245277/1_e6pyiw.webp",
      },
    ],
  },
  {
    name: "baihotel",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
      },
    ],
  },

  // {
  //   name: "bossidolonwheels",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "burrows",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "clubtipsy",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "fatherandson",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "firstloveteam",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "firstteamlunch",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "gettingbank",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "intro",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "islandhopping",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "jhorennakasala",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "laag",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "m5",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "maribago",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "nagtagayilatrin",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "naithan",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "namistailajas",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "nangloodsjamil",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "porngods",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "quarterly",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "randomshit2",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "randomshit3",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "samgyupsaparkmall",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "seda",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "sinulog",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "sportsfest",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "teambuilding",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "tulogakoamigo",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "upskill",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "xmasparty",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
  // {
  //   name: "xmasparty2",
  //   image: [
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245280/2_fndk0b.webp",
  //     "https://res.cloudinary.com/debusvnxa/image/upload/v1758245279/1_nflu7v.webp",
  //   ],
  // },
];
