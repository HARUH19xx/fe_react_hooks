import React, { useState, useEffect } from 'react';
// import { createRoot } from 'react-dom/client';

const App = () => {
    const [data, setData] = useState(null);

    // useEffect(() => {
    //   fetch('http://localhost:8080/')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    //     .catch(error => console.error('Error:', error));
    //   // 空の配列を渡すことで、初回のみ実行するようにする
    // }, []);

    return (
        <div>
            <h1>データ：</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

// const rootElement = document.getElementById('root');
// createRoot(rootElement).render(<App />);

export default App;