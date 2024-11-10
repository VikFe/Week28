import React, { useState } from "react";

const TextFormatter = () => {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    const formattedText = inputText.toUpperCase();
    setDisplayText(formattedText);
    setInputText(''); // Очистка текстового поля
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Введите текст"
      />
      <button onClick={handleSubmit}>Добавить</button>

      {displayText && (
        <p style={{ color: 'blue', fontWeight: 'bold' }}>
          {displayText}
        </p>
      )}
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Форматированный текст</h1>
      <TextFormatter />
    </div>
  );
}

export default App;
