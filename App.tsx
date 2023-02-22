import * as React from 'react';
import { index } from './lib';
import './style.css';

export default function App() {
  const [textInput, setTextInput] = React.useState(
    'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth'
  );
  // const text = index('Hello Hi Too');
  const text = index(textInput);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <textarea
        style={{
          width: '100%',
          hieght: '100%',
          marginTop: '1rem',
        }}
        value={textInput}
        onChange={(event) => setTextInput(event.target.value)}
      />
      <br />
      <button onClick={() => setTextInput('')}>Clear</button>
    </div>
  );
}
