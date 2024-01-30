import React, { useRef, useState } from 'react'
import JoditEditor from 'jodit-react';
import { Header } from '../components';
import { EditorData } from '../data/dummy';

const Editor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState(EditorData);
  return (
    <div className="mt-24 md:m-10 pt-0 pl-2 pr-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <JoditEditor
      className='mt-10 h-100'
			ref={editor}
			value={content}
			// config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}

		/>
    </div>
  )
}

export default Editor