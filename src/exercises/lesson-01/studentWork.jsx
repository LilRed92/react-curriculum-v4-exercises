//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Kacie';
  const age = 34;
  const hobbyList = [
    {
      id: 1,
      title: 'Art: drawing, pastels, india ink, brush lettering, digital art',
    },
    { id: 2, title: 'Baking' },
    { id: 3, title: 'Writing: poetry, songs, opinions' },
    { id: 4, title: 'Crypto-enthusiast' },
    { id: 5, title: 'Tinkering & DIY' },
    { id: 6, title: 'Piano' },
  ];

  return (
    <div>
      <h1>Hello!</h1>
      <h2>
        {name}, {age}
      </h2>
      <p>
        {' '}
        I live in Amarillo, Texas, and I'm a big believer in always learning
        something new, which is exactly why I'm taking this course. Outside of
        studying, my days are mostly spent keeping up with my one-year-old son,
        Atticus, and hanging out with my dog, Thyri. Whenever I catch a little
        rare downtime, you can usually find me experimenting with new baked good
        recipes in the kitchen, drawing, writing, usually with various jams
        playing in the background.{' '}
      </p>
      <h3>Here are some of my hobbies:</h3>
      <ul>
        {hobbyList.map((hobby) => (
          <li key={hobby.id}>{hobby.title}</li>
        ))}
      </ul>
    </div>
  );
}
