import { BrowserWindow } from 'electron';
import React, { useEffect } from 'react';



export default function App() {
  useEffect(() => {
    BrowserWindow.getAllWindows()[1].loadURL('https://twitter.com/');
  }, [])

  return <button onClick={() => console.log('tw')}>tw</button>;
}