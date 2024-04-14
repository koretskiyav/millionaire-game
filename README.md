## Who wants to be a millionaire?

<img src="public/logo.jpg" alt="Who wants to be a millionaire?" width="400">

### How to run

To run the game in development mode, use:

```bash
npm run dev
```

To run in production mode, use:

```bash
npm run build && npm start
```

Then open [http://localhost:3000](http://localhost:3000) with your browser and enjoin!

### How to config

To change the questions, edit file `src/questions.json` according to the following interface:

```typescript
type Questions = {
  question: string;
  answers: string[];
  correct: number[];
  gain: number;
}[];
```

It should be an array of objects with questions, for example:

```javascript
[
  {
    "question": "Which material is most dense?",
    "answers": ["Cupper", "Silver", "Styrofoam", "Butter", "Gold"],
    "correct": [4], // indexes of correct answers
    "gain": 2000
  },
  ...
]
```

### How to play

This game uses [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To play online, you can [visit deployed on Vercel site](https://millionaire-game-vert.vercel.app/).
