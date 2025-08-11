import Todo from './components/Todo';

function App() {
  return (
    <div
      className="container border border-primary rounded mt-5"
      style={{
        background: `url(https://static.vecteezy.com/system/resources/thumbnails/022/575/456/small_2x/chamomile-flower-field-camomile-in-the-nature-field-of-camomiles-at-sunny-day-at-nature-camomile-daisy-flowers-in-summer-day-chamomile-flowers-field-wide-background-in-sun-light-generative-ai-photo.jpg)`,
        backgroundSize: 'cover'
      }}
    >
      <Todo />
    </div>
  );
}

export default App;
