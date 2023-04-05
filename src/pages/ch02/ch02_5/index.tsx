import React from 'react';
import FileDrop from './components/FileDrop';
import DispatchEvent from './components/DispatchEvent';
import DragDrop from './components/DragDrop';
import EventBubbling from './components/EventBubbling';
import EventListener from './components/EventListener';
import OnChange from './components/OnChange';
import OnClick from './components/OnClick';
import ReactOnClick from './components/ReactOnClick';
import VariousInputs from './components/VariousInputs';
import FileInput from './components/FileInput';
import StopPropagation from './components/StopPropagation';

function App() {
  return (
    <div>
      <FileDrop />
      <DragDrop />
      <FileInput />
      <OnChange />
      <VariousInputs />
      <StopPropagation />
      <EventBubbling />
      <DispatchEvent />
      {/* <ReactOnClick />
      <OnClick />
      <EventListener /> */}
    </div>
  );
}

export default App;
